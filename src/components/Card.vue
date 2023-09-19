<script setup lang="ts">

import {defineProps} from "vue";
import type {Pokemon} from "../views/Session4.vue";

const {sprites, name} = defineProps<Pokemon>();

</script>

<template>

  <div class="card">
    <h2>{{ name.fr }}</h2>
    <img :src="sprites" alt="pokemon"/>
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
</style>
