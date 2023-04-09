<template>
  <div :class="$style.component">
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
