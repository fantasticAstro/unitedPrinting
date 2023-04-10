<template>
  <div :class="[
      $style.component,
      {
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
        [$style.larger]: isLarger,
      },
    ]">
    <div :class="$style.center">
      <div :class="$style['title-wrapper']">
        <h1 :class="$style.first">
          We would <i>love</i>
        </h1>

        <h1 :class="$style.second">
          to hear from
        </h1>

        <h1 :class="$style.third">
          <i>you</i>.
        </h1>
      </div>

      <div :class="$style.column">
        <contact-method type="COMPANY ADDRESS">
          <p>
            8200-A Arrowridge Blvd,
          </p>

          <p>
            Charlotte NC
          </p>

          <p>
            28273
          </p>
        </contact-method>

        <contact-method type="FOLLOW US">
          <p
            style="cursor:pointer"
            @keydown="goToLinkedIn"
            @click="goToLinkedIn">
            linkedin.com/unitedprintingnc
          </p>
        </contact-method>
      </div>

      <div :class="$style.column">
        <contact-method type="CONTACT">
          <p>
            Office: (704) 525-3710
            Email: info@unitedprintingnc.com
          </p>
        </contact-method>

        <div
          v-if="isSmaller || isSmall || isMedium"
          :class="$style['services-link-2']">
          <p :class="$style.bold">
            Want to learn more about printing?
          </p>

          <p
            @keydown="goToServices"
            @click="goToServices">
            Check out our services page for more information <v-icon>mdi-chevron-right</v-icon>
          </p>
        </div>
      </div>
    </div>

    <div
      :class="[
        $style.background,
        $style.main,
      ]" />

    <span
      v-if="!(isSmaller || isSmall || isMedium)"
      :class="$style.year">
      <span>
        1
      </span>

      <span>
        9
      </span>

      <span>
        9
      </span>

      <span>
        6
      </span>
    </span>

    <div
      v-if="!(isSmaller || isSmall || isMedium)"
      :class="$style['services-link']">
      <p :class="$style.bold">
        Want to learn more about printing?
      </p>

      <p
        @keydown="goToServices"
        @click="goToServices">
        Check out our Services page for more information <v-icon>mdi-chevron-right</v-icon>
      </p>
    </div>

    <dots
      v-if="!(isSmaller || isSmall || isMedium)"
      :dark="true"
      :class="$style['dots-corner-bottom-right']"
      :height="6"
      :width="7"
      :fillRatio=".4" />

    <dots
      v-if="isSmall || isMedium"
      :dark="true"
      :class="$style['dots-corner-bottom-left']"
      :height="3"
      :width="6"
      :fillRatio=".4" />

    <dots
      v-if="isSmall || isMedium"
      :dark="true"
      :class="$style['dots-corner-top-right']"
      :height="3"
      :width="5"
      :fillRatio=".4" />

    <div
      v-if="isSmaller || isSmall || isMedium"
      :class="[
        $style.background,
        $style.second,
      ]" />

    <div
      v-if="isSmaller || isSmall || isMedium"
      :class="[
        $style.background,
        $style.third,
      ]" />

    <div
      v-if="!(isSmaller || isSmall || isMedium)"
      :class="[
        $style['background-wrapper'],
        $style.bottom
      ]">
      <div :class="$style.background" />

      <div :class="$style.background" />
    </div>

    <div
      v-if="!(isSmaller || isSmall || isMedium)"
      :class="[
        $style['background-wrapper'],
        $style.right
      ]">
      <div :class="$style.background" />

      <div :class="$style.background" />
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import {
  mapActions,
  mapGetters,
} from 'vuex';
import Vue from 'vue';

// Local Imports
import ContactMethod from './components/method.vue';
import Dots from '../home/components/dots.vue';

