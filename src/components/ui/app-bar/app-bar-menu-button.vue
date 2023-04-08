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
    <v-btn
      :class="$style.button"
      :color="buttonColor"
      outlined
      dark
      @click="activate">
      Menu
    </v-btn>

    <div
      v-if="active"
      :class="$style.filter">
      <div
        v-click-outside="toggleActive"
        :class="$style.menu">
        <span
          :class="{
            [$style.active]: getPage === 'home',
          }"
          :style="{
            '--index': 0,
          }"
          @keydown="goToContact"
          @click="handleClick('home')">
          Home
        </span>

        <span
          :class="{
            [$style.active]: getPage === 'about',
          }"
          :style="{
            '--index': 1,
          }"
          @keydown="goToContact"
          @click="handleClick('about')">
          About
        </span>

        <span
          :class="{
            [$style.active]: getPage === 'services',
          }"
          :style="{
            '--index': 2,
          }"
          @keydown="goToContact"
          @click="handleClick('services')">
          Services
        </span>

        <span
          :class="{
            [$style.active]: getPage === 'contact',
          }"
          :style="{
            '--index': 3,
          }"
          @keydown="goToContact"
          @click="handleClick('contact')">
          Contact Us
        </span>

        <span
          :class="{
            [$style.active]: getPage === 'quote',
          }"
          :style="{
            '--index': 4,
          }"
          @keydown="goToContact"
          @click="handleClick('quote')">
          Request a Quote
        </span>
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

export default Vue.extend({
  name: 'app-bar-quote-button',

  data: () => ({
    active: false,
  }),

  computed: {
    ...mapGetters('navigation', [
      'getPage',
      'appBarShouldBeDark',
      'isSmaller',
      'isSmall',
      'isMedium',
      'isLarge',
      'isLarger',
    ]),

    /**
     * Color of the button.
     *
     * @type {string}
     */
    buttonColor(): string {
      if (this.appBarShouldBeDark) {
        return '#000000';
      }
      return '#FFFFFF';
    },
  },

  methods: {
    ...mapActions('navigation', [
      'goToHome',
      'goToAbout',
      'goToServices',
      'goToContact',
      'goToQuote',
    ]),

    activate() {
      if (!this.active) {
        this.active = true;
      }
    },

    toggleActive() {
      this.active = !this.active;
    },

    /**
     * Handles button click.
     * @param {Record<string, string>} args Event arguments.
     * @param {string} args.name Page name.
     */
    handleClick(name: string) {
      switch (name) {
        case 'contact':
          this.goToContact();
          break;
        case 'about':
          this.goToAbout();
          break;
        case 'services':
          this.goToServices();
          break;
        case 'quote':
          this.goToQuote();
          break;
        default:
          this.goToHome();
      }
      this.active = false;
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
}

.button {
  align-self: flex-start;
  width: 76px;
  height: 66px;
  margin-left: 24px;
  font-size: 12px !important;
  padding: 4px 4px !important;
  z-index: 1;
}

.filter {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 60px;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 3;
  animation: fade-in .4s ease-in-out 0s;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  span {
    --index: 0;
    color: white;
    font-size: 60px;
    line-height: 64px;
    transition: color .3s ease-in-out, transform .2s ease-in-out;
    font-weight: bolder;
    text-align: right;
    cursor: pointer;
    animation: slide-in .3s ease-in-out calc(var(--index) * .08s), hide calc(var(--index) * .08s);

    &:hover {
      color: #fff3b1;
      transform: translateX(-10px);
    }

    &.active {
      color: #FEE037;
    }

    &:last-of-type {
      margin-top: 40px;
    }
  }
}

.smaller {
  .menu {
    span {
      font-size: 40px;
      line-height: 42px;
    }
  }

  .filter {
    padding: 40px;
  }
}

@media screen and (min-width: 720px) {
  .button {
    padding: 19px 32px !important;
  }
}

@keyframes fade-in {
  0% {
    background: rgba(0, 0, 0, 0);
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
}

@keyframes hide {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>

<style>
.v-btn__content {
  line-height: 12px !important;
}
</style>
