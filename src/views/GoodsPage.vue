<template>
  <div class="GoodsPage">
	<HeadTop/>
	<div class="goods">
		<img src="http://192.168.0.117/src/images/20181204/729b2caf6c398feb814728f01ca95016.jpg" alt="">
		<p>【玻尿酸去黑眼圈】【铂金瑞蓝玻尿酸1ml】风靡中国，变美不留痕迹(支持现场验真伪，限购1支)</p>
		<div class="pay">
			<span>¥680<s>原价: ¥1680</s></span>
			<p>已预约：3991</p>
			<br>
			<a href="javascript:void(0);">立即购买</a>
		</div>

		<div class="tip1">
			<img src="../assets/tip_01.png" alt="" class="tip_0">
			<ul>
				<li>项目</li>
				<li><span>•</span>玻尿酸</li>
				<li>时间</li>
				<li><span>•</span>支付后30天内到院</li>
				<li>提示</li>
				<li><span>•</span>小仙女们注意啦~ 此商品为热玛吉第四代（黄金治疗头）：全面部活动价38000</li>
			</ul>
			<img src="../assets/doctor_01.png" alt="医生" class="tip_0" style="margin-bottom:0">
		</div>
		<div class="content">
			<img src="../assets/tip_02.png" alt=""  class="tip_0">
		</div>
		
	</div>
    
    <Footer/>
  </div>
</template>

<script>
import HeadTop from '@/components/HeadTop.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'GoodsPage',
  data() {
  	return {
  		title:'商品页',
  	}
  },
  mounted() {
  	document.title=this.title;
  },
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

<style scoped>
.goods p{
	padding:2% 4%;
	font-size:1.3rem;
	text-align: left;
}
.goods .pay span{
	float:left;
	display: block;
	width: 60%;
	padding-left:6%;
	font-size: 2.5rem;
	color:red;
	text-align: left;
}
.goods .pay s{
	padding-left:12%;
	font-size: 1.3rem;
	color:#3b3b3b;
}
.goods .pay p{
	float:left;
	padding:2% 0;
	width: 27%;
	font-size:1.3rem;
	text-align: right;
}
.goods .pay a{
	clear:both;
	display: block;
	margin: auto;
	margin-top:7%;
	width: 90%;
	background: #ff6600;
	border-radius: 0.5rem;
	color:#fff;
	text-decoration:none;
	padding:1% 0;
	font-size:1.3rem;
}
.goods .tip_0{
	margin: 1.5rem 0;
}
.goods .tip1 ul{
	width: 80%;
	margin: auto;
}
.goods .tip1 ul li{
	text-align: left;
	font-size: 1.3rem;
	line-height: 2rem;
}
.goods .tip1 ul li:nth-child(even) span{
  color:#ff5571;
  margin-right:1rem;
}
</style>
