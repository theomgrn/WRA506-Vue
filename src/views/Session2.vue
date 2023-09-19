<script setup lang="ts">

import {ref} from 'vue'

const awesome = ref(true)
const items = [{ message: 'Foo' }, { message: 'Bar' }]
const notes = Array.from({ length: 10 }, () => Math.floor(Math.random() * 21));
const sup = "supérieur à 10"
const inf = "inférieur à 10"

</script>

<template>

  <div style="text-align: center">
    <button @click="awesome = !awesome">Toggle</button>
    <h2 v-if="awesome">Vue is awesome!</h2>
    <h2 v-else>Oh no 😢</h2>
  </div>

  <ul>
    <h2>Boucle FOR</h2>
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>

  <ul>
    <h2>Notes > ou &lt; à 10</h2>
    <li v-for="note in notes" :key="note" v-bind:class="{ 'green': note >= 10, 'red': note < 10 }">
      {{ note }}
    </li>
  </ul>

  <ul>
    <h2>Notes > ou &lt; à 10</h2>
    <li v-for="note in notes" :key="note">
      <span>
        {{ note }} est {{ note >= 10 ? sup : inf }}
      </span>
    </li>
  </ul>

</template>

<style scoped>
h1 {
  margin-bottom: 1em;
}

p {
  text-align: center;
}

.green {
  color: green;
}
.red {
  color: red;
}

</style>
