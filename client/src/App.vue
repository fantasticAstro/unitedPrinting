<template>
  <v-app>
    <app-bar />

    <v-main>
      <div :class="$style.content">
        <navigation-drawer />

        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import AppBar from '@/components/ui/navigation/app-bar.vue';
import NavigationDrawer from '@/components/ui/navigation/navigation-drawer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
    NavigationDrawer,
  },
});
</script>

<style lang="scss" module>
.content {
  display: block;
}
</style>
