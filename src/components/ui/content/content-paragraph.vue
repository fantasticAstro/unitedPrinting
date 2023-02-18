<template>
  <span :class="[
      $style.component,
      {
        [$style['align-right']]: align === 'right',
      },
    ]">
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
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  color: black;
  font-size: 25px;
  margin: 48px 0;
  font-weight: 500;

  &.align-right {
    flex-direction: row-reverse;
  }
}

@media screen and (min-width: 400px) {
}

@media screen and (min-width: 800px) {
}
</style>
