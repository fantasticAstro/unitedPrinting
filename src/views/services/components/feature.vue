<template>
  <div :class="[
      $style.component,
      {
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
        [$style.first]: index === 0,
      },
    ]">
    <div
      v-if="!(isSmaller || isSmall)"
      :class="$style.image"
      :style="{
        'background-image': `url('./img/${feature.image}.png')`,
      }" />

    <div :class="$style.content">
      <div
        v-if="!(isSmaller || isSmall)"
        :class="$style.header">
        <span>
          {{ feature.title }}
        </span>

        <div
          v-if="!(isSmaller || isSmall || isMedium)"
          :class="$style['indicator-wrapper']">
          <div
            v-for="indicator in total"
            :key="`services-${id}-indicator-${indicator}`"
            :class="[
              $style.indicator,
              {
                [$style.active]: index + 1 === indicator,
              }
            ]" />
        </div>
      </div>

      <p
        v-for="(paragraph, placement) in feature.paragraphs"
        :key="`services-${id}-paragraph-${placement}`">
        {{ paragraph }}
      </p>

      <feature-products
        v-if="feature.products.length"
        :class="$style.products"
        :products="feature.products" />

      <v-btn
        v-if="feature.products.length"
        :class="$style.quote"
        color="black"
        width="200px"
        height="30px"
        outlined
        large
        @click="goToQuote">
        REQUEST A QUOTE
      </v-btn>

      <div
        v-if="isSmaller || isSmall"
        :class="[$style.image, $style.small]"
        :style="{
          'background-image': `url('./img/${feature.image}.png')`,
          'margin-top': '40px',
        }" />
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions, mapGetters } from 'vuex';
import Vue from 'vue';

// Local Imports
import FeatureProducts from './products.vue';

export default Vue.extend({
  name: 'services-feature',

  components: {
    FeatureProducts,
  },

  props: {
    /**
     * Used for letter keys.
     *
     * @type {string}
     * @default '*******' Random string
     */
    id: {
      type: String,
      default: (Math.random() + 1).toString(36).substring(7),
    },

    index: {
      type: Number,
      default: 0,
    },

    total: {
      type: Number,
      default: 5,
    },

    feature: {
      type: Object,
      default: () => ({}),
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
    ...mapActions('navigation', [
      'goToQuote',
    ]),

    /**
     * Resolves an image name to it's item.
     *
     * @param {string} name Name of the image file.
     */
    resolveImage(name: string) {
      // const images = require.context(
      //   '../../../assets/images',
      //   false,
      //   /\.png$/,
      // );

      // return images(`./${name}.png`);

      return `url(./img/${name}.png)`;
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: grid;
  grid-template-columns: 1fr 120px 1fr;
  grid-template-rows: auto;
  padding-top: 120px;

  &.first {
    padding-top: 60px;
  }
}

.content {
  grid-column-start: 3;
  grid-column-end: 4;

  p {
    font-size: 17px;
    line-height: 21px;
    font-weight: 500;
    max-width: 320px;

    &:last-of-type {
      margin-bottom: 27px;
    }
  }
}

.image {
  grid-column-start: 1;
  grid-column-end: 2;
  border-radius: 13px;
  width: 100%;
  height: calc((100vw - 240px - 120px) / 2 / 1.6);
  max-height: 360px;
  background-size: cover;

  &.small {
    width: 100%;
    height: calc((100vw - 72px - 100px) / 1.4);
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  span {
    font-size: 25px;
    font-weight: 600;
  }
}

.indicator-wrapper {
  display: flex;
  gap: 15px;

  .indicator {
    display: block;
    width: 15px;
    height: 15px;
    border: 1px solid black;
    border-radius: 50%;

    &.active {
      background: black;
    }
  }
}

.medium {
  &.component {
    grid-template-columns: 1fr 60px 1fr;
  }

  .content {
    p {
      max-width: 1000px;
    }
  }
}

.small,
.smaller {
  &.component {
    grid-template-columns: 80px 20px auto;
  }

  .content {
    grid-column-start: 3;
    grid-column-end: 4;

    p {
      max-width: 1000px;
      font-size: 14px;
      line-height: 15px;
    }
  }

  .products {
    grid-column-start: 0;
    grid-column-end: 2;
  }
}

.quote {
  margin-top: 40px;
}
</style>
