<template>
	<div>
		<div class="zonggm"><iframe :src="projectmodel" frameborder="0" style="width:100%;height:100%;" onload="this.focus()"></iframe></div>
		<div class="lefttopjzm">
			<div class="leftjzm">
				<img class="logojzm" src="../../assets/image/jinghekeji.png" />
				<Xunilogo v-show="xianyinxuni"></Xunilogo>
				<Releases v-show="release"></Releases>
				<Edit v-show="edits"></Edit>
			</div>
		</div>
		<div class="box">
			<!-- 除去侧边栏的剩余部分-->
			<!--右侧登录标识 -->
			<!--  <Zheader v-show="zheaderxy"></Zheader> -->
			<!-- 右侧top部分 -->
			<div class="hometopgm" v-show="hometop">
				<!-- 	下拉菜单---项目 -->
				<el-dropdown style="float: left; margin-left:1.1rem;">
					<span class="el-dropdown-link" @click="fngxmxxm()">
						<span :class="{ xmimggm: istruexmgm}"></span>
					<!-- 	<img class="xmimggm" src="../../assets/image/bluefz.png" /> -->
						<span class="xmgm">项目</span>
					<i style="display:inline-block;width:0.45rem;height:0.53125rem‬;margin-left:0.2rem;">
						<img src="../../assets/image/shang.png" alt="" style="width: 100%;height: 100%;" />
					</i>
					</span>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束
				下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<!-- 	@mouseleave="fnhsqlev()" -->
					<span class="el-dropdown-link sqssgm" @click="fngxmxsq()">
						<span :class="{ sqimggm: istruesqgm, sqimggmf: isfalsesqgm }"></span>
						<!-- <img class="sqimggm" :src="hsq"/> -->
						<i class="sqgm" :style="hsqcolor">社区</i>
					</span>
				</el-dropdown>
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<!-- 	@mouseleave="fnhbjlev()" -->
					<span class="el-dropdown-link bjssgm" @click="ceyins()">
						<span :class="{ bjimggms: istruebjgm, bjimggmsf: isfalsebjgm }"></span>
						<!-- <img class="bjimggm" :src="bjtu" /> -->
						<i class="bjgm" :style="bjcolor">编辑</i>
						<i style="display:inline-block;width:0.45rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="nmbj" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
				</el-dropdown>
			<el-dropdown style="float: left; margin-left:1.5rem;">
				<!-- @mouseleave="fnhfblev()" -->
				<span class="el-dropdown-link fbss" @click="fnfabug()">
					<span :class="{ fbimg: istrue, fbimgf: isfalse }"></span>
					<!-- <img class="bjimg" :src="fbtu" /> -->
					<i class="bjsg bjf" :style="fbcolor">发布</i>
					<i style="display:inline-block;width:0.45rem;height:0.53125rem‬;margin-left:0.2rem;">
						<img :src="nmfb" alt="" style="width: 100%;height: 100%;" />
					</i>
				</span>
			</el-dropdown>
				<!-- 	下拉菜单---社区--结束
				下拉菜单---更多 -->
				<!-- 	@mouseleave="fnmorlevgxmx()" -->
				<div class="moretopcomgxmx" style="height:0.93125rem;" @mouseenter="fnmorgxmx()" @mouseleave="fnmorlevgxmx()">
				<!-- 	<img :src="moretb" alt="" style="width:0.84375rem;height:0.8125rem;margin-right:0.16rem;float:left;" /> -->
				<span :class="{ gdimgm: istruegdm, gdimgfm: isfalsegdm }"></span>
				<i class="hgmorecomgxmx" :style="gdcolor">更多</i>
					<!-- <span class="hgmorecomgxmx">更多</span> -->
					<i style="display:inline-block;width:0.45rem;height:0.53125rem‬;margin-left:0.2rem;">
						<img :src="nmgd" alt="" style="width: 100%;height: 100%;" />
					</i>
					<div class="moocomgxmx" style="margin-top:0.1rem;">
						<div class="mores1comgxmx"><a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a></div>
						<div class="mores1comgxmx" @click="fnabout">联系我们</div>
						<div class="moresbcomgxmx">版本号: v 1.0.1</div>
					</div>
				</div>
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目/管线综合/图纸 -->
			<div style="width:18.75rem;height:0.6875rem;position:absolute;top:3.93125rem;left:8.21875rem;text-align:left;cursor:pointer;">
				<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;line-height:0.6875rem;" 
				@click="fnjzmx()">
					{{projecttitss}}
				</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
				<span
					style="margin-right:0.1875rem;margin-left:0.15625rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;line-height:0.7575rem;"
					@click="fnjzmx()"
				>
					管线综合
				</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
				<span style="color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;margin-left:0.15625rem;float:left;line-height:0.7575rem;">模型</span>
			</div>
			<!-- 中间图纸总体 -->
			<div class="gxmxdraw" v-show="fileshow">
				<!-- 中间图纸的图片 -->
				<div class="gxmxdrawtop"><img src="../../assets/image/mdraw.png" alt="" /></div>
				<!-- 中间图纸的文字 -->
				<div class="gxmxdrawinghz">这里还没有管线模型,需要上传哦</div>
				<!-- 上传按钮-->
				<div class="gxmxdrawingbtn">
					<div>
						<uploader :file-status-text="statusText" :options="options" @file-complete="onFileSuccess">
							<!-- <uploader-unsupport></uploader-unsupport> -->
							<uploader-drop class="gxmxdrawdrop"><uploader-btn :directory="false" :single="true" class="gxmxdrawdbtn" :attrs="attrs">上传管线模型</uploader-btn></uploader-drop>
							<uploader-list></uploader-list>
						</uploader>
					</div>
				</div>
			</div>
		</div>
		<!-- 点击联系我们的遮罩 -->
		<div
			style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);z-index:500000;"
			v-show="abouts"
			@click="fnaboutmark"
		></div>
		<!-- 图片展示轮播图 -->
		<!-- Swiper -->
		<div class="swiper-container gallery-top" style="position:absolute;top:5rem;left:10rem;" v-show="topswper">
			<div class="swiper-wrapper" v-show="swiperxy">
				<div class="swiper-slide swiper-slidetop" v-for="(item, index) in checkboxList" :key="index" style="position:relative;">
					<img src="../../assets/image/t4.jpg" alt="" />
					<span
						class="fa fa-times"
						style="position:absolute;right:0.016rem;top:0.016rem;z-index:30;font-size:0.66rem;color:#EEEEEE;display:inline-block;width:0.8rem;height:0.8rem;background:rgba(225,225,225,.3);line-height:0.8rem;"
						@click.stop="fnggx(index)"
					></span>
				</div>
			</div>
			<div class="swiper-button-next swiper-button-white" v-show="qianjin"></div>
			<div class="swiper-button-prev swiper-button-white" v-show="houtui"></div>
		</div>
		<div class="swiper-container gallery-thumbs" style="width:53rem;height:8rem;position:absolute;top:25.7rem;left:7rem;" :style="swipersbj">
			<div class="swiper-wrapper" v-show="swiperbottomgx">
				<div class="swiper-slide swiper-slidebottom" @click="fnswipersgx()" v-for="(item, index) in checkboxList" :key="index" @contextmenu.prevent="fnyouji(index)">
					<span
						class="vvv"
						style="width:0.9rem;height:0.9rem;border:2px solid #FFFFFF;
					display:inline-block;position:absolute;top:0rem;right:0.15rem;"
						:class="checkbox.includes(index) ? 'checkeds' : ''"
						@click.stop="check(index)"
					></span>
					<img src="../../assets/image/t4.jpg" alt="" />
					<div class="xbzs" v-show="aaaaaa === index">
						<span class="fqq" @click.stop="fabu" :style="fbswper">发布</span>
						<span class="fqq quanxuan" @click.stop="checkAll" :style="fbswperall">全选</span>
						<span class="fqq qx" @click.stop="clearCheckbox()" :style="fbswperqxchang">取消选择</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import api from '@/api/api.js';
