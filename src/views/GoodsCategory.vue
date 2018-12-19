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
    		<el-dropdown @command="handleCommand">
			  <span class="el-dropdown-link">
			    选择项目<i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown" >
			  	<el-dropdown-item 
			  	v-for="item in options"
			  	:command="item.value">{{item.label}}
			  	</el-dropdown-item>
			    <!-- <el-dropdown-item command="a">黄金糕</el-dropdown-item> -->
			  </el-dropdown-menu>
			</el-dropdown>
    	</li>
    	<li style="color:#666666;">智能排序 ></li>
    	<li style="color: #ff5571;">在线咨询 ></li>
    	<div style="clear:both;"></div>
    </div>
    <div class="shoplist">
      <ul>
        <li>
          <router-link to="/detail/1">
            <img src="http://192.168.0.117/src/images/20181204/729b2caf6c398feb814728f01ca95016.jpg" alt="">
            <h3>衡力瘦脸针</h3>
            <p>狂欢价 <span>¥680</span></p>
            <s>专柜价: ¥1680</s>
          </router-link>
        </li>
        <li>
          <router-link to="/detail/1">
            <img src="http://192.168.0.117/src/images/20181204/49f312163eab4821a265fe1d0dfa965a.jpg" alt="">
            <h3>衡力瘦脸针</h3>
            <p>狂欢价 <span>¥680</span></p>
            <s>专柜价: ¥1680</s>
          </router-link>
        </li>
        <li>
          <router-link to="/detail/1">
            <img src="http://192.168.0.117/src/images/20181204/45fdb9a409611c11e220be40c3466698.jpg" alt="">
            <h3>衡力瘦脸针</h3>
            <p>狂欢价 <span>¥680</span></p>
            <s>专柜价: ¥1680</s>
          </router-link>
        </li>
        <li>
          <router-link to="/detail/1">
            <img src="http://192.168.0.117/src/images/20181204/765668472498aa773e1b756afcbff451.jpg" alt="">
            <h3>衡力瘦脸针</h3>
            <p>狂欢价 <span>¥680</span></p>
            <s>专柜价: ¥1680</s>
          </router-link>
        </li>
        <div style="clear:both;"></div>
      </ul>
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
  		options: [],   //类别下拉
      	value1: '',
  	}
  },
  components: {
  	HeadTop,
    Footer
  },
  created(){
  	this.initData3();
  },
  mounted() {
  },
  methods: {
  	handleCommand(command) {
      this.$message('click on item ' + command);
    },
    async initData3(){
      this.axios.post('?category')
      .then((response)=> {
        // console.log(response.data);
        if (response.status==200) {
          //获取到分类数据
          this.options = response.data;
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
