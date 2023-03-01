<template>
  <v-app full-height>
    <app-bar></app-bar>

    <v-main :class="$style.main">
      <router-view/>

      <navigation-menu :class="$style.navigation" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import AppBar from './components/ui/app-bar/app-bar.vue';
import NavigationMenu from './components/ui/navigation/navigation-menu.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
    NavigationMenu,
  },
});
</script>

<style lang="scss" module>
.main {
  position: relative;
}

.navigation {
  position: absolute;
  right: 0;
  top: calc(30vh - 116px);
  z-index: 2;
}
</style>
