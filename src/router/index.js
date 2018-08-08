import Vue from 'vue';
import Router from 'vue-router';
import VMain from '@/components/VMain';
import VCart from '@/components/Cart/VCart';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: VMain,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: VCart,
    },
  ],
});
