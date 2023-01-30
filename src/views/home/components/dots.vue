<template>
  <div
    :class="$style.component"
    :style="{
      'width': `${fullWidth}rem`,
      'height': `${fullHeight}rem`,
    }">
    <div
      v-for="(row, rowIndex) in map"
      :key="`orb-${id}-row-${rowIndex}`"
      :class="$style.row">
      <div
        v-for="(orb, index) in row"
        :key="`orb-${id}-row-${rowIndex}-${index}`"
        :class="[
          $style.orb,
          {
            [$style.white]: orb === 1,
            [$style.accent]: orb === 2,
          },
        ]" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home-dots',

  props: {
    id: {
      type: String,
      default: (Math.random() + 1).toString(36).substring(7),
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    fillRatio: {
      type: Number,
      default: 0.5,
    },
    coloredRatio: {
      type: Number,
      default: 0.5,
    },
  },
  data: () => ({
    map: [] as number[][],
  }),
  computed: {
    fullWidth(): number {
      return (this.width * 2) + 1;
    },
    fullHeight(): number {
      return (this.height * 2) + 1;
    },
  },
  created() {
    for (let i = 0; i < this.height; i += 1) {
      this.map.push([]);
      for (let j = 0; j < this.width; j += 1) {
        if (Math.random() < this.fillRatio) {
          if (Math.random() < this.coloredRatio) {
            this.map[i].push(2);
          } else {
            this.map[i].push(1);
          }
        } else {
          this.map[i].push(0);
        }
      }
    }
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.row {
  display: flex;
  justify-content: space-around;
}
.orb {
  width: .75rem;
  height: .75rem;
  border-radius: 50%;
  margin: .375rem;
  &.white {
    border: 1px solid white;
  }
  &.accent {
    border: 1px solid #FEE137;
  }
}
</style>
