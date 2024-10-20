'use strict';
const { User, Spot } = require('../models')
const options = { tableName: 'Spots' }
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
    const spot = await Spot.create({
      address: '111 Main St',
      city: "Atlanta",
      state: 'GA',
      name: 'Appartment',
      price: 99.00,
      description: "Comfortable 1br appertments in downtown"
    });
    const user = await User.findOne({
      where: {
        username: "FakeUser1"
      }
    });
    await user.addSpot(spot)
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
