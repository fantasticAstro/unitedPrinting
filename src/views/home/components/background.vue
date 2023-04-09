<template>
  <div :class="$style.component">
    <div
      v-for="(image, index) in images"
      :key="`background-image-${index}`"
      :class="[
        $style.background,
        {
          [$style.first]: first,
          [$style.active]: index === active,
          [$style.last]: index === active - 1 || (active === 0 && index === images.length - 1),
        },
      ]"
      :style="{
        backgroundImage: resolveImage(image),
      }" />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import {
  PRESETS,
  Preset,
} from '../config';

export default Vue.extend({
  name: 'home-background',

  props: {
    /**
     * Index of image to display.
     */
    active: {
      type: Number,
      default: 0,
    },
  },

  data: () => ({
    images: [] as string[],

    first: true,
  }),

  created() {
    this.images = PRESETS.map((preset: Preset) => preset.background);
  },

  methods: {
    /**
     * Resolves an image name to it's item.
     *
     * @param {string} name Name of the image file.
     */
    resolveImage(name: string) {
      // const images = require.context(
      //   '../../../assets/images',
      //   false,
      //   /\.png$/,
      // );

      // return images(`./${name}.png`);

      return `url(./img/${name}.png)`;
    },
  },

  watch: {
    active() {
      this.first = false;
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-position: center center;
  background-size: cover;
  z-index: -2;

  &.active {
    opacity: 1;
    z-index: -1;

    &:not(.first) {
      animation: fade-in 1s ease-in-out;
    }
  }

  &.last {
    opacity: 1;
  }
}
</style>
