const roles = require('express').Router()
const db = require('../models')
const { Roles } = db
const { Op } = require('sequelize')

roles.get('/', async (req, res) => {
    try {
        const foundRoles = await Roles.findAll()
        res.status(200).json(foundRoles)
    } catch (err) {
        res.status(500).json(err)
    }
})

roles.get(':/id', async (req, res) => {
    try {
        const foundRole = await Roles.findOne({
            where: {
                role_id: req.params.id
            }
        })
        res.status(200).json(foundRole)
    } catch (err) {
        res.status(500).json(err)
    }
})

roles.post('/', async (req, res) => {
    try {
        const newRole = await Roles.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new role.',
            data: newRole
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

roles.put('/:id', async (req, res) => {
    try {
        const updatedRole = await Roles.update(req.body, {
            where: {
                role_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated role ${updatedRole}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

roles.delete('/:id', async (req, res) => {
    try {
        const deletedRole = await Roles.destroy({
            where: {
                role_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedRole}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = roles