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
    <v-icon
      :class="$style.icon"
      color="black"
      @click="scrollToFirst">
      mdi-chevron-left
    </v-icon>

    <div :class="[
        $style.content,
        'navigational-horizontal-menu',
      ]">
      <p
        v-for="(feature, number) in features"
        :key="`services-feature-navigation-${number}`"
        :class="{
          [$style.active]: index === number,
        }"
        :ref="`item-${number}`"
        @keydown="goTo(number)"
        @click="goTo(number)">
        {{  feature.label }}
      </p>
    </div>

    <v-icon
      :class="$style.icon"
      color="black"
      @click="scrollToLast">
      mdi-chevron-right
    </v-icon>
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'services-navigation',

  props: {
    index: {
      type: Number,
      default: 0,
    },

    features: {
      type: Array,
      default: () => ([]),
    },
  },

  computed: {
    ...mapGetters('navigation', [
      'isSmaller',
      'isSmall',
      'isMedium',
      'isLarge',
      'isLarger',
    ]),
  },

  methods: {
    scrollToLast() {
      const content = document.querySelector('.navigational-horizontal-menu');

      if (content) {
        content.scrollBy({
          top: 0,
          left: 200,
          behavior: 'smooth',
        });
      }
    },

    scrollToFirst() {
      const content = document.querySelector('.navigational-horizontal-menu');

      if (content) {
        content.scrollBy({
          top: 0,
          left: -200,
          behavior: 'smooth',
        });
      }
    },

    goTo(index: number) {
      this.$emit('scrollTo', {
        index,
      });
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  align-items: center;
  width: 100%;
  overflow: auto;
  padding: 0 !important;
}

.component::-webkit-scrollbar,
.content::-webkit-scrollbar {
  width: 0px;
}

.icon {
  cursor: pointer;
  margin: 0px 10px;

  &:hover {
    transform: scale(1.1);
  }
}

.content {
  width: calc(100% - 48px);
  display: flex;
  overflow: auto;
  padding-top: 20px !important;

  p {
    font-size: 15;
    font-weight: 600;
    color: #acaeb1;
    cursor: pointer;
    transition: color .3s ease-in-out;
    white-space: nowrap;
    margin: 0 120px 0 0;

    &:last-of-type {
      margin: 0;
    }

    &.active {
      color: black;
    }

    &:hover {
      color: black;
    }
  }
}
</style>
