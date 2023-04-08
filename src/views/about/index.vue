<template>
  <div :class="$style.component">
    <full-width-image src="./img/charlotte.jpg"/>

    <page-header />

    <about-feature
      v-for="(feature, index) in features"
      :key="`feature-${feature.label}`"
      :label="feature.label"
      :paragraphs="feature.paragraphs"
      :showHighlight="feature.highlight !== null"
      :highlight="feature.highlight"
      :index="index"
      :total="features.length" />
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
  Feature,
  FEATURES,
} from './config';
import FullWidthImage from '../../components/ui/images/full-width-image.vue';
import PageHeader from './components/header.vue';
import AboutFeature from './components/feature.vue';

export default Vue.extend({
  name: 'about-view',

  components: {
    FullWidthImage,
    PageHeader,
    AboutFeature,
  },

  data: () => ({
    features: [] as Feature[],
  }),

  computed: {
    ...mapGetters('navigation', [
      'isSmaller',
      'isSmall',
    ]),

    indentation() {
      if (!(this.isSmaller || this.isSmall)) {
        return '&#8195;&#8195;';
      }
      return '';
    },

    paragraphSeparations() {
      if (this.isSmaller || this.isSmall) {
        return '&#10;&#13;';
      }
      return '';
    },
  },

  created() {
    this.handlePageLoad({ name: this.$route.name });
    this.features = FEATURES;
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
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  margin-bottom: 90px;
}

.image-break {
  margin: 90px 0;
}
</style>
