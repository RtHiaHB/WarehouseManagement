'use strict';

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
    const locationData = [];
    let locID = 0
    for (let i = 1; i <= 12000; i++) {
      let aisle = Math.floor((i - 1) / 300) + 1;
      let col_number = Math.floor(((i-1) % 300) / 6) + 1;
      let lvl = ((i - 1) % 6) + 1;
      let hi = hasInventory();
      locationData.push({
        loc_id: i,
        aisle: aisle,
        col_number: col_number,
        lvl: lvl,
        prod_id: hi ? ProdNo() : 0,
        qty: hi ? InventoryAmt() : 0,
      })
      
    }
    await queryInterface.bulkInsert('locations', locationData)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('locations', null, {})
  }
};

function hasInventory() {
  return Math.random() < 0.7
}

function ProdNo() {
  return Math.floor(Math.random() * 49) + 1
}

function InventoryAmt() {
  return Math.floor(Math.random() * 100) + 1
}