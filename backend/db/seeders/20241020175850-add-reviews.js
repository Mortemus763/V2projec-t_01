'use strict';

const { User, Spot, Review } = require('../models')

const options = { tableName: "Reviews" };
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
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

    //Get all spots with User
    const spots = await Spot.findAll();
    const users = await User.findAll();

    const reviews = [
      { review: "Amazing place, loved it!", stars: 5 },
      { review: "Decent place, but could improve.", stars: 3 },
      { review: "Not worth the price.", stars: 2 },
      { review: "Absolutely fantastic experience!", stars: 5 },
    ];

    for (const [index, spot] of spots.entries()) {
      for (const [reviewIndex, review] of reviews.entries()) {
        await Review.create({
          ...review,
          spotId: spot.id,
          userId: users[(index + reviewIndex) % users.length].id, // Assign users in a round-robin fashion
        });
      }
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(options, null, {})
  }
};
