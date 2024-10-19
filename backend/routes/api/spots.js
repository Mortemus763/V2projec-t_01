const express = require('express');
const router = express.Router()

const { User, Spot, sequelize } = require('../../db/models')

//create a spot
router.post('/', async (req, res, next) => {
    const t = await sequelize.transaction();
    
    try {

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

        const user = await User.findByPk({ id: ownerId });
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
        await spot.save();
        await user.addSpot(spot);

        await t.commit();

        return res.status(201).json({ spot });

    } catch (error) {
        await t.rollback();
        const err = new Error("Failed to create new spot");
        err.status = 500
        err.title = "Failed to create new spot"
        err.errors = { error: error.message }
        return next(err)
    }
});

module.exports = router