'use strict';

/** @type {import('sequelize-cli').Migration} */

const customers = [
  {
    name: 'John Smith',
    street_address: '123 Main St.',
    city: 'Anytown',
    state: 'CA',
    zipCode: 12345
  },
  {
    name: 'Jane Doe',
    street_address: '456 Oak Ave.',
    city: 'Otherville',
    state: 'NY',
    zipCode: 67980
  },
  {
    name: 'Bob Johnson',
    street_address: '789 Elm St.',
    city: 'Smalltown',
    state: 'TX',
    zipCode: 45678
  },
  {
    name: 'Alice Brown',
    street_address: '321 Pine Rd.',
    city: 'Bigcity',
    state: 'IL',
    zipCode: 90123
  }
];

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
    const orderData = []
    const orderItemsData = [];
    let orderItemID = 0;
    for (let i = 0; i < 20; i++) {
      const customer = customers[Math.floor(Math.random() * customers.length)]
      const order = {
        order_id: i,
        customer_name: customer.name,
        street_address: customer.street_address,
        city: customer.city,
        state: customer.state,
        zip_code: customer.zipCode,
        tracking_Number: makeid(8) //Generate a random tracking number
      };
      orderData.push(order);

      // Create 1-5 random order items for this order
      const numItems = Math.floor(Math.random() * 5) + 1;
      for (let j = 0; j < numItems; j++) {
        const product = ProdNo();
        const orderItem = {
          order_item_id: orderItemID,
          order_id: i,
          prod_id: product,
          qty: Math.floor(Math.random() * 10) + 1
        };
        orderItemsData.push(orderItem);
        orderItemID++;
      }
    }
    await queryInterface.bulkInsert('orders', orderData, {});
    await queryInterface.bulkInsert('order_items', orderItemsData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('orders', null, {})
    await queryInterface.bulkDelete('order_items', null, {})
  }
};
