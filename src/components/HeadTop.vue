<template>
  <div class="headTop">
    <router-link to="/"><img src="../assets/top_01.png" alt="上海欧莱美菜单"></router-link>
    <router-link to="/"><img src="../assets/top_02.png" alt="上海欧莱美首页"></router-link>
    <a href="tel:133"><img src="../assets/top_03.png" alt="上海欧莱美电话"></a>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: 'HeadTop',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headTop a{
  float: left;
  display: inline-flex
}
.headTop a:nth-child(1){
  width: 15%;
}
.headTop a:nth-child(2){
  width: 70%;
}
.headTop a:nth-child(3){
  width: 15%;
}
</style>
