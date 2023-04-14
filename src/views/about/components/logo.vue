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
    <div
      :class="$style['title-wrapper']"
      @click="goToHome"
      @keydown="goToHome">
      <span
        :class="{
            [$style.bold]: true,
            [$style.dark]: true,
          }">
        United
      </span>

      <span
        :class="{
            [$style.bold]: true,
            [$style.dark]: true,
          }">
        Printing
      </span>

      <span :class="{
          [$style.dark]: true,
        }">
        Company
      </span>
    </div>

    <span :class="[
      $style.box,
      $style.right,
    ]" />
  </div>
</template>

<script lang="ts">
// Packages
import {
  mapActions,
  mapGetters,
} from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'about-logo',

  computed: {
    ...mapGetters('navigation', [
      'isSmaller',
      'isSmall',
      'isMedium',
      'isLarge',
      'isLarger',
    ]),
  },

  methods: {
    ...mapActions('navgitation', [
      'goToHome',
    ]),
  },
});
</script>

<style lang="scss" module>
$title-font-size: 28px;
$title-line-height: 28px;

.component {
  width: 100vw;
  position: relative;
  margin: 20px 0 120px;
  display: grid;
  grid-template-columns: auto 170px 14px 529px 40px auto;
  grid-template-rows: auto;
}

.smaller,
.small {
  &.component {
    grid-template-columns: 36px 66px 16px auto 36px;
  }
}

.medium {
  &.component {
    max-width: calc(100vw - 20px);
    padding: 0 10px;
  }
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  z-index: 1;
  margin-left: auto;
  grid-column-start: 4;

  span {
    // Design specified 24px and 29px, relying on ratios instead.
    font-size: $title-font-size * 0.6 * 0.86;
    line-height: $title-line-height * 0.6 * 0.9;
    color: white;
    font-weight: lighter;

    &.dark {
      color: black;
    }

    &.bold {
      font-size: $title-font-size * 0.6;
      line-height: $title-line-height * 0.6;
      font-weight: bold;
    }

    &:last-of-type {
      margin-right: $title-font-size * .1;
    }
  }
}

.box {
  position: absolute;
  display: block;
  width: 100vw;
  height: 40px;
  border: 6px solid #FEE037;
  border-radius: 12px;
  top: calc((100% - 40px) / 2);
  animation: slide-in 0.5s ease-in-out 0s;

  &.left {
    right: 0;
    grid-column-end: 2;
    align-items: flex-end;
  }

  &.right {
    left: 0;
    grid-column-start: 6;
    align-items: flex-start;
  }
}

.smaller,
.small {
  &.component {
    margin: 28px 0 120px;
  }
}
</style>
