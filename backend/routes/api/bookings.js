const express = require('express');
const router = express.Router()

const { check } = require('express-validator');
const { handleValidationErrors, validateReview } = require('../../utils/validation');

const { User, Spot, Review, SpotImage, ReviewImages, Booking } = require('../../db/models');
const { requireAuthorization, requireReviewAuthorization, requireAuth } = require('../../utils/auth');


router.get('/current', requireAuth, async (req, res, next) => {
    const userId = req.user.id;
    try {
        const bookings = await Booking.findAll({
            where: { userId },
            include: [
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
                }
            ]
        });
        const formatBookings = bookings.map(booking => {
            const spot = booking.Spot;
            let previewImage = null;

            if (spot.SpotImages && spot.SpotImages.length > 0) {
                previewImage = spot.SpotImages[0].url;
            }
      
            return {
              id: booking.id,
              spotId: booking.spotId,
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
              userId: booking.userId,
              startDate: booking.startDate,
              endDate: booking.endDate,
              createdAt: booking.createdAt,
              updatedAt: booking.updatedAt
            };
          });
          return res.status(200).json({ Bookings: formatBookings });
    } catch (error) {   
        next(error);
    }
});