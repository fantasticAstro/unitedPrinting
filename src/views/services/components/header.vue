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
    <div :class="$style.hero">
      <p :class="$style.first">
        Award-winning.
      </p>

      <p :class="$style.second">
        Sustainable.
      </p>

      <p :class="$style.third">
        Awesome.
      </p>
    </div>

    <span
      v-if="!(isSmaller || isSmall || isMedium)"
      :class="$style.year">
      <span>
        1
      </span>

      <span>
        9
      </span>

      <span>
        9
      </span>

      <span>
        6
      </span>
    </span>
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'services-header',

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
  grid-template-columns: 35px 16px auto 16px 35px;
  grid-template-rows: 141px auto;
  width: 100vw;
  height: 520px;
  background-size: cover !important;
  background: url('../../../../public/img/blob-background.jpg');
}

.hero {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 600px;

  p {
    font-size: 53px;
    line-height: 53.763px;
    color: white;
    font-weight: 600;
    margin: 0;

    &.first {
      align-self: flex-start;
    }

    &.second {
      align-self: flex-end;
    }

    &.third {
      align-self: center;
      color: #FEE137;
    }
  }
}

.year {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  span {
    color: white;
    font-size: 15px;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.168);
  }
}

.smaller {
  &.component {
    grid-template-columns: 40px auto 40px;
  }

  .hero {
    grid-column-start: 2;
    grid-column-end: 3;
    width: 288px;

    p {
      font-size: 27px;
      line-height: 30px;
    }
  }
}

.small {
  &.component {
    grid-template-columns: 40px auto 40px;
  }

  .hero {
    grid-column-start: 2;
    grid-column-end: 3;
    width: 430px;

    p {
      font-size: 38px;
      line-height: 42px;
    }
  }
}

.smaller,
.small {
  &.component {
    height: 360px;
    grid-template-rows: 83px auto;
  }
}
</style>
