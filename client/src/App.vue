<template>
  <v-app>
    <app-bar />

    <v-main>
      <div :class="$style.content">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import AppBar from '@/components/ui/navigation/app-bar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
  },
});
</script>

<style lang="scss" module>
.content {
  display: block;
  width: calc(100vw - 2rem);
  max-width: 1200px;
  margin: 0 auto;
}
</style>
