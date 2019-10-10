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
				<el-dropdown style="float: left;margin-left:-1.4rem;">
					<span class="el-dropdown-link" @mouseenter="fns()" @click="fndianji">
						<router-link to="/newjian">
							<img class="xmimg" src="../../assets/image/bluefz.png" alt="" />
							<i class="xm" ref="xmcol">项目</i>
						</router-link>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="xmxl" alt="" style="width: 100%;height: 100%;">
						</i>
					</span>
			  	<el-dropdown-menu slot="dropdown" class="newxl">
						<Newjian v-show="newxy"></Newjian>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left;margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fncomenter()" @mouseenter="fnnew">
						<img class="sqimg" :src="sqtb" />
						<i class="sq" ref="sqcol" :style="sqcolor">社区</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->

				<!-- 下拉菜单---更多 -->
				<el-dropdown style="float: left;margin-left:1.5rem;">
					<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> <-->
					<span class="el-dropdown-link" @mouseenter="sqq" style="position:relative;">
						<img class="moreimg" :src="moretb" />
						<i class="more" ref="gdcol">更多</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="lmore" alt="" style="width: 100%;height: 100%;">
						</i>
					</span>
					<el-dropdown-menu slot="dropdown" class="lomore">
						<div class="moo" @mouseleave="fnleave">
							<div class="mores1">
								<a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a>
							</div>
							<div class="mores1" @click="fnabout">联系我们</div>
							<div class="moresb">版本号: v 1.0.1</div>
						</div>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- 更多下拉 -->
				<!-- <More v-show="more"></More> -->
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目 -->
			<!-- <Newjian v-show="newxy"></Newjian> -->
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
				abouts: false
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
			fndianji() {
				this.$router.push('/Login');
			},
			fns() {
				this.xianyin = !this.xianyin;
				// this.xianyinxuni = false;
				// this.$eventbus.$emit('showyin');
				// this.$router.push('/Login/newjian');
				this.newxy = true
				// this.xmtb = require('../../assets/image/bluefz.png');
				// this.sqtb = require('../../assets/image/sq@2x.png');
				// this.moretb = require('../../assets/image/more@2x.png');
				this.lmore = require('../../assets/image/pmjtxia.png');
				// this.xmxl = require('../../assets/image/shang.png');
				// this.$refs.xmcol.style.color = '#2180ED';
				// this.sqcolor = 'color:#333333';
				// this.$refs.gdcol.style.color = '#333333';
			},
			//划过社区
			fnnew() {
				this.newxy = false
			},
			sqq() {
				// this.xmtb = require('../../assets/image/sshouse.png');
				// this.xmxl = require('../../assets/image/pmjtxia.png');
				// this.$refs.xmcol.style.color = '#333333';
				this.sqtb = require('../../assets/image/sq@2x.png');
				this.sqcolor = 'color:#333333';
				this.lmore = require('../../assets/image/shang.png');
			},
			// 移出更多
			fnleave() {
				this.lmore = require('../../assets/image/pmjtxia.png')
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
		/* 		height: 195px; */
		/* 	background: url(../../assets/image/mores.png); */
		padding-left: 0.1rem;
		padding-right: 0.25rem;
		cursor: pointer;
	}
	.mores1 {
		width: 4.65rem;
		height: 0.9rem;
		border-bottom: 1px solid #999999;
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
		top: 0.6375rem;
		left: 6.9375rem;
		/* background:red; */
		line-height: 1.78125rem;
	}

	/* 左侧边栏 */
	.logo {
		width: 3.65625rem;
		height: 0.875rem;
		padding-left: 1.8625rem;
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
		/* 	background-color:green;
			background: url(../../assets/image/homecebian8@2x.png); */
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
		height: 0.53125‬;
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
	/* 登录 */
	.login {
		width: 12.34375rem;
		height: 12.34375rem;
		position: absolute;
		z-index: 50;
		top: 10.5rem;
		left: 22.3125rem;
		/* 	margin-top: -228px;
	margin-left: -550px; */
		background-color: white;
		background: url(../../assets/image/beijing@2x.png) no-repeat;
		background-size: 12.34375rem 12.34375rem;
	}

	#popContainer {
		width: 59.9375rem;
		height: 33.65625rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.2);
	}


	.logintop {
		color: #2180ed;
		font-size: 14px;
		float: left;
	}

	.close {
		width: 0.445rem;
		height: 0.445rem;
		/* background: linear-gradient(180deg, rgba(255, 255, 255, 0.2)); */
		border-radius: 2px;
		position: absolute;
		right: -1.2625rem;
	}

	.close img {
		width: 0.445rem;
		height: 0.445rem;
	}

	.loginlogo {
		width: 3.53125rem;
		height: 0.85625rem;
		position: absolute;
		left: 4.256rem;
		top: 2.7062rem;
	}

	.loginlogo img {
		width: 100%;
		height: 100%;
	}

	.user {
		width: 6.03125rem;
		height: 0.838rem;
		position: absolute;
		top: 4.625rem;
		right: 3.2rem;
		background: #ffffff;
		/* 	background:red; */
	}

	.user input {
		width: 5.7rem;
		height: 0.838rem;
		float: left;
		padding-left: 0.3rem;
		border: none;
		line-height: 1.25rem;
		display: inline-block;
	}

	.yanzheng {
		display: block;
		/* width:3.0rem;
	height:0.5rem; */
		font-size: 0.3rem;
		font-weight: 400;
		font-family: MicrosoftYaHei;
		color: red;
		position: absolute;
		left: 4.6rem;
		top: 3.9rem;
	}

	.password {
		width: 6rem;
		height: 0.82rem;
		position: absolute;
		top: 6.19rem;
		right: 3.2rem;
		background: #ffffff;
		/* background:red; */
	}

	.password input {
		width: 3.6rem;
		height: 0.82rem;
		/* float: left; */
		padding-left: 0.25rem;
		border: none;
		line-height: 0.82rem;
		display: inline-block;
		float: left;
	}

	/* 登录按钮 */
	.Logon-button {
		width: 5.279rem;
		height: 0.8017rem;
		position: absolute;
		top: 7.7rem;
		left: 3.3875rem;
		background: url(../../assets/image/juxing3@2x.png);
		background-size: 5.279rem 0.8017rem;
		cursor: pointer;
		font-size: 0.3933rem;
		font-weight: 400;
		font-family: MicrosoftYaHei;
		color: #ffffff;
		text-align: center;
		line-height: 0.8017rem;
	}

	/* 还没有账号？马上注册 */
	.login-footer {
		width: 4.0375rem;
		height: 0.625rem;
		font-size: 0.375rem;
		position: absolute;
		top: 8.725rem;
		/* left:4.3rem; */
		right: 4.3rem;
	}

	.noreg {
		font-family: MicrosoftYaHei;
		display: inline-block;
		font-weight: 400;
		font-style: normal;
		font-size: 0.375rem;
		color: rgba(51, 51, 51, 1);
	}

	.login-reg {
		color: #2180ed;
		font-family: MicrosoftYaHei;
		display: inline-block;
		font-weight: 400;
		font-size: 0.333rem;
		font-style: normal;
		cursor: pointer;
	}
</style>
