<template>
    <div class="container">
      <!-- Section-->
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div
            class="
              row
              gx-4 gx-lg-5
              row-cols-2 row-cols-md-3 row-cols-xl-2
              justify-content-center
            "
          >
            <div class="col-sm-12">
              <h4 class="mb-3">Mettre à jour le produit</h4>
              <div v-show="message" class="alert alert-success">{{message}}</div>
              <div class="needs-validation" novalidate>
                <div class="row g-2">
                  <div v-if="!submitted">
                  <div class="col-12">
                    <label for="produitNom" class="form-label"
                      >Nom</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="produitNom"
                      v-model="produit.nom"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Un nom valide est requis.</div>
                  </div>
                  <div class="col-12">
                    <label for="produitPhoto" class="form-label"
                      >Photo</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="produitPhoto"
                      v-model="produit.photo"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      Un chemin de photo valide est requis.
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="produitPrix" class="form-label">Prix</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text">CAD</span>
                      <input
                        type="text"
                        class="form-control"
                        id="produitPrix"
                        v-model.number="produit.prix"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Le prix est requis.</div>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="produitDescription" class="form-label"
                      >Description</label
                    >
                    <textarea
                      class="form-control"
                      id="produitDescription"
                      v-model="produit.description"
                      placeholder=""
                    ></textarea>
                    <div class="invalid-feedback">Description valide</div>
                  </div>
                  <div class="col-12">
                    <label for="produitCategorie" class="form-label"
                      >Categorie</label
                    >
                    <select
                      class="form-control"
                      id="produitCategorie"
                      v-model="produit.categorie"
                      placeholder=""
                      required
                    >
                      <option value="Appareils Électroménagers">Appareils Électroménagers</option>
                      <option value="Ordinateurs">Ordinateurs</option>
                      <option value="Portables">Portables</option>
                      <option value="Tablettes">Tablettes</option>
                      <option value="Autres">Autres</option>
                    </select>
                    <div class="invalid-feedback">
                      Un chemin de photo valide est requis.
                    </div>
                  </div>
                  <button class="w-100 btn btn-warning btn-lg mt-3" type="button" @click="updateProduit">Mettre à jour</button>
                  </div>
                  <hr class="my-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
    updateProduit () {
      ProduitDataService.update(this.id, this.produit)
        .then(response => {
          this.updateInv(this.produitIndex, this.produit)
          this.message = response.data.message
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
