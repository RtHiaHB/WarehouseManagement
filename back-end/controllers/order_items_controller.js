const order_items = require('express').Router()
const db = require('../models')
const { Order_Items } = db
const { Op } = require('sequelize')

locations.get('/', async(req, res) => {
    let foundOrder_Items
    try {
        if(req.query.order_id) {
            foundOrder_Items = await Order_Items.findAll({
                where: {
                    order_id: req.query.order_id
                }
            })
        } else {
            foundOrder_Items = await Order_Items.findAll()
        }
        res.status(200).json(foundOrder_Items)
    } catch (err) {
        res.status(500).json(err)
    }
})

order_items.get('/:id', async (req, res) => {
    try {
        const foundOrder_Item = await Order_Items.findOne({
            where: {
                order_item_id: req.params.id
            }
        })
        res.status(200).json(foundOrder_Item)
    } catch (err) {
        res.status(500).json(err)
    }
})

order_items.post('/', async (req, res) => {
    try {
        const newOrder_Item = await Order_Items.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new order_item.',
            data: newOrder_Item
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

order_items.delete('/:id', async (req, res) => {
    try {
        const deletedOrder_Item = await Order_Items.destroy({
            where: {
                loc_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedOrder_Item}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = order_items