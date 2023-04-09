<template>
  <div :class="[
      $style.component,
      {
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
      },
    ]">
    <background :active="active" />

    <div :class="$style.content">
      <div :class="$style.center">
        <div :class="$style['hero-text-wrapper']">
          <hero-text
            :class="$style.hero"
            :text="hero" />

          <span
            v-if="isSmaller || isSmall"
            :class="$style['supplementary-text']">
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
      </div>

      <div
        v-if="!(isSmall || isSmaller)"
        :class="$style.features">
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
        :class="$style.year">
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
        v-if="!(isSmaller || isSmall || isLarge || isMedium)"
        :class="$style['dots-corner-top-right']"
        :height="3"
        :width="6"
        :fillRatio=".6" />

      <dots
        v-if="isSmaller || isSmall"
        :class="$style['dots-corner-top-right']"
        :height="2"
        :width="5"
        :fillRatio=".6" />

      <dots
        v-if="!(isSmaller || isSmall || isMedium)"
        :class="$style['dots-corner-bottom-right']"
        :height="2"
        :width="11"
        :fillRatio=".45" />

      <dots
        v-if="!(isSmaller || isSmall || isMedium)"
        :class="$style['dots-corner-bottom-left']"
        :height="4"
        :width="4"
        :fillRatio=".45" />

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
import RequestQuotePopup from './components/request-quote-popup.vue';

export default Vue.extend({
  name: 'home-view',

  components: {
    Background,
    HeroText,
    HomeFeature,
    Dots,
    Rings,
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
}

.center {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;
  justify-content: center;
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

.supplementary-text {
  font-size: 14px;
  line-height: 18px;
  color: white;
  margin: 18px 0;
}

.request-quote-popup {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 6;
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
}

.smaller,
.small {
  .content {
    grid-template-columns: 20px 20px auto 20px 20px;
    grid-template-rows: 117px auto 80px 40px 176px;
  }

  .center {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
  }
}

.small {

}

.medium {
  .content {
    grid-template-columns: 40px 15px 90px auto 90px 15px 40px;
  }

  .center {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .features {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 5;
    grid-row-end: 6;
  }

  .dots-corner-bottom-left {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
  }

  .dots-corner-bottom-right {
    margin-left: auto;
    grid-column-start: 4;
    grid-column-end: 7;
    grid-row-start: 5;
    grid-row-end: 6;
  }
}

.large {
  .content {
    grid-template-columns: 40px 100px 90px auto 90px 100px 40px;
    grid-template-rows: 34px 34px auto 66px 40px;
  }

  .center {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .year {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .features {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .dots-corner-bottom-left {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .dots-corner-bottom-right {
    margin-left: auto;
    grid-column-start: 4;
    grid-column-end: 7;
    grid-row-start: 4;
    grid-row-end: 5;
  }
}

.smaller,
.small {
  .dots-corner-top-right {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    align-self: flex-end;
  }
}

.medium,
.large {
  .dots-corner-top-right {
    align-self: flex-start;
    margin-left: auto;
  }
}
</style>
