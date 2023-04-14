<template>
  <div :class="[
      $style.content,
      {
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
      },
    ]">
    <span
      v-if="show"
      v-html="convertedText"
      :class="$style.word" />
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
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
    ...mapGetters('navigation', [
      'isSmaller',
      'isSmall',
      'isMedium',
      'isLarge',
      'isLarger',
    ]),

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
  line-height: 110px;
  font-size: 100px;
  display: block;
  transition: color 1s ease;
  animation: slide-in .4s ease-in-out;
  max-width: 750px;

  &.accent {
    color: #FEE037;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
}

.large {
  .word {
    font-size: 95px;
    line-height: 100px;
  }
}

.medium {
  .word {
    font-size: 70px;
    line-height: 78px;
  }
}

.small {
  .word {
    font-size: 50px;
    line-height: 60px;
  }
}

.smaller {
  .word {
    font-size: 32px;
    line-height: 36px;
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
</style>
