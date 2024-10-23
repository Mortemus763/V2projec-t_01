const express = require('express');
const { requireAuth } = require('../../utils/auth');
const { Review, Spot, User, ReviewImage } = require('../../db/models');


const router = express.Router();


router.post('/spots/:spotId/reviews', requireAuth, async (req, res) => {
  const { review, stars } = req.body;
  const { spotId } = req.params;


  if (!review) {
    return res.status(400).json({
      message: "Bad Request",
      errors: { review: "Review text is required" }
    });
  }
  if (!Number.isInteger(stars) || stars < 1 || stars > 5) {
    return res.status(400).json({
      message: "Bad Request",
      errors: { stars: "Stars must be an integer from 1 to 5" }
    });
  }


  const spot = await Spot.findByPk(spotId);
  if (!spot) {
    return res.status(404).json({ message: "Spot couldn't be found" });
  }


  const existingReview = await Review.findOne({
    where: { spotId, userId: req.user.id }
  });
  if (existingReview) {
    return res.status(500).json({ message: "User already has a review for this spot" });
  }


  const newReview = await Review.create({
    userId: req.user.id,
    spotId,
    review,
    stars
  });


  const fullReview = await Review.findByPk(newReview.id, {
    include: [
      { model: User, attributes: ['id', 'firstName', 'lastName'] },
      { model: ReviewImage, attributes: ['id', 'url'] }
    ]
  });


  return res.status(201).json(fullReview);
});


module.exports = router;
