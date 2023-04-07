<template>
  <v-btn
    :class="$style.component"
    :color="buttonColor"
    outlined
    dark
    @click="goToQuote">
    Menu
  </v-btn>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'app-bar-quote-button',

  computed: {
    ...mapGetters('navigation', [
      'appBarShouldBeDark',
      'isSmaller',
      'isSmall',
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

    /**
     * Whether the button should condense.
     *
     * @type {boolean}
     */
    condense(): boolean {
      return this.isSmaller || this.isSmall;
    },
  },
});
</script>

<style lang="scss" module>
.component {
  align-self: flex-start;
  width: 76px;
  height: 66px;
  margin-left: 24px;
  font-size: 12px !important;
  padding: 4px 4px !important;
}

@media screen and (min-width: 720px) {
  .component {
    padding: 19px 32px !important;
  }
}
</style>

<style>
.v-btn__content {
  line-height: 12px !important;
}
</style>
