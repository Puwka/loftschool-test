<template>
  <div class="product" :class="{even : index % 2 === 0}">
    <input
      type="checkbox"
      @click="checked = !checked"
      :checked="checked"
      class="product__checkbox">
    <label @click="checked = !checked" class="product__id">{{index}}</label>
    <img :src="product.image" class="product__image">
    <div class="product__title">{{product.name}}</div>
    <div class="price__block">
      <div class="product__price">{{product.price + ' Р'}} </div>
      <div class="product__counter" @click="openModal">{{counter}}</div>
      <div class="product__price_total">{{product.price * counter + ' Р'}}</div>
    </div>
    <VCounter
      :display="showModal"
      :product="product"
      @closeModal="showModal = false"
      @changeAmount="changeAmount"
      :amount="counter"></VCounter>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import VCounter from './VCounter';

export default {
  data: () => ({
    counter: 1,
    showModal: false,
    checked: false,
  }),
  components: {
    VCounter,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['changeTotal']),
    openModal() {
      this.showModal = true;
    },
    changeAmount(a) {
      this.counter = Number(a);
      this.changeTotal({ price: this.product.price * this.counter, index: this.index });
    },
  },
  watch: {
    checked() {
      this.$emit('addToMarked', this.product.id);
    },
  },
  created() {
    this.changeTotal({ price: this.product.price, index: this.index });
  },
};
</script>

<style scoped lang="scss">
  $border: 2px dotted #757575;

  .even {
    background-color: #F1F1F1;
  }

  .product {
    width: 100%;
    display: flex;
    height: 60px;
    align-items: center;

    * {
      height: 99%;
      display: flex;
      align-items: center;
    }

    &__checkbox {
      width: 40px;
      max-height: 20px;
      cursor: pointer;
    }

    &__image {
      width: 50px;
      height: auto;
      margin-left: 5px;
    }

    &__id {
      padding-right: 15px;
      border-right: $border;
      cursor: pointer;
    }

    &__title {
      flex: 0 1 70%;
      border-right: $border;
      border-left: $border;
      margin-left: 10px;
      padding-left: 10px;
    }
    .price__block {
      display: flex;
      flex: 1;
      justify-content: space-between;
    }
    &__price {
      margin-left: 10px;

      &_total {
        margin-right: 10px;
      }
    }

    &__counter {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      border: 1px solid #eee;
      border-radius: 3px;
      height: 30px;
      width: 30px;
      box-shadow: inset 1px 1px 1px;
      user-select: none;
      cursor: pointer;
    }
  }
</style>
