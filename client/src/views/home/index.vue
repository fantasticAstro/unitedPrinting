<template>
  <div :class="$style.component">
    <home-background
      :first="firstBackground"
      :second="secondBackground"
      :toggle="state === 0" />

    <div :class="$style.content">
      <div />

      <div :class="$style['flex-end']">
        <orbs
          :width="6"
          :height="4" />
      </div>

      <div />

      <div :class="$style['flex-center']">
        <p>
          1
        </p>

        <p>
          9
        </p>

        <p>
          9
        </p>

        <p>
          6
        </p>
      </div>

      <div :class="$style['hero-wrapper']">
        <home-hero-text :text="title" />
      </div>

      <div />

      <div :class="$style['flex-start']">
        <orbs
          :width="4"
          :height="4" />
      </div>

      <div :class="$style['tagline-wrapper']">
        <span :class="$style.tagline">
          <p :class="$style.bold">
            Serving clients
          </p>

          Across the nation
        </span>

        <span :class="$style.tagline">
          <p :class="$style.bold">
            Veteran owned
          </p>

          and operated
        </span>
      </div>

      <div :class="$style['flex-start']">
        <orbs
          :width="12"
          :height="2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Types
import { PresetHeroWord } from '@/types';

// Local Imports
import { HOME_PRESETS } from '@/config';
import Orbs from '@/components/ui/accent/orbs.vue';
import HomeHeroText from './components/home-hero-text.vue';
import HomeBackground from './components/home-background.vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'home-view',

  components: {
    Orbs,
    HomeBackground,
    HomeHeroText,
  },

  data: () => ({
    preset: 0,

    state: 0,

    firstBackground: '',

    secondBackground: '',

    title: [] as PresetHeroWord[],

    interval: 0,
  }),

  created() {
    this.handlePageLoad({ name: this.$route.name });

    this.preset = Math.floor(Math.random() * HOME_PRESETS.length);

    this.title = HOME_PRESETS[this.preset].title;

    this.firstBackground = `./img/backgrounds/${HOME_PRESETS[this.preset].background}`;
    this.secondBackground = `./img/backgrounds/${HOME_PRESETS[(this.preset + 1) % HOME_PRESETS.length].background}`;

    this.interval = setInterval(() => {
      this.changePreset();
    }, 5000);
  },

  methods: {
    ...mapActions('navigation', [
      'handlePageLoad',
    ]),

    changePreset() {
      this.preset = (this.preset + 1) % HOME_PRESETS.length;
      this.state = (this.state + 1) % 2;

      this.title = HOME_PRESETS[this.preset].title;

      setTimeout(this.setBackground, 1000);
    },

    setBackground() {
      const newBackground = `./img/backgrounds/${HOME_PRESETS[this.preset].background}`;

      if (this.state === 0) {
        this.secondBackground = newBackground;
      } else {
        this.firstBackground = newBackground;
      }
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: block;
  height: calc(100vh - 2rem);
  position: relative;
  z-index: 0;
  color: white;
}

.content {
  display: grid;
  grid-template-columns: 15rem 1fr 15rem;
  grid-template-rows: 150px 1fr 150px;
  z-index: 1;
  height: 100%;
}

.flex-start {
  display: flex;
  justify-content: start;
  align-items: center;
}

.flex-end {
  display: flex;
  justify-content: end;
  align-items: center;
}

.tagline {
  color: white;

  .bold {
    font-weight: bold;
    margin: 0;
  }
}

.tagline-wrapper {
  display: flex;
  align-items: center;

  span:first-of-type {
    margin-right: 2rem;
  }
}

.hero-wrapper {
  margin: auto auto;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }
}
</style>
