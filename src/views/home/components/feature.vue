<template>
  <div :class="$style.component">
    <span>
      <slot name="top" />
    </span>

    <span>
      <slot name="bottom" />
    </span>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

/**
 * Hero text for main page component with accented words.
 */
export default Vue.extend({
  name: 'home-feature',
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
  width: calc(100vw - 4rem);
  max-width: 20rem;

  span {
    font-size: 22px;
    line-height: 26px;
    color: white;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.109);

    &:first-of-type {
      font-weight: 300;
    }
  }
}
</style>
