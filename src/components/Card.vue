<script setup lang="ts">

import {useRoute} from "vue-router";
import {ref, onMounted} from "vue";
import axios from "axios";

export type Pokemon = {
  name: { [key: string]: string };
  sprites: { [key: string]: string };
  egg_groups: { [key: string]: string };
  height: number;
  weight: number;
}

const route = useRoute();
const pokedexId = route.params.pokedexId;

let data = ref<Pokemon>({
  name: {
    fr: ''
  },
  sprites: {
    regular: ''
  },
  egg_groups: {},
  height: 0,
  weight: 0
});

onMounted(async () => {
  const response = await axios.get(
      "https://api-pokemon-fr.vercel.app/api/v1/pokemon/" + pokedexId
  );
  data.value = response.data;
});


</script>

<template>
  <router-link to="/session4">
    <button>Retour à la liste</button>
  </router-link>
  <div class="gallery">
    <div class="card">
      <h1>{{ data.name.fr }}</h1>
      <h4>Type :
        <span v-for="(egg, index) in data.egg_groups">
          <span v-if="index === 0">{{ egg }}</span>
          <span v-else> / {{ egg }}</span>
        </span></h4>
      <h4>Taille : {{ data.height }}</h4>
      <h4>Poid : {{ data.weight }}</h4>
      <img :src="data.sprites.shiny || data.sprites.regular" alt="pokemon"/>
    </div>
  </div>
</template>

<style>
img {
  width: 100%;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}

.card {
  width: 20em;
  border: 1px solid black;
  margin: 1em;
  padding: 1em;
  text-align: center;
}

h4 {
  color: whitesmoke !important;
}
</style>
