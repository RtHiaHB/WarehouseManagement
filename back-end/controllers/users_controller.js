const users = require('express').Router()
const db = require('../models')
const { Users } = db
const { Op } = require('sequelize')

users.get('/', async (req, res) => {
    res.status(200).json({
        message: "Users page"
    })
})