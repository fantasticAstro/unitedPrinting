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
          &#8195;&#8195;Community has always been at the heart of our operation. Twenty
          five years ago when Team United was in its infancy, filling orders out of a
          small warehouse with a handful of dedicated employees, it was our committment
          to relationships that set us apart from the competition. Today, partners
          across the nation expect that same local care and world-class efficiency we
          first cultivated at home in Charlotte, North Carolina.
        </content-paragraph>
      </template>
    </two-column>

    <full-width-image
      :class="$style['image-break']"
      src="./img/rolling-hills.png"/>

    <two-column
      :leftRatio="2"
      :rightRatio="1">
      <template v-slot:left>
        <content-paragraph>
          &#8195;&#8195;Responsible businesses consider the long term effects of their
          decisions on the greater public. By making environmental consciousness
          fundamental to our production, we work to ensure that future generations will
          enjoy a healthy, biodiverse planet. Sourcing paper from Forest Stewardship
          Counsel (FSC) certified suppliers, printing with renewable, vegetable-based
          inks, and optimizing recycling strategies has been standard practice for years.
          Under new leadership, Team United is in the process of becoming FSC certified
          and remains dedicated to having a positive impact on every community we engage
          with.
        </content-paragraph>
      </template>

      <template v-slot:right>
        <titled-text align="right">
          <template v-slot:title>
            SUSTAINABILITY
          </template>

          Paper products are the most recycled material in the world!
        </titled-text>
      </template>
    </two-column>

    <full-width-image
      :class="$style['image-break']"
      src="./img/american-flag.png"/>

      <two-column>
      <template v-slot:left>
        <titled-text>
          <template v-slot:title>
            VETERAN OWNED
          </template>

          We are officially verified as a Veteran Owned Small Business!
        </titled-text>
      </template>

      <template v-slot:right>
        <content-paragraph>
          &#8195;&#8195;Good leaders diligently model the behaviors they expect and
          inspire other team members to do the same. Facilitating and encouraging
          integrity, self-confidence, and teamwork are top priorities. By maintaining a
          thriving, cohesive unit within the workplace, Team United’s veteran leadership
          ultimately amplifies the experience and success of our clients.
        </content-paragraph>
      </template>
    </two-column>
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions } from 'vuex';
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
