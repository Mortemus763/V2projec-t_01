const express = require('express');
const router = express.Router()

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { User, Spot, Review, SpotImage, sequelize, Sequelize } = require('../../db/models');
const { requireAuthorization, requireAuth } = require('../../utils/auth');

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

const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide review'),
    check('stars')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide rating'),
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
                    as: 'Owner',
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
            Owner: spot.Owner
        };
    
        return res.status(200).json(spotDetails);
    });
    
router.get('/', async (req, res) => {
    try {
        const spots = await Spot.findAll({
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
            group: ['Spot.id', 'SpotImages.url']
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
        console.error(err);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});
module.exports = router