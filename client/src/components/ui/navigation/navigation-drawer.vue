<template>
  <div :class="$style.component">
    <span
      :class="{[$style.active]: getCurrentPage === 'Home'}"
      @click="goToHome">
      HOME
    </span>

    <span
      :class="{[$style.active]: getCurrentPage === 'About'}"
      @click="goToAbout">
      ABOUT
    </span>

    <span
      :class="{[$style.active]: getCurrentPage === 'Services'}"
      @click="goToServices">
      SERVICES
    </span>

    <span
      :class="{[$style.active]: getCurrentPage === 'Contact' || getCurrentPage === 'Quote'}"
      @click="goToContact">
      CONTACT
    </span>

    <span :class="$style.cursor"/>
  </div>
</template>

<script lang="ts">
import {
  mapActions,
  mapGetters,
} from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'navigation-drawer',

  computed: {
    ...mapGetters('navigation', [
      'getCurrentPage',
    ]),
  },

  methods: {
    ...mapActions('navigation', [
      'goToHome',
      'goToAbout',
      'goToServices',
      'goToContact',
    ]),
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 0;
  height: 100vh;
  justify-content: center;
  right: 0;
  z-index: 1;

  span {
    color: white;
    font-size: 0.8rem;
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.051);

    :last-of-type {
      margin-bottom: 0rem;
    }

    &:hover {
      color: rgba(255, 255, 255, 0.714);
    }

    &.active {
      font-weight: 800;
    }
  }
}

.cursor {
  display: block;
  height: 1.2rem;
  width: 5rem;
  border: 1px solid #FEE137;
  border-radius: 50%;
}
</style>
