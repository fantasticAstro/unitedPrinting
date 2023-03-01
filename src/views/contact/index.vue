<template>
  <div :class="$style.component">
    <div :class="$style.content">
      <div :class="$style['title-wrapper']">
        <h1>
          We would love to hear from you.
        </h1>
      </div>

      <div :class="$style['contact-info']">
        <div :class="$style['contact-column']">
          <contact-method type="Our Address">
            8200-A Arrowridge Blvd,
            Charlotte NC
            28273
          </contact-method>

          <contact-method type="Follow Us">
            linkedin.com/unitedprintingnc
          </contact-method>

          <contact-method type="CONTACT">
            Tel: (704) 525-3710
            Email: unitedprintingnc@gmail.com
          </contact-method>
        </div>

        <div :class="$style['contact-column']">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions } from 'vuex';
import Vue from 'vue';

// Local Imports
import ContactMethod from './components/method.vue';

export default Vue.extend({
  name: 'contact-view',

  components: {
    ContactMethod,
  },

  created() {
    this.handlePageLoad({ name: this.$route.name });
  },

  methods: {
    ...mapActions('navigation', [
      'handlePageLoad',
    ]),
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  padding-top: 170px;
  width: 1280px;
  height: calc(100vh - 170px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
}

.title-wrapper {
  h1 {
    font-size: 80px;
    font-weight: 600;
    text-align: center;
  }
}

.contact-info {
  display: flex;
}
</style>
