<template>
  <section id="contact" style="height:800px">
    <q-carousel
      v-if="!$q.screen.lt.md"
      class="fit"
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      autoplay>
      <q-carousel-slide :name="1" img-src="./img/carousel-1.jpg" />
      <q-carousel-slide :name="2" img-src="./img/carousel-2.jpg" />
      <q-carousel-slide :name="3" img-src="./img/carousel-3.jpg" />
      <q-carousel-slide :name="4" img-src="./img/carousel-4.jpg" />
    </q-carousel>

    <q-form @submit="sendForm">
      <q-card class="column gap-sm card-form">
        <div class=" bg-primary text-center text-white" style="font-size: 2rem">DEVIS GRATUIT</div>
        <q-card-section class="column scroll gap-md col no-wrap">

          <!-- NAME -->
          <q-input v-model="form.name" label="Votre nom *"
            outlined required />

          <!-- POSTAL -->
          <q-input v-model="form.postal" label="Votre code postal *"
            outlined required />

          <!-- EMAIL -->
          <q-input v-model="form.email" label="Votre email *"
            outlined required />

          <!-- PHONE -->
          <q-input v-model="form.phone" label="Votre téléphone"
            outlined />

          <!-- INTERVENTION -->
          <q-select v-model="form.intervention" label="Choissez votre intervention" :options="interventions"
            outlined />

          <!-- MESSAGE -->
          <q-input v-model="form.message" class="col" type="textarea" label="Message"
            outlined />

          * Champs obligatoires


        </q-card-section>

        <q-card-section class="row items-center">
          <q-space />
          <q-btn v-if="!formAlreadySent" type="submit" label="Recevoir votre devis" color="primary" />
          <div class="text-positive text-bold" v-else>Demande de devis, nous vous recontacterons dans les plus brefs délais.</div>
          <q-space />

        </q-card-section>
      </q-card>
    </q-form>

  </section>
</template>
<script setup>
import { useQuasar } from 'quasar'
const slide = ref(1)
const form = reactive({})
const $q = useQuasar()

const formAlreadySent = ref(false)

const runtimeConfig = useRuntimeConfig()


const interventions = ['Couverture', 'Urgence fuite', 'Nettoyage et traitement toiture', 'Pose et entretien gouttières', 'Pose et entretien vélux', 'Autres']

const sendForm = async () => {
  try {
    $q.loading.show()

    const name = form.name || ''
    const phone = form.phone || ''
    const postal = form.postal || ''
    const email = form.email || ''
    const message = form.message || ''
    const intervention = form.intervention || ''

    const fullMessage = `
    Nom du contact : ${name}
    Numéro du contact : ${phone}
    Code postal du contact : ${postal}
    Email du contact : ${email}
    Message : ${message}
    `
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: runtimeConfig.public.WEB3FORMS_ACCESS_KEY,
        name,
        email,
        subject: `Nouveau contact sur votre site pour ${intervention}`,
        message: fullMessage,
        from_name: 'DEMANDE DE DEVIS',
        replyto: email
      }),
    });
    const result = await response.json();
    if (result.success) {
      const name = form.name
      $q.notify({ message: `Demande de devis envoyé, merci ${name}`, color: 'positive' })
      formAlreadySent.value = true
    } else {
      $q.notify({ message: 'Une erreur est survenue, veuillez réessayer ultérieurement', color: 'negative' })
    }

  } catch (e) {
    console.error(e)
  } finally {
    $q.loading.hide()
  }
}
</script>

<style lang="scss">
.card-form {
  height: 700px;
  width: 30vw;
  min-width: 300px;
  position: relative;
  bottom: 750px;
  left: 65vw
}

@media screen and (max-width: 1024px) {
  .card-form {
    position: initial;
    width: 100%;
    padding: 10px
  }
}
</style>
