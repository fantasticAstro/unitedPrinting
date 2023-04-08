<template>
  <span :class="[
      $style.component,
      {
        [$style['align-right']]: align === 'right',
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
      },
    ]"
    :style="{
      'max-width': overrideMaxWidth ? overrideMaxWidth : maxWidth,
    }">
    <slot />
  </span>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'content-paragraph',

  props: {
    align: {
      type: String,
      default: 'left',
    },

    maxWidth: {
      type: String,
      default: '100%',
    },

    overrideMaxWidth: {
      type: String,
      default: undefined,
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
$font-size: 18px;

.component {
  display: flex;
  color: black;
  font-size: $font-size;
  font-weight: 500;
  line-height: $font-size * 1.8;
  width: 100%;

  &.align-right {
    flex-direction: row-reverse;
  }

  &.smaller {
    font-size: 14px;
    line-height: 15px;
  }
}
</style>
