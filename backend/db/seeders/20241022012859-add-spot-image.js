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
      "url1",
      "url2",
      "url3",
    ]
    const spot = await Spot.findAll();
    spot.forEach(async (spot, i) => {
      const image = await SpotImage.create({
        url: urls[i],
        preview: true
      });
      await spot.addSpotImage(image);
    })
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
