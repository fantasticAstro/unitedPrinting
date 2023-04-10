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
    <div
      v-if="showHighlight"
      :class="$style.highlight">
      <span>
        {{ highlight }}
      </span>

      <div
        v-if="isLarge || isLarger"
        :class="$style['index-indicator']">
        <div
          v-for="item in total"
          :key="`indicator-${id}-${item}`"
          :class="[
            $style.indicator,
            {
              [$style.active]: index === item - 1,
            },
          ]" />
      </div>
    </div>

    <div :class="$style.content">
      <p :class="$style.label">
        {{ label }}
      </p>

      <div :class="$style.paragraphs">
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="`paragraph-${id}-${index}`">
          {{ paragraph }}
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
  name: 'about-feature',

  props: {
    id: {
      type: String,
      default: (Math.random() + 1).toString(36).substring(7),
    },

    label: {
      type: String,
      default: 'Undefined',
    },

    paragraphs: {
      type: Array,
      default: () => ([]),
    },

    showHighlight: {
      type: Boolean,
      default: true,
    },

    highlight: {
      type: String,
      default: '',
    },

    index: {
      type: Number,
      default: 0,
    },

    total: {
      type: Number,
      default: 4,
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
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0 40px;
}

.highlight {
  display: grid;
  grid-template-columns: auto 529px 350px auto;
  grid-template-rows: auto;

  span {
    grid-column-start: 2;
    grid-column-end: 3;
    font-size: 25px;
    line-height: 28px;
    font-weight: 700;
    margin-bottom: 60px;
  }
}

.content {
  display: grid;
  grid-template-columns: auto 170px 14px 529px auto;
  grid-template-rows: auto;

  .label {
    grid-column-start: 2;
    grid-column-end: 3;
    font-size: 15px;
    line-height: 18px;
    font-weight: 700;
    margin-top: 20px;
  }

  .paragraphs {
    grid-column-start: 4;
    grid-column-end: 5;

    p {
      font-size: 17px;
      line-height: 21px;
      font-weight: 500;
      // font-family: 'Helvetica Now', sans-serif;
    }
  }
}

.index-indicator {
  display: flex;
  grid-column-start: 3;
  grid-column-end: 4;
  margin-left: auto;
  align-items: flex-start;

  .indicator {
    display: block;
    border: 1px solid black;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin-right: 10px;

    &.active {
      background: black;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
}

.smaller,
.small {
  .content {
    .label {
      margin-top: 0;
    }
  }
}

.smaller,
.small, {
  &.component {
    margin: 28px 0 8px;
  }

  .highlight,
  .content {
    grid-template-columns: 36px 66px 16px auto 36px;
  }

  .highlight {
    span {
      grid-column-start: 4;
      grid-column-end: 5;
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 24px;
    }
  }

  .content {
    .label {
      font-size: 11px;
      line-height: 13px;
      max-width: 100%;
      hyphens: auto;
      hyphenate-character: '-';
      word-wrap: break-word;
    }

    .paragraphs {
      p {
        font-size: 14px;
        line-height: 15px;
      }
    }
  }
}

.smaller,
.small {
}

.medium {
  &.component {
    max-width: calc(100vw - 20px);
    padding: 0 10px;
  }
}
</style>
