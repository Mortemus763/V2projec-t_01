const express = require('express');
const router = express.Router()

const { check } = require('express-validator');
const { handleValidationErrors, validateReview } = require('../../utils/validation');

const { User, Spot, Review, SpotImage, ReviewImages, sequelize, Sequelize } = require('../../db/models');
const { requireAuthorization, requireAuth } = require('../../utils/auth');
const { Op } = Sequelize;

const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide address'),
    check('city')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide city'),
    check('state')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide state'),
    check('country')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide country'),
    check('lat')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide lat'),
    check('name')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide name'),
    check('description')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide description'),
    check('price')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide price'),
    handleValidationErrors
]

//create a spot
router.post('/',
    validateSpot,
    async (req, res, next) => {

        //Create a transaction
        const t = await sequelize.transaction();

        try {
            const { id } = req.user
            const {
                address,
                city,
                state,
                country,
                lat, lng,
                name,
                description,
                price
            } = req.body

            const spot = Spot.build({
                address,
                city,
                state,
                country,
                lat, lng,
                name,
                description,
                price
            });

            const user = await User.findByPk(id);
            await spot.save();
            await user.addSpot(spot);

            //COMMIT
            await t.commit();

            const newSpot = await Spot.findByPk(spot.id, {
                attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'description', 'price', 'createdAt', 'updatedAt']
            })

            return res.status(201).json(newSpot);

        } catch (error) {
            //ROLLBACK
            await t.rollback();

            next(error)
        }
    });
//New image for spot based on Spot's id
router.post('/:spotId/images', requireAuth, requireAuthorization, async (req, res, next) => {
    const { spotId } = req.params;
    const { url, preview } = req.body;
    try {
        const newImage = await SpotImage.create({
            spotId,
            url,
            preview,
        });

        return res.status(201).json({
            id: newImage.id,
            url: newImage.url,
            preview: newImage.preview
        });
    } catch (error) {
        next(error);
    }
})
//New review
router.post('/:spotId/reviews',
    requireAuth,
    validateReview,
    async (req, res, next) => {
        try {

            const { spotId } = req.params;
            const { id: userId } = req.user;

            //Check if spot exist
            const spot = await Spot.findByPk(spotId)
            if (!spot) {
                const error = new Error("Not found")
                error.title = "Not found"
                error.status = 404
                error.errors = { message: "Spot not found" }
                return next(error)
            }

            //Check if review exist
            const isReviewExist = await Review.findOne({ where: { spotId, userId } })
            if (isReviewExist) {
                const error = new Error("Forbiden")
                error.status = 403
                error.title = "Forbiden"
                error.errors = { message: "Forbiden to create review" }
                return next(error)
            }

            //Add new review
            const newReview = await Review.create({ ...req.body, userId, spotId });
            const review = await Review.findByPk(newReview.id, {
                attributes: [
                    'id', 'userId', 'spotId', 'review', 'stars', 'createdAt', 'updatedAt']
            })
            return res.status(201).json(review);

        } catch (error) {
            const err = new Error("Failed to create review")
            err.status = 500
            err.title = "Failed to create review"
            err.errors = { message: error.message }
            next(err)
        }
    });

router.put('/:spotId',
    validateSpot,
    requireAuthorization,
    async (req, res, next) => {
        try {
            const id = req.params.spotId;
            const spot = await Spot.findByPk(id);
            if (!spot) {
                const error = new Error("Not found")
                error.status = 404;
                error.title = "Not found";
                error.errors = { message: "Record not found" };
                return next(error);
            }
            await Spot.update(req.body, {
                where: { id }
            })
            const updateSpot = await Spot.findByPk(id, {
                attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'description', 'price', 'createdAt', 'updatedAt']
            })
            return res.json(updateSpot)
        } catch (error) {
            next(error)
        }
    });

