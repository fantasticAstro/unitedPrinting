<template>
  <span :class="$style.component">
    <span
      v-for="(letter, index) in text.split('')"
      :key="`vertical-text-letter-${index}`"
      :class="$style.letter">
      {{ letter }}
    </span>
  </span>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

/**
 * Text vertically displayed.
 */
export default Vue.extend({
  name: 'vertical-text',

  props: {
    /**
     * Used for letter keys.
     *
     * @type {string}
     * @default '*******' Random string
     */
    id: {
      type: String,
      default: (Math.random() + 1).toString(36).substring(7),
    },

    /**
     * Text to be displayed.
     *
     * @type {string}
     * @default ''
     */
    text: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.letter {
  font-size: 23px;
  line-height: 28px;
  font-weight: 100;
}

@media screen and (min-width: 400px) {
}

@media screen and (min-width: 800px) {
}
</style>
