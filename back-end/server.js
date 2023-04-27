const express = require('express')
const cors = require('cors')
const app = express()
const { Sequelize } = require('sequelize')

//CONFIG / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//ROOT

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the warehouse API'
    })
})

const usersController = require ('./controllers/users_controller')
app.use('/users', usersController)
const ordersController = require('./controllers/orders_controller')
app.use('/orders', ordersController)
const locationsController = require('./controllers/locations_controller')
app.use('/locations', locationsController)
const productsController = require('./controllers/products_controller')
app.use('/products', productsController)
const order_itemsController = require('./controllers/order_items_controller')
app.use('/order_items', order_itemsController)
const order_assignmentsController = require('./controllers/order_assignments_controller')
app.use('/order_assignments', order_assignmentsController)
const authenticationController = require('./controllers/authentication')
app.use('/authentication', authenticationController)

app.listen(process.env.PORT, () => {
    console.log(`Ready to go on port: ${process.env.PORT}`)
})