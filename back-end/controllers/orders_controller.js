const orders = require('express').Router()
const db = require('../models')
const { Orders } = db
const { Op } = require('sequelize')

//get an order by customer name, or get all orders
// /orders?name='Thomas' will get all orders with a customer name like '%Thomas%'
// /orders will get all orders
orders.get('/', async (req, res) => {
    try {
        const foundOrders = await Orders.findAll({
            where: {
                customer_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundOrders)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get an order by ID
orders.get('/:id', async (req, res) => {
    try {
        const foundOrder = await Orders.findOne({
            where: {
                order_id: req.params.id
            }
        })
        res.status(200).json(foundOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

// add an order
orders.post('/', async (req, res) => {
    try {
        const newOrder = await Orders.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new order',
            data: newOrder
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// update an order
orders.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await Orders.update(req.body, {
            where: {
                order_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedOrder}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete an order
orders.delete('/:id', async (req, res) => {
    try {
        const deletedOrder = await Orders.destroy({
            where: {
                order_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedOrder}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = orders