<template>
  <div :class="$style.component">
    <div :class="$style.content">
      <div :class="$style['title-wrapper']">
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

      <span :class="{
          [$style.dark]: appBarShouldBeDark,
          [$style['vertical-spacer']]: true,
        }" />

      <span
        :class="{
          [$style.dark]: appBarShouldBeDark,
          [$style.location]: true,
        }">
        Charlotte, NC
      </span>

      <v-spacer :class="{
          [$style.dark]: appBarShouldBeDark,
        }"/>

      <v-btn
        :color="buttonColor"
        dark
        dense
        outlined
        @click="goToQuote">
        Request a Quote
      </v-btn>
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

export default Vue.extend({
  name: 'app-bar',

  methods: {
    ...mapActions('navigation', [
      'goToQuote',
    ]),
  },

  computed: {
    ...mapGetters('navigation', [
      'appBarShouldBeDark',
    ]),

    /**
     * Color of the button.
     *
     * @type {string}
     */
    buttonColor(): string {
      if (this.appBarShouldBeDark) {
        return '#FEE037';
      }
      return '#FFFFFF';
    },
  },
});
</script>

<style lang="scss" module>
$title-font-size: 28px;
$title-line-height: 35px;

.component {
  position: absolute;
  width: 100vw;
  padding: 34px 0;
  z-index: 2;
}

.content {
  max-width: 1440px;
  width: calc(100% - 2rem);
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    // Design specified 24px and 29px, relying on ratios instead.
    font-size: $title-font-size * 0.86;
    line-height: $title-line-height * 0.9;
    color: white;
    font-weight: lighter;

    &.dark {
      color: black;
    }

    &.bold {
      font-size: $title-font-size;
      line-height: $title-line-height;
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

.vertical-spacer,
.location {
  display: none;
}

@media screen and (min-width: 400px) {
  .location,
  .vertical-spacer {
    display: block;
  }
}

@media screen and (min-width: 800px) {
  .location,
  .vertical-spacer {
    display: block;
  }
}
</style>
