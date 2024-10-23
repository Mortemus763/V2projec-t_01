const express = require('express');
const { requireAuthorization, requireAuth } = require('../../utils/auth');
const router = express.Router()

router.delete('/:reviewId',
    requireAuth,
    requireAuthorization,
    async (req, res, next) => {
        try {

        } catch (error) {
            const err = new Error("Failed to delete")
            err.status = 500
            err.title = "Failed to delete"
            err.errors = { message: error.message }
            return next(err)
        }
    });

module.exports = router