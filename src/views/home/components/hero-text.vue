<template>
  <div :class="$style.component">
    <span
      v-for="(word, index) in convertedText"
      :key="`home-hero-text-${index}`">
      {{ word.text }}
    </span>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import { PresetText } from '../config';

export default Vue.extend({
  name: 'home-hero-text',

  props: {
    /**
     * Index of image to display.
     */
    text: {
      type: Array,
      default: () => ([]),
    },
  },

  computed: {
    convertedText(): PresetText[] {
      return this.text as PresetText[];
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;

  span {
    color: black;

    &.accent {
      color: grey;
    }
  }
}
</style>
