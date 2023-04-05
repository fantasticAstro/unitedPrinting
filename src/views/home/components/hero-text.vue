<template>
  <div :class="$style.content">
    <span
      v-if="show"
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

  data: () => ({
    show: true,
  }),

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

  watch: {
    convertedText() {
      this.show = false;

      setTimeout(this.reshow, 50);
    },
  },

  methods: {
    reshow(): void {
      this.show = true;
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 982px;
  width: 100%;
  margin: 0 auto;
}

.word {
  color: white;
  font-weight: 600;
  display: block;
  transition: color 1s ease;
  animation: slide-in .4s ease-in-out;

  &.accent {
    color: #FEE037;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@media screen and (min-width: 600px) and (max-width: 719px) {
  .word {
    font-size: 80px;
  }
}

@media screen and (min-width: 720px) and (max-width: 1919px) {
  .word {
    font-size: 78px;
    line-height: 88px;
  }
}

@media screen and (min-width: 1920px) {
  .word {
    line-height: 110px;
    font-size: 100px;
  }
}
</style>
