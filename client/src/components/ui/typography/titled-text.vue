<template>
  <div :class="$style.component">
    <h3>
      {{ title }}
    </h3>

    <p>
      {{ content }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'titled-text',

  props: {
    title: {
      type: String,
      default: 'Title',
    },

    content: {
      type: String,
      default: 'Content',
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
}
</style>
