<template>
  <div class="footer">
    <ul>
    	<li><router-link to="/"><img src="../assets/footer_01.png" alt="logo"></router-link></li>
		<li>
			<router-link to="/">
				<img src="../assets/footer_02.png" alt="">
				<p>消息</p>
			</router-link>
		</li>
		<li>
			<router-link to="/">
				<img src="../assets/footer_03.png" alt="分期">
				<p>分期</p>
			</router-link>
		</li>
		<li>
			<router-link to="/">
				<img src="../assets/footer_04.png" alt="优惠">
				<p>优惠</p>
			</router-link>
		</li>
		<li>
			<router-link to="/">
				<img src="../assets/footer_05.png" alt="预约">
				<p>预约</p>
			</router-link>
		</li>
		<div style="clear:both;"></div>
    </ul>
    <hr style="height:6.5rem;">
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer{

}
.footer ul{
	background: #4e4e4e;
    width: 100%;
    max-width: 640px;
    position: fixed;
    bottom: 0;
    z-index: 1;
}
.footer ul li:nth-child(1){
	width: 17.63%;
}
.footer ul li{
	float: left;
	width: 16.22%;
	margin: 0 1% 0 2%;
}

.footer a{text-decoration: none;color:#fff;padding: 1rem 1rem;}

</style>
