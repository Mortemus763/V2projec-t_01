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

router.get('/current',
    requireAuth,
    async (req, res, next) => {
        try {
            const { id } = req.user
            const spots = await Spot.findAll({
                where: { ownerId: id },
                include: [{
                    model: Review,
                    attributes: [[Sequelize.fn('avg', Sequelize.col('stars')), 'avgRating']],
                }, {
                    model: SpotImage,
                    attributes: [['preview', 'previewImage']]
                }]
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
router.get('/', async (req, res) => {
        try {
            const spots = await Spot.findAll({
                include: [
                    {
                        model: SpotImage,
                        as: 'SpotImages',
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