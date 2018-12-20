<template>
  <div class="GoodsPage">
	<HeadTop/>
    <router-link to="/ip_cat">ip_cat</router-link>
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
  },
  watch: {
    '$route' (to, from) {
      console.log(to);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
