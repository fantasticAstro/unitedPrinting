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
    <services-header />

    <div
      :class="$style.content"
      ref="container">
      <services-title />

      <services-navigation
        :features="features"
        :index="index"
        @scrollTo="scrollTo" />

      <services-feature
        v-for="(feature, index) in features"
        :key="`services-feature-${index}`"
        :class="`feature-${index}`"
        :total="features.length"
        :index="index"
        :feature="feature" />
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
import {
  FEATURES,
  Feature,
} from './config';
import ServicesHeader from './components/header.vue';
import ServicesTitle from './components/title.vue';
import ServicesFeature from './components/feature.vue';
import ServicesNavigation from './components/navigation.vue';

export default Vue.extend({
  name: 'services-view',

  components: {
    ServicesHeader,
    ServicesTitle,
    ServicesFeature,
    ServicesNavigation,
  },

  data: () => ({
    features: [] as Feature[],
  }),

  computed: {
    ...mapGetters('navigation', [
      'isSmaller',
      'isSmall',
      'isMedium',
      'isLarge',
      'isLarger',
    ]),
  },

  created() {
    this.handlePageLoad({ name: this.$route.name });
    this.features = FEATURES;
  },

  methods: {
    ...mapActions('navigation', [
      'handlePageLoad',
    ]),

    scrollTo(payload: any) {
      const content = document.querySelector(`.feature-${payload.index}`);

      content?.scrollIntoView({ behavior: 'smooth' });
    },
  },
});
</script>

<style lang="scss" module>
.component {
  padding-bottom: 60px;
}

.content {
  width: calc(100% - 240px);
  max-width: 1000px;
  margin: 40px auto;
}

.smaller,
.small,
.medium {
  .content {
    width: calc(100% - 72px);
    margin: 18px auto;
  }
}
</style>
