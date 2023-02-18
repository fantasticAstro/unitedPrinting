<template>
  <v-app full-height>
    <app-bar></app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import AppBar from './components/ui/app-bar/app-bar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
  },
});
</script>
