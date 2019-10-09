<template>
	<div>
		<div class="zonggm"><iframe :src="projectmodel" frameborder="0" style="width:100%;height:100%;"></iframe></div>
		<div class="lefttopjzm">
			<div class="leftjzm">
				<img class="logojzm" src="../../assets/image/jinghekeji.png" />
				<Xunilogo v-show="xianyinxuni"></Xunilogo>
				<Releases v-show="release"></Releases>
			</div>
		</div>
		<div class="box">
			<!-- 除去侧边栏的剩余部分-->
			<!--右侧登录标识 -->
	 <!--  <Zheader v-show="zheaderxy"></Zheader> -->
			<!-- 右侧top部分 -->
			<div class="hometopgm" v-show="hometop">
			<!-- 	下拉菜单---项目 -->
				<el-dropdown style="float: left; margin-left:-1.4rem;">
					<span class="el-dropdown-link" @click="fngxmxxm">
						<img class="xmimggm" src="../../assets/image/bluefz.png" />
						<i class="xmgm" style="color:#2180ED">项目</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;"><img src="../../assets/image/shang.png" alt="" style="width: 100%;height: 100%;"></i>
					</span>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束
				下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fngxmxsq">
						<img class="sqimggm" src="../../assets/image/sq@2x.png" />
						<i class="sqgm" style="color:#333333;">社区</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
				</el-dropdown>
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="ceyins">
						<img class="bjimggm" :src="bjtu" />
						<i class="bjgm" :style="bjcolor">编辑</i>
					<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;"><img :src="nmbj" alt="" style="width: 100%;height: 100%;"></i>
					</span>
				</el-dropdown>
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fnfabug">
						<img class="bjimggm" :src="fbtu" />
						<i class="bjgm" :style="fbcolor">发布</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;"><img :src="nmfb" alt="" style="width: 100%;height: 100%;"></i>
					</span>
				</el-dropdown>
			<!-- 	下拉菜单---社区--结束
				下拉菜单---更多 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @mouseenter="fnmoin">
						<img class="moreimggm" src="../../assets/image/more@2x.png" />
						<i class="moregm">更多</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;"><img :src="lmore" alt="" style="width: 100%;height: 100%;"></i>
					</span>
					<el-dropdown-menu slot="dropdown" class="gxmodelmore">
						<div class="moogx" @mouseenter="fnmoin" @mouseleave="fnleave">
						<div class="mores1gx">
								<a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a>
						</div>	
						<div class="mores1gx" @click="fnabout">联系我们</div>
						<div class="moresbgx">版本号: v 1.0.1</div>
						</div>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目/管线综合/图纸 -->
			<div style="width:18.75rem;height:0.6875rem;position: absolute;top:3.53125rem;left:8.21875rem;text-align:left;cursor:pointer;">
				<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;" @click="fnjzmx">新建项目</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;">/</i>
				<span style="margin-right:0.1875rem;margin-left:0.15625rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;"  @click="fnjzmx">管线综合</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;">/</i>
				<span style="color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;margin-left:0.15625rem;">模型</span>
			</div>
			<!-- 中间图纸总体 -->
			<div class="gxmxdraw">
			  <!-- 中间图纸的图片 -->
				<div class="gxmxdrawtop">
					<img src="../../assets/image/mdraw.png" alt="">
				</div>
				<!-- 中间图纸的文字 -->
				<div class="gxmxdrawinghz">
					这里还没有管线模型,需要上传哦
				</div>
				<!-- 上传按钮-->
				<div class="gxmxdrawingbtn">
					 <div>
							<uploader :file-status-text="statusText" :options="options"  @file-complete="onFileSuccess">
							<!-- <uploader-unsupport></uploader-unsupport> -->
							<uploader-drop class="gxmxdrawdrop"><uploader-btn :directory="true" :single="true" class="gxmxdrawdbtn">上传管线模型</uploader-btn></uploader-drop>
								<uploader-list></uploader-list>
						</uploader>
					</div>
				</div>
			</div>
		</div>
			<!-- 点击联系我们的遮罩 -->
		<div style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);z-index:500000;" v-show="abouts" @click="fnaboutmark">
			
		</div>
				<!-- 图片展示轮播图 -->
		 <!-- Swiper -->
		 <!-- <div class="swiper-container gallery-top" style="position:absolute;top:5rem;left:10rem;">
		   <div class="swiper-wrapper">
			 <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t4.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/u91_02.png" alt=""></div>
		     <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/disan.png" alt=""></div>
		     <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/diyi.png" alt=""></div>
		     <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t1.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t2.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t3.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t5.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t6.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t7.jpg" alt=""></div>
		   </div>
		   <div class="swiper-button-next swiper-button-white"></div>
		   <div class="swiper-button-prev swiper-button-white"></div>
		 </div>
		<div class="swiper-container gallery-thumbs" style="width:53rem;height:8rem;background:#EEEEEE;position:absolute;top:25.7rem;left:7rem;">
		   <div class="swiper-wrapper">
		     <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t4.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/u91_02.png" alt=""></div>
		     <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/disan.png" alt=""></div>
		     <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/diyi.png" alt=""></div>
		     <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t1.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t2.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t3.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t5.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t6.jpg" alt=""></div>
		     <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t7.jpg" alt=""></div>
		   </div>
		 </div> -->
	</div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import api from '@/api/api.js';
