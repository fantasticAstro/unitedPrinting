<template>
  <div
    :class="$style.component"
    :style="{
      'background-image': `url('${src}')`,
    }">
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

export default Vue.extend({
  name: 'full-width-image',

  props: {
    /**
     * Image name.
     */
    src: {
      type: String,
      default: '#',
    },
  },
});
</script>

<style lang="scss" module>
.component {
  width: 100vw;
  height: 800px;
  background-size: cover;
}

@media screen and (min-width: 400px) {
}

@media screen and (min-width: 800px) {
}
</style>
