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

    // Ensure there are enough users to assign reviews
    if (users.length < 2) {
      throw new Error("You need at least 2 users for reviews.");
    }

    const reviews = [
      { review: "Amazing spot, had a great time!", stars: 5 },
      { review: "It was okay, could have been cleaner.", stars: 3 },
      { review: "Not worth the price.", stars: 2 },
      { review: "Fantastic location and very cozy!", stars: 5 },
      { review: "Disappointing stay, amenities were lacking.", stars: 1 }
    ];

    // Assign reviews only to specific spots and users
    const reviewEntries = [];

    spots.forEach((spot, index) => {
      // For each spot, add 1-2 reviews by different users
      reviewEntries.push(
        {
          userId: users[0].id, // User 1
          spotId: spot.id,
          review: reviews[index % reviews.length].review,
          stars: reviews[index % reviews.length].stars,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: users[1].id, // User 2
          spotId: spot.id,
          review: reviews[(index + 1) % reviews.length].review,
          stars: reviews[(index + 1) % reviews.length].stars,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      );
    });

    // Insert reviews into the database
    await queryInterface.bulkInsert(options, reviewEntries, {});
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
