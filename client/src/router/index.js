import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '@/views/AccueilView.vue'
import ProduitView from '@/views/ProduitView.vue'
import AjouterProduitView from '@/views/AjouterProduitView.vue'
import AfficherProduitView from '@/views/AfficherProduitView.vue'
import ModifierProduitView from '@/views/ModifierProduitView.vue'

const routes = [
  {
    path: '/accueil',
    redirect: '/'
  },
  {
    path: '/',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/produit',
    name: 'produit',
    component: ProduitView
  },
  {
    path: '/ajouter-produit',
    name: 'ajouter-produit',
    component: AjouterProduitView
  },
  {
    path: '/produit/:id',
    name: 'afficher-produit',
    component: AfficherProduitView
  },
  {
    path: '/modifier-produit/:id',
    name: 'modifier-produit',
    component: ModifierProduitView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
