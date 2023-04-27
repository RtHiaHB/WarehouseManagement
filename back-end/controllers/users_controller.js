const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const { Users } = db
const { Op } = require('sequelize')

router.post('/', async (req, res) => {
    let { password, ...rest } = req.body
    const user = await Users.create({
        ...rest,
        role_id: 2,
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})

router.get('/', async (req, res) => {
    const users = await Users.findAll()
    res.json(users)
})

module.exports = router