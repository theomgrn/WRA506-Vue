<script setup lang="ts">
import Card from '../components/Cards.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

export type Pokemon = {
  name: {[key: string]: string};
  sprites: {[key: string]: string};
}

let data = ref<Pokemon[]>([]);
let isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get('https://api-pokemon-fr.vercel.app/api/v1/pokemon');
    data.value = response.data;
    data.value.shift(); // Supprimez le premier élément
    isLoading.value = false;
    console.log(data.value);
  } catch (error) {
    console.error(error);
  }
});

</script>

<template>
  <div>

    <div v-if="isLoading" class="loading">Chargement en cours...</div>

    <div v-else class="gallery">
      <Card
          v-for="pokemon in data"
          :sprites="pokemon.sprites"
          :name="pokemon.name"
          :key="pokemon.name.common"
      />
    </div>
  </div>
</template>

<style scoped>
.loading{
  display: flex;
  justify-content: center;
}
p{
  text-align: center;
}
.gallery{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
</style>
