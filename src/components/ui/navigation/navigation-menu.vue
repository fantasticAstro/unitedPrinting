<template>
  <div :class="$style.component">
    <div :class="$style.content">
      <NavigationMenuItem
        v-for="(page, index) in pages"
        :key="`page-menu-item-${page.title}`"
        :title="page.title"
        :name="page.name"
        :index="index"
        @click="handleClick" />

      <span
        :class="$style.indicator"
        :style="{
          'top': indicatorY,
        }" />
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
  BASE_PAGES,
  PageObject,
} from '@/store/modules/navigation';
import NavigationMenuItem from '@/components/ui/navigation/navigation-menu-item.vue';

export default Vue.extend({
  name: 'navigation-menu',

  components: {
    NavigationMenuItem,
  },

  data: () => ({
    pages: [] as PageObject[],
  }),

  computed: {
    ...mapGetters('navigation', [
      'getPage',
    ]),

    /**
     * Y position of the indicator.
     *
     * @type {string} CSS pixel value.
     */
    indicatorY(): string {
      const index = Object.values(BASE_PAGES)
        .map((page: PageObject) => page.name)
        .findIndex((value) => (value === this.getPage));

      return `${(index * (27 + 36)) + 22}px`;
    },
  },

  created() {
    this.pages = Object.values(BASE_PAGES);
  },

  methods: {
    ...mapActions('navigation', [
      'goToHome',
      'goToAbout',
      'goToServices',
      'goToContact',
    ]),

    /**
     * Handles button click.
     * @param {Record<string, string>} args Event arguments.
     * @param {string} args.name Page name.
     */
    handleClick(args: Record<string, string>) {
      switch (args.name) {
        case 'contact':
          this.goToContact();
          break;
        case 'about':
          this.goToAbout();
          break;
        case 'services':
          this.goToServices();
          break;
        default:
          this.goToHome();
      }
    },
  },
});
</script>

<style lang="scss" module>
.component {
  padding-right: 108px;
  width: 300px;
}

.content {
  display: grid;
  flex-direction: column;
  grid-template-rows: auto auto auto auto;
  position: relative;
}

.indicator {
  width: 120px;
  height: 16px;
  border-radius: 12px;
  position: absolute;
  border: solid #FEE037 2px;
  right: -137px;
  transition: top .2s ease;
}
</style>
