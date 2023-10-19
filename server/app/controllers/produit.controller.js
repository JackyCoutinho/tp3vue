const db = require('../models')
const Produit = db.produits 

exports.findAll = (req, res) => {
    Produit.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'tableau introuvable'
        })
    })

}

exports.create = (req, res) => {
    //console.log(req.body)
    if(!req.body.nom || !req.body.photo){
        res.status(400).send({
            message: 'Le nom et la photo sont obligatoires'
        })
        return
    }
    Produit.create(req.body)
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: 'Impossible d ajouter le produit dans la base de données'
        })
    })
}

exports.findByPk = (req, res) => {
    const id = req.params.id
    Produit.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: 'Impossible de trouver les données'
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Produit.destroy({
        where: {id:id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Le produit a été supprimé avec succès'
            })
        }else{
            res.send({
                message: 'Impossible de supprimer le produit'
            })
        }
    })
    .catch(e => {
        res.status(500).send({
            message: 'Erreur de base de données trouvée'
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    Produit.update(req.body, {
        where: {id:id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Produit mis à jour avec succès'
            })
        }else{
            res.send({
                message: 'Impossible de mettre à jour le produit'
            })
        }
    })
    .catch(e => {
        res.status(500).send({
            message: 'Erreur de base de données trouvée'
        })
    })
}