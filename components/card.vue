<template>
  <section style="width:80vw; margin: auto">
    <div class="row justify-around gap-md">
      <q-card v-for="item in menuList" :key="item.name" class="col card">
        <router-link
          class="column"
          :to="{
            path: item.link
          }">
          <q-img
            class="card-img-top"
            :src="`./img/${item.img}`"
            :alt="item.title" />
          <q-card-section class="card-text">
            {{ item.title }}
          </q-card-section>
        </router-link>
      </q-card>
    </div>
  </section>
</template>

<script setup>
const menuList = [
  {
    title: 'Couverture',
    link: '/',
    img: 'img-10-2.jpg',
  },
  {
    title: 'Démoussage et nettoyage toiture',
    link: '/demoussage',
    img: 'IMG-2218.jpg',
  },
  {
    title: 'Pose et réparation vélux',
    link: '/velux',
    img: 'onglet-velux.jpg',
  },
  {
    title: 'Réparation urgente fuite',
    link: '/reparation',
    img: 'onglet-reparation.jpg',
  },
  {
    title: 'Ravalement facade',
    link: '/facade',
    img: 'IMG-2020.jpg',
  },
  {
    title: 'Peinture intérieure',
    link: '/peinture',
    img: 'IMG-2447.jpg',
  },
  {
    title: 'Rénovation boiserie et ferronerie',
    link: '/boiserie',
    img: 'IMG-2635.jpg',
  },
  {
    title: 'Pose et entretien des gouttières',
    link: '/gouttiere',
    img: 'onglet-goutieres.jpg',
  }
]
</script>

<style lang="scss" scoped>
.card-img-top {
  height: 150px;
  width: 100%;
}

.card-text {
  text-align: center;
  text-decoration: none !important;
}

.card {
  min-width: 150px;
  width: 150px;
  max-width: 150px
}
</style>
