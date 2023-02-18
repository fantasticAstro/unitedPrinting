<template>
  <div :class="$style.component">
    <div :style="{
        'flex': leftRatio,
      }">
      <slot name="left" />
    </div>

    <div :style="{
        'flex': rightRatio,
      }">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

export default Vue.extend({
  name: 'two-column',

  props: {
    /**
     * Ratio left should take of total.
     */
    leftRatio: {
      type: Number,
      default: 1,
    },

    /**
     * Ratio right should take of total.
     */
    rightRatio: {
      type: Number,
      default: 2,
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  flex-wrap: wrap;
}

@media screen and (min-width: 400px) {
  .component {
    flex-wrap: wrap;
  }
}

@media screen and (min-width: 800px) {
}
</style>
