<template>
  <div class="GoodsPage">
	<HeadTop/>
    <router-link to="/goodsList">goodsList</router-link>
    <Footer/>
  </div>
</template>

<script>
import HeadTop from '@/components/HeadTop.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'GoodsPage',
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

</style>
