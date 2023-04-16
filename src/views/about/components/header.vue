<template>
  <div :class="[
      $style.component,
      {
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
        [$style.larger]: isLarger,
      },
    ]">
    <span :class="[
      $style.box,
      $style.left,
    ]" />

    <span :class="[$style.title]">
      <p>
        On this journey
      </p>

      <p>
        together since 1996.
      </p>
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

  &.larger {
    grid-template-columns: auto 170px 14px 529px auto;

    .title {
      grid-column-start: 4;
      grid-column-end: 6;
    }

    .box {
      right: 20vw;
    }
  }
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
  text-align: left;
  animation: slide-in 0.5s ease-in-out 0s;

  p {
    margin: 0;
  }
}

.box {
  position: absolute;
  display: block;
  width: 100vw;
  height: 40px;
  border: 6px solid #FEE037;
  grid-row-start: 1;
  grid-row-end: 2;
  border-radius: 10px;
  top: calc((100% - 40px) / 2);
  animation: slide-in 1.0s ease-in-out 0s;

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
    grid-column-start: 4;
    grid-column-end: 6;
  }

  .box.left {
    grid-column-start: 1;
    grid-column-end: 3;
    right: 15px;
  }

  &.component {
    margin: 0 auto;
    margin-top: 36px;
    grid-template-columns: 36px 66px 16px auto 36px;
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
  grid-template-columns: auto 100px 713px 100px auto;
}

.medium,
.large {
  grid-template-columns: auto 60px 750px 60px auto;
}

.smaller,
.small,
.medium,
.large {
  .box {
    top: 0;
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
