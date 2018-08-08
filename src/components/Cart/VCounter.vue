<template>
  <div class="modal__overlay" @click.self="$emit('closeModal')" v-if="display">
    <div class="modal" :style="{ top: top + 'px', right: '220px' }">
      <div class="modal__title">Изменить количество</div>
      <div class="counter">
        <div class="product__price">{{ product.price + ' Р' }}</div>
        <button
          class="counter__button counter__button_decrease" @click="decrease">-</button>
        <input type="number" class="product__amount" @input="validate" v-model="curAmount">
        <button class="counter__button counter__button_increase" @click="curAmount++">+</button>
        <div class="product__price_total">{{ product.price * curAmount + ' Р' }}</div>
      </div>
      <div class="confirmation">
        <button class="confirm" @click="confirm">Сохранить</button>
        <button class="decline" @click="$emit('closeModal')">Отменить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    top: 370,
    right: 50,
    curAmount: 1,
  }),
  props: {
    display: {
      type: Boolean,
      required: true,
      default: false,
    },
    product: {
      type: Object,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  created() {
    this.curAmount = this.amount;
  },
  methods: {
    confirm() {
      this.$emit('changeAmount', this.curAmount);
      this.$emit('closeModal');
    },
    decrease() {
      if (this.curAmount) this.curAmount -= 1;
    },
    validate(v) {
      // kinda stupid validation
      if (Number.isNaN(Number(v.data))) {
        this.curAmount = 1;
      }
    },
  },
  watch: {
    display(n) {
      if (!n) {
        this.curAmount = this.amount;
      }
    },
  },
};
</script>

<style scoped lang="scss">
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .modal {
    border-radius: 2px;
    position: absolute;
    background-color: #fff;
    padding: 20px 15px;
    box-sizing: border-box;
    box-shadow: 0px 0px 4px 0px;
    min-width: 250px;

    &__overlay {
      position: fixed;
      right: 0;
      left: 0;
      bottom: 0;
      top: 0;
    }
    &__title {
      width: 100%;
    }
    .counter {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        color: #fff;
        width: 15px;
        height: 15px;
        background-color: rgba(29, 130, 221, 0.5);
        border: none;
        outline: none;
        line-height: 15px;
        cursor: pointer;

        &:hover {
          background-color: rgba(29, 130, 221, 1);
          user-select: none;
        }
      }
    }

    .product {

      &__amount {
        margin-left: 10px;
        border: 1px solid #eee;
        border-radius: 3px;
        height: 30px;
        width: 30px;
        box-shadow: inset 1px 1px 1px;
        user-select: none;
        cursor: pointer;
        text-align: center;
      }
    }
    .confirmation {
      margin-top: 15px;
      display: flex;

      button {
        font-size: 16px;
        border: none;
        border-bottom: 1px solid #525252;
        color: #525252;
        padding: 0 0 5px 0;
        outline: none;
        margin-right: 15px;
        cursor: pointer;

        &:hover {
          color: rgba(29, 130, 221, 1);
          border-bottom: 1px solid rgba(29, 130, 221, 1);
          transition: all .2s ease-in-out;
        }
      }
    }
  }
</style>
