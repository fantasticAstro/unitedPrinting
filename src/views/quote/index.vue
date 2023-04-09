<template>
  <div :class="[
      $style.component,
      {
        [$style.smaller]: isSmaller,
        [$style.small]: isSmall,
        [$style.medium]: isMedium,
        [$style.large]: isLarge,
      },
    ]">
    <div :class="$style.center">
      <div :class="$style.content">
        <h1 :class="$style.title">
          Request a Quote
        </h1>

        <div :class="$style['form-wrapper']">
          <p :class="$style.description">
            Let's get down to business! Complete the form below to begin your next project.
          </p>

          <div :class="$style.form">
            <div :class="$style.column">
              <v-text-field
                v-model="name"
                color="#FFFFFF"
                dark
                label="Name"
                style="margin-bottom: 7px"
                dense />

              <v-text-field
                v-model="email"
                color="#FFFFFF"
                dark
                label="Email"
                style="margin-bottom: 7px"
                dense />

              <v-text-field
                v-model="phone"
                color="#FFFFFF"
                dark
                label="Phone"
                style="margin-bottom: 7px"
                dense />

              <v-text-field
                v-model="companyName"
                color="#FFFFFF"
                dark
                label="Company Name"
                style="margin-bottom: 7px"
                dense />

              <v-textarea
                v-model="description"
                color="#FFFFFF"
                dark
                label="Description..."
                style="margin-bottom: 7px"
                dense />

              <v-text-field
                v-model="stock"
                color="#FFFFFF"
                dark
                label="Stock"
                style="margin-bottom: 7px"
                dense />
            </div>

            <div :class="[$style.column, $style.second]">
              <v-select
                v-model="colorsFront"
                color="#FFFFFF"
                dark
                label="Colors (front)"
                hide-details
                style="margin-bottom: 7px"
                dense />

              <v-select
                v-model="colorsBack"
                color="#FFFFFF"
                dark
                label="Colors (back)"
                style="margin-bottom: 7px"
                dense />

              <v-select
                v-model="proofType"
                color="#FFFFFF"
                dark
                label="Proof type"
                style="margin-bottom: 7px"
                dense />

              <v-select
                v-model="shipping"
                color="#FFFFFF"
                dark
                label="Shipping"
                hide-details
                dense />

              <v-btn
                v-if="isSmaller || isSmall"
                dark
                outlined
                style="margin-top: 40px">
                Send
              </v-btn>
            </div>

            <div :class="[$style.column, $style.contact]">
              <dots
                v-if="!(isSmaller || isSmall)"
                :height="4"
                :width="4"
                :fillRatio="1"
                :coloredRatio="0"
                style="margin-bottom: 40px" />

              <div :class="$style['contact-wrapper']">
                <p :class="$style['contact-details']">
                  Have a question? No worries—we've got this!
                </p>

                <p :class="[$style['contact-details'], $style.bold]">
                  Office: (704) 525-3710
                </p>
              </div>
            </div>
          </div>

          <div
            :class="$style.form"
            style="margin-top: 20px">
            <div :class="$style.column" />

            <div :class="$style.column">
              <v-btn
                dark
                outlined>
                Send
              </v-btn>
            </div>

            <div :class="$style.column" />
          </div>
        </div>
      </div>
    </div>

    <span
      v-if="!(isSmaller || isSmall)"
      :class="$style.year">
      <span>
        1
      </span>

      <span>
        9
      </span>

      <span>
        9
      </span>

      <span>
        6
      </span>
    </span>
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
import Dots from '../home/components/dots.vue';

export default Vue.extend({
  name: 'quote-view',

  components: {
    Dots,
  },

  data: () => ({
    name: '',

    email: '',

    phone: '',

    companyName: '',

    description: '',

    stock: '',

    colorsFront: '',

    colorsBack: '',

    proofType: '',

    shipping: '',
  }),

  created() {
    this.handlePageLoad({ name: this.$route.name });
  },

  computed: {
    ...mapGetters('navigation', [
      'isSmaller',
      'isSmall',
      'isMedium',
      'isLarge',
      'isLarger',
    ]),

    /**
     * Whether the form is ready for submission.
     *
     * @type {boolean}
     */
    valid(): boolean {
      return !!(this.name
        && this.email
        && this.description);
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
  display: grid;
  grid-template-columns: 40px 16px auto 16px 40px;
  grid-template-rows: 117px 60px auto;
  width: 100vw;
  min-height: 100vh;
  background: #19b4b0;
  padding-bottom: 40px;
}

.center {
  display: flex;
  justify-content: center;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  color: white;
}

.content {
  width: calc(100vw - 40px - 40px - 32px);
  max-width: 1000px;
  background-size: cover;
  border-radius: 12px;
  padding: 80px;
  background-image: linear-gradient(#00000022,#5a5a5a00),
    linear-gradient(#19b4b0ea,#19b4b0ea),
    url('../../../public/img/texture.jpg');
}

.form-wrapper {
  padding: 0 60px;
}

.form {
  display: flex;
  gap: 40px;
}

.column {
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  width: calc(33% - 1rem);
  min-width: 213px;

  &:last-child {
    padding-right: 0;
  }

  &.second {
    padding-top: 160px;
  }
}

.title {
  font-size: 52px;
  line-height: 49px;
  margin-bottom: 40px;
  font-weight: 600;
}

.description {
  font-size: 17px;
  line-height: 21px;
  max-width: 600px;
  max-width: 440px;
  margin-bottom: 40px;
}

.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.contact-wrapper {
  display: block;
}

.contact-details {
  display: inline-block;
  font-size: 17px;
  line-height: 21px;

  &.bold {
    font-weight: 600;
  }
}

.year {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;

  span {
    color: white;
    font-size: 23px;
  }
}

.small {
  .title {
    font-size: 32px;
    line-height: 35px;
  }
}

.smaller {
  .title {
    font-size: 25px;
    line-height: 26.754px;
  }
}

.small,
.smaller {
  &.component {
    grid-template-columns: 10px 10px auto 10px 10px;
    grid-template-rows: 100px 20px auto;
  }

  .content {
    width: 100%;
  }

  .form {
    flex-wrap: wrap;
  }

  .column {
    width: 100%;

    &.second {
      padding-top: 0px;
    }
  }

  .form-wrapper {
    padding: 0;
  }

  .content {
    padding: 40px;
  }
}

.medium,
.large {
  .content {
    padding: 60px;
  }
}
</style>
