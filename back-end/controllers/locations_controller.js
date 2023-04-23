const locations = require('express').Router()
const db = require('../models')
const { Locations } = db
const { Op } = require('sequelize')

locations.get('/', async(req, res) => {
    res.status(200).json({
        message: "Locations page -- To be added"
    })
})