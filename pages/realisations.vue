<template>
  <Head>
    <Title>RD Peinture 66 | Réalisations</Title>
    <Meta name="description" content="Retrouver touts nos réalisations" />
  </Head>
  <div class="q-pa-md q-mx-auto" style="width: 50%">
    <h2 class="text-center">Nos réalisations</h2>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      style="height: 800px">

      <q-carousel-slide :name="1" img-src="./img/realisation-1.jpg" />
      <q-carousel-slide :name="2" img-src="./img/realisation-2.jpg" />
      <q-carousel-slide :name="3" img-src="./img/realisation-3.jpg" />
      <q-carousel-slide :name="4" img-src="./img/realisation-4.jpg" />
      <q-carousel-slide :name="5" img-src="./img/realisation-5.jpg" />

    </q-carousel>
  </div>
</template>
<script setup>

const slide = ref(1)
</script>