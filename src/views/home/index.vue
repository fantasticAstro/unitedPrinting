<template>
  <div :class="$style.component">
    <background :active="active" />

    <div :class="$style.content">
      <hero-text
        :class="$style.hero"
        :text="hero" />

      <div :class="$style.features">
        <home-feature :class="$style.feature">
          <template v-slot:top>
            Serving clients
          </template>

          <template v-slot:bottom>
            across the nation
          </template>
        </home-feature>

        <home-feature :class="$style.feature">
          <template v-slot:top>
            Veteran owned
          </template>

          <template v-slot:bottom>
            and operated
          </template>
        </home-feature>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions } from 'vuex';
import Vue from 'vue';

// Local Imports
import {
  PRESETS,
  Preset,
  PresetText,
  PRESET_TIMING,
} from '@/views/home/config';
import Background from '@/views/home/components/background.vue';
import HeroText from '@/views/home/components/hero-text.vue';
import HomeFeature from '@/views/home/components/feature.vue';

export default Vue.extend({
  name: 'home-view',

  components: {
    Background,
    HeroText,
    HomeFeature,
  },

  data: () => ({
    presets: [] as Preset[],

    active: 0,
  }),

  created() {
    this.handlePageLoad({ name: this.$route.name });
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
    ...mapActions('navigation', [
      'handlePageLoad',
    ]),

    changePreset() {
      this.active = (this.active + 1) % this.presets.length;

      setTimeout(this.changePreset, PRESET_TIMING);
    },
  },
});
</script>

<style lang="scss" module>
.component {
  position: relative;
}

.content {
  display: grid;
  grid-template-columns: 68px 126px 278px auto 278px 126px 68px;
  grid-template-rows: 68px 120px auto 120px 68px;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100vw;
  z-index: 1;
}

.hero {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
}

.features {
  display: flex;
  flex-direction: row;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
}
</style>
