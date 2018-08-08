<template>
  <div class="container">
    <TopLine></TopLine>
    <TheMenu></TheMenu>
    <div class="route">
      {{$route.fullPath}}
    </div>
  </div>
</template>

<script>
import TheMenu from './TheMenu';
import TopLine from './TopLine';

export default {
  components: {
    TheMenu,
    TopLine,
  },
};
</script>

<style>
  .container {
    display: flex;
    margin: 0 auto;
    width: 1200px;
    flex-wrap: wrap;
  }
  .route {
    margin-top: 30px;
    font-size: 20px;
    color: #757575;
  }
</style>
