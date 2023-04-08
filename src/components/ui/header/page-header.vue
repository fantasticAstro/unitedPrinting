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
import { mapGetters } from 'vuex';
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
  position: relative;
  display: flex;
  margin: 48px 0 90px;
  width: 100%;
  max-width: 1440px;

  &.align-right {
    flex-direction: row-reverse;
  }

  &.small {
    margin: 36px 0;
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

.small {
  .box {
    height: 36px;
    border: 4.459px solid #FEE137;
    width: 100vw;
    right: calc(100% - 90px);
    top: 10px;
  }

  .content {
    font-size: 25px;
    font-weight: bold;
    line-height: 26.754px;
    text-align: left;
    margin-left: calc(90px + 26px);
  }
}

.medium {
}

.large {
}

.larger {
}
</style>
