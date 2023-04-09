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
    <span :class="[
      $style.box,
      $style.left,
    ]" />

    <span :class="[$style.title]">
      On this journey together since 1996.
    </span>
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
  display: grid;
  width: 100vw;
  grid-template-columns: auto 60px 750px 60px auto;
  grid-template-rows: auto;
  margin: 40px 0;
  position: relative;
}

.title {
  font-size: 52px;
  line-height: 49px;
  font-weight: 700;
  max-width: 700px;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 0 auto;
  text-align: center;
}

.box {
  position: absolute;
  display: block;
  width: 400px;
  height: 40px;
  border: 6px solid #FEE037;
  grid-row-start: 1;
  grid-row-end: 2;
  border-radius: 10px;
  top: calc((100% - 40px) / 2);

  &.left {
    right: 0;
    grid-column-end: 2;
    align-items: flex-end;
  }

  &.right {
    left: 0;
    grid-column-start: 5;
    align-items: flex-start;
  }
}

.small,
.smaller {
  &.component {
    grid-template-columns: 90px 26px auto 42px;
    margin: 36px 0 0;
  }

  .title {
    grid-column-start: 3;
    grid-column-end: 4;
    text-align: left;
  }
}

.small {
  .title {
    font-size: 32px;
    line-height: 35px;
  }
}

.smaller {
  .title {
    font-size: 25px;
    line-height: 26.754px;
  }
}

.medium {
  .title {
    font-size: 38px;
    line-height: 40px;
  }
}

.medium,
.large {
  grid-template-columns: 200px 12px auto 12px 200px;
}

.smaller,
.small,
.medium,
.large {
  .box {
    top: 0;
  }
}
</style>
