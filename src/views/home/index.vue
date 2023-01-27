<template>
  <div :class="$style.component">
    <background :active="active" />

    <hero-text :text="hero" />
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import {
  PRESETS,
  Preset,
  PresetText,
  PRESET_TIMING,
} from './config';
import Background from './components/background.vue';
import HeroText from './components/hero-text.vue';

export default Vue.extend({
  name: 'home-view',

  components: {
    Background,
    HeroText,
  },

  data: () => ({
    presets: [] as Preset[],

    active: 0,
  }),

  created() {
    this.presets = PRESETS;

    setTimeout(this.changePreset, PRESET_TIMING);
  },

  computed: {
    hero(): PresetText[] {
      if (this.presets.length) {
        return this.presets[this.active].title;
      }
      return [];
    },
  },

  methods: {
    changePreset() {
      this.active = (this.active + 1) % this.presets.length;

      setTimeout(this.changePreset, PRESET_TIMING);
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: grid;
  grid-template-columns: 10%;
}
</style>
