<template>
	<div>
		<div class="zonggxpz"><iframe :src="projectmodel" frameborder="0" style="width:100%;height:100%;"></iframe></div>
		<div class="lefttopjzm">
			<div class="leftjzm">
				<img class="logojzm" src="../../assets/image/jinghekeji.png" />
				<Xunilogo v-show="xianyinxuni"></Xunilogo>
				<!-- <Releases v-show="release"></Releases> -->
			</div>
		</div>
		<div class="box">
			<!-- nav -->
			<div class="hometopjzmgxpz" v-show="hometop">
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left; margin-left:-1.4rem;">
					<div class="el-dropdown-link" @click="fngxpzxm()">
						<img class="xmimggxpz" src="../../assets/image/bluefz.png" style="vertical-align:text-bottom;"/>
						<span class="xmgxpz">项目</span>
						<i style="display:inline-block;width:0.45rem;height:0.53125rem‬;margin-left:0.2rem;">
							<img src="../../assets/image/shang.png" alt="" style="width: 100%;height: 100%;" />
						</i>
					</div>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束
				下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<div class="el-dropdown-link" @click="fngxpzsq()" @mouseenter="fnhsq()" @mouseleave="fnhsqlev()">
						<img class="sqimggxpz"  :src="hsq" style="vertical-align:text-bottom;"/>
						<i class="sqgxpz" :style="hsqcolor">社区</i>
					</div>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束
				下拉菜单---更多 -->
				<div class="moretopcomgxpz" style="height:0.93125rem;" @mouseenter="fnmorgxpz()" @mouseleave="fnmorlevgxpz()">
					<img :src="moretb"  alt="" style="width:0.84375rem;height:0.8125rem;margin-right:0.16rem;float:left;vertical-align:text-bottom;">
					   <span class="hgmorecomgxpz">更多</span>
						<i style="display:inline-block;width:0.45rem;height:0.53125rem‬;margin-left:0.2rem;">
						  <img :src="nmgd" alt="" style="width: 100%;height: 100%;" />
						</i>
						  <div class="moocomgxpz" style="margin-top:0.1rem;">
						 	<div class="mores1comgxpz">
						 		<a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a>
						 	</div>
						 	<div class="mores1comgxpz" @click="fnabout">联系我们</div>
						 	<div class="moresbcomgxpz">版本号: v 1.0.3</div>
						 </div>
				</div>
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目/管线综合/图纸 -->
		<div style="width:18.75rem;height:0.6875rem;position: absolute;top:3.93125rem;left:8.21875rem;text-align:left;cursor:pointer;">
			<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;line-height:0.6875rem;">
				{{projecttitgxpz}}
			</span>
			<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
			<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;margin-left:0.15625rem;line-height:0.7575rem;">管线综合</span>
			<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
			<span style="color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;margin-left:0.15625rem;float:left;line-height:0.7575rem;">模型</span>
		</div>
			<!-- 中间图纸总体 -->
			<div class="gxpzdraw">
			  <!-- 中间图纸的图片 -->
				<div class="gxpzdrawtop">
					<img src="../../assets/image/mdraw.png" alt="">
				</div>
				<!-- 中间图纸的文字 -->
				<div class="gxpzdrawinghz">
				要先上传管线模型才能进行碰撞检查哦
				</div>
				<!-- 上传按钮-->
				<div class="gxpzdrawingbtn">
					<div>
							<uploader :file-status-text="statusText" :options="options"  @file-complete="onFileSuccess">
							<!-- <uploader-unsupport></uploader-unsupport> -->
					<!-- 		<uploader-drop  class="gxpzdrawdrop"><uploader-btn :directory="true" :single="true" class="gxpzdrawdbtn">上传结构模型</uploader-btn></uploader-drop> -->
							<div class="gxpzdrawdrop" @click="fnpz"><div  class="gxpzdrawdbtn">上传结构模型</div></div>
								<uploader-list></uploader-list>
						</uploader>
					</div>
				</div>
			</div>
		</div>
		<!-- 点击联系我们的遮罩 -->
		<div style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);" v-show="abouts" @click="fnaboutmark"></div>
	</div>
