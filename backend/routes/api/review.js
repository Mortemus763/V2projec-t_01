const express = require('express');
const router = express.Router()

const { check } = require('express-validator');
const { handleValidationErrors, validateReview } = require('../../utils/validation');

const { User, Spot, Review, SpotImage, ReviewImages } = require('../../db/models');
const { requireAuthorization, requireReviewAuthorization, requireAuth } = require('../../utils/auth');

router.put('/:reviewId',
    requireAuth,
    requireReviewAuthorization,
    validateReview,
    async (req, res, next) => {
        try {
            const { reviewId } = req.params
            await Review.update(req.body, {
                where: { id: reviewId }
            });
            const review = await Review.findByPk(reviewId, {
                attributes: [
                    'id', 'userId', 'spotId', 'review', 'stars', 'createdAt', 'updatedAt'
                ]
            })
            res.json(review)
        } catch (error) {
            const err = new Error("Failed to edit review")
            err.status = 500
            err.title = "Failed to edit review"
            err.errors = { message: error.message }
            next(err)
        }
    });

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
router.get('/current', requireAuth, async (req, res, next) => {
    try {
        const userId = req.user.id;

        const reviews = await Review.findAll({
            where: { userId },
            include: [
                {
                    model: User,
                    attributes: ['id', 'firstname', 'lastname']
                },
                {
                    model: Spot,
                    attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price'],
                    include: [
                        {
                            model: SpotImage,
                            attributes: ['url'],
                            where: { preview: true },
                            required: false
                        }
                    ]
                },
                {
                    model: ReviewImages,
                    attributes: ['id', 'url']
                }
            ]
        });
        const formatReviews = reviews.map(review => {
            const spot = review.Spot;
            const previewImage = spot.SpotImages.length ? spot.SpotImages[0].url : null;

            return {
                id: review.id,
                userId: review.userId,
                spotId: review.spotId,
                review: review.review,
                stars: review.stars,
                createdAt: review.createdAt,
                updatedAt: review.updatedAt,
                User: review.User,
                Spot: {
                    id: spot.id,
                    ownerId: spot.ownerId,
                    address: spot.address,
                    city: spot.city,
                    state: spot.state,
                    country: spot.country,
                    lat: spot.lat,
                    lng: spot.lng,
                    name: spot.name,
                    price: spot.price,
                    previewImage
                },
                ReviewImages: review.ReviewImages
            };
        });
        return res.status(200).json({ Reviews: formatReviews });
    } catch (error) {
        next(error);
    }
})
module.exports = router