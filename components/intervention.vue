<template>
  <section class="bg-img-intervention">
    <div class="container align-self-center text-center map-intervention">
      <div>
        <h3>Notre zone d'intervention</h3>
        <q-img fit="fill"
          class="img-size"
          src="./img/zone.jpg" alt="zone d'intervention" />

        <p>Intervention à 50 km autour de Pia</p>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'intervention',
})
</script>

<style scoped>
.map-intervention {
  background-color: rgba(255, 255, 255, 0.8);
}

.bg-img-intervention {
  background-image: url('/img/deco-2-2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.img-size {
  max-height: 400px;
}
</style>