</template>
<script>
import api from '@/api/api.js';
import qs from 'qs';
import Newjian from './newjian';
import Xunilogo from './xunilogo';
import axios from 'axios';
// import Releases from './releases';
// import Zheader from './header';
export default {
	data() {
		return {
			title:"18306846355",
			panduan: false,
			xianyin: false,
			xianyinxuni: false,
			hometop: true,
			//总的等陆头部
			zheaderxy:true,
			lmore:require('../../assets/image/pmjtxia.png'),
			// 联系我们
			abouts: false,
			// 社区默认状态
			hsq:require('../../assets/image/sq@2x.png'),
			hsqcolor:"color:#333333",
			moretb: require('../../assets/image/more@2x.png'),
			// 更多下拉
			nmgd: require('../../assets/image/pmjtxia.png'),
			projecttitgxpz:''
		};
	},
	components: {
		Newjian,
		Xunilogo,
		// Zheader,
		// Releases
	},
	created() {
		// 接收一下title
		this.projecttitgxpz = sessionStorage.getItem('projecttit'); 
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
		this.$eventbus.$emit('shows');
		//管线模型
	},
	mounted() {
		this.$eventbus.$emit('cezhan2', 'pengzhuang');
		this.$eventbus.$emit('hometop');
	},
	methods: {
		// 点击联系我们
		fnabout() {
			this.$eventbus.$emit('abouts');
			this.abouts = true;
		},
		// 点击联系之后出现的遮罩
		fnaboutmark() {
			this.$eventbus.$emit('aboutsbi');
			this.abouts = false;
		},
			// 划过更多
		fnmorgxpz(){
			this.moretb = require('../../assets/image/moress.png');
			this.nmgd = require('../../assets/image/shang.png');
		},
		// 移出更多
		fnmorlevgxpz(){
			this.moretb = require('../../assets/image/more@2x.png');
			this.nmgd = require('../../assets/image/pmjtxia.png');
		},
		fnpz(){
			this.$router.push('/sfjianchapz');
		},
		//点击项目
		fngxpzxm(){
			this.$router.push('/Login');
			},
			//点击社区
		fngxpzsq(){
				this.$router.push('/');
		},
		fns() {
			this.xianyin = !this.xianyin;
			// this.xianyinxuni = false;
			this.$eventbus.$emit('showyin');
		},
		fn4() {
			this.loginWindow = 'display:block';
		},
		look() {
			this.$router.push('/onepengzhuang');
		},
		// 调用隐藏建筑模型,管线综合,设备监控
		ceyins() {
			this.$eventbus.$emit('ceyin');
			this.$eventbus.$emit('ceyinxxs');
			this.bjtu = require('../../assets/image/bjblue.png');
			this.bjcolor = 'color:#2180ED';
			this.release = false;
			this.xianyinxuni = true;
			this.fbcolor = 'color:#333333';
			this.fbtu = require('../../assets/image/bianji.png');
		},
		fnwenjian() {
			this.$router.push('/sfjianchapz');
		},
			// 移入社区的时候
		fnhsq(){
			this.hsq = require('../../assets/image/shequ.png')
			this.hsqcolor = "color:#2180ED"
		},
		// 移出社区的时候
		fnhsqlev(){
			this.hsq = require('../../assets/image/sq@2x.png'),
			this.hsqcolor = "color:#333333"
			}
	}
};
</script>

<style>
	.moretopcomgxpz{
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
		 margin-left:1.62rem;
		 text-align:left;
		 cursor:pointer;
	}
	.hgmorecomgxpz{
		color:#333333;
	}
	.moocomgxpz{
		width:4.75rem;
		/* width: 183px;
		height: 195px; */
		/* background: url(../../assets/image/mores.png); */
		background:rgba(225,225,225,.2);
		padding-left:0.2rem;
		padding-right:0.25rem;
		cursor: pointer;
		display:none;
	}
	.mores1comgxpz{
		width:4.65rem;
			height:0.9rem;
			border-bottom: 1px solid #999999;
			text-align: left;
			line-height:1rem;
			color: #666666;
			font-size:0.46rem;
			font-weight: 500;
		/* 	background:red; */
	}
	.moresbcomgxpz{
			border: 0;
			text-align: left;
			line-height:0.9rem;
			color: #666666;
			font-size:0.46rem;
			font-weight: 500;
			/* background:red; */
		}
		.moretopcomgxpz:hover .moocomgxpz{
			  display:block;
		}
		.moretopcomgxpz:hover .hgmorecomgxpz{
			 color:#2180ED
		}
		.moretopcomgxpz:hover .shouye{
			 transform:rotate(180deg);
		}
.gxpzmore {
	background: rgba(225, 225, 225, 0.3);
	position: absolute;
	top: 2.125rem !important;
	left: 16.175rem !important;
	border: none;
	padding: 0.1rem;
	border-radius: 0rem !important;
}
.popper__arrow {
	border-width: 0rem !important;
	left: 0 !important;
	overflow: hidden;
}
.gxpzmoo {
  width: 4.75rem;
	/* 		height: 195px; */
	/* 	background: url(../../assets/image/mores.png); */
	padding-left: 0.1rem;
	padding-right: 0.25rem;
	cursor: pointer;
}
.gxpzmores1 {
	width: 4.65rem;
	height: 0.9rem;
	border-bottom: 1px solid #999999;
	text-align: left;
	line-height: 0.9rem;
	color: #666666;
	font-size: 0.46rem;
	font-weight: 500;
	/* 	background:red; */
}
.gxpzmoresb {
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
	/* width: 1920px; */
	margin: 0 !important;
	/* height:1080px; */
	width:100%;
	height:100%;
}
html {
/* 	width: 1920px;
	height:1080px; */
	width:100%;
	height:100%;
}

