<template>
  <div>
    <div
      :class="$style.component"
      :style="{
        'background-image': `url(${first})`,
        'z-index': toggle ? -1 : -2,
        'opacity': toggle ? 1 : 0,
      }" />

    <div
      :class="$style.component"
      :style="{
        'background-image': `url(${second})`,
        'z-index': toggle ? -2 : -1,
        'opacity': toggle ? 0 : 1,
      }" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home-background',

  props: {
    first: {
      type: String,
      default: '',
    },

    second: {
      type: String,
      default: '',
    },

    toggle: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    showFirst: true,

    showSecond: false,
  }),

  watch: {
    toggle() {
      this.toggleInNew();
    },
  },

  methods: {
    toggleInNew() {
      if (!this.showFirst) {
        this.showFirst = true;
      } else {
        this.showSecond = false;
      }

      setTimeout(this.toggleOutOld, 1000);
    },

    toggleOutOld() {
      if (!this.toggle) {
        this.showFirst = false;
      } else {
        this.showSecond = true;
      }
    },
  },
});
</script>

<style lang="scss" module>
.component {
  position: fixed;
  left: 0;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  z-index: 0;
  transition: opacity 1s ease-in-out;
}
</style>
