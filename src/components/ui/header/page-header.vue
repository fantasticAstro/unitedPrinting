<template>
  <div :class="[
      $style.component,
      {
        [$style['align-right']]: align === 'right',
      },
    ]">
    <slot />

    <span
      v-if="box"
      :class="$style.box" />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

export default Vue.extend({
  name: 'page-header',

  props: {
    align: {
      type: String,
      default: 'left',
    },

    box: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  color: black;
  font-size: 80px;
  margin: 48px 0;
  font-weight: 500;

  &.align-right {
    flex-direction: row-reverse;
  }
}

.box {
  height: 48px;
  display: block;
  border: 7px solid #FEE137;
  width: 200px;
  border-radius: 12px;
}

@media screen and (min-width: 400px) {
}

@media screen and (min-width: 800px) {
}
</style>
