const products = require('express').Router()
const db = require('../models')
const { Products } = db
const { Op } = require('sequelize')

products.get('/', async (req, res) => {
    res.status(200).json({
        message: "Products page"
    })
})