<template>
  <div :class="$style.component">
    <span
      v-for="(word, index) in text"
      :key="`home-hero-text-${index}`"
      :class="[
        $style.text,
        {
          [$style.accent]: word.accent,
        }
      ]">
      {{ word.text }}
    </span>
  </div>
</template>

<script lang="ts">
// Packages
import Vue, {
  h as createElement,
  VNode,
} from 'vue';

// Types
import { Preset, PresetHeroWord } from '@/types';

export default Vue.extend({
  name: 'home-hero-text',

  props: {
    text: {
      type: Array,
      default: [] as Preset[],
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;

  span {
    font-size: 4rem;
    font-weight: bolder;
    color: white;
    margin-right: 1rem;

    &.accent {
      color: #FEE137;
    }
  }
}
</style>
