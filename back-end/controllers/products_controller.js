const products = require('express').Router()
const db = require('../models')
const { Products, Locations } = db
const { Op } = require('sequelize')

products.get('/', async (req, res) => {
    try {
        let foundProducts
        if(req.query.sku) {
            foundProducts = await Products.findOne({
                    where: {
                        sku: req.query.sku
                    }
                }
            )
        }
        else {
            foundProducts = await Products.findAll()
        }
        res.status(200).json(foundProducts)
    } catch (err) {
        res.status(500).json(err)
    }
})

products.get('/inv', async (req, res) => {
    try {
        const result = await db.sequelize.query('SELECT locations.prod_id, products.sku, SUM(locations.qty) as TotQty FROM products LEFT JOIN locations ON products.prod_id = locations.prod_id WHERE locations.prod_id >= 1 GROUP BY locations.prod_id, products.sku ORDER BY locations.prod_id')
        res.status(200).json(result[0])
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
products.get('/:id', async (req, res) => {
    try {
        const foundProd = await Products.findOne({
            where: { 
                prod_id: req.params.id
            }
        })
        res.status(200).json(foundProd)
    } catch (err) {
        res.status(500).json(err)
    }
})

products.post('/', async (req, res) => {
    try {
        const newProd = await Products.create(req.body)
        res.status(200).json({
            message:'Successfully created a new product',
            data: newProd
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

products.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Products.update(req.body, {
            where: {
                prod_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedProduct} product`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

products.delete('/:id', async (req, res) => {
    try {
        const deletedProd = await Products.destroy({
            where: {
                prod_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedItems}.`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = products