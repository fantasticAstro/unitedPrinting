<template>
  <div :class="$style.component">
    <img
      v-for="(image, index) in images"
      :key="`background-image-${index}`"
      :class="[
        $style.background,
        {
          [$style.active]: active === index,
        },
      ]"
      :src="resolveImage(image)"
      alt="#" />
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
      const images = require.context(
        '../../../assets/images',
        false,
        /\.png$/,
      );

      return images(`./${name}.png`);
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

.background {
  width: 100%;
  height: 100%;
  opacity: 0;
  background-position: center;
  background-size: cover;

  &.active {
    opacity: 1;
  }
}
</style>
