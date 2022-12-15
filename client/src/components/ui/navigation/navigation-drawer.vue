<template>
  <div>
    <span>
      HOME
    </span>

    <span>
      ABOUT
    </span>

    <span>
      SERVICES
    </span>

    <span>
      CONTACT
    </span>

    <span :class="$style.cursor"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'navigation-drawer',
});
</script>

<style lang="scss" module>
.cursor {
  display: block;
  height: 1.2rem;
  width: 5rem;
  border: 1px solid #FEE137;
  border-radius: 50%;
}
</style>
