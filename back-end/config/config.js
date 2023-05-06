require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "warehouse_management",
    "host": process.env.DATABASE_URI,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "warehouse_management_test",
    "host": process.env.DATABASE_URI,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "warehouse_management_production",
    "host": process.env.DATABASE_URI,
    "dialect": "postgres"
  }
}
