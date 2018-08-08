import Vuex from 'vuex';
import Vue from 'vue';
import json from '@/data/products.json';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
    vat: 0.18,
    productPrices: [],
    total: 0,
  },
  actions: {
    // Эмуляция запроса к базе
    initProducts: async ({ commit }) => {
      commit('setProducts', json);
    },
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    deleteMarked: (state, id) => {
      state.products = state.products.filter(p => id.toString() !== p.id);
    },
    changeTotal: (state, data) => {
      state.productPrices[data.index] = Number(data.price);
      state.total = state.productPrices.reduce((prev, curr) => prev + curr, 0);
    },
  },
  getters: {
    products: state => state.products,
    total: state => state.total,
    pp: state => state.productPrices,
    vat: state => state.vat,
  },
});

export default store;
