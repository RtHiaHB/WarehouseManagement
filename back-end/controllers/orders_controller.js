const orders = require('express').Router()
const db = require('../models')
const { Orders } = db
const { Op } = require('sequelize')

orders.get('/', async (req, res) => {
    res.status(200).json({
        message: "Orders page"
    })
})