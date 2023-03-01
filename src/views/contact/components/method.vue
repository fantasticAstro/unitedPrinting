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

  span {
    display: block;
  }
}

.type {
  font-size: 23px;
  line-height: 28px;
  margin-bottom: 28px;
  text-transform: uppercase;
  font-weight: 600;
}

.information {
  font-size: 23px;
  line-height: 28px;
}
</style>
