<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/goodsPage/1">goodsPage</router-link>| -->
      <!-- <router-link to="/goodsList">goodsList</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
img{
  width: 100%;
}
html,body,ul{margin:0;padding:0;border: 0;max-width: 640px;margin: auto;}
</style>