.zonggxpz {
	width:59.9375rem;
	height:33.65625rem;
	/* background:green; */
	/* background: url(../../assets/image/bjt.jpg);
	background-repeat: no-repeat;
	background-size:100% 100%; */
	position: relative;
}
.el-main {
	/* padding-left:50px; */
	/* padding-top:29px; */
	padding: 0 !important;
}
/* 主页top部分*/
.hometopjzmgxpz {
	/* width:46.875rem;
	height:1.78125rem; */
	position: absolute;
	top:0.6275rem;
	left:7.2rem;
	/* background:red; */
	line-height:1.78125rem;
}
/* 左侧边栏 */
.left {
	width: 217px;
	height: 987px;
	padding-right: 10px;
}
.logojzm {
	width: 3.65625rem;
	height: 0.875rem;
	padding-left: 0.65625rem;
	padding-top: 0.90625rem;
	padding-right: 0px;
}
.lefttopjzm {
	width:6.75rem;
	height:1.875rem;
	/* 	background-color:green;
			background: url(../../assets/image/homecebian8@2x.png); */
	position: absolute;
	top: 0px;
}
.el-dropdown-link {
	cursor: pointer;
	color: #333333;
}
.xmimggxpz {
	width:0.84375rem;
	height:0.8125rem;
	padding-left:2.5rem;
	padding-top:0.0625rem;
}
.xmgxpz {
	width:0.84375rem;
	height:0.53125‬;
	font-size:0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: #2180ed;
	font-style: normal;
	padding-left: 0.15625rem;
	line-height: 0.53125rem;
}
.sqimggxpz,
.bjimggxpz {
	width:0.84375rem;
	height: 0.8125rem;
}
.sqgxpz {
	width:1.25rem;
	height:0.5625rem;
	font-size:0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left:0.1875rem;
	font-style: normal;
}
.bjgxpz {
	width:1.25rem;
	height: 0.5625rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left:0.1875rem;
	font-style: normal;
}
.moreimggxpz {
	width: 0.78125rem‬;
	height: 0.78125rem;
}
.moregxpz {
	width:1.21875rem;
	height:0.59375rem;
	font-size:0.625rem;
	font-style: normal;
	padding-left:0.15625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
}
.el-dropdown-link2 {
	cursor: pointer;
	color: #2180ed;
}
.el-icon-arrow-down {
	font-size: 20px;
}
/* 中间图纸部分 */
.gxpzdraw{
	width:15.625rem;
	height:15.625rem;
	/* background:red; */
	position:absolute;
	left:25rem;
	top:9rem;
}
.gxpzdrawtop{
	width:12.84375rem;
	height:8.59375rem;
/* 	background:plum; */
	margin-left:1.4rem;
}
.gxpzdrawtop img{
	width:100%;
	height:100%;
}
.gxpzdrawinghz{
	width:16.925rem;
		 height:3rem;
		/* background:blue; */
		 font-size:0.9375rem;
		 font-family:PingFang SC;
		 font-weight:500;
		 color:rgba(51,51,51,1);
		 line-height:3.8rem;
	}
 .gxpzdrawingbtn{
  width:15.625rem;
	height:3.9rem;
	/* background:plum; */
 }
  .gxpzdrawdrop{
		cursor:pointer;
 	/* padding:0.3125rem; */
 	 border:0 !important;
 	 background-color:#FFFFFF !important;
 	 width:4.76875rem !important;
 	 height:1.675rem !important;
 	 margin-top:1.06875rem;
 	 border-radius:0 !important;
 	/* line-height:1.25rem; */
 	/* font-size:0.3875rem; */
 	font-family:PingFang SC;
 	font-weight:500;
 	color:rgba(255,255,255,1);
 	background:url(../../assets/image/pmd.png) no-repeat;
 	background-size:100% 75%;
 	display:flex;
 	justify-content:center;
	margin-left:5.3rem;
  }
 .gxpzdrawdbtn{
 	/* padding:0.125rem 0.25rem !important; */
 	line-height:1.2rem !important;
 	border-radius:0 !important;
 	font-size:0.6125rem !important;
 	width:4.76875rem !important;
 	height:0.775rem !important;
 }
</style>
