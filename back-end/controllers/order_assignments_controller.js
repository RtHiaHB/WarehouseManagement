const order_assignments = require('express').Router()
const db = require('../models')
const { Order_Assignments, Users } = db
const { Op } = require('sequelize')

//get all order_assignments, or find order_assignments by user

order_assignments.get('/', async (req, res) => {
    let foundOrder_Assignments
    try {
        if(req.query.user_name) {
            //find user_id by user_name
            const user = await Users.findOne({
                where: {
                    user_name: req.query.user_name
                }
            })
            const currentUser_Id = user.user_id
            foundOrder_Assignments = await Order_Assignments.findAll({
                where: {
                    user_id: currentUser_Id
                }
            })
        } else {
            foundOrder_Assignments = await Order_Assignments.findAll()
        }
        res.status(200).json(foundOrder_Assignments)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get order assignment by its id
order_assignments.get('/:id', async (req, res) => {
    try {
        const foundOrder_Assignment = await Order_Assignments.findOne({
            where: {
                order_assignment_id: req.params.id
            }
        })
        res.status(200).json(foundOrder_Assignment)
    } catch (err) {
        res.status(500).json(err)
    }
})

order_assignments.post('/', async (req, res) => {
    try {
        const newOrder_Assignment = await Order_Assignments.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new order assignment',
            data: newOrder_Assignment
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

order_assignments.put('/:id', async (req, res) => {
    try {
        const updatedOrder_Assignment = await Order_Assignments.update(req.body, {
            where: {
                order_assignment_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedOrder_Assignment}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

order_assignments.delete('/:id', async (req, res) => {
    try {
        const deletedOrder_Assignment = await Order_Assignments.destroy({
            where: {
                order_assignment_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedOrder_Assignment}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = order_assignments