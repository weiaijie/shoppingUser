<template>
  <div class="home">
    <HeadTop/>
    <swiper :options="swiperOption">
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
    </swiper>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadTop from '@/components/HeadTop.vue'
import Footer from '@/components/Footer.vue'
import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  data(){
    return{
      swiperOption: {//swiper3
      autoplay: 3000,
      speed: 1000,
      }
    }
  },
  components: {
  	HeadTop,
    Footer,
    swiper,
    swiperSlide
  }
}
</script>
