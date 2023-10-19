<template>
<div>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="/">Mon Magasin</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item"><router-link class="nav-link active" aria-current="page" to="/">Accueil</router-link></li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Produits
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><router-link class="dropdown-item" to="/produit">Liste Produits</router-link></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><router-link class="dropdown-item" to="/ajouter-produit">Ajouter Produit</router-link></li>
                      </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  <router-view
  :inventory = "inventory"
  :addInv = "addInventory"
  :removeInv = "removeInventory"
  :updateInv = "updateInventory"
  />

  </div>
</template>

<script>
import ProduitDataService from '@/services/ProduitDataService'
export default {
  data () {
    return {
      inventory: []
    }
  },
  methods: {
    addInventory (data) {
      this.inventory.push(data)
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    },
    updateInventory (index, data) {
      this.inventory[index].nom = data.nom
      this.inventory[index].description = data.description
      this.inventory[index].prix = data.prix
      this.inventory[index].photo = data.photo
      this.inventory[index].categorie = data.categorie
    }

  },
  mounted () {
    ProduitDataService.getAll()
      .then(response => {
        this.inventory = response.data
        console.log(response.data)
      })
  }
}
</script>
