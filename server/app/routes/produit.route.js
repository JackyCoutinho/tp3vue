module.exports = app => {
    const produit = require('../controllers/produit.controller.js')

    const router = require('express').Router()

    router.get('/', produit.findAll)

    router.post('/', produit.create)

    router.get('/:id', produit.findByPk)
    
    router.delete('/:id', produit.delete)

    router.put('/:id', produit.update)

    app.use('/api/produit', router)
}