<template>
  <div :class="$style.component">
    <div :class="$style.center">
      <div :class="$style['title-wrapper']">
        <h1 :class="$style.first">
          We would love
        </h1>

        <h1 :class="$style.second">
          to hear from
        </h1>

        <h1 :class="$style.third">
          you.
        </h1>
      </div>

      <div :class="$style.column">
        <contact-method type="OUR ADDRESS">
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
            Tel: (704) 525-3710
            Email: unitedprintingnc@gmail.com
          </p>
        </contact-method>
      </div>
    </div>

    <span
      v-if="!(isSmaller || isSmall)"
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

    <div :class="$style['services-link']">
      <p :class="$style.bold">
        Want to learn more about printing?
      </p>

      <p
        @keydown="goToServices"
        @click="goToServices">
        Check out our services page for more information <v-icon>mdi-chevron-right</v-icon>
      </p>
    </div>

    <dots
      v-if="!(isSmaller || isSmall || isMedium)"
      :dark="true"
      :class="$style['dots-corner-bottom-right']"
      :height="6"
      :width="7"
      :fillRatio=".6" />
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions } from 'vuex';
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
  grid-template-rows: 141px auto 43px 57px;
  height: 100vh;

  p {
    margin: 0;
    word-wrap:break-word;
  }
}

.center {
  display: grid;
  grid-template-columns: 2.3fr 40px 1fr 40px 1fr;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
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
  grid-row-start: 2;
  grid-row-end: 4;
  align-self: flex-end;
}

.services-link {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
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
</style>
