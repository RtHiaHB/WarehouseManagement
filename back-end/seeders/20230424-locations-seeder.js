const { Locations } = require('../models')
const sequelize = require('../models').sequelize;

const locationsSeeder = async () => {
    const locationData = [];
    for (let i = 1; i <= 40; i++) {
        for (let j = 1; j <= 50; j++) {
            for (let k = 1; k <= 6; k++) {
                let hi = hasInventory()
                locationData.push({
                    aisle: i,
                    column: j,
                    level: k,
                    prod_id: hi ? ProdNo() : null,
                    qty: hi ? InventoryAmt() : null
                });
            }
        }
    }
    await Locations.bulkCreate(locationData)
}

function hasInventory() {
    return Math.random() < 0.7
}

function InventoryAmt() {
    return Math.floor(Math.random() * 100) + 1;
}

function ProdNo() {
    return Math.floor(Math.random() * 50);
}

module.exports = locationsSeeder