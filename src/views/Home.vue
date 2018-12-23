<template>
  <div class="home">
  	<!-- <scroller
      :on-refresh="refresh"
      :on-infinite="infinite"
      distance="5%"
      refresh-layer-color="#4b8bf4"
      loading-layer-color="#ec4949"
    >
    <svg class="spinner" style="stroke: #4b8bf4;" slot="refresh-spinner" viewBox="0 0 64 64">
       <g stroke-width="7" stroke-linecap="round"><line x1="10" x2="10" y1="27.3836" y2="36.4931"><animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate></line><line x1="24" x2="24" y1="18.6164" y2="45.3836"><animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate></line><line x1="38" x2="38" y1="16.1233" y2="47.8767"><animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate></line><line x1="52" x2="52" y1="16" y2="48"><animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate></line></g></svg> -->

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
    	  		<li><router-link to="/ip_cat/1"><img src="../assets/icon/icon_01.png" alt="双眼皮"><p>双眼皮</p></router-link></li>
    	  		<li><router-link to="/ip_cat/2"><img src="../assets/icon/icon_02.png" alt="假体隆鼻"><p>假体隆鼻</p></router-link></li>
    	  		<li><router-link to="/ip_cat/18"><img src="../assets/icon/icon_03.png" alt="美白嫩肤"><p>美白嫩肤</p></router-link></li>
    	  		<li><router-link to="/ip_cat/14"><img src="../assets/icon/icon_04.png" alt="净肤祛斑"><p>净肤祛斑</p></router-link></li>
    	  		<li><router-link to="/ip_cat/6"><img src="../assets/icon/icon_05.png" alt="自体脂肪"><p>自体脂肪</p></router-link></li>
    	  		<li><router-link to="/ip_cat/4"><img src="../assets/icon/icon_06.png" alt="吸脂瘦身"><p>吸脂瘦身</p></router-link></li>
    	  		<li><router-link to="/ip_cat/7"><img src="../assets/icon/icon_07.png" alt="瘦脸针"><p>瘦脸针</p></router-link></li>
    	  		<li><router-link to="/ip_cat/8"><img src="../assets/icon/icon_08.png" alt="玻尿酸"><p>玻尿酸</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	  <swiper-slide>
    	  	<ul>
    	  		<li><router-link to="/ip_cat/1"><img src="../assets/icon/icon_09.png" alt="眼部"><p>眼部</p></router-link></li>
    	  		<li><router-link to="/ip_cat/2"><img src="../assets/icon/icon_10.png" alt="鼻部"><p>鼻部</p></router-link></li>
    	  		<li><router-link to="/ip_cat/3"><img src="../assets/icon/icon_11.png" alt="胸部"><p>胸部</p></router-link></li>
    	  		<li><router-link to="/ip_cat/5"><img src="../assets/icon/icon_12.png" alt="线雕"><p>线雕</p></router-link></li>
    	  		<li><router-link to="/ip_cat/4"><img src="../assets/icon/icon_13.png" alt="吸脂瘦身"><p>吸脂瘦身</p></router-link></li>
    	  		<li><router-link to="/ip_cat/6"><img src="../assets/icon/icon_14.png" alt="自体脂肪"><p>自体脂肪</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	  <swiper-slide>
    	  	<ul>
    	  		<li><router-link to="/ip_cat/13"><img src="../assets/icon/icon_15.png" alt="纹绣"><p>纹绣</p></router-link></li>
    	  		<li><router-link to="/ip_cat/14"><img src="../assets/icon/icon_16.png" alt="净肤祛斑"><p>净肤祛斑</p></router-link></li>
    	  		<li><router-link to="/ip_cat/15"><img src="../assets/icon/icon_17.png" alt="紧肤"><p>紧肤</p></router-link></li>
    	  		<li><router-link to="/ip_cat/16"><img src="../assets/icon/icon_18.png" alt="脱毛"><p>脱毛</p></router-link></li>
    	  		<li><router-link to="/ip_cat/17"><img src="../assets/icon/icon_19.png" alt="祛痘"><p>祛痘</p></router-link></li>
    	  		<li><router-link to="/ip_cat/18"><img src="../assets/icon/icon_20.png" alt="美白嫩肤"><p>美白嫩肤</p></router-link></li>
    	  	</ul>
    	  </swiper-slide>
    	  <swiper-slide>
    	    <ul>
    	  		<li><router-link to="/ip_cat/7"><img src="../assets/icon/icon_21.png" alt="瘦脸针"><p>瘦脸针</p></router-link></li>
    	  		<li><router-link to="/ip_cat/8"><img src="../assets/icon/icon_22.png" alt="玻尿酸"><p>玻尿酸</p></router-link></li>
    	  		<li><router-link to="/ip_cat/9"><img src="../assets/icon/icon_23.png" alt="注射除皱"><p>注射除皱</p></router-link></li>
    	  		<li><router-link to="/ip_cat/10"><img src="../assets/icon/icon_24.png" alt="注射隆鼻"><p>注射隆鼻</p></router-link></li>
    	  		<li><router-link to="/ip_cat/11"><img src="../assets/icon/icon_25.png" alt="丰下巴"><p>丰下巴</p></router-link></li>
    	  		<li><router-link to="/ip_cat/12"><img src="../assets/icon/icon_26.png" alt="瘦腿针"><p>瘦腿针</p></router-link></li>
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
    		<li v-for="item in shops" >
          <router-link :to="'/detail/' + item.id">
            <img :src="'http://192.168.0.117' +item.logo" :alt="item.name">
            <h3>{{ item.name }}</h3>
            <p>狂欢价 <span>¥{{ item.id }}</span></p>
            <s>专柜价: ¥{{ item.money }}</s>
          </router-link>
          <a href="javascript:void(0);"><img src="../assets/swt_01.png" alt="聊天"></a>
        </li>
    		<div style="clear:both;"></div>
    	</ul>
    </div>

    <div class="loading" :style="'display:' + display">
      <svg class="spinner" style="fill: #ec4949;" slot="infinite-spinner" viewBox="0 0 64 64">
        <g><circle cx="16" cy="32" stroke-width="0" r="3"><animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate></circle><circle cx="32" cy="32" stroke-width="0" r="3.09351"><animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate></circle><circle cx="48" cy="32" stroke-width="0" r="4.09351"><animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate></circle></g></svg>
    </div>
    
    		<!-- </scroller> -->
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
    	 shops:[],
       persons: [],
    	 nums: 0,
       display: 'block',
    	 pagenum: 1,
       bottoms: true,
    	 limit1: 0,
    	 limit2: 4,
       allLoaded: false, 
  	   swiperOption: {//swiper3
  	   autoplay: 3000,
  	   speed: 1000,
  	   on: {
  	  	slideChangeTransitionStart: function(){
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
  this.scroll(this.persons)
  },
  created(){
  	this.initData()
  	this.initDatanums()
  },
  components: {
  	HeadTop,
    Footer,
    swiper,
    swiperSlide
  },
  methods: {
      scroll(person) {
        let isLoading = false
        window.onscroll = () => {
          // 距离底部200px时加载一次
          let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200
          if (bottomOfWindow && isLoading == false) {
            isLoading = true
           
           if (this.shops.length >= 10) {
           // if (this.shops.length >= this.nums) {
            console.log('没有更多了')
            return;
           }else{
              this.limit1 = this.limit1 + 4;
                // console.log(this.limit1);
                this.initData();
                // this.bottoms = false;
                console.log(this.pagenum++);
              // setTimeout(() => {
                
              // }, 1500)
            }
            isLoading = false
          }
        }
      },
      refresh(done) {
        this.limit1 = 0;
        this.shops = [];
        this.initData();
      	done();
      },

      infinite(done) {
        // if (this.bottoms == false) {
        //   console.log(this.bottoms);
        //   return;
        // }
      	if (this.shops.length >= this.nums) {
      		// console.log(this.shops.length);
      		setTimeout(() => {
          	done(true)
            console.log('jie');
            return;
          })
      	}else{
      		setTimeout(() => {
        		this.limit1 = this.limit1 + 20;
            console.log(this.limit1);
        		this.initData();
            // this.bottoms = false;
        		setTimeout(() => {
        			console.log(this.pagenum++);
        	  	  done()
        	  	})
        	}, 1500)
      	}
      },
      async initDatanums(){
      	this.axios.post('?nums')
      	.then((response)=> {
      		if (response.status==200) {
      			this.nums = response.data.nums;
      		}
      	});
      },
      async initData(){
	  // this.axios.post('?shophot&proId=' + this.$route.params.id + '&limit1=' + limit1 + '&limit2=' + limit2)
      this.axios.post('?shophot&limit1=' + this.limit1 + '&limit2=' + this.limit2)
      .then((response)=> {
        // console.log(response.data);
        if (response.status==200) {
          //获取到分类数据
          // console.log(response.data.length);
          for (var i = 0; i < response.data.length; i++) {
          	// console.log(response.data[i].id)
          	this.shops.push(response.data[i]);
          }
          // this.shops = response.data;
          return true;
        }else{
          this.$notify.error({
            title: '错误',
            message: '数据获取失败',
            offset: 100
          });
          return false;
        }
      })
      .catch((error)=> {
        console.log(error);
        this.$notify.error({
          title: '错误',
          message: '数据获取失败',
          offset: 100
        });
        return false;
      });
    },
   }
  
}
</script>

<style scoped>
li{
    float: left;
}
/*.home {
  position: relative;
}
.home ._v-container {
  height: auto!important;
}*/
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
.home .loading svg{
  margin: auto;
  width: 50%;
  width: 11%;
  margin-bottom: 5rem;
}
/*.home .hot li:nth-child(1){
	width: 7.88em;
	height: 7.88em;
	background: url('../assets/icon.png') 0 0 no-repeat;
	background-size: 35rem 70rem;
}*/
</style>