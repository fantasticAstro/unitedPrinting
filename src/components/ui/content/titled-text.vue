<template>
  <div :class="[
      $style.component,
      {
        [$style['align-right']]: align === 'right',
      },
    ]">
    <span :class="$style.title">
      <slot name="title" />
    </span>

    <span :class="$style.content">
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

export default Vue.extend({
  name: 'titled-text',

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
  flex-direction: column;
  color: black;
  font-weight: 500;

  &.align-right {
    text-align: right;
  }
}

.title {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 55px;
}

.content {
  font-size: 28px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

@media screen and (min-width: 400px) {
}

@media screen and (min-width: 800px) {
}
</style>
