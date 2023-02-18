<template>
  <div :class="$style.component">
    <div :class="$style.content">
      <div :class="$style['title-wrapper']">
        <span :class="$style.bold">
          United
        </span>

        <span :class="$style.bold">
          Printing
        </span>

        <span>
          Company
        </span>
      </div>

      <span :class="$style['vertical-spacer']" />

      <span :class="$style.location">
        Charlotte, NC
      </span>

      <v-spacer />

      <v-btn
        dark
        dense
        outlined>
        Request a Quote
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';

export default Vue.extend({
  name: 'app-bar',
});
</script>

<style lang="scss" module>
$title-font-size: 28px;
$title-line-height: 35px;

.component {
  position: absolute;
  width: 100vw;
  padding: 34px 0;
  z-index: 1;
}

.content {
  max-width: 1200px;
  width: calc(100% - 2rem);
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    // Design specified 24px and 29px, relying on ratios instead.
    font-size: $title-font-size * 0.86;
    line-height: $title-line-height * 0.9;
    color: white;
    font-weight: lighter;

    &.bold {
      font-size: $title-font-size;
      line-height: $title-line-height;
      font-weight: bold;
    }
  }
}

.location {
  font-size: 22px;
  font-weight: 100;
  color: white;
}

.vertical-spacer {
  width: 1px;
  // Design dictated 78px, relying on ratios instead.
  height: (($title-line-height * 2) + ($title-line-height * 0.9)) * 0.77;
  margin: 0 1rem;
  background: white;
}

.vertical-spacer,
.location {
  display: none;
}

@media screen and (min-width: 400px) {
  .location,
  .vertical-spacer {
    display: block;
  }
}

@media screen and (min-width: 800px) {
  .location,
  .vertical-spacer {
    display: block;
  }
}
</style>
