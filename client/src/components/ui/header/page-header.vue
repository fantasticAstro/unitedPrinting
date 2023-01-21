<template>
  <div
    :class="$style.component"
    :style="{
      'background-image': `url(${src})`,
    }">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'page-header',

  props: {
    src: {
      type: String,
      default: '#',
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  height: 800px;
  width: 100vw;
  z-index: 0;
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
}
</style>
