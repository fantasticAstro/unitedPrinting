<template>
  <div :class="$style.component">
    <v-btn
      :class="$style.button"
      color="black"
      width="234px"
      height="53px"
      outlined
      large
      @click="goToQuote">
      REQUEST A QUOTE
    </v-btn>
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions } from 'vuex';
import Vue from 'vue';

/**
 * Hero text for main page component with accented words.
 */
export default Vue.extend({
  name: 'home-request-quote-popup',

  methods: {
    ...mapActions('navigation', [
      'goToQuote',
    ]),
  },
});
</script>

<style lang="scss" module>
.component {
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.button {
  border: 2.45px solid black;
  font-size: 15px !important;
  border-radius: 7.436px;
}
</style>
