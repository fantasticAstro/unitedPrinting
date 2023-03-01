<template>
  <span :class="[
      $style.component,
      {
        [$style['align-right']]: align === 'right',
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
}

@media screen and (min-width: 400px) {
}

@media screen and (min-width: 800px) {
}
</style>
