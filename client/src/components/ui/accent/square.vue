<template>
  <div :class="$style.component" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'square',
});
</script>

<style lang="scss" module>
.component {
  display: block;
  border: 7px solid #FEE037;
  border-radius: 13px;
  height: 45px;
  position: absolute;
  left: 0;
  width: 45px;
}
</style>