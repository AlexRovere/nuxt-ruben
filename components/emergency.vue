<template>
  <section
    id="anchor"
    class="bg-gray-400 col-10 mx-auto text-center my-5 bg-img py-5">
    <div class="container">
      <div class="text-center">
        <h5 class="text-primary">
          {{ title }}
        </h5>
        <p>
          {{ content }}
        </p>
        <p>
          {{ secondaryContent }}
        </p>
        <q-img class='logo-width' fit="fill" src="./img/urgence-logo.png" />
        <h3>
          {{ secondaryTitle }}
        </h3>
        <div class="text-primary tel-font-size">
          <q-icon name="call" size="md" color="primary" />
          <a href="tel:+33781962743"><span class=""> 07 81 96 27 43</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'emergency',
  props: {
    title: {
      type: String,
      default: 'Faites appel aux experts de RD Peinture près de Perpignan',
    },
    content: {
      type: String,
      default: '',
    },
    secondaryTitle: {
      type: String,
      default: '',
    },
    secondaryContent: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.bg-img {
  background-image: url('/img/fond-1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.tel-font-size {
  font-size: 2rem;
}

.logo-width {
  height: 200px;
  width: 250px;
}

a {
  text-decoration: none;
  color: #009ee0;
}
</style>
