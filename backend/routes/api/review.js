const express = require('express');
const router = express.Router()

const { requireReviewAuthorization, requireAuth } = require('../../utils/auth');
const { Review } = require('../../db/models')

router.delete('/:reviewId',
    requireAuth,
    requireReviewAuthorization,
    async (req, res, next) => {

        try {
            const { reviewId } = req.params
            const review = await Review.findByPk(reviewId)
            await review.destroy()
            return res.json({ message: "success" })

        } catch (error) {
            const err = new Error("Failed to delete")
            err.status = 500
            err.title = "Failed to delete"
            err.errors = { message: error.message }
            return next(err)
        }
    });

module.exports = router