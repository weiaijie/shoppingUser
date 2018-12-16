<template>
  <div class="home">
    <HeadTop/>
    <img src="../assets/banner.jpg" alt="">
    
    <div class="fenlei">
    	<div class="fenlei1">
    	<div class="tabs">
    		<span class="active">热门项目</span>
    		<span>整形美容</span>
    		<span>医学美肤</span>
    		<span>无创微整</span>
    		<div style="clear:both;"></div>
    	</div>
    	<swiper :options="swiperOption" ref="mySwiper" >
    	  <swiper-slide>
    	  	<ul class="hot">
    	  		<li><router-link to="/"><img src="../assets/icon/icon_01.png"><p>双眼皮</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_02.png"><p>假体隆鼻</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_03.png"><p>美白嫩肤</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_04.png"><p>净肤祛斑</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_05.png"><p>自体脂肪</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_06.png"><p>吸脂瘦身</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_07.png"><p>瘦脸针</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_08.png"><p>玻尿酸</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	  <swiper-slide>
    	  	<ul>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_09.png"><p>眼部</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_10.png"><p>鼻部</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_11.png"><p>胸部</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_12.png"><p>线雕</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_13.png"><p>吸脂瘦身</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_14.png"><p>自体脂肪</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	  <swiper-slide>
    	  	<ul>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_15.png"><p>纹绣</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_16.png"><p>净肤祛斑</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_17.png"><p>紧肤</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_18.png"><p>脱毛</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_19.png"><p>祛痘</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_20.png"><p>美白嫩肤</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	  <swiper-slide>
    	  <ul>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_21.png"><p>瘦脸针</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_22.png"><p>玻尿酸</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_23.png"><p>注射除皱</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_24.png"><p>注射隆鼻</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_25.png"><p>丰下巴</p></router-link></li>
    	  		<li><router-link to="/"><img src="../assets/icon/icon_26.png"><p>瘦腿针</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	</swiper>
    	</div>
    </div>
   
    <div class="fq"><img src="../assets/zxfq.jpg" alt=""></div>
    <div class="zc">
    	<ul>
    		<li><img src="../assets/zc_01.png" alt=""></li>
    		<li><img src="../assets/zc_02.png" alt=""></li>
    		<li><img src="../assets/zc_03.png" alt=""></li>
    		<li><img src="../assets/zc_04.png" alt=""></li>
    	</ul>
    </div>
    <div>
    	<img src="../assets/baokuan.png" alt="">
    </div>
    <Footer/>
  </div>
</template>



<script>
// @ is an alias to /src
import HeadTop from '@/components/HeadTop.vue'
import Footer from '@/components/Footer.vue'
import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import $ from 'jquery'

export default {
  name: 'home',
  data(){
    return{
  	    swiperOption: {//swiper3
  	    autoplay: 3000,
  	    speed: 1000,
  	    on: {
  	  		slideChangeTransitionStart: function(){
  	  	 	 // console.log(this.activeIndex);
  	  	 	 $(".home .tabs .active").removeClass('active');
      		 $(".home .tabs span").eq(this.activeIndex).addClass('active');

  	  		}
  	    }
  	  }
  	}
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },

  mounted(){
  	let swiper = this.swiper;
  	$(".home .tabs span").on('click', function(e) {
		 e.preventDefault()
		 $(".home .tabs .active").removeClass('active')
		 $(this).addClass('active')
		 swiper.slideTo($(this).index());
	});
  },
  created(){
  },
  components: {
  	HeadTop,
    Footer,
    swiper,
    swiperSlide
  }
  
}
</script>

<style scoped>
li{
    list-style: none;
    float: left;
}
img{
	width:100%;
}

.home .fenlei .fenlei1{
	overflow: hidden;
	border-radius: 1.5rem;
	box-shadow: 0px 0px 16px 0px #ffedcb;
}

.home .fenlei {
	padding:2%;
}
.home .fenlei a{
	text-decoration: none;
	color:#434343;
}

.home .fenlei .tabs span{
	display: block;
	float: left;
	width: 25%;
	text-align: center;
	margin: 0;
	color:#fff;
	background: #ffce70;
	padding:2% 0;
}
.home .fenlei .tabs .active{
	color:#997123;
	background: #ffedcb;
}

.home .fenlei .swiper-container .swiper-slide{
	background: #fff;
	padding-bottom:3%;
}
.home .fenlei .swiper-container .swiper-slide ul {
	padding-left:5%;
}
.home .swiper-container ul li img{
	width:77.2%;
}
.home .fenlei .swiper-container .swiper-slide li{
	width: 28%;
	margin-right: 4%;
	padding-top:3%;
}
.home .fenlei .swiper-container .swiper-slide p{
	margin: 3% 0 0 0;
}

.home .fenlei .swiper-container .swiper-slide .hot{
	width: 100%;
	padding-left:3%;
}

.home .swiper-container .swiper-slide .hot  li{
	width: 22%;
	margin-right: 2%;
}
.home .swiper-container .swiper-slide .hot li img{
	width: 93.3%;
}



/*.home .hot li:nth-child(1){
	width: 7.88em;
	height: 7.88em;
	background: url('../assets/icon.png') 0 0 no-repeat;
	background-size: 35rem 70rem;
}*/
</style>