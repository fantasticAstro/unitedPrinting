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
    <span :class="$style.type">
      {{ type }}
    </span>

    <span :class="$style.information">
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
// Packages
import { mapGetters } from 'vuex';
import Vue from 'vue';

/**
 * Component for a method of contact.
 */
export default Vue.extend({
  name: 'contact-method',

  props: {
    type: {
      type: String,
      default: 'Some Method',
    },
  },

  computed: {
    ...mapGetters('navigation', [
      'appBarShouldBeDark',
      'isSmaller',
      'isSmall',
      'isMedium',
      'isLarge',
      'isLarger',
    ]),
  },
});
</script>

<style lang="scss" module>
.component {
  margin-bottom: 50px;
  max-width: 175px;

  span {
    display: block;
    width: 100%;
  }
}

.small,
.smaller,
.medium {
  &.component {
    margin-bottom: 36px;
  }

  .type {
    margin-bottom: 15px;
  }
}

.type {
  font-size: 16px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: .05em;
}

.information {
  font-size: 15px;
  font-weight: 600;

  p {
    margin: 0;
  }
}
</style>
