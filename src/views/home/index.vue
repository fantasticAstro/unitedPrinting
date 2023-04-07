<template>
  <div :class="$style.component">
    <background :active="active" />

    <div :class="{
        [$style.content]: true,
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
      }">
      <div :class="{
        [$style.center]: true,
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
      }">
        <div :class="$style['hero-text-wrapper']">
          <hero-text
            :class="{
              [$style.hero]: true,
              [$style.smaller]: isSmaller,
              [$style.small]: isSmall,
              [$style.medium]: isMedium,
              [$style.large]: isLarge,
            }"
            :text="hero" />

          <span :class="$style['supplementary-text']">
            {{ supplementaryText }}
          </span>

          <div
            v-if="isSmaller || isSmall"
            :class="$style['hero-bottom-row']">
            <v-icon
              dark
              large>
              mdi-plus-thick
            </v-icon>

            <dots
              :height="4"
              :width="4"
              :fillRatio=".6" />
          </div>
        </div>

        <rings v-if="isRings && (isLarge || isLarger)"/>

        <veteran-seal v-if="isVeteran && (isLarge || isLarger)"/>
      </div>

      <div
        v-if="!(isSmall || isSmaller)"
        :class="{
          [$style.features]: true,
          [$style.medium]: isMedium,
          [$style.large]: isLarge,
        }">
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

      <span
        v-if="!(isSmaller || isSmall)"
        :class="{
          [$style.year]: true,
          [$style.medium]: isMedium,
          [$style.large]: isLarge,
        }">
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
        v-if="!(isSmaller || isSmall)"
        :class="{
          [$style['dots-corner-top-right']]: true,
          [$style.medium]: isMedium,
          [$style.large]: isLarge,
        }"
        :height="3"
        :width="6"
        :fillRatio=".6" />

      <dots
        v-if="isSmaller || isSmall"
        :class="{
          [$style['dots-corner-top-right']]: true,
          [$style.smaller]: isSmaller,
          [$style.small]: isSmall,
        }"
        :height="2"
        :width="5"
        :fillRatio=".6" />

      <dots
        v-if="!(isSmaller || isSmall)"
        :class="{
          [$style['dots-corner-bottom-right']]: true,
          [$style.medium]: isMedium,
          [$style.large]: isLarge,
        }"
        :height="2"
        :width="11"
        :fillRatio=".6" />

      <dots
        v-if="!(isSmaller || isSmall)"
        :class="{
          [$style['dots-corner-bottom-left']]: true,
          [$style.medium]: isMedium,
          [$style.large]: isLarge,
        }"
        :height="4"
        :width="4"
        :fillRatio=".6" />

      <span
        v-if="isSmaller || isSmall"
        :class="$style.established">
        est. 1996
      </span>

      <div
        v-if="isSmaller || isSmall"
        :class="$style['request-quote-popup']">
        <request-quote-popup />
      </div>
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
import RequestQuotePopup from './components/request-quote-popup.vue';

export default Vue.extend({
  name: 'home-view',

  components: {
    Background,
    HeroText,
    HomeFeature,
    Dots,
    Rings,
    VeteranSeal,
    RequestQuotePopup,
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
      'isSmaller',
      'isSmall',
      'isMedium',
      'isLarge',
      'isLarger',
    ]),

    hero(): PresetText[] {
      if (this.presets.length) {
        return this.presets[this.active].title;
      }
      return [];
    },

    supplementaryText(): string {
      if (this.presets.length) {
        return this.presets[this.active].supplementaryText;
      }
      return '';
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

  &.smaller {
    grid-template-columns: 20px 20px auto 20px 20px;
    grid-template-rows: 117px auto 80px 40px 176px;
  }

  &.small {

  }

  &.medium {

  }

  &.large {

  }
}

.supplementary-text {
  font-size: 14px;
  line-height: 18px;
  color: white;
  margin: 18px 0;
}

.hero-text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-bottom-row {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.request-quote-popup {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 6;
}

.center {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;

  &.smaller {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
  }

  &.small {

  }

  &.medium {

  }

  &.large {

  }
}

.features {
  display: flex;
  flex-direction: row;
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 6;

  &.medium {
  }

  &.large {
  }
}

.dots-corner-top-right {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 4;

  &.smaller,
  &.small {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    align-self: flex-end;
  }

  &.medium,
  &.large {
    align-self: flex-start;
    margin-left: auto;
  }
}

.dots-corner-bottom-right {
  align-self: flex-end;
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 5;
  grid-row-end: 6;

  &.medium {
  }

  &.large {
  }
}

.dots-corner-bottom-left {
  align-self: flex-end;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 6;

  &.medium {
  }

  &.large {
  }
}

.established {
  font-size: 12px;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  align-self: flex-end;
  margin-left: auto;
  color: white;
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

  &.medium {
  }

  &.large {
  }
}
</style>
