<template>
  <v-btn
    :class="$style.component"
    :color="buttonColor"
    dark
    outlined
    @click="goToQuote">
    Request a Quote
  </v-btn>
</template>

<script lang="ts">
// Packages
import {
  mapActions,
  mapGetters,
} from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'app-bar-quote-button',

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
.component {
  align-self: flex-start;
  width: 190px;
  height: 66px;
  z-index: 1;
}
</style>

<style>
.v-btn {
  font-size: 12px !important;
  padding: 19px 32px !important;
}

.v-btn__content {
  line-height: 12px !important;
}
</style>
