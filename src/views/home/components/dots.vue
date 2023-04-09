<template>
  <div
    :class="[
      $style.component,
      {
        [$style.dark]: dark
      },
    ]"
    :style="{
      'width': `${fullWidth}px`,
      'height': `${fullHeight}px`,
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
        ]"
        :style="{
          '--animation-delay': index,
        }" />
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

/**
 * Dot component for home view.
 */
export default Vue.extend({
  name: 'home-dots',

  props: {
    /**
     * Id of component for keys.
     */
    id: {
      type: String,
      default: (Math.random() + 1).toString(36).substring(7),
    },

    /**
     * Width of dots in component.
     */
    width: {
      type: Number,
      default: 0,
    },

    dark: {
      type: Boolean,
      default: false,
    },

    /**
     * Height of dots in component.
     */
    height: {
      type: Number,
      default: 0,
    },

    /**
     * How filled the dots should be.
     */
    fillRatio: {
      type: Number,
      default: 0.5,
    },

    /**
     * How many dots should be yellow.
     */
    coloredRatio: {
      type: Number,
      default: 0.5,
    },
  },

  data: () => ({
    /**
     * Dot array.
     */
    map: [] as number[][],
  }),

  computed: {
    /**
     * The width as a pixel value.
     */
    fullWidth(): number {
      return (this.width * 2) * 15;
    },

    /**
     * The height of the pixel value.
     */
    fullHeight(): number {
      return (this.height * 2) * 15;
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
  --animation-delay: 0;

  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 7.5px;

  &.white {
    border: 1px solid white;
  }

  &.accent {
    animation: glow 5s ease-in-out calc(var(--animation-delay) * -1s) infinite;
    border: 1px solid #FEE137;
  }
}

.dark {
  .orb {
    &.white {
      border: 1px solid black;
    }

    &.accent {
      animation: dark-glow 5s ease-in-out calc(var(--animation-delay) * -1s) infinite;
      border: 1px solid #FEE137;
    }
  }
}

@keyframes glow {
  0% {
    border: 1px solid #FEE137;
  }
  50% {
    border: 1px solid white;
  }
  100% {
    border: 1px solid #FEE137;
  }
}

@keyframes dark-glow {
  0% {
    border: 1px solid #FEE137;
  }
  50% {
    border: 1px solid rgb(0, 0, 0);
  }
  100% {
    border: 1px solid #FEE137;
  }
}
</style>
