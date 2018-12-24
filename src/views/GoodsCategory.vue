<template>
  <div class="GoodsCategory">
  	<HeadTop/>
    <img src="../assets/shoplist.jpg" alt="">
    <div class="fenlei">
    	<li>
        	<!-- <el-select v-model="value1"  @change="handleChange" placeholder="产品类别">
        	  <el-option
        	    v-for="item in options"
        	    :key="item.value"
        	    :label="item.label"
        	    :value="item.value">
        	  </el-option>
        	</el-select> -->

    		<el-dropdown @command="handleCommand"  trigger="click">
			  <span class="el-dropdown-link">
			    {{ fenlei }}<i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown" >
			  	<el-dropdown-item v-for="item in options" :label="item.label" :command="item.value">{{item.label}}</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown> 
    	</li>
    	<li style="color: #666666;"><router-link to="/ip_cat">智能排序 ></router-link></li>
    	<li style="color: #ff5571;"><router-link to="">在线咨询 ></router-link></li>
    	<div style="clear:both;"></div>
    </div>
    <div class="shoplist">
      <ul>
        <li v-for="item in shops" >
          <router-link :to="'/detail/' + item.id">
            <img v-lazyload="'http://192.168.0.117' + item.logo" src="../assets/shopback.svg" :alt="item.name">
            <h3>{{ item.name }}</h3>
            <p>狂欢价 <span>¥{{ item.ymoney }}</span></p>
            <s>专柜价: ¥{{ item.money }}</s>
          </router-link>
          <a href="javascript:void(0);"><img src="../assets/swt_01.png" alt="聊天"></a>
        </li>
        <div style="clear:both;"></div>
      </ul>
    </div>
    <div class="loading" >
      <p  v-if="display === true">我是有底线的</p>
      <svg v-else class="spinner" style="fill: #ec4949;" slot="infinite-spinner" viewBox="0 0 64 64">
        <g><circle cx="16" cy="32" stroke-width="0" r="3"><animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate></circle><circle cx="32" cy="32" stroke-width="0" r="3.09351"><animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate></circle><circle cx="48" cy="32" stroke-width="0" r="4.09351"><animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate></circle></g></svg>
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
  data(){
  	return{
  		title:'商品分类',
  		fenlei: '选择项目',
  		shops: [],
      persons: [],
      nums: 0,
      display: false,
      pagenum: 1,
      bottoms: true,
      limit1: 0,
      limit2: 4,
		  options: [
			   {'value':'1','label':'眼部'},
			   {'value':'2','label':'鼻部'},
			   {'value':'3','label':'胸部'},
			   {'value':'4','label':'吸脂瘦身'},
			   {'value':'6','label':'自体脂肪'},
			   {'value':'7','label':'瘦脸针'},
			   {'value':'8','label':'玻尿酸'},
			   {'value':'14','label':'净肤祛斑'},
			   {'value':'18','label':'美白嫩肤'},
		  ],
  	}
  },
  mounted() {
  	document.title=this.title;
    this.scroll(this.persons);
    // console.log(this.nums);
  },
  components: {
  	HeadTop,
    Footer
  },
  watch: {
    '$route' (to, from) {
      // this.$route.params.id = to;
      // this.$router.push('/ip_cat/'+ to); 
      // console.log(to);
      this.shops = [];
      this.initDatanums();
      this.initData();
    }
  },
  created(){
    this.initDatanums()
    this.initData();
  },
  // mounted() {
  // },
  methods: {
    scroll(person) {
      let isLoading = false
      window.onscroll = () => {
        // 距离底部200px时加载一次
        let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200
        if (bottomOfWindow && isLoading == false) {
          isLoading = true
         
         // if (this.shops.length >= 10) {
         if (this.shops.length >= this.nums) {
          console.log('没有更多了');
          this.display = true;
          return;
         }else{
            this.limit1 = this.limit1 + 4;
              // console.log(this.limit1);
              this.initData();
              // this.bottoms = false;
              console.log('第' + this.pagenum++ + '页');
            // setTimeout(() => {
              
            // }, 1500)
          }
          isLoading = false
        }
      }
    },
  	handleCommand(command,label) {
       this.fenlei = label.$attrs.label;
       this.$router.push('/ip_cat/'+ command);
       this.$message('切换成功');
    },
    async initDatanums(){
      if(this.$route.params.id == undefined){
        var sql = '?nums';
      }else{
        var sql = '?nums&cid=' + this.$route.params.id;
      }
      this.axios.post(sql)
      .then((response)=> {
        if (response.status==200) {
          if (response.data.nums == 0) {
            this.display = true;
            return false;
          }else{
            this.nums = response.data.nums;
          }
        }
      });
    },
    async initData(){
      if(this.$route.params.id == undefined){
        var sql = '&limit1=' + this.limit1 + '&limit2=' + this.limit2;
      }else{
        var sql = '&cid=' + this.$route.params.id + '&limit1=' + this.limit1 + '&limit2=' + this.limit2;
      }
      this.axios.post('?ip_cat' + sql)
      .then((response)=> {
        if (response.status==200) {
          //获取到分类数据
          for (var i = 0; i < response.data.length; i++) {
            this.shops.push(response.data[i]);
          }
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
    handleChange(value) {
       console.log(value);
    },
    handleSelect(item) {
      console.log(item);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.fenlei{padding: 2% 0;}
.fenlei li{
	display: block;
	width: 33%;
	float: left;
	font-size: 1.2rem;
}
.fenlei .el-dropdown span{
	display: contents;
	color: #ff5571;
	font-size: 1.2rem;
}
a{
  color: #ff5571;
  text-decoration: none;
}
/*.fenlei .el-dropdown ,.fenlei .el-select .el-input .el-select__caret{
    color: #ff5571;
    font-size: 1rem;
}
.fenlei .el-select .el-input.is-focus .el-input__inner{
     border-color: #fff!important;
}
.fenlei .el-input__inner{
	color: #ff5571;
	font-size: 1rem;
	border: 0 solid #dcdfe6!important;
}*/

/*.fenlei input::-webkit-input-placeholder{color: #ff5571;}
.fenlei input:-moz-placeholder{color: #ff5571;}
.fenlei input::-moz-placeholder {color: #ff5571;}
.fenlei input:-ms-input-placeholder {color: #ff5571;}*/
.shoplist li{
    float: left;
}
</style>
