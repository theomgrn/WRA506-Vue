<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { routes } from "./router";

const dynamicRoutes = routes.filter(route => {
  return route.name.startsWith("Session") || route.name === "HOME" || route.name === "SEARCH";
});
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link
            class="link-nav-main"
            v-for="route in dynamicRoutes"
            :key="route.name"
            :to="{ name: route.name}"
        >
          {{ route.name }}
        </router-link>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>

