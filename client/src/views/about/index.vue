<template>
  <div :class="$style.component">
    <page-header src="./img/backgrounds/charlotte.jpg" />

    <h1>
      On this journey together since 1996.
    </h1>

    <p>
      Community has always been at the heart of our operation. Twenty five years ago when Team United was in its infancy, filling orders out of a small warehouse with a handful of dedicated employees, it was our committment to relationships that set us apart from the competition. Today, partners across the nation expect that same local care and world-class efficiency we first cultivated at home in Charlotte, North Carolina. 
    </p>

    <titled-text
      title="Origins"
      content="From the beginning, we’ve found success in simple, timeless values." />
    
    <p>
      Responsible businesses consider the long term effects of their decisions on the greater public. By making environmental consciousness fundamental to our production, we work to ensure that future generations will enjoy a healthy, biodiverse planet. Sourcing paper from Forest Stewardship Counsel (FSC) certified suppliers, printing with renewable, vegetable-based inks, and optimizing recycling strategies has been standard practice for years. Under new leadership, Team United is in the process of becoming FSC certified and remains dedicated to having a positive impact on every community we engage with.
    </p>

    <titled-text
      title="Sustainability"
      content="Paper products are the most recycled material in the world!" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import PageHeader from '@/components/ui/header/page-header.vue';
import TitledText from '@/components/ui/typography/titled-text.vue';

export default Vue.extend({
  name: 'about-view',

  components: {
    PageHeader,
    TitledText,
  },
});
</script>

<style lang="scss" module>
.component {
}
</style>
