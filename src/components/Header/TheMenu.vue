<template>
  <div class="menu">
    <router-link to="/" tag="div" class="menu__link">Каталог Продукции</router-link>
    <router-link to="/" tag="div" class="menu__link">Все бренды</router-link>
    <router-link to="/" tag="div" class="menu__link">Подарки на 14 февраля</router-link>
    <router-link to="/" tag="div" class="menu__link">Подарки на 23 февраля</router-link>
    <router-link to="/" tag="div" class="menu__link">Подарки на 8 марта</router-link>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .menu {
    display: flex;
    justify-content: space-between;
    width: 100%;
    &__link {
      background: linear-gradient(-0.1turn, rgba(29, 130, 221, 0.5), rgba(29, 130, 221, 1));
      color: #fff;
      display: flex;
      flex: 1;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 20px;
      justify-content: flex-start;
      text-transform: uppercase;
      font-size: 14px;
      position: relative;
      cursor: pointer;

      &:after {
        content: '';
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #fff;
      }
    }
  }
</style>
