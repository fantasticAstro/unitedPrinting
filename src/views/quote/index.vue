<template>
  <div :class="$style.component">
    <div :class="$style.content">
      <h1 :class="$style.title">
        Request a Quote
      </h1>

      <p :class="$style.description">
        Let's get down to business! Complete the form below to begin your next project.
      </p>

      <div :class="$style.form">
        <div :class="$style.column">
          <v-select
            v-model="type"
            color="#FEE037"
            label="Type"
            style="margin-bottom: 7px"
            dense />

          <v-text-field
            v-model="quantity"
            color="#FEE037"
            label="Quantity"
            style="margin-bottom: 7px"
            dense />

          <v-textarea
            v-model="description"
            color="#FEE037"
            label="Description..."
            style="margin-bottom: 7px"
            dense />

          <v-text-field
            v-model="stock"
            color="#FEE037"
            label="Stock"
            style="margin-bottom: 7px"
            dense />

          <v-text-field
            v-model="flatSize"
            color="#FEE037"
            label="Flat size"
            style="margin-bottom: 7px"
            dense />

          <v-select
            v-model="foldedSize"
            color="#FEE037"
            label="Folded size"
            style="margin-bottom: 7px"
            dense />
        </div>

        <div :class="$style.column">
          <v-select
            v-model="colorsFront"
            color="#FEE037"
            label="Colors (front)"
            style="margin-bottom: 7px"
            dense />

          <v-select
            v-model="colorsBack"
            color="#FEE037"
            label="Colors (back)"
            style="margin-bottom: 7px"
            dense />

          <v-select
            v-model="proofType"
            color="#FEE037"
            label="Proof type)"
            style="margin-bottom: 7px"
            dense />

          <v-text-field
            v-model="flatSize"
            color="#FEE037"
            label="Flat size"
            style="margin-bottom: 7px"
            dense />

          <v-btn outlined>
            Send
          </v-btn>
        </div>

        <div :class="[$style.column, $style.contact]">
          <div :class="$style['contact-wrapper']">
            <p :class="$style['contact-details']">
              Have a question?
            </p>

            <p :class="$style['contact-details']">
              No worries -- we've got this!
            </p>

            <p :class="$style['contact-details']">
              (704) 525-3710
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Packages
import { mapActions } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'quote-view',

  data: () => ({
    type: '',

    quantity: '',

    description: '',

    stock: '',

    flatSize: '',

    foldedSize: '',

    colorsFront: '',

    colorsBack: '',

    proofType: '',

    shipping: '',
  }),

  created() {
    this.handlePageLoad({ name: this.$route.name });
  },

  computed: {
    /**
     * Whether the form is ready for submission.
     *
     * @type {boolean}
     */
    valid(): boolean {
      return !!(this.type
        && this.quantity
        && this.description
        && this.stock
        && this.flatSize
        && this.foldedSize
        && this.colorsFront
        && this.colorsBack
        && this.proofType
        && this.shipping);
    },
  },

  methods: {
    ...mapActions('navigation', [
      'handlePageLoad',
    ]),

    // /**
    //  * Submits the form if valid.
    //  *
    //  * @returns {void}
    //  */
    // submitForm(): void {
    // },
  },
});
</script>

<style lang="scss" module>
.component {
  display: flex;
  padding-top: 170px;
  width: 100vw;
  height: calc(100vh - 170px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content {
  width: calc(100% - 4rem);
  max-width: 1280px;
}

.form {
  display: flex;
  max-width: 1280px;
  width: 100%;
  margin-top: 100px;
  gap: 50px;
}

.column {
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  width: calc(33% - 1rem);

  &:last-child {
    padding-right: 0;
  }
}

.title {
  font-size: 68px;
  line-height: 78px;
  margin-bottom: 29px;
}

.description {
  font-size: 25px;
  line-height: 32px;
  max-width: 600px;
}

.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-wrapper {
  display: block;
}

.contact-details {
  display: inline-block;
  font-size: 25px;
  line-height: 30px;
}
</style>
