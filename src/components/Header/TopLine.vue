<template>
  <div class="container header_top">
    <router-link to="/" class="logo" tag="div" >
      <img src="static/img/Logo.png" alt="">
    </router-link>
    <div class="search">
      <input type="text">
      <button>Поиск</button>
    </div>
  </div>
</template>

<style lang="scss">
  .header_top {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .logo img{
      width: 250px;
      cursor: pointer;
    }
    .search {
      width: 300px;
      display: flex;
      input {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        position: relative;
      }
      button {
        background-color: rgb(29, 130, 221);
        color: #fff;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        padding: 5px 10px;
      }
    }
  }
</style>
