<template>
  <header class="jumbotron jumbotron-fluid">
    <div class="container text-center mt-5">
      <h1 class="display-4">Bienvenue chez Mon Magasin</h1>
      <p class="lead">Trouvez les meilleurs produits et offres ici.</p>
      <RouterLink to="/produit" class="btn btn-primary btn-lg">Voir les Produits</RouterLink>
    </div>
  </header>
  <section class="container">
    <h2 class="text-center mt-5">Notre Histoire</h2>
    <p>
      Bienvenue sur Mon Magasin, votre destination pour découvrir et acheter une large gamme de produits de qualité. Notre histoire commence il y a de nombreuses années lorsque notre fondateur a eu la vision de créer une plateforme en ligne qui simplifierait vos achats et vous offrirait une expérience de magasinage exceptionnelle.
    </p>
    <p>
      Depuis lors, nous nous sommes engagés à vous offrir les meilleurs produits, des offres incroyables et un service client exceptionnel. Notre équipe dévouée travaille sans relâche pour s'assurer que vous trouvez exactement ce que vous cherchez et que votre expérience d'achat est agréable.
    </p>
    <p>
      Nous sommes ravis de vous accueillir chez Mon Magasin et nous espérons que vous apprécierez notre sélection de produits soigneusement choisis. Merci de faire partie de notre histoire et de notre aventure.
    </p>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: { RouterLink }
}
</script>