export default Vue.extend({
  name: 'contact-view',

  components: {
    ContactMethod,
    Dots,
  },

  created() {
    this.handlePageLoad({ name: this.$route.name });
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

  methods: {
    ...mapActions('navigation', [
      'handlePageLoad',
      'goToServices',
    ]),

    goToLinkedIn() {
      window.location.href = 'https://www.linkedin.com/company/unitedprinting/';
    },
  },
});
</script>

<style lang="scss" module>
.component {
  display: grid;
  grid-template-columns: 36px 16px 64px auto 64px 16px 36px;
  grid-template-rows: 141px auto 44px 43px 57px;
  height: 100vh;
  overflow: hidden;

  p {
    margin: 0;
    word-wrap:break-word;
  }
}

.large,
.larger {
  .center {
    max-height: 600px;
  }
}

.center {
  display: grid;
  grid-template-columns: 2.3fr 40px 1fr 40px 1fr;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
}

.larger,
.large {
  .center {
    grid-template-columns: 2.3fr 80px 1fr 40px 1fr;
  }

  .column {
    padding-top: 120px;
  }
}

.title-wrapper {
  grid-column-start: 1;
  grid-column-end: 2;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 57.6px;
    line-height: 56.16px;
    font-weight: 600;
    text-align: center;
    letter-spacing: .01em;

    &.first {
      text-align: left;
    }

    &.second {
      text-align: right;
    }

    &.third {
      text-align: center;
    }
  }
}

.column {
  grid-column-start: 3;
  grid-column-end: 4;
  padding-top: 60px;

  &:last-of-type {
    grid-column-start: 5;
    grid-column-end: 6;
  }
}

.contact-info {
  display: flex;
}

.year {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  padding-bottom: 20vh;

  span {
    color: black;
    font-size: 15px;
    line-height: 18px;
  }
}

.dots-corner-bottom-right {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  align-self: flex-end;
}

.services-link {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-left: auto;
  z-index: 2;

  p {
    color: black;

    &.bold {
      font-weight: 700;
    }

    &:last-of-type {
      cursor: pointer;
    }
  }
}

.background-wrapper {
  display: flex;
  gap: 40px;
  z-index: 0;

  &.bottom {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  &.right {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
    margin: auto 0 0;
    width: 100vw;
    transform: translateX(-20vw);
  }

  .background {
    width: 220px;
    height: 120px;
  }
}

.background {
  background-image: url('../../../public/img/texture.jpg');
  background-size: cover;
  opacity: .11;
  border-radius: 12px;
  z-index: 0;

  &.main {
    margin-top: 40px;
    margin-left: 10vw;
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    height: 100%;
    width: 100%;
    max-width: 50vw;
    max-height: 50vh;
  }
}

.medium {
  &.component {
    grid-template-columns: 32px 18px auto 18px 32px;
  }
}

.smaller,
.small {
  &.component {
    grid-template-columns: 18px 18px auto 18px 18px;
  }
}

.smaller,
.small,
.medium {
  &.component {
    max-width: 100vw;
    grid-template-rows: 144px auto;
    overflow: visible;
  }

  .services-link-2 {
    z-index: 2;
    margin-left: auto;

    p {
      color: black;

      &.bold {
        font-weight: 700;
      }

      &:last-of-type {
        cursor: pointer;
      }
    }
  }

  .column {
    padding-top: 0;
  }

  .title-wrapper {
    margin-top: 40px;
    margin-bottom: 54px;
    margin-left: auto;
    margin-right: auto;
  }

  .center {
    display: flex;
    flex-direction: column;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    width: calc(100vw - 36px - 36px);
    padding-bottom: 120px;
    max-height: auto;
  }

  .background {
    &.main {
      margin-top: 0;
      margin-left: 0;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
      height: 300px;
      width: 100vw;
      max-width: 100vw;
    }

    &.second {
      margin-top: 438px;
      margin-left: auto;
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;
      height: 108px;
      width: 188px;
      max-width: 100vw;
    }

    &.third {
      margin-top: calc(144px + 438px + 108px);
      margin-left: auto;
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;
      height: 108px;
      width: 188px;
      max-width: 100vw;
    }
  }

  .dots-corner-bottom-left {
    margin-top: calc(144px + 438px + 108px + 100px);
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .dots-corner-top-right {
    margin-top: calc(300px + 20px);
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    margin-left: auto;
  }
}

.smaller,
.small {
  .title-wrapper {
    h1 {
      font-size: 40.3px;
      line-height: 39.312px;
      max-width: 360px;
    }
  }
}
</style>
