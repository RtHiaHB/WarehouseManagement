const locations = require('express').Router()
const db = require('../models')
const { Locations, Products } = db
const { Op } = require('sequelize')

// get all locations, or alternatively, find a location by Aisle, Column, and Level
locations.get('/', async(req, res) => {
    let foundLocations
    try {
        if(req.query.aisle && req.query.col && req.query.lvl) {
            foundLocations = await Locations.findOne({
                where: {
                    aisle: req.query.aisle,
                    col_number: req.query.col,
                    lvl: req.query.lvl
                }
            })
        } else if (req.query.sku) {
            const prodID = await prod_idFromSKU(req.query.sku)
            foundLocations = await Locations.findAll({
                where: {
                    prod_id: prodID
                },
                order: [['loc_id', 'ASC']]
            })
        } else {
            foundLocations = await Locations.findAll()
        }
        res.status(200).json(foundLocations)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get a location by its id
locations.get('/:id', async (req, res) => {
    try {
        const foundLocation = await Locations.findOne({
            where: { 
                loc_id: req.params.id 
            }
        })
        res.status(200).json(foundLocation)
    } catch (err) {
        res.status(500).json(err)
    }
})

//add a location
locations.post('/', async (req, res) => {
    try {
        const newLocation = await Locations.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new location',
            data: newLocation
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//update a location
locations.put('/:id', async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.params.id)
        const updatedLocation = await Locations.update(req.body, {
            where: {
                loc_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedLocation}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// delete a location
locations.delete('/:id', async (req, res) => {
    try {
        const deletedLocation = await Locations.destroy({
            where: {
                loc_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedLocation}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

async function prod_idFromSKU(itemSKU) {
    const prod = await Products.findOne({
        where: {
            sku: itemSKU
        }
    })
    return prod.prod_id
}

module.exports = locations