<template>
  <div :class="$style.content">
    <span
      v-html="convertedText"
      :class="$style.word" />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import { PresetText } from '../config';

/**
 * Hero text for main page component with accented words.
 */
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
    /**
     * A way to enforce type?
     *
     * @returns {string} Text converted to PresetText.
     */
    convertedText(): string {
      return (this.text as PresetText[]).map((text: PresetText) => {
        if (text.accent) {
          return `<span style="color: #FEE037;">${text.text}</span>`;
        }
        return text.text;
      }).join(' ');
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
}

.content {
  display: flex;
  flex-wrap: wrap;
}

.word {
  color: white;
  font-weight: 500;
  display: block;
  transition: color 1s ease;

  &.accent {
    color: #FEE037;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
}

// @media screen and (min-width: 400px) and (max-width: 599px) {
//   .word {
//     font-size: 80px;
//   }
// }

@media screen and (min-width: 600px) {
  .word {
    font-size: 12px;
  }
}

@media screen and (min-width: 1024px) {
  .word {
    font-size: 100px !important;
  }
}

// @media screen and (min-width: 1920px) {
//   .word {
//     font-size: 100px;
//   }
// }
</style>
