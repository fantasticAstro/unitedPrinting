<template>
  <div :class="[
      $style.component,
      {
        [$style['align-right']]: align === 'right',
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
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
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'titled-text',

  props: {
    align: {
      type: String,
      default: 'left',
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
.component {
  display: flex;
  flex-direction: column;
  color: #000000;
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
  margin-bottom: 10px;
  hyphens: auto;
}

.content {
  font-size: 28px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

.small {
  .title {
    font-size: 11px;
    line-height: 13px;
    max-width: 65.513px;
  }
}
</style>
