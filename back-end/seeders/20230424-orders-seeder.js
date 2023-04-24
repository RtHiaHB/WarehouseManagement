const { Orders, Order_Items } = require('../models');

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

const orderSeeder = async () => {
    const orderData = []
    const orderItemsData = [];
    for (let i = 1; i <= 20; i++) {
        const customer = customers[Math.floor(Math.random() * customers.length)]
        const order = {
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
                order_id: i,
                prod_id: product,
                qty: Math.floor(Math.random() * 10) + 1
            };
            orderItemsData.push(orderItem)
        }
    }
    await Orders.bulkCreate(orderData);
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
}

function ProdNo() {
    return Math.floor(Math.random() * 50);
}

module.exports = orderSeeder