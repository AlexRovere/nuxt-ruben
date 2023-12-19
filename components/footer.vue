<template>
  <section>
    <div class="container">
      <div class="row text-center justify-center">
        <div class="col-md-4 self-center">
          <p>
            Spécialisée dans les travaux de toiture, l’entreprise RD Peinture
            vous propose la pose, la rénovation et l’entretien de votre
            couverture. Nous intervenons dans les alentours de Perpignan
          </p>
        </div>
        <div class="col-md-4 self-center">
          <q-img src="./img/logo.png" alt="logo" fit="fill" style="width: 300px" />
        </div>
        <div class=" col-md-4 self-center">
          <p>
            Demandez votre devis gratuit pour vos travaux de couverture près de
            Perpignan : <a href="mailto: r.d.peinture66@gmail.com">r.d.peinture66@gmail.com</a>
          </p>
          <div class="gap-md">
            <q-icon name="call" size="sm" color="primary"></q-icon>
            <span class="text-primary">
              <a href="tel:+33781962743">07 81 96 27 43</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary q-pt-md">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center text-footer">
            <p>
              <router-link class="text-footer" :to="{ name: 'mentions' }">
                Mentions légales
              </router-link>
              -
              <router-link class="text-footer" :to="{ hash: '#contact' }">
                Contact
              </router-link>

              -
              <router-link class="text-footer"
                :to="{ name: 'policy' }">
                Politiques de confidentialité
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-footer {
  color: white;
  text-align: center;
  margin-bottom: 0rem;
  text-decoration: none
}

.link {
  color: white;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #009ee0;
  font-size: 1rem;
}
</style>