import qs from 'qs';
import Newjian from './newjian';
import Xunilogo from './xunilogo';
import axios from 'axios';
import Releases from './releases';
// import Zheader from './header';
export default {
	data() {
		return {
			title:"18306846355",
			model: '',
			projectmodel: '',
			panduan: false,
			xianyin: false,
			xianyinxuni: false,
			hometop: true,
			 // fileshow: true,
			options: {
				target: api.Uploadpipes, //SpringBoot后台接收文件夹数据的接口
				testChunks: false, //是否分片-不分片
				chunkSize: '2048000000'
			},
			statusText: {
				success: '成功了',
				error: '出错了',
				uploading: '上传中',
				paused: '暂停中',
				waiting: '等待中'
			},
			bjtu: require('../../assets/image/bianji.png'),
			bjcolor: 'color:#333333',
			fbtu: require('../../assets/image/fbnav.png'),
			fbcolor: 'color:#333333',
			//发布
			release: false,
			//总的等陆头部
			zheaderxy:true,
			// 更多中的下拉
			lmore:require('../../assets/image/pmjtxia.png'),
			//编辑下拉
			nmbj:require('../../assets/image/pmjtxia.png'),
			// 发布下拉
			nmfb:require('../../assets/image/pmjtxia.png'),
			// 联系我们
			abouts:false
		};
	},
	components: {
		Newjian,
		Xunilogo,
		Releases,
		// Zheader
	},
	created() {
			this.$eventbus.$on('ceyinfb', ite => {
			if(ite == "fabu"){
				this.release = true;
				this.xianyinxuni = false
				}
				if(ite == "xjxm"){
				this.release = false;
				this.xianyinxuni = true
				}if(ite == "jzjg"){
					this.release = false;
					this.xianyinxuni = true
				}
		});
		//服务器IP
		var addressurls = 'http://36.112.65.110';
		var pipemodelid = this.$route.params.pipemodelids;
		if (pipemodelid != '' && pipemodelid != null && pipemodelid != undefined) {
			axios.get(api.ShowModel + '/2' + '/' + pipemodelid).then(result => {
				if (result.data.url != null && result.data.url != '' && result.data.url != undefined) {
					this.fileshow = false;
				}
				this.model = result.data.url;
				this.projectmodel = addressurls + this.model;
			});
		}
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
		this.$eventbus.$emit('cezhan2', 'moxin');
		this.$eventbus.$emit('hometop');
		 var galleryThumbs = new Swiper('.gallery-thumbs', {
		  spaceBetween: 10,
		  slidesPerView:8,
		  freeMode: true,
		  watchSlidesVisibility: true,
		  watchSlidesProgress: true,
		});
		 new Swiper('.gallery-top', {
		  spaceBetween: 10,
		  navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
		  thumbs: {
		    swiper: galleryThumbs
		  }
		});
	},
	methods: {
		// 点击新建项目
		 fnjzmx(){
			// this.$eventbus.$emit('cezhan', 'moxin');
			 	this.$eventbus.$emit('ceyindj', 'xinjianmoxin');
				this.$eventbus.$emit('ceyinfb','xjxm');
				this.fbtu = require('../../assets/image/fbnav.png');
				this.bjtu = require('../../assets/image/bianji.png');
				this.bjcolor = 'color:#333333';
				this.fbcolor = 'color:#333333';
		 },
		// 点击管线综合
	 fnjzmxg(){
			// this.$router.push('/newjzmodel');
			 	this.$eventbus.$emit('ceyindj', 'jianzhumoxin');
				this.$eventbus.$emit('ceyinfb','jzjg');
				this.fbtu = require('../../assets/image/fbnav.png');
				this.bjtu = require('../../assets/image/bianji.png');
				this.bjcolor = 'color:#333333';
				this.fbcolor = 'color:#333333';
	 },
		// 点击联系我们
		fnabout(){
				this.$eventbus.$emit('abouts');
				this.abouts = true
		},
		// 点击联系之后出现的遮罩
		fnaboutmark(){
			this.$eventbus.$emit('aboutsbi');
			this.abouts = false;
		},
		fns() {
			this.xianyin = !this.xianyin;
			// this.xianyinxuni = false;
			this.$eventbus.$emit('showyin');
		},
		//上传管道模型保存到数据库
		onFileSuccess: function() {
			axios.post(api.ShowPipe).then(result => {
				console.log('----------' + result.data);
			});
		},
		fn4() {
			this.loginWindow = 'display:block';
		},
		look() {
			this.$router.push('/onepengzhuang');
		},
		// 点击项目，跳转到login页
		fngxmxxm(){
			this.$router.push('/Login');
			},
		// 点击社区，跳转到社区页
		fngxmxsq(){
			this.$router.push('/');
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
			this.fbtu = require('../../assets/image/fbnav.png');
			this.lmore = require('../../assets/image/pmjtxia.png');
			this.nmbj = require('../../assets/image/shang.png');
			this.nmfb = require('../../assets/image/pmjtxia.png');
		},
		//点击发布
		fnfabug() {
			this.fbcolor = 'color:#2180ED';
			this.fbtu = require('../../assets/image/fbblue.png');
			this.bjtu = require('../../assets/image/bianji.png');
			(this.release = true), (this.xianyinxuni = false), (this.bjcolor = 'color:#333333');
			this.nmfb = require('../../assets/image/shang.png');
			this.nmbj = require('../../assets/image/pmjtxia.png');
			this.lmore = require('../../assets/image/pmjtxia.png');
		},
		// 划过更多
		fnmoin(){
			this.lmore=require('../../assets/image/shang.png');
			this.nmfb = require('../../assets/image/pmjtxia.png');
			this.nmbj = require('../../assets/image/pmjtxia.png');
		  this.bjcolor = 'color:#333333';
			this.bjtu = require('../../assets/image/bianji.png');
			this.fbcolor = 'color:#333333';
			this.fbtu = require('../../assets/image/bianji.png');
		},
		// 移出更多
		fnleave(){
			this.lmore=require('../../assets/image/pmjtxia.png')
			},
	}
};
</script>

