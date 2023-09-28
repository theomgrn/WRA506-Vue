<script setup lang="ts">
import Cards from '../components/Cards.vue'
import {onMounted, ref, watch} from 'vue'
import axios from 'axios'

export type Pokemon = {
  name: { [key: string]: string };
  sprites: { [key: string]: string };
  pokedexId: number;
}

let originalData: Pokemon[] = [];
let data = ref<Pokemon[]>([]);
let isLoading = ref(true);
let search = ref('');

onMounted(async () => {
  try {
    const response = await axios.get('./pokemon.json');
    originalData = response.data;
    originalData.shift();
    data.value = [...originalData];
    isLoading.value = false;
  } catch (error) {
    console.error(error);
  }
});

function onEnter() {
  if (search.value.trim() === '') {
    data.value = [...originalData];
  } else {
    data.value = originalData.filter(pokemon => pokemon.name.fr.toLowerCase().includes(search.value.toLowerCase()));
  }
}

function refreshData() {
  if (search.value.trim() === '') {
    // Si la recherche est vide, réinitialise data.value avec les données d'origine
    data.value = [...originalData];
  }
}

// Watch pour surveiller les changements de la valeur de recherche
watch(search, refreshData);

</script>

<template>
  <div>
    <div class="search-bar">
      <input v-model.trim="search" @keyup="onEnter" type="text" placeholder="Rechercher...">
    </div>
    <div v-if="isLoading" class="loading">Chargement en cours...</div>
    <div v-else class="gallery">
      <Cards
          v-for="pokemon in data"
          :sprites="pokemon.sprites"
          :name="pokemon.name"
          :pokedexId="pokemon.pokedexId"
          :key="pokemon.name.common"
      />
    </div>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
}

input[type="text"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 16px;
}
.loading {
  display: flex;
  justify-content: center;
  padding-top: 16em;
}

p {
  text-align: center;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
</style>
