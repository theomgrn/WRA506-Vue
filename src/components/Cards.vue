<script setup lang="ts">

import {defineProps} from "vue";
import type {Pokemon} from "../views/Session4.vue";

const {sprites, name} = defineProps<Pokemon>();

</script>

<template>

  <div class="card">
    <h4><a :href="name.fr">{{ name.fr }}</a> </h4>
    <img :src="sprites.regular" alt="pokemon"/>
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