<style>
	/* tou */
	.swiper-slidetop {
		background: paleturquoise;
		width: 47.46875rem;
		height: 20.21875rem;
	}
	.swiper-slidetop img {
		width: 47.46875rem;
		height: 20.21875rem;
	}
	.swiper-slidebottom {
		width: 10rem;
		height: 6rem;
		/* background:red; */
		margin-right: 0.5rem;
	}
	.swiper-slidebottom img {
		width: 6rem;
		height: 6rem;
	}
	.swiper-container {
		margin-left: auto;
		margin-right: auto;
	}
	.swiper-slide {
		background-size: cover;
		background-position: center;
	}
	.gallery-top {
		width: 45.86875rem;
		height: 25.21875rem;
	}
	.gallery-thumbs {
		box-sizing: border-box;
		padding: 0.8rem 0;
		/*  padding: 20px 0; */
	}
	.gallery-thumbs .swiper-slide {
		/* width: 25%;
	      height: 100%; */
		opacity: 0.8;
	}
	.gallery-thumbs .swiper-slide-thumb-active {
		opacity: 1;
	}
.gxmodelmore {
	background: rgba(225, 225, 225, 0.3);
	position: absolute;
	top:2.125rem  !important;
	left:25.975rem !important;
	border: none;
	padding:0.1rem;
	border-radius:0rem !important;
}
.popper__arrow{
		border-width:0rem !important;
		left:0 !important;
		overflow:hidden;
	}
