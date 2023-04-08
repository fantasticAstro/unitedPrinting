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
    <div :class="$style.left">
      <slot name="left" />
    </div>

    <div :class="$style.right">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'two-column',

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
  max-width: 1440px;
  width: calc(100% - 4rem);
  margin: 0 auto;
  flex-wrap: wrap;

  &.smaller {
    width: calc(100% - 70px);

    .left {
      width: 65.5px;
    }

    .right {
      width: calc(100% - 65.5px - 16px);
    }
  }
}

.left {
}

.right {
}
</style>
