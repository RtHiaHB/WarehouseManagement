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
    for (let i = 1; i <= 40; i++) {
      for (let j = 1; j <= 50; j++) {
        for (let k = 1; k <= 6; k++) {
          let hi = hasInventory()
          locationData.push({
            loc_id: locID,
            aisle: i,
            column: j,
            level: k.toString(),
            prod_id: hi ? ProdNo() : null,
            qty: hi ? InventoryAmt() : null
          });
          locID++;
        }
      }
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
  return Math.floor(Math.random() * 50)
}

function InventoryAmt() {
  return Math.floor(Math.random() * 100) + 1
}