.moogx {
		width:4.75rem;
	/* 		height: 195px; */
		/* 	background: url(../../assets/image/mores.png); */
			padding-left:0.2rem;
			padding-right:0.25rem;
			cursor: pointer;
}
.mores1gx {
	width:4.65rem;
	height:0.9rem;
	border-bottom: 1px solid #999999;
	text-align: left;
	line-height:0.9rem;
	color: #666666;
	font-size:0.46rem;
	font-weight: 500;
	/* 	background:red; */
}
.moresbgx {
		border: 0;
		text-align: left;
		line-height:0.9rem;
		color: #666666;
		font-size:0.46rem;
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

.zonggm {
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
.hometopgm {
	/* width:46.875rem;
	height:1.78125rem; */
	position: absolute;
	top:0.9375rem;
	left:6.9375rem;
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
.xmimggm {
	width:0.84375rem;
	height:0.8125rem;
	padding-left:2.5rem;
	padding-top:0.0625rem;
}
.xmgm {
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
.sqimggm,
.bjimggm {
	width:0.84375rem;
	height: 0.8125rem;
}
.sqgm {
	width:1.25rem;
	height:0.5625rem;
	font-size:0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left:0.1875rem;
	font-style: normal;
}
.bjgm {
	width:1.25rem;
	height: 0.5625rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left:0.1875rem;
	font-style: normal;
}
.moreimggm {
	width: 0.78125rem‬;
	height: 0.78125rem;
}
.moregm {
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
.gxmxdraw{
	width:15.625rem;
	height:15.625rem;
	/* background:red; */
	position:absolute;
	left:25rem;
	top:9rem;
}
.gxmxdrawtop{
	width:12.84375rem;
	height:8.59375rem;
/* 	background:plum; */
	margin-left:1.4rem;
}
.gxmxdrawtop img{
	width:100%;
	height:100%;
}
.gxmxdrawinghz{
	width:15.625rem;
		 height:3rem;
		/* background:blue; */
		 font-size:0.9375rem;
		 font-family:PingFang SC;
		 font-weight:500;
		 color:rgba(51,51,51,1);
		 line-height:3.8rem;
	}
 .gxmxdrawingbtn{
  width:15.625rem;
	height:3.9rem;
	/* background:plum; */
 }
  .gxmxdrawdrop{
 	/* padding:0.3125rem; */
 	 border:0 !important;
 	 background-color:#FFFFFF !important;
 	 width:4.76875rem !important;
 	 height:1.375rem !important;
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
 .gxmxdrawdbtn{
 	/* padding:0.125rem 0.25rem !important; */
 	line-height:0.8rem !important;
 	border-radius:0 !important;
 	font-size:0.6125rem !important;
 	width:4.76875rem !important;
 	height:0.775rem !important;
	border:none !important;
	color:#FFFFFF !important;
 }
</style>
