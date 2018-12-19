<template>
  <div class="GoodsCategory">
  	<HeadTop/>
    <router-link to="/goodsPage/1">goodsPage</router-link>
    <div class="shoplist">
      <ul>
        <li>
          <router-link to="/">
            <img src="../assets/test.jpg" alt="">
            <h3>衡力瘦脸针</h3>
            <p>狂欢价 <span>¥680</span></p>
            <s>专柜价: ¥1680</s>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img src="../assets/test.jpg" alt="">
            <h3>衡力瘦脸针</h3>
            <p>狂欢价 <span>¥680</span></p>
            <s>专柜价: ¥1680</s>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img src="../assets/test.jpg" alt="">
            <h3>衡力瘦脸针</h3>
            <p>狂欢价 <span>¥680</span></p>
            <s>专柜价: ¥1680</s>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img src="../assets/test.jpg" alt="">
            <h3>衡力瘦脸针</h3>
            <p>狂欢价 <span>¥680</span></p>
            <s>专柜价: ¥1680</s>
          </router-link>
        </li>
        <div style="clear:both;"></div>
      </ul>
    </div>
    <Footer/>
  </div>
</template>

<script>
import HeadTop from '@/components/HeadTop.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'GoodsCategory',
  props: {
  },
  components: {
  	HeadTop,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
    float: left;
}
</style>
