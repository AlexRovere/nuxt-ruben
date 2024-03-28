<template>
  <q-layout class="column " view="hHh lpR fFf">

    <q-header reveal elevated class="bg-white" height-hint="98">
      <q-toolbar class="justify-around row items-center" style="height: 150px">
        <img v-if="!$q.screen.lt.md" class="col-3" src="/img/logos.png">

        <img @click="$router.push({ name: 'demoussage' })" class=" cursor-pointer" style="object-fit: fill; width: 300px" src="/img/logo.png">

        <div v-if="!$q.screen.lt.md" class="row col-3 items-center justify-center gap-md">
          <q-icon name="call" color="primary" size="lg" />
          <span class="text-primary">
            <a class="phone" href="tel:+33781962743"> 07 81 96 27 43</a>
          </span>
        </div>
      </q-toolbar>

      <q-tabs class="bg-primary" align="center">
        <q-route-tab to="/demoussage" label="Démoussage et nettoyage toiture" />
        <q-route-tab to="/gouttiere" label="Pose et entretien des gouttières" />
        <q-route-tab to="/velux" label="Pose et réparation vélux" />
        <q-route-tab to="/reparation" label="Réparation urgente fuite" />
        <q-route-tab to="/facade" label="Ravalement facade" />
        <q-route-tab to="/peinture" label="Peinture intérieure" />
        <q-route-tab to="/boiserie" label="Rénovation boiserie et ferronerie" />
        <q-route-tab to="/realisations" label="Réalisations" />
      </q-tabs>
    </q-header>

    <q-page-container class="column scroll gap-md fit">
      <Contact class="full-width" />
      <Card class="full-width" />
      <Emergency class="full-width" />
      <router-view class="col" />
      <BtnContact style="width: 250px; margin: auto;" />
      <Intervention class="full-width" />

      <Footer />
      <Scroll />
    </q-page-container>

  </q-layout>
</template>
<script setup>
import Contact from '~/components/contact.vue'
import Card from '~/components/card.vue'
import Emergency from '~/components/emergency.vue'
import BtnContact from '~/components/btnContact.vue'
import Intervention from '~/components/intervention.vue'
import Footer from '~/components/footer.vue'
import Scroll from '~/components/scroll.vue'
import { useRoute } from 'vue-router'

const $route = useRoute()
const firstLoad = ref(true)

const scrollToAnchor = () => {
  document.getElementById('anchor').scrollIntoView({
    behavior: 'smooth'
  })
}

watch($route, val => {
  if (val && !firstLoad.value) {
    scrollToAnchor()
  }
  firstLoad.value = false
})

const route = useRoute()

</script>
<style scoped>
.phone {
  text-decoration: none;
  font-size: 2rem;
  color: #009ee0;
}
</style>
