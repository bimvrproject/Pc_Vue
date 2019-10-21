<template>
	<div>
		<div class="zonglogin"></div>
		<div class="lefttop">
			<div class="left">
				<img class="logo" src="../../assets/image/jinghekeji.png" />
				<Xunilogo v-show="xianyinxuni"></Xunilogo>
			</div>
		</div>
		<div>
			<!-- 除去侧边栏的剩余部分 -->
			<!-- 右侧登录标识 -->
			<!-- <Zheader v-show="zheaderxy"></Zheader> -->
			<!-- 右侧top部分 -->
			<div class="hometoplo" v-show="hometop">
				<!-- 下拉菜单---项目 -->
				<div  class="xmtop">
					<img  src="../../assets/image/bluefz.png" alt="" style="width:0.84375rem;height:0.8125rem;margin-right:0.16rem;float:left;">
		         <span style="color:#2180ED;vertical-align:bottom;">项目</span><i class="fa fa-angle-down shouye" style="color:rgba(0,0,0,.5);font-size:0.9rem;
						 display:inline-block;vertical-align: middle;margin-left:0.16rem;"></i>
	     	  <div class="newxmtop">
			       <Newjian></Newjian>
		     </div>
			</div>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left;margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fncomenter()" @mouseenter="fnnew()" @mouseleave="fnhsqlev()">
						<img class="sqimg" :src="sqtb" />
						<i class="sq" ref="sqcol" :style="sqcolor">社区</i>
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->
				<!-- 下拉菜单---更多 -->
				<div class="moretop" style="height: 0.93125rem‬;" @mouseenter="fnmor()" @mouseleave="fnmorlev()">
					<img  :src="moretb"  alt="" style="width:0.84375rem;height:0.8125rem;margin-right:0.16rem;float:left;">
					   <span class="hgmore">更多</span><i class="fa fa-angle-down shouye" style="color:rgba(0,0,0,.5);font-size:0.9rem;display:inline-block;
						 vertical-align: middle;margin-left:0.16rem;">
						 </i>
						 <div class="moo" style="margin-top:0.1rem;">
						 	<div class="mores1">
						 		<a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a>
						 	</div>
						 	<div class="mores1" @click="fnabout">联系我们</div>
						 	<div class="moresb">版本号: v 1.0.1</div>
						 </div>
				</div>
				<!-- 更多下拉 -->
				<!-- <More v-show="more"></More> -->
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 悬浮登录窗口 --结束 -->
		</div>
		<!-- 点击联系我们的遮罩 -->
		<div style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);"
		 v-show="abouts" @click="fnaboutmark">

		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	/*eslint-disable*/
	import api from '@/api/api.js';
	import axios from 'axios';
	import qs from 'qs';
	import Newjian from './newjian';
	import Xunilogo from './xunilogo';
	// import More from './more';
	// import Zheader from './header';
	// import Release from './release';
	export default {
		data() {
			return {
				username: '',
				password: '',
				loginWindow: '',
				checked: '',
				panduan: false,
				xianyin: false,
				xianyinxuni: false,
				hometop: true,
				title: '12345678901',
				box1: true,
				xmtb: require('../../assets/image/sshouse.png'),
				sqtb: require('../../assets/image/sq@2x.png'),
				moretb: require('../../assets/image/more@2x.png'),
				xmxl: require('../../assets/image/shang.png'),
				lmore: require('../../assets/image/pmjtxia.png'),
				sqcolor: 'color: #333333',
				//发布组件
				release: false,
				//新建项目
				newxy: false,
				//总的等陆头部
				// zheaderxy:true
				// 联系我们
				abouts: false,
			};
		},
		components: {
			Newjian,
			Xunilogo,
			// More,
			// Zheader
			// Release
		},
		created() {
			this.$eventbus.$on('shows', () => {
				this.xianyinxuni = true;
			});
			this.$eventbus.$on('showyin', () => {
				this.xianyinxuni = false;
			});
			// console.log(this.xianyinxuni)
			this.$eventbus.$on('hometop', () => {
				this.hometop = true;
			});
			this.$eventbus.$on('xianyin', () => {
				this.xianyin = true;
			});
			this.$eventbus.$on('changetitle', str => {
				this.title = str;
			});
			this.$eventbus.$on('xmcolor', () => {
				this.xmtb = require('../../assets/image/bluefz.png');
				this.$refs.xmcol.style.color = '#2180ED';
				this.sqtb = require('../../assets/image/sq@2x.png');
				this.this.$refs.xmcol.style.color = '#333333';
				this.sqcolor = 'color:#333';
			});
		},
		methods: {
			// 点击联系我们
			fnabout() {
				this.$eventbus.$emit('abouts');
				this.abouts = true
			},
			// 点击联系之后出现的遮罩
			fnaboutmark() {
				this.$eventbus.$emit('aboutsbi');
				this.abouts = false;
			},
			// 点击项目
			// fndianji() {
			// 	this.$router.push('/Login');
			// 	// this.$router.go(0)
			// },
			// fns() {
			// 	this.xianyin = !this.xianyin;
			// 	// this.xianyinxuni = false;
			// 	// this.$eventbus.$emit('showyin');
			// 	// this.$router.push('/Login/newjian');
			// 	// this.newxy = true
			// 	// this.xmtb = require('../../assets/image/bluefz.png');
			// 	// this.sqtb = require('../../assets/image/sq@2x.png');
			// 	// this.moretb = require('../../assets/image/more@2x.png');
			// 	// this.lmore = require('../../assets/image/pmjtxia.png');
			// 	// this.xmxl = require('../../assets/image/shang.png');
			// 	// this.$refs.xmcol.style.color = '#2180ED';
			// 	// this.sqcolor = 'color:#333333';
			// 	// this.$refs.gdcol.style.color = '#333333';
			// },
			//划过社区
			fnnew() {
				this.newxy = false;
				this.sqtb = require('../../assets/image/shequ.png')
				this.sqcolor = "color:#2180ED"
			},
			// 移出社区的时候
			fnhsqlev(){
				this.sqtb = require('../../assets/image/sq@2x.png'),
				this.sqcolor = "color:#333333"
				},
			// 移入
			 fnmor(){
				 this.moretb = require('../../assets/image/moress.png')	 
			 },
			// 移出更多
			fnmorlev(){
				 this.moretb = require('../../assets/image/more@2x.png')	 
			},
			//点击社区
			fncomenter() {
				this.$router.push('/');
				// this.sqtb = require('../../assets/image/shequ.png');
				// this.sqcolor = 'color:#2180ED';
				// this.$refs.xmcol.style.color = '#333333';
				// this.xmtb = require('../../assets/image/sshouse.png');
				// this.$refs.gdcol.style.color = '#333333';
				// this.moretb = require('../../assets/image/more@2x.png');
			},
		}
	};
