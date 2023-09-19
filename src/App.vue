<script setup lang="ts">

import { RouterLink, RouterView } from "vue-router";

</script>

<template>

  <header>
    <div class="wrapper">
      <nav>
        <router-link class="link-nav-main" to="/">Home</router-link>
        <router-link class="link-nav-main" to="/session1">Session1</router-link>
        <router-link class="link-nav-main" to="/session2">Session2</router-link>
      </nav>
    </div>
  </header>
  <RouterView />

</template>

<style scoped>

</style>
