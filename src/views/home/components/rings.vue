<template>
  <div :class="[
      $style.component,
      {
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
      },
    ]">
    <div :class="[$style.ring, $style.top]" />

    <div :class="$style.ring" />

    <div :class="[$style.ring, $style.bottom]" />
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

/**
 * Dot component for home view.
 */
export default Vue.extend({
  name: 'home-rings',

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
  border: 5.4px solid #FEE137;

  &.top {
    transform: translateY(16px);
  }

  &.bottom {
    transform: translateY(-16px);
  }
}

.large {
  .ring {
    width: 112px;
    height: 112px;
    border: 4.14px solid #FEE137;

    &.top {
      transform: translateY(12.26px);
    }

    &.bottom {
      transform: translateY(-12.26px);
    }
  }
}
</style>
