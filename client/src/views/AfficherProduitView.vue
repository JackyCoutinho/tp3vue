<template>
    <div class="container">
      <section class="py-5">
        <div class="d-flex justify-content-end align-items-end">
          <RouterLink :to="{name: 'produit'}" class="w-5 btn btn-close bg-secondary mt-10"> </RouterLink>
        </div>
          <div class="container px-4 px-lg-5 my-5">
              <div class="row gx-4 gx-lg-5 align-items-center">
                  <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" :src="produit.photo" :alt="produit.nom" /></div>
                  <div class="col-md-6">
                      <div class="small mb-1">Code: {{ produit.id }}</div>
                      <h1 class="display-5 fw-bolder">{{ produit.nom }}</h1>
                      <div class="fs-5 mb-5">
                          <span class="text-decoration-line-through"></span>
                          <span>$ {{ produit.prix.toFixed(2) }} CAD</span>
                      </div>
                      <p class="lead">{{ produit.description }}</p>
                      <small class="badge bg-secondary">{{ produit.categorie }}</small>
                      <hr class="my-4">
                      <div class="d-flex">
                        <RouterLink :to="{name: 'modifier-produit', params: {id: produit.id}}" class="btn btn-warning mt-10">Modifier Produit</RouterLink>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
</template>
<script>

export default {
  props: ['inventory'],
  computed: {
    produit () {
      const produit = this.inventory.find((p) => {
        return p.nom === this.$route.params.id
      })
      return produit
    },
    produitIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.nom === this.$route.params.id
      })
      return index
    }
  }
}
</script>
