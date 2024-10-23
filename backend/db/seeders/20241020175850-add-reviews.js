'use strict';

const { User, Spot, Review, sequelize } = require('../models')

const options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}
options.tableName = 'Reviews';

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
    const spot = await Spot.findOne({
      include: [{ model: User }]
    })
    const reviews = [{
      review: "This is wanderful appatment. I'll return here next time.",
      stars: 5,
      userId: spot.User.id,
      spotId: spot.id
    }, {
      review: "Not bad but I've seen better.",
      stars: 3,
      userId: spot.User.id,
      spotId: spot.id
    }];
    reviews.forEach(async review => {
      await Review.create(review)
    });
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
