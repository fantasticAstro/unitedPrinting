<template>
  <div :class="[
      $style.component,
      {
        [$style['align-right']]: align === 'right',
      },
    ]">
    <span :class="$style.content">
      <slot />
    </span>

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
  position: relative;
  display: flex;
  margin: 48px 0 90px;
  width: 100%;
  max-width: 1440px;

  &.align-right {
    flex-direction: row-reverse;
  }
}

.content {
  color: black;
  font-size: 58px;
  font-weight: 600;
  max-width: 900px;
  text-align: right;
  grid-column-start: 2;
}

.box {
  height: 48px;
  display: block;
  border: 7px solid #FEE137;
  width: 100vw;
  border-radius: 12px;
  position: absolute;
  right: calc(100% - 120px);
  top: 21px;
}

@media screen and (min-width: 400px) {
}

@media screen and (min-width: 800px) {
}
</style>
