<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/goodsPage/1">goodsPage</router-link>|
      <router-link to="/goodsList">goodsList</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
img{width: 100%;}a{display: block}
p,h3{margin:0;padding:0;border: 0;}
html,body,ul,hr{margin:0;padding:0;border: 0;max-width: 640px;margin: auto;}
li{list-style: none;}
#app .fq{margin: 2% 0 4% 0}
#app .fq a{display: grid;}
#app .zc ul{background: #fffee4;padding:2% 1%}
#app .zc li ,#app .zc li a{display: grid;}
#app .zc li{
  width: 48%;
  margin: 1%;
}
#app .shoplist ul{background: #fffee4;padding:2%}
#app .shoplist li{
  width: 49%;
  position: relative;
  background: #fff;
  margin-bottom: 2%;
}
#app .shoplist li:nth-child(odd) {
  margin-right: 2%;
}
#app .shoplist ul li a img{
  margin:0;
  display: block;
}
#app .shoplist ul li a {
  padding:3%;
  color:#3b3b3b;
  text-align: left;
  text-decoration: none;
}
#app .shoplist ul li a h3{margin: 1rem 0}
#app .shoplist ul li a p{margin:0 0 0.4rem}
#app .shoplist ul li a p span{font-size: 2rem;color:red}
/*#app .shoplist li a a img:nth-last-child(1){
  width: 30.7%;
  position: absolute;
  right: 7%;
  bottom: 7%;
}*/
#app .shoplist li a:nth-child(2){
  width: 30.7%;
  position: absolute;
  right: 7%;
  bottom: 7%;
}
</style>
