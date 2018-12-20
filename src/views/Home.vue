<template>
  <div class="home">
    <HeadTop/>
    <img src="../assets/banner.jpg" alt="上海欧莱美商城">
    
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
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_01.png" alt="双眼皮"><p>双眼皮</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_02.png" alt="假体隆鼻"><p>假体隆鼻</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_03.png" alt="美白嫩肤"><p>美白嫩肤</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_04.png" alt="净肤祛斑"><p>净肤祛斑</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_05.png" alt="自体脂肪"><p>自体脂肪</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_06.png" alt="吸脂瘦身"><p>吸脂瘦身</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_07.png" alt="瘦脸针"><p>瘦脸针</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_08.png" alt="玻尿酸"><p>玻尿酸</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	  <swiper-slide>
    	  	<ul>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_09.png" alt="眼部"><p>眼部</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_10.png" alt="鼻部"><p>鼻部</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_11.png" alt="胸部"><p>胸部</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_12.png" alt="线雕"><p>线雕</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_13.png" alt="吸脂瘦身"><p>吸脂瘦身</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_14.png" alt="自体脂肪"><p>自体脂肪</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	  <swiper-slide>
    	  	<ul>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_15.png" alt="纹绣"><p>纹绣</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_16.png" alt="净肤祛斑"><p>净肤祛斑</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_17.png" alt="紧肤"><p>紧肤</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_18.png" alt="脱毛"><p>脱毛</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_19.png" alt="祛痘"><p>祛痘</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_20.png" alt="美白嫩肤"><p>美白嫩肤</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	  <swiper-slide>
    	    <ul>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_21.png" alt="瘦脸针"><p>瘦脸针</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_22.png" alt="玻尿酸"><p>玻尿酸</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_23.png" alt="注射除皱"><p>注射除皱</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_24.png" alt="注射隆鼻"><p>注射隆鼻</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_25.png" alt="丰下巴"><p>丰下巴</p></router-link></li>
    	  		<li><router-link to="/ip_cat"><img src="../assets/icon/icon_26.png" alt="瘦腿针"><p>瘦腿针</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	</swiper>
    	</div>
    </div>
   
    <div class="fq">
    	<a href="javascript:void(0);"><img src="../assets/zxfq.jpg" alt="上海欧莱美分期付款"></a>
    </div>
    <div class="zc">
    	<ul>
    		<li><router-link to="/"><img src="../assets/zc_01.png" alt="秒杀专场"></router-link></li>
    		<li><router-link to="/"><img src="../assets/zc_02.png" alt="拼美专场"></router-link></li>
    		<li><router-link to="/"><img src="../assets/zc_03.png" alt="淘美购"></router-link></li>
    		<li><router-link to="/"><img src="../assets/zc_04.png" alt="印象微美"></router-link></li>
    		<div style="clear:both;"></div>
    	</ul>
    </div>
    <div class="shoplist">
    	<img src="../assets/baokuan.png" alt="爆款推荐" style="margin: 5% 0;">
    	<ul>
    		<li>
    			<router-link to="detail/1">
    				<img src="../assets/test.jpg" alt="">
    				<h3>衡力瘦脸针</h3>
    				<p>狂欢价 <span>¥680</span></p>
    				<s>专柜价: ¥1680</s>
            	</router-link>
            	<a href="javascript:void(0);"><img src="../assets/swt_01.png" alt="聊天"></a>
    		</li>
    		<li>
    			<router-link to="detail/1">
    				<img src="../assets/test.jpg" alt="">
    				<h3>衡力瘦脸针</h3>
    				<p>狂欢价 <span>¥680</span></p>
    				<s>专柜价: ¥1680</s>
    			</router-link>
            	<a href="javascript:void(0);"><img src="../assets/swt_01.png" alt="聊天"></a>
    		</li>
    		<li>
    			<router-link to="detail/1">
    				<img src="../assets/test.jpg" alt="">
    				<h3>衡力瘦脸针</h3>
    				<p>狂欢价 <span>¥680</span></p>
    				<s>专柜价: ¥1680</s>
    			</router-link>
            	<a href="javascript:void(0);"><img src="../assets/swt_01.png" alt="聊天"></a>
    		</li>
    		<li>
    			<router-link to="detail/1">
    				<img src="../assets/test.jpg" alt="">
    				<h3>衡力瘦脸针</h3>
    				<p>狂欢价 <span>¥680</span></p>
    				<s>专柜价: ¥1680</s>
    			</router-link>
            	<a href="javascript:void(0);"><img src="../assets/swt_01.png" alt="聊天"></a>
    		</li>
    		<div style="clear:both;"></div>
    	</ul>
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
    	title:'上海欧莱美商城首页',
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
  	document.title=this.title;
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
    float: left;
}
.home .fenlei .fenlei1{
	overflow: hidden;
	border-radius: 1.5rem;
	box-shadow: 0px 0px 16px 0px #f7d9a2;
}
.home .fenlei {
	padding:4% 2%;
}
.home .fenlei a{
	text-decoration: none;
	color:#434343;
}
.home .fenlei .tabs span{
	font-size: 120%;
	text-align: center;
	color:#fff;
	display: block;
	float: left;
	width: 25%;
	margin: 0;
	background: #ffce70;
	padding:3% 0;
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
	margin-right: 5%;
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