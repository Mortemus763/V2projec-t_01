const express = require('express');
const { ReviewImages, Review } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();


router.delete('/:imageId', requireAuth, async (req, res, next) => {
  try {
    const imageId = parseInt(req.params.imageId, 10);

    if (isNaN(imageId)) {
      const err = new Error('Invalid image ID');
      err.status = 400;
      return next(err);
    }

    const userId = req.user.id;

    console.log('imageId:', imageId);
    const reviewImage = await ReviewImages.findByPk(imageId, {
      include: {
        model: Review,
        attributes: ['userId'],
      },
    });
    console.log('ReviewImage:', reviewImage);

    if (!reviewImage) {
      console.log(`No review image found with ID: ${imageId}`);


      const err = new Error(`Review image with ID ${imageId} couldn't be found in the database.`);
      err.status = 404;


      return next(err);
    }


    if (reviewImage.Review.userId !== userId) {
      const err = new Error('Forbidden: You do not have permission to delete this image');
      err.status = 403;
      return next(err);
    }


    await reviewImage.destroy();
    return res.status(200).json({
      message: 'Successfully deleted',
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
