'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('ReviewImages', [
        {
          reviewId: 1,
          url: 'https://via.placeholder.com/150',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    },


  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ReviewImages', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
