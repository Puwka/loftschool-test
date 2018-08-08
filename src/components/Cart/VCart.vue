<template>
  <div class="container cart__view">
    <h1 class="title">Корзина</h1>
    <div class="cart">
      <div class="cart__info">
        <p>Выделено <span>{{markedIds.length}}</span></p>
        <div class="cart__delete" @click="clearMarked">Удалить отмеченные</div>
      </div>
      <VProduct
        v-for="(product, i) in products"
        :product="product"
        :key="product.id"
        @addToMarked="mark"
        :index="i + 1"></VProduct>
    </div>
    <div class="value__block">
      <div class="price">
        <p>Промежуточный итог по корзине: </p>
        <div class="val">
          {{ Intl.NumberFormat('ru-RU').format(total) + ' Р'}}
        </div>
      </div>
      <div class="vat">
        <p>В том числе НДС: </p>
        <div class="val">
          {{ Intl.NumberFormat('ru-RU').format((total * vat).toFixed(0)) + ' Р'}}
        </div>
      </div>
    </div>
    <div class="total">Итого: {{ total }} Р</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import VProduct from './VProduct';

export default {
  data: () => ({
    markedIds: [],
  }),
  components: {
    VProduct,
  },
  computed: {
    ...mapGetters(['products', 'total', 'vat', 'pp']),
  },
  created() {
    this.initProducts();
  },
  methods: {
    ...mapMutations(['deleteMarked', 'changeTotal']),
    ...mapActions(['initProducts']),
    clearMarked() {
      this.markedIds.forEach((id) => {
        this.deleteMarked(id);
        this.changeTotal({ index: id, price: 0 });
      });
    },
    mark(id) {
      if (this.markedIds.includes(id)) {
        this.markedIds = this.markedIds.filter(item => item !== id);
      } else {
        this.markedIds.push(id);
      }
    },
  },
};
</script>

<style scoped lang="scss">
  $border: 2px dotted #757575;

  .cart__view {
    margin-top: 30px;
  }
  .title {
    text-transform: uppercase;
    font-size: 22px;
    color: cornflowerblue;
  }
  .cart {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 2px solid #F1F1F1;
    padding-bottom: 8px;

    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 10px;
      width: 100%;
      background-color: rgba(29, 130, 221, 0.5);

      span {
        font-weight: bold;
      }
    }
    &__delete {
      cursor: pointer;
      text-decoration: underline;
      line-height: 22px;

      &:before {
        content: 'x';
        margin-right: 5px;
        background-color: #757575;
        color: #fff;
        padding: 2px 5px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }
    }
  }

  .value__block {
    width: 100%;
    border-bottom: $border;

    & > * {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
    }

    p {
      margin-right: 100px;
    }
  }
  .total {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 22px;
    color: rgb(29, 130, 221);
  }
</style>
