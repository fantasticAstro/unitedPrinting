<template>
  <div :class="$style.component">
    <div :class="[$style.ring, $style.top]" />

    <div :class="$style.ring" />

    <div :class="[$style.ring, $style.bottom]" />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

/**
 * Dot component for home view.
 */
export default Vue.extend({
  name: 'home-rings',
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
}

.ring {
  display: block;
  width: 146px;
  height: 146px;
  border-radius: 50%;
  border: 4px solid #FEE137;

  &.top {
    transform: translateY(16px);
  }

  &.bottom {
    transform: translateY(-16px);
  }
}
</style>
