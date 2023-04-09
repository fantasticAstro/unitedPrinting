<template>
  <div
    :class="{
      [$style.component]: true,
      [$style.smaller]: isSmaller,
      [$style.small]: isSmall,
      [$style.medium]: isMedium,
      [$style.large]: isLarge,
    }"
    :style="{
      'background-image': `url('${src}')`,
    }">
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'full-width-image',

  props: {
    /**
     * Image name.
     */
    src: {
      type: String,
      default: '#',
    },
  },

  computed: {
    ...mapGetters('navigation', [
      'isSmaller',
      'isSmall',
      'isMedium',
      'isLarge',
      'isLarger',
    ]),
  },
});
</script>

<style lang="scss" module>
.component {
  width: 100vw;
  height: 800px;
  background-size: cover;
  background-position: center center;

  &.small,
  &.smaller,
  &.medium {
    height: 450px;
  }

  &.large {
    height: 520px;
  }
}
</style>
