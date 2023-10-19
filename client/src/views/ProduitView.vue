<template>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div v-for="(produit, i) in inventory" :key="i" class="col mb-5">
                        <div class="card h-100">
                            <!-- Produit image-->
                            <img class="card-img-top" :src="produit.photo" :alt="produit.nom" />
                            <!-- Produit details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Produit name-->
                                    <h5 class="fw-bolder">{{ produit.nom }}</h5>
                                    <!-- Produit price-->
                                    ${{ produit.prix.toFixed(2) }}
                                </div>
                            </div>
                            <!-- Produit actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                    <p>
                                        <router-link :to="{name: 'modifier-produit', params: {id: produit.id}}" class="w-100 btn btn-warning btn-lg mt-10">Modifier Produit</router-link>
                                        <button class="w-100 btn btn-danger btn-lg mt-3" type="button" @click="deleteProduit(produit.id)">Supprimer </button>
                                        <router-link :to="{name: 'afficher-produit', params: {id:produit.nom} }">Plus de détails...</router-link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import ProduitDataService from '@/services/ProduitDataService'
export default {
  props: ['removeInv', 'inventory', 'updateInv'],
  data () {
    return {
      message: null,
      submitted: false,
      produit: {},
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    deleteProduit (id) {
      ProduitDataService.delete(id)
        .then(response => {
          this.removeInv(this.produitIndex)
          this.$router.push({ name: 'produit' })
        })
    }
  },
  computed: {
    produitIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
    }
  },
  mounted () {
    ProduitDataService.get(this.id)
      .then(response => {
        this.produit = response.data
      })
  }
}
</script>
