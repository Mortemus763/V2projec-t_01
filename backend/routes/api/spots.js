const express = require('express');
const router = express.Router()

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { User, Spot, sequelize } = require('../../db/models');

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

module.exports = router