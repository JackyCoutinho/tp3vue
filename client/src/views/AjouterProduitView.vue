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
              <h4 class="mb-3">Ajouter un nouveau produit</h4>
              <div v-show="message" class="alert alert-danger">{{message}}</div>
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
                      placeholder="Veuillez indiquer le chemin de l'image"
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
                  <button class="w-100 btn btn-success btn-lg mt-3" type="button" @click="saveProduit">Envoyer </button>
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
  props: ['addInv'],
  data () {
    return {
      message: null,
      submitted: false,
      produit: {
        nom: null,
        description: null,
        prix: null,
        photo: null,
        categorie: null
      }
    }
  },
  methods: {
    saveProduit () {
      ProduitDataService.create(this.produit)
        .then(response => {
          this.produit.id = response.data.id
          this.addInv(this.produit)
          this.submitted = true
          this.message = null
          this.$router.push({ name: 'produit' })
        })
        .catch(error => {
          this.message = error.response.data.message
        })
    },
    newProduit () {
      this.submitted = false
      this.produit = {}
    }
  }
}
</script>
