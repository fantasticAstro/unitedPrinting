<template>
  <div :class="$style.component">
    <full-width-image src="./img/blob-background.jpg"/>
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions } from 'vuex';
import Vue from 'vue';

// Local Imports
import FullWidthImage from '@/components/ui/images/full-width-image.vue';

export default Vue.extend({
  name: 'services-view',

  components: {
    FullWidthImage,
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
}
</style>