router.delete('/:spotId',
    requireAuth,
    requireAuthorization,
    async (req, res, next) => {
        try {

            const { spotId } = req.params
            if (!spotId) {
                const error = new Error("Bad request")
                error.title = "Bad request"
                error.status = 400;
                error.errors = { message: "Bad request" }
                return next(error)
            }

            const spot = await Spot.findByPk(spotId)
            if (!spot) {
                const error = new Error("Not found")
                error.title = "Not found"
                error.status = 404;
                error.errors = { message: "Not found" }
                return next(error);
            }

            await spot.destroy()
            return res.json({ message: "success" })

        } catch (error) {
            const err = new Error("Failed to delete spot")
            err.title = "Failed to delete spot"
            err.status = 500
            err.errors = { message: error.message }
            next(err)
        }
    });
router.get('/:spotId/reviews', async (req, res, next) => {
    const { spotId } = req.params;

    try {

        const spot = await Spot.findByPk(spotId, {
            include: [
                { model: SpotImage, attributes: ['id', 'url', 'preview'] },
                { model: User, attributes: ['id', 'firstname', 'lastname'] }
            ]
        });


        if (!spot) {
            return res.status(404).json({
                message: "Spot couldn't be found"
            });
        }


        const reviews = await Review.findAll({
            where: { spotId: spot.id },
            include: [
                { model: User, attributes: ['id', 'firstname', 'lastname'] },
                { model: ReviewImages, attributes: ['id', 'url'] }
            ]
        });


        const numReviews = reviews.length;
        const avgStarRating = reviews.reduce((sum, review) => sum + review.stars, 0) / (numReviews || 1);


        const spotDetails = {
            id: spot.id,
            ownerId: spot.ownerId,
            address: spot.address,
            city: spot.city,
            state: spot.state,
            country: spot.country,
            lat: parseFloat(spot.lat),
            lng: parseFloat(spot.lng),
            name: spot.name,
            description: spot.description,
            price: parseFloat(spot.price),
            createdAt: spot.createdAt,
            updatedAt: spot.updatedAt,
            numReviews: numReviews,
            avgStarRating: parseFloat(avgStarRating).toFixed(1),
            SpotImages: spot.SpotImages,
            Owner: {
                id: spot.User.id,
                firstName: spot.User.firstname,
                lastName: spot.User.lastname
            },
            Reviews: reviews.map(review => ({
                id: review.id,
                userId: review.userId,
                spotId: review.spotId,
                review: review.review,
                stars: review.stars,
                createdAt: review.createdAt,
                updatedAt: review.updatedAt,
                User: {
                    id: review.User.id,
                    firstName: review.User.firstname,
                    lastName: review.User.lastname
                },
                ReviewImages: review.ReviewImages
            }))
        };


        return res.status(200).json(spotDetails);
    } catch (error) {
        next(error);
    }
});
router.get('/current',
    requireAuth,
    async (req, res, next) => {
        try {
            const { id } = req.user
            const spots = await Spot.findAll({
                where: { ownerId: id },
                include: [
                    {
                        model: Review,
                        attributes: []
                    },
                    {
                        model: SpotImage,
                        attributes: []
                    }
                ],
                attributes: {
                    include: [
                        [Sequelize.fn('avg', Sequelize.col('Reviews.stars')), 'avgRating'],
                        [Sequelize.col('SpotImages.preview'), 'previewImage']
                    ]
                }
            });

            return res.json(spots)

        } catch (error) {
            const err = new Error("Failed to get data");
            err.title = "Failed to get data"
            err.status = 500
            err.errors = { message: error.message }
            next(err)
        }
    });

