<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/Header/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style>
  * {
    font-family: 'BeauSans';
  }
</style>

