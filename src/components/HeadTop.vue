<template>
  <div class="headTop">
    <router-link to="/"><img src="../assets/top_01.png" alt="上海欧莱美菜单"></router-link>
    <router-link to="/"><img src="../assets/top_02.png" alt="上海欧莱美首页"></router-link>
    <a href="tel:133" tel=""><img src="../assets/top_03.png" alt="上海欧莱美电话"></a>
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
}
.headTop a:nth-child(1){
  width: 12.3%;
}
.headTop a:nth-child(2){
  width: 75.1%;
}
.headTop a:nth-child(3){
  width: 12.2%;
}
</style>
