module.exports = (connex, Sequelize) => {
    const Produit = connex.define('produit', {
        nom: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        prix: {
            type: Sequelize.REAL
        },
        photo: {
            type: Sequelize.STRING
        },
        categorie: {
            type: Sequelize.STRING
        }
    })
    return Produit
}