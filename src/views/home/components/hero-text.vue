<template>
  <div :class="$style.component">
    <span
      v-for="(word, index) in convertedText"
      :key="`home-hero-text-${index}`"
      :class="[
        $style.word,
        {
          [$style.accent]: word.accent,
        },
      ]">
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
  max-width: 100%;
  flex-wrap: wrap;
}

.word {
  color: white;
  font-size: 2rem;
  font-weight: 500;

  &.accent {
    color: #FEE037;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
}

@media screen and (min-width: 400px) {
  .word {
    font-size: 3rem;
  }
}

@media screen and (min-width: 800px) {
  .word {
    font-size: 4rem;
  }
}
</style>