router.get('/:spotId', async (req, res) => {
    const { spotId } = req.params;

    const spot = await Spot.findByPk(spotId, {
        include: [
            {
                model: SpotImage,
                attributes: ['id', 'url', 'preview']
            },
            {
                model: User,
                attributes: ['id', 'firstname', 'lastname']
            }
        ]
    });
    if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found"
        });
    }
    const reviews = await Review.findAll({
        where: { spotId: spot.id },
        attributes: [
            [sequelize.fn('COUNT', sequelize.col('id')), 'numReviews'], // Count reviews
            [sequelize.fn('AVG', sequelize.col('stars')), 'avgStarRating'] // Average rating
        ]
    });
    const numReviews = parseInt(reviews[0].dataValues.numReviews) || 0;
    const avgStarRating = parseFloat(reviews[0].dataValues.avgStarRating).toFixed(1) || null;

    const spotDetails = {
        id: spot.id,
        ownerId: spot.ownerId,
        address: spot.address,
        city: spot.city,
        state: spot.state,
        country: spot.country,
        lat: parseFloat(spot.lat),
        lng: parseFloat(spot.lng),
        name: spot.name,
        description: spot.description,
        price: parseFloat(spot.price),
        createdAt: spot.createdAt,
        updatedAt: spot.updatedAt,
        numReviews: numReviews,
        avgStarRating: avgStarRating,
        SpotImages: spot.SpotImages,
        Owner: {
            id: spot.User.id,
            firstName: spot.User.firstname,
            lastName: spot.User.lastname
        }
    };

    return res.status(200).json(spotDetails);
});

router.get('/', async (req, res, next) => {
    try {
        const where = {};
        //retrive filters criterias
        let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.params
        //validate filters
        page = parseInt(page)
        size = parseInt(size)
        if (Number.isNaN(page)) page = 4
        if (Number.isNaN(size)) size = 1
        if (minLat) {
            minLat = parseFloat(minLat)
            if (!Number.isNaN(minLat))
                where.minLat = { [Op.gte]: minLat }
        }
        if (maxLat) {
            minLat = parseFloat(maxLat)
            if (!Number.isNaN(maxLat))
                where.maxLat = { [Op.lte]: maxLat }
        }
        if (minLng) {
            minLng = parseFloat(minLng)
            if (!Number.isNaN(minLng))
                where.minLng = { [Op.gte]: minLng }
        }
        if (maxLng) {
            maxLat = parseFloat(maxLng)
            if (!Number.isNaN(maxLng))
                where.maxLat = { [Op.lte]: maxLng }
        }
        if (minPrice) {
            minPrice = parseFloat(minPrice)
            if (!Number.isNaN(minPrice))
                where.minPrice = { [Op.lte]: minPrice }
        }
        if (maxPrice) {
            maxPrice = parseFloat(maxPrice)
            if (!Number.isNaN(maxPrice))
                where.maxPrice = { [Op.gte]: maxPrice }
        }
        //set filters
        console.log('where :>> ', where);
        const spots = await Spot.findAll({
            where,
            include: [
                {
                    model: SpotImage,
                    attributes: ['url'],
                    where: { preview: true },
                    required: false
                },
                {
                    model: Review,
                    attributes: []
                }
            ],
            attributes: {
                include: [
                    [
                        sequelize.fn('AVG', sequelize.col('Reviews.stars')),
                        'avgRating'
                    ]
                ]
            },
            group: ['Spot.id', 'SpotImages.url'],
            limit: size,
            offset: size * (page - 1),
        });
        const formattedSpots = spots.map(spot => {
            let previewImage = null;

            if (spot.SpotImages && spot.SpotImages.length > 0) {
                previewImage = spot.SpotImages[0].url;
            }

            return {
                id: spot.id,
                ownerId: spot.ownerId,
                address: spot.address,
                city: spot.city,
                state: spot.state,
                country: spot.country,
                lat: spot.lat,
                lng: spot.lng,
                name: spot.name,
                description: spot.description,
                price: spot.price,
                createdAt: spot.createdAt,
                updatedAt: spot.updatedAt,
                avgRating: parseFloat(spot.dataValues.avgRating).toFixed(1) || null,
                previewImage: previewImage
            };
        });

        return res.status(200).json({ Spots: formattedSpots });
    } catch (err) {
        const error = new Error("Failed to get data")
        error.status = 500
        error.title = "Failed to get data"
        error.errors = ({ error: err.message });
        next(error)
    }
});
module.exports = router
