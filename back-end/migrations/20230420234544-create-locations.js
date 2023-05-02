'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('locations', {
      loc_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aisle: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      col_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      l6vl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      prod_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('locations');
  }
};