<template>
  <div class="GoodsCategory">
  	<HeadTop/>
    <router-link to="/goodsPage/1">goodsPage</router-link>
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
    Footer,
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
