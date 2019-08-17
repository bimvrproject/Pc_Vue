<template>
	<div>
				<el-main>
			<!-- 除去侧边栏的剩余部分 -->
			<!-- 右侧登录标识 -->
			<div class="login-parent">
				<div class="top-right"> 
				</div>
			</div>
			
				<!-- 右侧top部分 -->
				<div class="hometop" v-show="hometop">
						<!-- 下拉菜单---项目 -->
					<el-dropdown style="float: left; margin-left: 5%;">			
						<span class="el-dropdown-link">
							<img class="xmimg" src="../../assets/image/sshouse.png"/>
							<router-link to="/"><i class="xm">项目</i></router-link>
							<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
					<!-- 	<Newjian v-show="xianyin"></Newjian> -->
					</el-dropdown>
					<!-- 下拉菜单---项目--结束 -->
					<!-- 下拉菜单---社区 -->
					<el-dropdown style="float: left; margin-left: 5%;">
						<span class="el-dropdown-link">
							<img class="sqimg" src="../../assets/image/shequ.png"/> 
							<i class="sq">社区</i>
							<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>交友</el-dropdown-item>
							<el-dropdown-item disabled>消息</el-dropdown-item>
							<el-dropdown-item divided>互动</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<!-- 下拉菜单---社区--结束 -->
					<!-- 下拉菜单---更多 -->
					<el-dropdown style="float: left; margin-left: 5%;">
						<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> -->
						<span class="el-dropdown-link">
							<img class="moreimg" src="../../assets/image/more@2x.png"/> 
							<i class="more">更多</i>
							<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>更改密码</el-dropdown-item>
							<el-dropdown-item disabled>版本 1.0</el-dropdown-item>
							<el-dropdown-item divided>注销登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<!-- 下拉菜单---更多--结束 -->
				</div>
				<div class="beijinmoxin">
					<h2>上传建筑结构的材料清单</h2>
				</div>
        <!-- 上传建筑结构材料清单 -->
		</el-main>
	</div>
</template>
<script>
  import api from "@/api/api.js";
	import qs from "qs";
	import Newjian from "./newjian";
	import Xunilogo from "./xunilogo";
	 export default {
	    data() {
	      return {
				panduan:false,
				xianyin : false,
				xianyinxuni:false,
				hometop:true,
	      }
		},
		components:{
			Newjian,
			Xunilogo,
		},
		created() {
			// this.$eventbus.$on("shows",()=>{
			// 	this.xianyinxuni=true;
			// });
			// this.$eventbus.$on("showyin",()=>{
			// 	this.xianyinxuni=false;
			// });
			// // console.log(this.xianyinxuni)
			// this.$eventbus.$on("hometop",()=>{
			// 	this.hometop=true;
			// });
			// this.$eventbus.$on("xianyin",()=>{
			// 	this.xianyin=true;
			// });
			this.$eventbus.$emit("shows")
		},
		mounted() {

	  },
		methods: {
			fnxuni(){
				this.xianyinxuni = !this.xianyinxuni;
					this.xianyin = false;
			},
			fns(){
				this.xianyin = !this.xianyin;
				// this.xianyinxuni = false;
				this.$eventbus.$emit("showyin");
			},
			// fnxuni(){
			// 	this.xianyin = false;
			// },
			fn4(){
					this.loginWindow='display:block';
			},
		}
	}
</script>

<style>
	*{padding:0;margin:0}
	/* 	html{height:100%};
		body{height:100%}; */
		.zong{
			width:1920px;
			height:1080px;
		/* 	background:green; */
			background-image: url(../../assets/image/bg@2x.png);
		  background-repeat: no-repeat;
		  background-size:100% 100%;
	   	background-attachment: fixed;
		}
		.el-main {
			width:1703px  !important;
			height: 1080px  !important;
			/* padding-left:50px; */
			/* padding-top:29px; */
			padding:0 !important;
		}
		/*top右上角 */
		.top-right{
			width:282px;
			height:29px;
		/* 	background:blue; */
			float:right;
		}
		.login-img{
			cursor:pointer;
		}
		/*登录右上角的登录 */
		.login-parent{
			width:1703px;
			height:29px;
		/* 	background:red; */
		}	
		.imgzong{
			width:160px;
			height:25px;
			/* background:green; */
			float:left;
			padding-top:4px;
		}
		.dengl{
			float:left;
			margin-left:3px;
			font-size:14px;
			color: #2180ED;
		}
		.guanbi-toprig{
			width:120px;
			height:29px;
			/* background:red; */
			float:left;
		}
		.toprig1,.toprig3{
			display:block;
			width:36px;
			height:27px;
		/* 	background:blue; */
			float:left;
			border:1px solid #2180ED;
		}
		.toprig2{
			display:block;
			width:36px;
			height:27px;
			/* 	background:blue; */
			float:left;
			border-top:1px solid #2180ED;
			border-bottom:1px solid #2180ED;
		}
		/* 主页top部分*/
		.hometop{
			width:1703px;
			height:57px;
		/* 	background:plum; */
		}
		/* 左侧边栏 */
		.left{
			width:217px;
			height:987px;
			/* background:blue; */
		}
		.logo{
			width:117px;
			height:28px;
			padding-left:50px;
			/* background:black; */
		  padding-top:29px;
			/* left:15px; */
			/* background:red; */
		}
		.lefttop{
			width:216px;
			height:60px;
		/* 	background-color:green;
			background: url(../../assets/image/homecebian8@2x.png); */
		}
	 .el-dropdown-link {
	    cursor: pointer;
	    color: #333333;
	  }
		.xmimg{
			width:27px;
			height:26px;
			padding-left:80px;
			padding-top:2px;
		}
		.xm{
			width:38px;
	    height:17px;
	    font-size:20px;
	    font-family:MicrosoftYaHei;
	    font-weight:400;
	    color:rgba(51,51,51,1);
			font-size:20px;
			font-style:normal;
			padding-left:5px;
			line-height:17px;
		}
		.sqimg{
			width:27px;
			height:26px;
		}
		.sq{
			width:40px;
			height:18px;
			color:#2180ED;
			font-size:20px;
			font-family:MicrosoftYaHei;
			font-weight:400;
			padding-left:6px;
			font-style:normal;
		}
		.moreimg{
			width:25px;
			height:25px;
		}
		.more{
			width:39px;
			height:19px;
			font-size:20px;
			font-style:normal;
			padding-left:5px;
			font-family:MicrosoftYaHei;
	    font-weight:400;
	    color:rgba(51,51,51,1);
		}
		.el-dropdown-link2 {
	    cursor: pointer;
	    color: #2180ED;
	  }
	  .el-icon-arrow-down {
	    font-size: 20px;
	  }
	
</style>

