<template>
  <div :class="$style.component">
    <background :active="active" />

    <div :class="$style.content">
      <div :class="$style.center">
        <hero-text
          :class="$style.hero"
          :text="hero" />

        <rings v-if="isRings && (isLarge || isLarger)"/>

        <veteran-seal v-if="isVeteran && (isLarge || isLarger)"/>
      </div>

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

      <span :class="$style.year">
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

      <dots
        :class="$style['dots-corner-top-right']"
        :height="4"
        :width="6"
        :fillRatio=".6" />

      <dots
        :class="$style['dots-corner-bottom-right']"
        :height="2"
        :width="11"
        :fillRatio=".6" />

      <dots
        :class="$style['dots-corner-bottom-left']"
        :height="4"
        :width="4"
        :fillRatio=".6" />
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
import {
  PRESETS,
  Preset,
  PresetText,
  PRESET_TIMING,
} from '@/views/home/config';
import Background from '@/views/home/components/background.vue';
import HeroText from '@/views/home/components/hero-text.vue';
import HomeFeature from '@/views/home/components/feature.vue';
import Dots from './components/dots.vue';
import Rings from './components/rings.vue';
import VeteranSeal from './components/veteran-seal.vue';

export default Vue.extend({
  name: 'home-view',

  components: {
    Background,
    HeroText,
    HomeFeature,
    Dots,
    Rings,
    VeteranSeal,
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
    ...mapGetters('navigation', [
      'isLarge',
      'isLarger',
    ]),

    hero(): PresetText[] {
      if (this.presets.length) {
        return this.presets[this.active].title;
      }
      return [];
    },

    isRings(): boolean {
      if (this.presets.length) {
        return this.presets[this.active].rings;
      }
      return false;
    },

    isVeteran(): boolean {
      if (this.presets.length) {
        return this.presets[this.active].veteran;
      }
      return false;
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
  grid-template-columns: 68px 126px 139px 139px auto 139px 139px 126px 68px;
  grid-template-rows: 34px 34px 120px auto 120px 68px;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100vw;
  z-index: 1;
}

.center {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;
}

.features {
  display: flex;
  flex-direction: row;
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 6;
}

.dots-corner-top-right {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 4;
  align-self: flex-start;
  margin-left: auto;
}

.dots-corner-bottom-right {
  align-self: flex-end;
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 5;
  grid-row-end: 6;
}

.dots-corner-bottom-left {
  align-self: flex-end;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 6;
}

.year {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;

  span {
    color: white;
    font-size: 23px;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.168);
  }
}
</style>
