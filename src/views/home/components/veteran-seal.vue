<template>
  <div
    :class="$style.component"
    :style="{
      'background-image': resolveImage(),
    }" />
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

/**
 * Dot component for home view.
 */
export default Vue.extend({
  name: 'home-veteran-seal',

  methods: {
    /**
     * Resolves an image name to it's item.
     */
    resolveImage() {
      return 'url(./img/sdvosb-crest.png)';
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: block;
  min-width: 200px;
  min-height: 200px;
  padding-left: 24px;
  background-size: contain;
  background-position: center center;
}
</style>
