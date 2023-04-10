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
    <span :class="$style.title">
      Services
    </span>

    <span
      v-if="isSmaller || isSmall"
      :class="$style['indicator-wrapper']">
      <div
        v-for="number in total"
        :key="`services-indicator-${number}`"
        :class="[
          $style.indicator,
          {
            [$style.active]: number - 1 === index,
          },
        ]" />
    </span>
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'services-title',

  props: {
    index: {
      type: Number,
      default: 0,
    },

    total: {
      type: Number,
      default: 5,
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
  align-items: center;
}

.title {
  font-size: 52px;
  font-weight: 700;
}

.smaller,
.small {
  .title {
    font-size: 30px;
    margin-right: 32px;
  }
}

.medium {
  .title {
    font-size: 38px;
  }
}

.indicator-wrapper {
  display: flex;
  gap: 9px;
}

.indicator {
  display: block;
  border-radius: 50%;
  border: 1px solid black;
  width: 9px;
  height: 9px;

  &.active {
    background: black;
  }
}
</style>
