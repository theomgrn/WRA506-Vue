<script setup lang="ts">
import { computed } from 'vue'

const symfony = 18
const integration = 16
const reseau = 13
const matieres = ["symfony", "integration", "reseau"]

const somme = computed(() => {
  const moyenne = (symfony + integration + reseau) / 3
  // return Math.round(moyenne) // arrondie à l'entier le plus proche
  return moyenne.toFixed(2) // arrondie à 2 chiffres après la virgule
})

</script>

<template>
  <h2>Liste Statique</h2>
  <ul>
    <li>Note sur Symfony : 19</li>
    <li>Note en intégration : 12</li>
    <li>Note en réseau : 14</li>
  </ul>

  <h2>Liste Dynamique</h2>
  <ul>
    <li>Note sur Symfony : {{ symfony }}</li>
    <li>Note en intégration : {{ integration }}</li>
    <li>Note en réseau : {{ reseau }}</li>
    <li>Moyenne : {{ somme }}</li>
  </ul>

  <h2>Liste v-for</h2>
  <ul>
  <li v-for="(matiere, index) in matieres" :key="index">{{ matiere }}</li>
  </ul>
</template>

<style scoped>

</style>
