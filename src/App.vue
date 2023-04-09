<template>
  <v-app
    v-resize="handleResize"
    full-height>
    <app-bar></app-bar>

    <v-main :class="$style.main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
// Packages
import {
  mapActions,
  mapGetters,
} from 'vuex';
import Vue from 'vue';

// Local Imports
import AppBar from './components/ui/app-bar/app-bar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
  },

  computed: {
    ...mapGetters('navigation', [
      'isLarge',
      'isLarger',
      'getPage',
    ]),
  },

  created() {
    this.handleResize();
  },

  methods: {
    ...mapActions('navigation', [
      'handleResize',
    ]),
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
  top: calc(20vh - 116px);
  z-index: 2;

  &.center {
    top: calc(45vh - 116px);
  }
}
</style>
