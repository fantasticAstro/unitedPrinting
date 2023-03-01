<template>
  <span
    :class="{
      [$style.component]: true,
      [$style.active]: getPage === name,
      [$style.dark]: navigationShouldBeDark || dark,
    }"
    :style="{
      'grid-row-start': index,
      'grid-row-end': index + 1,
    }"
    @click="handleClick"
    @keydown="handleClick">
    {{ title }}
  </span>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'navigation-menu-item',

  props: {
    /**
     * Title of the page.
     */
    title: {
      type: String,
      required: true,
    },

    /**
     * Name of the page.
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Whether light theme should be applied.
     */
    dark: {
      type: Boolean,
      default: false,
    },

    /**
     * Position in list.
     */
    index: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    ...mapGetters('navigation', [
      'getPage',
      'navigationShouldBeDark',
    ]),
  },

  methods: {
    /**
     * Handles component click event.
     */
    handleClick() {
      this.$emit('click', {
        name: this.name,
      });
    },
  },
});
</script>

<style lang="scss" module>
.component {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  line-height: 22px;
  margin: 18px 0;
  color: white;
  font-weight: 50;
  text-align: right;
  transition: color .3s ease;
  text-transform: uppercase;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.217);

  &:hover {
    color: #FEE037;
  }

  &.active {
    font-weight: 500;
  }

  &.dark {
    color: black;
    text-shadow: 1px 1px rgba(255, 255, 255, 0.106);
  }
}
</style>
