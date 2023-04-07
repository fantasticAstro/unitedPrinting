<template>
  <div :class="$style.component">
    <div :class="$style.content">
      <div
        :class="$style['title-wrapper']"
        @click="goToHome"
        @keydown="goToHome">
        <span
          :class="{
              [$style.bold]: true,
              [$style.dark]: appBarShouldBeDark,
            }">
          United
        </span>

        <span
          :class="{
              [$style.bold]: true,
              [$style.dark]: appBarShouldBeDark,
            }">
          Printing
        </span>

        <span :class="{
            [$style.dark]: appBarShouldBeDark,
          }">
          Company
        </span>
      </div>

      <span
        v-if="isLarge || isLarger"
        :class="{
          [$style.dark]: appBarShouldBeDark,
          [$style['vertical-spacer']]: true,
        }" />

      <span
        v-if="isLarge || isLarger"
        :outlined="!condense"
        :class="{
          [$style.dark]: appBarShouldBeDark,
          [$style.location]: true,
        }">
        Charlotte, NC
      </span>

      <v-spacer :class="{
          [$style.dark]: appBarShouldBeDark,
        }"/>

      <app-bar-quote-button v-if="!(isSmaller || isSmall)" />

      <app-bar-menu-button v-if="isSmall || isMedium" />
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import {
  mapActions,
  mapGetters,
} from 'vuex';
import Vue from 'vue';

// Local Imports
import AppBarQuoteButton from './app-bar-quote-button.vue';
import AppBarMenuButton from './app-bar-menu-button.vue';

export default Vue.extend({
  name: 'app-bar',

  components: {
    AppBarQuoteButton,
    AppBarMenuButton,
  },

  computed: {
    ...mapGetters('navigation', [
      'appBarShouldBeDark',
      'isSmaller',
      'isSmall',
      'isMedium',
      'isLarge',
      'isLarger',
    ]),
  },

  methods: {
    ...mapActions('navigation', [
      'goToHome',
    ]),
  },
});
</script>

<style lang="scss" module>
$title-font-size: 28px;
$title-line-height: 28px;

.component {
  position: absolute;
  width: 100vw;
  padding: 34px 0;
  z-index: 2;
}

.content {
  width: calc(100% - 80px);
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;

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
  }
}

.location {
  font-size: 22px;
  font-weight: 100;
  color: white;

  &.dark {
    color: black;
  }
}

.vertical-spacer {
  width: 1px;
  // Design dictated 78px, relying on ratios instead.
  height: (($title-line-height * 2) + ($title-line-height * 0.9)) * 0.77;
  margin: 0 32px;
  background: white;

  &.dark {
    background: black;
  }
}

@media screen and (min-width: 720px) and (max-width: 1199px) {
  .title-wrapper {
    span {
      // Design specified 24px and 29px, relying on ratios instead.
      font-size: $title-font-size * 0.8 * 0.86;
      line-height: $title-line-height * 0.8 * 0.9;

      &.bold {
        font-size: $title-font-size * 0.8;
        line-height: $title-line-height * 0.8;
      }
    }
  }
}

@media screen and (max-width: 1199px) {
  .content {
    width: calc(100% - 80px) !important;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1919px) {
  .title-wrapper {
    span {
      // Design specified 24px and 29px, relying on ratios instead.
      font-size: $title-font-size * 0.9 * 0.86;
      line-height: $title-line-height * 0.9 * 0.9;

      &.bold {
        font-size: $title-font-size * 0.9;
        line-height: $title-line-height * 0.9;
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  .title-wrapper {
    span {
      // Design specified 24px and 29px, relying on ratios instead.
      font-size: $title-font-size * 0.86;
      line-height: $title-line-height * 0.9;

      &.bold {
        font-size: $title-font-size;
        line-height: $title-line-height;
      }
    }
  }
}
</style>
