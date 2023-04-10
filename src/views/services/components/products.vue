<template>
  <div :class="[
      $style.component,
      {
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
        [$style.active]: active,
      },
    ]">
    <div :class="$style.line" />

    <div
      :class="$style.header"
      @keydown="toggle"
      @click="toggle">
      <span :class="$style.button">
        Products
      </span>

      <v-icon
        :class="[
          $style.icon,
          {
            [$style.active]: active,
          }
        ]"
        color="black">
        mdi-chevron-down
      </v-icon>
    </div>

    <div
      v-if="active"
      :class="$style['items-wrapper']">
      <div :class="$style.items">
        <p
          v-for="(product, index) in products"
          :key="`services-feature-product-${id}-${index}`">
          {{  product }}
        </p>

        <p :class="$style.bold">
          + much more!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'services-products',

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

    products: {
      type: Array,
      default: () => ([]),
    },
  },

  data: () => ({
    active: false,
  }),

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
    toggle() {
      this.active = !this.active;
    },
  },
});
</script>

<style lang="scss" module>
.component {
  position: relative;
  padding-left: 0;
  transition: padding-left .4s ease-in-out;

  &.active {
    padding-left: 40px;
  }
}

.line {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  background: black;
  width: 1.3px;
  height: 0;
  transition: height .3s ease-in-out;
}

.active {
  .line {
    height: 100%;
  }
}

.button {
  font-size: 17px;
  line-height: 20.4px;
  font-weight: 600;
}

.header {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.icon {
  transition: transform .3s ease-in-out;
  margin-left: 4px;

  &.active {
    transform: rotate(180deg);
  }
}

.items-wrapper {
  overflow: hidden;
}

.items {
  padding-top: 20px;
  animation: slide-in .3s ease-in-out;

  p {
    font-size: 17;
    line-height: 20.339px;
    margin: 0;

    &:last-of-type {
      margin: 0;
    }

    &.bold {
      color: #FEE137;
      margin: 0;
    }
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
