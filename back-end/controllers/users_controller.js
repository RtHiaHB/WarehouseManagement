const users = require('express').Router()
const db = require('../models')
const { Users } = db
const { Op } = require('sequelize')

//get a user by user name, or get all users
// /users?user='tdavidson' will get all users like that user name
// /users will get all users
users.get('/', async (req, res) => {
    try {
        const foundUsers = await Users.findAll({
            where: {
                user_name: { [Op.like]: `%${req.query.user ? req.query.user : ''}`}
            }
        })
        res.status(200).json(foundUsers)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get a user by user_id
users.get('/:id', async (req, res) => {
    try {
        const foundUser = await Users.findOne({
            where: { user_id: req.params.id }
        })
        res.status(200).json(foundUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//create a new user
users.post('/', async (req, res) => {
    try {
        const newUser = await Users.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new user',
            data: newUser
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// update a user
users.put('/:id', async (req, res) => {
    try {
        const updatedUser = await Users.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUser}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

users.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await Users.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUser}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = users