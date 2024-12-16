'use strict';

const { Spot, SpotImage } = require('../models')

const options = { tableName: 'SpotImages' }
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const urls = [
      [
        "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      [
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
        "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      
      [
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/205078/pexels-photo-205078.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/280212/pexels-photo-280212.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1042594/pexels-photo-1042594.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      [
        "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2968141/pexels-photo-2968141.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    ];

    // Find the spot to associate the images with
    const spots = await Spot.findAll({
      order: [['id', 'ASC']], // Ensures the spots are ordered correctly
    });

    if (!spots.length) {
      console.error("No spots found. Cannot seed images.");
      return;
    }

    const spotImages = [];

    // Loop through each spot and assign the corresponding sub-array of images
    spots.forEach((spot, spotIndex) => {
      const spotUrls = urls[spotIndex % urls.length]; // Cycle through URLs
      spotUrls.forEach((url, imageIndex) => {
        spotImages.push({
          spotId: spot.id,
          url,
          preview: imageIndex === 0, // Mark the first image as the preview image
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });

      await queryInterface.bulkInsert(options, spotImages, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(options, null, {});
  }
};
