<script setup lang="ts">

import type {Pokemon} from "../views/Session4.vue";

const {sprites, name, pokedexId} = defineProps<Pokemon>();

</script>

<template>

  <div class="card">
    <h4><router-link :sprites="sprites" :name="name" :pokedexId="pokedexId" :to="'/info/' + pokedexId" >{{ name.fr }}</router-link></h4>
    <img :src="sprites.shiny || sprites.regular" alt="pokemon"/>
  </div>

</template>

<style scoped>
img {
  width: 100%;
}

.card {
  width: 20%;
  border: 1px solid black;
  margin: 1em;
  padding: 1em;
  text-align: center;
}
h4 a{
  color: white !important;
}
</style>
