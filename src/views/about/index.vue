<template>
  <div :class="$style.component">
    <full-width-image src="./img/charlotte.jpg"/>

    <page-header
      :box="true"
      align="right">
      On this journey together since 1996.
    </page-header>

    <two-column>
      <template v-slot:left>
        <titled-text>
          <template v-slot:title>
            ORIGINS
          </template>

          From the beginning, we’ve found success in simple, timeless values.
        </titled-text>
      </template>

      <template v-slot:right>
        <content-paragraph>
          Community has always been at the heart of our operation. Twenty five years ago
          when Team United was in its infancy, filling orders out of a small warehouse
          with a handful of dedicated employees, it was our committment to relationships
          that set us apart from the competition. Today, partners across the nation
          expect that same local care and world-class efficiency we first cultivated at
          home in Charlotte, North Carolina.
        </content-paragraph>
      </template>
    </two-column>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

// Local Imports
import FullWidthImage from '@/components/ui/images/full-width-image.vue';
import PageHeader from '@/components/ui/header/page-header.vue';
import TwoColumn from '@/components/ui/layout/two-column.vue';
import ContentParagraph from '@/components/ui/content/content-paragraph.vue';
import TitledText from '@/components/ui/content/titled-text.vue';

export default Vue.extend({
  name: 'about-view',

  components: {
    FullWidthImage,
    PageHeader,
    TwoColumn,
    ContentParagraph,
    TitledText,
  },
});
</script>

<style lang="scss" module>
.component {
}
</style>