</script>

<style>
	/* 划过项目 */
 .xmtop:hover .newxmtop{
	 display:block;
 }
 /* 划过更多 */
 .moretop:hover .moo{
	  display:block;
 }
 .moretop:hover .hgmore{
	 color:#2180ED
 }
 .moretop:hover .shouye{
 	 transform:rotate(180deg);
 }
 .xmtop:hover .shouye{
	 transform:rotate(180deg);
 }
 .xmtop{
	 position:relative;
	 float: left;
	/* margin-left:-1.4rem; */
	 font-size: 0.625rem;
	 font-family: MicrosoftYaHei;
	 font-weight: 400;
	 font-style: normal;
	 line-height: 0.93125rem;
	/* background-color:red; */
	/* width: 2.9375rem; */
	 height: 0.63125rem‬;
	 margin-top:0.380rem;
	 margin-left:0.9rem;
	 text-align:left;
	 cursor:pointer;
	 margin-right:0.03rem;
 }
 .newxmtop{
	 display:none;
	 margin-top:0.5rem;
	 margin-left:-8.2rem;
	/* position:absolute;
	 left:-7.78rem;
	top:1.4rem; */
 }
 /* 社区总 */
 .moretop{
	 position:relative;
	  float: left;
	  margin-left:-1.4rem;
	  font-size: 0.625rem;
	  font-family: MicrosoftYaHei;
	  font-weight: 400;
	 /* color:#2180ED; */
	  font-style: normal;
	  line-height: 0.93125rem;
	 /* background-color:red; */
	  margin-top:0.380rem;
	  margin-left:1.68rem;
	  text-align:left;
	  cursor:pointer;
 }
		.newxl{	
	/* 	background: rgba(255, 255, 255, 0.2); */
		width:0rem;
		height:0rem;
		padding:0 !important;
		margin:0 !important;
		position:absolute;
		top:2.3rem !important;
		left:0rem !important;
		border:none !important;
	}
	/* .el-dropdown-menu{
		position:absolute;
		top:2.3rem !important;
		left:0rem !important;
		border:none !important;
	} */
	.popper__arrow{
		border-width:0rem !important;
		left:0 !important;
		overflow:hidden;
	}
	.lomore {
		background: rgba(225, 225, 225, 0.3);
		width:4.75rem;
		/* background:red; */
		position: absolute;
		top: 1.825rem !important;
		left: 16.175rem !important;
		border: none;
		padding: 0.1rem;
		border-radius:0rem !important;
	}
	.moo {
		width:4.75rem;
		/* height: 195px; */
	/* 	background: url(../../assets/image/mores.png); */
	  background:rgba(225,225,225,.2);
		padding-left: 0.2rem;
		padding-right: 0.25rem;
		cursor: pointer;
		display:none;
	}
	.hgmore{
		color:#333333;
	}
	.mores1 {
		width: 4.65rem;
		height: 0.9rem;
		border-bottom: 1px solid rgba(0,0,0,.2);
		text-align: left;
		line-height:0.9rem;
		color: #666666;
		font-size: 0.46rem;
		font-weight: 500;
	/* 	background:red; */
		padding-top:0.12rem;
	}
	.moresb {
		border: 0;
		text-align: left;
		line-height: 0.9rem;
		color: #666666;
		font-size: 0.46rem;
		font-weight: 500;
		/* 	background:red; */
	}
	a {
		color: #333333;
		text-decoration: none;
	}
	* {
		padding: 0;
		margin: 0;
	}
	body {
		width: 100%;
	}
	html {
		width: 100%;
	}
	.zonglogin {
		width: 59.9375rem;
		height: 33.65625rem;
		/* background:green; */
		background: url(../../assets/image/bjt.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.boxlo {
		width: 216px;
		height: 59px;
		background: rgba(225, 225, 225, 0.1);
	}
	.poxlo {
		width: 216px;
		height: 60px;
		background: url(../../assets/image/homecebian8@2x.png) no-repeat;
		background-size: 216px 60px;
	}

	.el-main {
		/* 	background-color:green; */
		/* padding-left:50px; */
		/* padding-top:29px; */
		padding: 0 !important;
	}

	.login-img1 {
		width: 20px;
		height: 18px;
		cursor: pointer;
		float: left;
		display: inline-block;
	}
	/* 保存 */
	.save {
		width: 48px;
		height: 22px;
		float: left;
		margin-top: 5px;
	}

	.save img {
		width: 100%;
		height: 100%;
	}

	/* 发布 */
	.release {
		width: 48px;
		height: 22px;
		float: left;
		margin-top: 5px;
		margin-left: 10px;
		margin-right: 18px;
	}

	.release img {
		width: 100%;
		height: 100%;
	}

	/* 主页top部分*/
	.hometoplo {
		/* width:46.875rem;
	height:1.78125rem; */
		position: absolute;
		top: 0.6rem;
		left:7.3rem;
		/* background:red; */
		line-height: 1.78125rem;
	}

	/* 左侧边栏 */
	.logo {
		width: 3.65625rem;
		height: 0.875rem;
		padding-left: 1.1825rem;
		padding-top: 0.90625rem;
		margin-left: 0.5625rem;
		/* background:red; */
		float:left;
	}
/* .left {
	width:6.78125rem;
	height:30.84375rem;
	padding-right:0.3125rem;
} */
	.lefttop {
		width: 6.75rem;
		height: 1.875rem;
		/* 	background-color:green; */
		/* 	background: url(../../assets/image/homecebian8@2x.png); */
		position: absolute;
		top: 0px;
		/* background:red; */
	}

	.el-dropdown-link {
		cursor: pointer;
	}

	.xmimg {
		width: 0.84375rem;
		height: 0.8125rem;
		padding-left: 2.5rem;
		padding-top: 0.0625rem;
	}

	.xm {
		width: 0.84375rem;
		height: 0.53125rem‬;
		font-size: 0.625rem;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color:#2180ED;
		font-style: normal;
		padding-left: 0.15625rem;
		line-height: 0.53125rem;
	}

	.sqimg {
		width: 0.84375rem;
		height: 0.8125rem;
	}

	.sq {
		width: 1.25rem;
		height: 0.5625rem;
		font-size: 0.625rem;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		padding-left: 0.1875rem;
		font-style: normal;
	}
	.moreimg {
		width: 0.78125rem‬;
		height: 0.78125rem;
	}
	.more {
		width: 1.21875rem;
		height: 0.59375rem;
		font-size: 0.625rem;
		font-style: normal;
		padding-left: 0.15625rem;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}
	.el-dropdown-link2 {
		cursor: pointer;
		/*  color: #2180ED; */
	}
	.el-icon-arrow-down {
		font-size: 20px;
	}
</style>
