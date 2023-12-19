<template>
  <q-btn
    color="primary"
    round
    icon="arrow_upward"
    @click="moveUp()"
    v-show="scY > 300"
    id="myBtn2"
    title="Retour haut de page">
  </q-btn>
</template>
<script setup>


const scTimer = ref(0)
const scY = ref(0)

const moveUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  if (scTimer.value) return
  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY
    clearTimeout(scTimer.value)
    scTimer.value = 0
  }, 100)
}


onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>
<style lang="scss">
#myBtn2 {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
}

#myBtn {
  display: block;
  /* Hidden by default */
  position: fixed;
  /* Fixed/sticky position */
  bottom: 20px;
  /* Place the button at the bottom of the page */
  right: 30px;
  /* Place the button 30px from the right */
  z-index: 99;
  /* Make sure it does not overlap */
  border: none;
  /* Remove borders */
  outline: none;
  /* Remove outline */
  background-color: #009ee0;
  /* Set a background color */
  color: white;
  /* Text color */
  cursor: pointer;
  /* Add a mouse pointer on hover */
  //   padding: 15px; /* Some padding */
  border-radius: 10px;
  /* Rounded corners */
  font-size: 2rem;
  /* Increase font size */
}

#myBtn:hover {
  background-color: #555;
  /* Add a dark-grey background on hover */
}

@media (max-width: 992px) {
  #myBtn {
    bottom: 10px;
    right: 5px;
    font-size: 1rem;
  }
}
</style>