import qs from 'qs';
import Newjian from './newjian';
import Xunilogo from './xunilogo';
import axios from 'axios';
import Releases from './releases';
import Edit from './edit';
import addressurls from '@/api/ip.js';
// import Zheader from './header';
export default {
	data() {
		return {
			aaaaaa: -1,
			//显示上传的功能按钮
			fileshow: true,
			title: '18306846355',
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
			gdcolor:'color:#333333',
			//发布
			release: false,
			//总的等陆头部
			zheaderxy: true,
			// 更多中的下拉
			lmore: require('../../assets/image/pmjtxia.png'),
			//编辑下拉
			nmbj: require('../../assets/image/pmjtxia.png'),
			// 发布下拉
			nmfb: require('../../assets/image/pmjtxia.png'),
			// 更多下拉
			nmgd: require('../../assets/image/pmjtxia.png'),
			// 联系我们
			abouts: false,
			//上传文件的类型限制
			attrs: {
				accept: '.zip, .jar, .war, .rar, .7z'
			},
			// newarrs:[0,0,0,0,0,0,0,0],
			// 轮播下部图纸展示数组
			checkboxList: [0, 0, 0, 0, 0, 0],
			checkbox: [],
			// 轮播中的发布的背景色
			fbswper: 'background:rgba(225,225,225,0)',
			fbswperall: 'background:rgba(225,225,225,0)',
			fbswperqxchang: 'background:rgba(225,225,225,0)',
			// swiper上边部分
			swiperxy: true,
			// 轮播下边隐藏
			swiperbottomgx: false,
			//轮播下边的最大背景图的显隐
			swipersbj: 'background:rgba(225,225,225,0)',
			// 轮播中的大图的左右按钮
			qianjin: false,
			houtui: false,
			// 社区默认状态
			hsq: require('../../assets/image/sq@2x.png'),
			// hsqcolor:"color:#333333",
			topswper: true,
			moretb: require('../../assets/image/more@2x.png'),
			// 社区
			istruesqgm: true,
			isfalsesqgm: false,
			// 编辑
			istruebjgm: true,
			isfalsebjgm: false,
			// 发布
			istrue: true,
			isfalse: false,
			// 建筑项目的标题
			projecttitss:'',
			istruexmgm:true,
			istruegdm:true,
			isfalsegdm:false
		};
	},
	components: {
		Newjian,
		Xunilogo,
		Releases,
		Edit
		// Zheader
	},
	created() {
		// 创建点击发布的时候轮播图出现
		this.$eventbus.$on('fbswipersgx', () => {
			this.swiperbottomgx = true;
			// this.topswper = true;
			this.swipersbj = 'background:#EEEEEE';
		});
		// 创建点击发布的时候轮播图消失
		this.$eventbus.$on('fbswiperssgx', () => {
			this.swiperbottomgx = false;
			this.swiperxy = false;
			(this.topswper = false), (this.swipersbj = 'background:rgba(225,225,225,0)'), (this.houtui = false);
			this.qinajin = false;
		});
		// 编辑与发布隐藏事件
		this.$eventbus.$on('ceyinfbs', () => {
			 this.edits = false;
			 this.release = false;
			 this.xianyinxuni = true
			 this.istruebjgm = true;
			 this.isfalsebjgm = false;
			 this.istruefbgm = true;
			 this.isfalsefbgm = false
			 // this.xianyinxuni = true
			});
		// this.$eventbus.$on('ceyinfb', ite => {
		// 	if (ite == 'fabu') {
		// 		this.release = true;
		// 		this.xianyinxuni = false;
		// 	}
		// 	if (ite == 'xjxm') {
		// 		this.release = false;
		// 		this.xianyinxuni = true;
		// 	}
		// 	if (ite == 'jzjg') {
		// 		this.release = false;
		// 		this.xianyinxuni = true;
		// 	}
		// });
   // 取出tit
	  this.projecttitss = sessionStorage.getItem('projecttit');
		var pipemodelid = sessionStorage.getItem('projectid');
		if (pipemodelid != '' && pipemodelid != null && pipemodelid != undefined) {
			axios.get(api.ShowModel + '/2' + '/' + pipemodelid).then(result => {
				if (
					result.data.modelId != null ||
					(result.data.projectId != null && result.data.url != '') ||
					(result.data.projectId != '' && result.data.url != undefined) ||
					result.data.projectId != undefined
				) {
					this.fileshow = false;
				}
				if (result.data.url != null && result.data.url != '' && result.data.url != undefined) {
					this.fileshow = false;
					this.model = result.data.url;
					this.projectmodel = addressurls.url + this.model;
				}
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
		this.$eventbus.$emit('fbswiperssgx');
		this.$eventbus.$emit('cezhan2', 'moxin');
		this.$eventbus.$emit('hometop');
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 8,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true
		});
		new Swiper('.gallery-top', {
			spaceBetween: 10,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});
	},
	methods: {
		// 点击轮播中的取消选择
		clearCheckbox() {
			this.checkbox = [];
			sessionStorage.setItem('qingkongquanbu', JSON.stringify(this.checkbox));
		},
		// 点击轮播中的全选
		checkAll() {
			var len = this.checkboxList.length;
			this.checkbox = [];
			for (var i = 0; i < len; i++) {
				this.checkbox.push(i);
			}
			sessionStorage.setItem('quanxuan', JSON.stringify(this.checkbox));
		},
		// 点击轮播中的发布
		fabu() {
			sessionStorage.setItem('fabu', JSON.stringify(this.checkbox));
		},
		// 鼠标右击
		fnyouji(index) {
			// this.isActivefb = index
			// alert(this.isActivefb)
			this.aaaaaa = index;
		},
		// 选择对勾
		check(i) {
			var idx = this.checkbox.indexOf(i);
			//如果已经选中了，那就取消选中，如果没有，则选中
			if (idx > -1) {
				this.checkbox.splice(idx, 1);
			} else {
				this.checkbox.push(i);
			}
			sessionStorage.setItem('duoxuan', JSON.stringify(this.checkbox));
		},
		// 点击swiper头上的关闭
		fnggx(index) {
			this.swiperxy = false;
			this.topswper = false;
			this.qianjin = false;
			this.houtui = false;
		},
		//点击swiper下边的
		fnswipersgx() {
			this.swiperxy = true;
			this.qianjin = true;
			this.houtui = true;
			(this.topswper = true), (this.aaaaaa = null);
		},
		// 点击新建项目
		fnjzmx() {
			// this.$eventbus.$emit('cezhan', 'moxin');
			// this.$eventbus.$emit('ceyindj', 'xinjianmoxin');
			// this.$eventbus.$emit('ceyinfb', 'xjxm');
			this.$eventbus.$emit('ceyinfbs');
			this.$eventbus.$emit('fbswiperssgx');
			this.fbtu = require('../../assets/image/fbnav.png');
			this.bjtu = require('../../assets/image/bianji.png');
			this.bjcolor = 'color:#333333';
			this.fbcolor = 'color:#333333';
		},
		// 点击管线综合
		fnjzmxg() {
			// this.$router.push('/newjzmodel');
			// this.$eventbus.$emit('ceyindj', 'jianzhumoxin');
			// this.$eventbus.$emit('ceyinfb', 'jzjg');
			this.$eventbus.$emit('ceyinfbs');
			this.$eventbus.$emit('fbswiperssgx');
			this.fbtu = require('../../assets/image/fbnav.png');
			this.bjtu = require('../../assets/image/bianji.png');
			this.bjcolor = 'color:#333333';
			this.fbcolor = 'color:#333333';
		},
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
		fns() {
			this.xianyin = !this.xianyin;
			// this.xianyinxuni = false;
			this.$eventbus.$emit('showyin');
		},
		//上传管道模型保存到数据库
		onFileSuccess: function() {
			axios.post(api.ShowPipe).then(result => {});
			this.fileshow = false;
		},
		fn4() {
			this.loginWindow = 'display:block';
		},
		look() {
			this.$router.push('/onepengzhuang');
		},
		// 点击项目，跳转到login页
		fngxmxxm() {
			this.$router.push('/Login');
		},
		// 点击社区，跳转到社区页
		fngxmxsq() {
			this.$router.push('/');
		},
		// 点击编辑
		ceyins() {
			this.$eventbus.$emit('ceyin');
			this.$eventbus.$emit('ceyinxxs');
			this.$eventbus.$emit('fbswiperssgx');
			this.istruebjgm = false;
			this.isfalsebjgm = true;
			this.istrue = true;
			this.isfalse = false;
			this.bjcolor = 'color:#2180ED';
			this.release = false;
			this.xianyinxuni = false;
			this.edits = true;
			this.fbcolor = 'color:#333333';
			this.lmore = require('../../assets/image/pmjtxia.png');
			this.nmbj = require('../../assets/image/shang.png');
			this.nmfb = require('../../assets/image/pmjtxia.png');
		},
		//点击发布
		fnfabug() {
			this.fbcolor = 'color:#2180ED';
			this.istrue = false;
			this.isfalse = true;
			this.istruebjgm = true;
			this.isfalsebjgm = false;
			this.release = true,
			this.xianyinxuni = false,
			this.edits = false;
			this.bjcolor = 'color:#333333';
			this.nmfb = require('../../assets/image/shang.png');
			this.nmbj = require('../../assets/image/pmjtxia.png');
			this.lmore = require('../../assets/image/pmjtxia.png');
			// 调用点击发布的时候轮播显示
			this.$eventbus.$emit('fbswipersgx');
		},
		// 划过更多
		fnmorgxmx() {
			this.moretb = require('../../assets/image/moress.png');
			this.gdcolor = 'color:#2180ED';
			this.nmgd = require('../../assets/image/shang.png');
			this.isfalsegdm = true;
			this.istruegdm = false
		},
		// 移出更多
		fnmorlevgxmx() {
			this.moretb = require('../../assets/image/more@2x.png');
			this.gdcolor = 'color:#333333';
			this.nmgd = require('../../assets/image/pmjtxia.png');
			this.isfalsegdm = false;
			this.istruegdm = true
		}
	}
};
</script>

<style>
/* 划过社区 */
.sqssgm:hover .sqgm {
	color: #2180ed !important;
}
.sqssgm:hover .sqimggm {
	background: url(../../assets/image/shequ.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
/* 划过编辑 */
.bjssgm:hover .bjgm {
	color: #2180ed !important;
}
.bjssgm:hover .bjimggms {
	background: url(../../assets/image/bjblue.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
/* 划过发布 */
.fbss:hover .bjf {
	color: #2180ed !important;
}
.fbss:hover .fbimg {
	color: #2180ed !important;
	background: url(../../assets/image/fbblue.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
.checkeds {
	background: url(../../assets/image/bluedui.png) no-repeat 0.07rem 0.03rem;
	background-size: 0.8rem 0.8rem;
	z-index: 20000;
}
.fqq {
	height: 0.7rem;
	font-size: 0.4375rem;
	text-align: left;
	padding-left: 0.4rem;
	color: rgba(51, 51, 51, 1);
	font-family: Microsoft YaHei;
	font-weight: 400;
}
.xbzs {
	width: 5.999rem;
	height: 2.34375rem;
	position: absolute;
	bottom: 0rem;
	left: 0rem;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	background: rgba(225, 225, 225, 0.7);
	/* display:none; */
}
/* 更多 */
.moretopcomgxmx {
	position: relative;
	float: left;
	margin-left: -1.4rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	/* color:#2180ED; */
	font-style: normal;
	line-height: 0.93125rem;
	/* background-color:red; */
	margin-top: 0.38rem;
	margin-left: 1.62rem;
	text-align: left;
	cursor: pointer;
}
.hgmorecomgxmx {
	color: #333333;
	width: 1.25rem;
	height: 0.5625rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left: 0.1875rem;
	font-style: normal;
}
.moocomgxmx {
	width: 4.75rem;
	/* width: 183px;
		height: 195px; */
	/* background: url(../../assets/image/mores.png); */
	background: rgba(225, 225, 225, 0.2);
	padding-left: 0.2rem;
	padding-right: 0.25rem;
	cursor: pointer;
	display: none;
}
.mores1comgxmx {
	width: 4.65rem;
	height: 0.9rem;
	border-bottom: 1px solid #999999;
	text-align: left;
	line-height: 1rem;
	color: #666666;
	font-size: 0.46rem;
	font-weight: 500;
	/* 	background:red; */
}
.moresbcomgxmx {
	border: 0;
	text-align: left;
	line-height: 0.9rem;
	color: #666666;
	font-size: 0.46rem;
	font-weight: 500;
	/* background:red; */
}
.moretopcomgxmx:hover .moocomgxmx {
	display: block;
}
/* .moretopcomgxmx:hover .hgmorecomgxmx {
	color: #2180ed;
}
.moretopcomgxmx:hover .shouye {
	transform: rotate(180deg);
} */

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
	width: 6rem !important;
	height: 6rem !important;
	margin-right: 0.5rem;
}
.swiper-slidebottom img {
	width: 6rem !important;
	height: 6rem !important;
}
/* 	.swiper-container {
		margin-left: auto;
		margin-right: auto;
	}
	.swiper-slide {
		background-size: cover;
		background-position: center;
	} */
.gallery-top {
	width: 45.86875rem;
	height: 20.21875rem;
}
.gallery-thumbs {
	box-sizing: border-box;
	padding: 0.8rem 0;
}
.gallery-thumbs .swiper-slide {
	opacity: 0.8;
}
.gallery-thumbs .swiper-slide-thumb-active {
	opacity: 1;
}
.gxmodelmore {
	background: rgba(225, 225, 225, 0.3);
	position: absolute;
	top: 2.125rem !important;
	left: 25.975rem !important;
	border: none;
	padding: 0.1rem;
	border-radius: 0rem !important;
}
.popper__arrow {
	border-width: 0rem !important;
	left: 0 !important;
	overflow: hidden;
}
.moogx {
	width: 4.75rem;
	/* 		height: 195px; */
	/* 	background: url(../../assets/image/mores.png); */
	padding-left: 0.2rem;
	padding-right: 0.25rem;
	cursor: pointer;
}
.mores1gx {
	width: 4.65rem;
	height: 0.9rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	text-align: left;
	line-height: 0.9rem;
	color: #666666;
	font-size: 0.46rem;
	font-weight: 500;
	/* 	background:red; */
}
.moresbgx {
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
	width: 100%;
	height: 100%;
}
html {
	/* 	width: 1920px;
	height:1080px; */
	width: 100%;
	height: 100%;
}

.zonggm {
	width: 59.9375rem;
	height: 33.65625rem;
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
	top: 0.6275rem;
	left: 7.2rem;
	/* background:red; */
	line-height: 1.78125rem;
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
	width: 6.75rem;
	height: 1.875rem;
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
	display: inline-block;
	width: 0.84375rem;
	height: 0.8125rem;
	background: url(../../assets/image/bluefz.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
.xmgm {
	width: 0.84375rem;
	height: 0.53125‬;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: #2180ed;
	font-style: normal;
	padding-left: 0.15625rem;
	line-height: 0.53125rem;
}
/* 社区初始的图片 */
.sqimggm {
	width: 0.84375rem;
	height: 0.8125rem;
	display: inline-block;
	background: url(../../assets/image/sq@2x.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
.sqimggmf {
	width: 0.84375rem;
	height: 0.8125rem;
	display: inline-block;
	background: url(../../assets/image/shequ.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
/* 编辑初始图片 */
.bjimggms {
	width: 0.84375rem;
	height: 0.8125rem;
	display: inline-block;
	background: url(../../assets/image/bianji.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
.bjimggmsf {
	display: inline-block;
	width: 0.84375rem;
	height: 0.8125rem;
	background: url(../../assets/image/bjblue.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
.bjsg {
	width: 1.25rem;
	height: 0.5625rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left: 0.1875rem;
	font-style: normal;
}
.fbimg {
	display: inline-block;
	width: 0.84375rem;
	height: 0.8125rem;
	background: url(../../assets/image/fbnav.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
.fbimgf {
	display: inline-block;
	width: 0.84375rem;
	height: 0.8125rem;
	background: url(../../assets/image/fbblue.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
.gdimgm{
	display: inline-block;
	width: 0.84375rem;
	height: 0.7725rem;
	background: url(../../assets/image/more@2x.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
.gdimgfm{
	display: inline-block;
	width: 0.84375rem;
	height: 0.7725rem;
	background: url(../../assets/image/moress.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
.sqgm {
	width: 1.25rem;
	height: 0.5625rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left: 0.1875rem;
	font-style: normal;
}
.bjgm {
	width: 1.25rem;
	height: 0.5625rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left: 0.1875rem;
	font-style: normal;
}
.fbgm {
	display: inline-block;
	width: 0.84375rem;
	height: 0.8125rem;
	background: url(../../assets/image/fbnav.png) no-repeat;
	background-size: 0.84375rem 0.8125rem;
}
.moreimggm {
	width: 0.78125rem‬;
	height: 0.78125rem;
}
.moregm {
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
	color: #2180ed;
}
.el-icon-arrow-down {
	font-size: 20px;
}
/* 中间图纸部分 */
.gxmxdraw {
	width: 15.625rem;
	height: 15.625rem;
	/* background:red; */
	position: absolute;
	left: 25rem;
	top: 9rem;
}
.gxmxdrawtop {
	width: 12.84375rem;
	height: 8.59375rem;
	/* 	background:plum; */
	margin-left: 1.4rem;
}
.gxmxdrawtop img {
	width: 100%;
	height: 100%;
}
.gxmxdrawinghz {
	width: 15.625rem;
	height: 3rem;
	/* background:blue; */
	font-size: 0.9375rem;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
	line-height: 3.8rem;
}
.gxmxdrawingbtn {
	width: 15.625rem;
	height: 3.9rem;
	/* background:plum; */
}
.gxmxdrawdrop {
	/* padding:0.3125rem; */
	border: 0 !important;
	background-color: #ffffff !important;
	width: 4.76875rem !important;
	height: 1.375rem !important;
	margin-top: 1.06875rem;
	border-radius: 0 !important;
	/* line-height:1.25rem; */
	/* font-size:0.3875rem; */
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(255, 255, 255, 1);
	background: url(../../assets/image/pmd.png) no-repeat;
	background-size: 100% 75%;
	display: flex;
	justify-content: center;
	margin-left: 5.3rem;
}
.gxmxdrawdbtn {
	/* padding:0.125rem 0.25rem !important; */
	line-height: 0.8rem !important;
	border-radius: 0 !important;
	font-size: 0.6125rem !important;
	width: 4.76875rem !important;
	height: 0.775rem !important;
	border: none !important;
	color: #ffffff !important;
}
</style>
