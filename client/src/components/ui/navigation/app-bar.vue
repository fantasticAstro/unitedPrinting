<template>
  <v-app-bar
    color="transparent"
    height="150"
    style="z-index: 1"
    absolute
    flat>
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
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app-bar',
});
</script>

<style lang="scss" module>
$title-font-size: 1.2rem;

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
    font-size: $title-font-size;
    line-height: $title-font-size;
    color: white;
    font-weight: lighter;

    &.bold {
      font-weight: bold;
    }
  }
}

.location {
  font-size: .8rem;
  color: white;
}

.vertical-spacer {
  display: block;
  width: 1px;
  height: $title-font-size * 3;
  margin: 0 1rem;
  background: white;
}
</style>
