<template>
	<div>
		<div class="zongjm" @click="fnswepi()">
			<iframe :src="projectmodel" frameborder="0" style="width:100%;height:100%;"></iframe>
		</div>
		<div class="lefttopjzm">
			<div class="leftjzm">
				<img class="logojzm" src="../../assets/image/jinghekeji.png" />
				<Xunilogo v-show="xianyinxuni"></Xunilogo>
				<Releases v-show="release"></Releases>
			</div>
		</div>
		<div class="box">
			<!-- 除去侧边栏的剩余部分 -->
			<!-- 右侧登录标识 -->
			<!-- <Zheader v-show="zheaderxy"></Zheader> -->
			<!-- 右侧top部分 -->
			<div class="hometopjzm" v-show="hometop">
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left; margin-left:-1.4rem;">
					<span class="el-dropdown-link" @click="xmfn()">
						<img class="xmimg" src="../../assets/image/bluefz.png" />
						<i class="xm" style="color: #2180ED;">项目</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img src="../../assets/image/shang.png" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fnsqtit" @mouseenter="fnhsq()" @mouseleave="fnhsqlev()">
						<img class="sqimg" :src="hsq" />
						<i class="sq" :style="hsqcolor">社区</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
				</el-dropdown>
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="ceyins()" @mouseenter="fnhbj()" @mouseleave="fnhbjlev()">
						<img class="bjimg" :src="bjtu" />
						<i class="bj" :style="bjcolor">编辑</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="nmbj" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
				</el-dropdown>
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fnfabu()" @mouseenter="fnhfb()" @mouseleave="fnhfblev()">
						<img class="bjimg" :src="fbtu" />
						<i class="bj" :style="fbcolor">发布</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="nmfb" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->
				<!-- 下拉菜单---更多 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> -->
					<span class="el-dropdown-link" @mouseenter="fnmoin()">
						<img class="moreimg" src="../../assets/image/more@2x.png" />
						<i class="more">更多</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="lmore" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
					<el-dropdown-menu slot="dropdown" class="jzmodelmore">
						<div class="jzmodelmoo" @mouseenter="fnmoin()" @mouseleave="fnleave">
							<div class="jzmodelmores1"><a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a></div>
							<div class="jzmodelmores1" @click="fnabout">联系我们</div>
							<div class="jzmodelmoresb">版本号: v 1.0.1</div>
						</div>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目/建筑结构/图纸 -->
			<div style="height:0.6875rem;position:absolute;top:3.93125rem;left:8.21875rem;text-align:left;">
				<span @click="fnjzmxxm()" style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;line-height:0.6875rem;">新建项目</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
				<span @click="fnjzmxs()" style="margin-right:0.1875rem;margin-left:0.15625rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;line-height:0.7575rem;">建筑结构</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
				<span style="color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;margin-left:0.15625rem;float:left;line-height:0.7575rem;">模型</span>
				<!-- <el-tooltip class="item" effect="dark" content="下载到本地跟清晰" placement="top">
					<el-button type="text" style="padding-left:0.9rem;float:left;line-height:0rem;padding-top:0.32rem;color:#2180ED;font-weight:530;font-size:0.45rem;" @click="down()">下载到本地</el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="打开模型" placement="top">
					<el-button type="text" :disabled="disabled" style="padding-left:0.6rem;float:left;line-height:0rem;padding-top:0.32rem;color:#2180ED;font-weight:530;font-size:0.45rem;" @click="openexe()">打开模型</el-button>
				</el-tooltip> -->
			</div>
			<!-- 中间图纸总体 -->
			<div class="modeldraw" v-show="fileshow">
				<!-- 中间图纸的图片 -->
				<div class="modeldrawtop">
					<img src="../../assets/image/mdraw.png" alt="">
				</div>
				<!-- 中间图纸的文字 -->
				<div class="mdrawinghz">
					这里还没有结构模型,需要上传哦
				</div>
				<!-- 上传按钮-->
				<div class="mdrawingbtn">
					<div>
						<uploader :file-status-text="statusText" :options="options" @file-complete="onFileSuccess">
							<!-- <uploader-unsupport></uploader-unsupport> -->
							<uploader-drop class="mdrawdrop">
								<uploader-btn :directory="false" :single="true" class="mdrawdbtn" :attrs="attrs">上传建筑模型</uploader-btn>
							</uploader-drop>
							<uploader-list></uploader-list>
						</uploader>
					</div>
				</div>
			</div>
			<!-- 上传结束 -->
		</div>
		<!-- 点击联系我们的遮罩 -->
		<div style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);z-index: 600000;"
		 v-show="abouts" @click="fnaboutmark"></div>
		 		<!-- 图片展示轮播图 -->
		  <!-- Swiper -->
		  <div class="swiper-container gallery-top" style="position:absolute;top:5rem;left:10rem;">
		    <div class="swiper-wrapper"  v-show="swiperxy">
		 	   <div class="swiper-slide swiper-slidetop" v-for="(item, index) in newarrs" :key="index" style="position:relative;">
					 <img src="../../assets/image/t4.jpg" alt="">
					 	<span class="fa fa-times" style="position:absolute;right:0.016rem;top:0.016rem;z-index:30;font-size:0.66rem;color:#EEEEEE;display:inline-block;width:0.8rem;height:0.8rem;background:rgba(225,225,225,.3);line-height:0.8rem;"
						 @click.stop="fng(index)">
					 </span>
					 </div>
		     <!-- <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/u91_02.png" alt=""></div>
		      <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/disan.png" alt=""></div>
		      <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/diyi.png" alt=""></div>
		      <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t1.jpg" alt=""></div>
		      <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t2.jpg" alt=""></div>
		      <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t3.jpg" alt=""></div>
		      <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t5.jpg" alt=""></div>
		      <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t6.jpg" alt=""></div>
		      <div class="swiper-slide swiper-slidetop"><img src="../../assets/image/t7.jpg" alt=""></div> -->
		    </div>
		    <div class="swiper-button-next swiper-button-white"></div>
		    <div class="swiper-button-prev swiper-button-white"></div>
		  </div>
		 <div class="swiper-container gallery-thumbs" style="width:53rem;height:8rem;position:absolute;top:25.7rem;left:7rem;" :style="swipersbj">
		    <div class="swiper-wrapper" v-show="swiperbottom" >
		      <div class="swiper-slide swiper-slidebottom" @click="fnswipers()" v-for="(item, index) in newarrs" :key="index"><img src="../../assets/image/t4.jpg" alt=""></div>
		      <!-- <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/u91_02.png" alt=""></div>
		      <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/disan.png" alt=""></div>
		      <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/diyi.png" alt=""></div>
		      <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t1.jpg" alt=""></div>
		      <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t2.jpg" alt=""></div>
		      <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t3.jpg" alt=""></div>
		      <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t5.jpg" alt=""></div>
		      <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t6.jpg" alt=""></div>
		      <div class="swiper-slide swiper-slidebottom"><img src="../../assets/image/t7.jpg" alt=""></div> -->
		    </div>
		  </div>		 
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
	import addressurls from '@/api/ip.js';
	// import Zheader from './header';
	export default {
		data() {
			return {
				title: "18306846355",
				model: '',
				panduan: false,
				xianyin: false,
				xianyinxuni: false,
				hometop: true,
				projectmodel: '',
				options: {
					target: api.Upload, //SpringBoot后台接收文件夹数据的接口
					testChunks: false, //是否分片-不分片
					chunkSize: '2048000000000'
				},
				statusText: {
					success: '成功了',
					error: '出错了',
					uploading: '上传中',
					paused: '暂停中',
					waiting: '等待中'
				},
				fileshow: true,
				bjtu: require('../../assets/image/bianji.png'),
				bjcolor: 'color:#333333',
				fbtu: require('../../assets/image/fbnav.png'),
				fbcolor: 'color:#333333',
				//发布
				release: false,
				//总的等陆头部
				// zheaderxy:true,
				//上传文件的类型限制
				attrs: {
					accept: '.zip, .jar, .war, .rar, .7z'
				},
				// 更多中的下拉
				lmore: require('../../assets/image/pmjtxia.png'),
				//编辑下拉
				nmbj: require('../../assets/image/pmjtxia.png'),
				// 发布下拉
				nmfb: require('../../assets/image/pmjtxia.png'),
				// 联系我们
				abouts: false,
				// 中间部分隐藏
				centerxy: true,
				swipers: false,
				newarrs:[0,0,0,0,0],
				// swiper上边部分
				swiperxy:false,
				// 轮播下边隐藏
				swiperbottom:false,
				//轮播下边的最大背景图的显隐
				swipersbj:"background:rgba(225,225,225,0)",
				// 社区默认状态
				hsq:require('../../assets/image/sq@2x.png'),
				hsqcolor:"color:#333333"
			};
		},
		components: {
			Newjian,
			Xunilogo,
			Releases,
			// Zheader
		},
		created() {
			// 创建点击发布的时候轮播图出现
				this.$eventbus.$on('fbswipers', () => {
				this.swiperbottom = true;
				this.	swipersbj = 'background:#EEEEEE'
			});
			// 创建点击发布的时候轮播图消失
				this.$eventbus.$on('fbswiperss', () => {
				this.swiperbottom = false;
				this.swiperxy = false;
				this.	swipersbj = 'background:rgba(225,225,225,0)'
			});
			this.$eventbus.$on('ceyinfb', ite => {
				if (ite == "fabu") {
					this.release = true;
					this.xianyinxuni = false;
				}
				if (ite == "xjxm") {
					this.release = false;
					this.xianyinxuni = true
				}
				if (ite == "jzjg") {
					this.release = false;
					this.xianyinxuni = true
				}
			});
			//服务器IP
			// var addressurls="http://36.112.65.110";
			this.$eventbus.$on('shows', () => {
				this.xianyinxuni = true;
			});
			this.$eventbus.$on('fbfb', () => {
				this.release = false;
			});
			this.$eventbus.$on('showyin', () => {
				this.xianyinxuni = false;
			});
			this.$eventbus.$on('hometop', () => {
				this.hometop = true;
			});
			this.$eventbus.$on('xianyin', () => {
				this.xianyin = true;
			});
			this.$eventbus.$emit('shows');

			// 初始化展示模型
			var id = this.$route.params.project_id;
			console.log(id)
			if (id != '' && id != null && id != undefined) {
				axios.get(api.ShowModel + '/1' + '/' + id).then(result => {
					console.log(result.data.modelId+"+++")
					if (result.data.modelId != null || result.data.projectId != null && result.data.url != '' || result.data.projectId !=
						"" && result.data.url != undefined || result.data.projectId != undefined) {
						this.fileshow = false;
					}
					if (result.data.url != null && result.data.url != '' && result.data.url != undefined) {
						this.fileshow = false;
						this.model = result.data.url;
						this.projectmodel = addressurls.url + this.model;
					}
				});
			}
			// 点击建筑结构 和模型展示模型
			var pro_id = this.$route.params.project_modelid;
			sessionStorage.setItem("proid",pro_id)
			if (pro_id != '' && pro_id != null && pro_id != undefined) {
				axios.get(api.ShowModel + '/1' + '/' + pro_id).then(result => {
					if (result.data.modelId != null || result.data.projectId != null && result.data.url != '' || result.data.projectId !=
						"" && result.data.url != undefined || result.data.projectId != undefined) {
						this.fileshow = false;
					}
					if (result.data.url != null && result.data.url != '' && result.data.url != undefined) {
						this.fileshow = false;
						this.model = result.data.url;
						this.projectmodel = addressurls.url + this.model;
					}
				});
			}

			let mythis = this;
			this.$http.get(api.GetAllList).then(function(response) {
				mythis.dataList = response;
				console.log(this.dataList);
			}).catch(function(err) {
				console.log(err)
			})

			this.$http.get(api.GetList).then(function(response) {
				mythis.exeList = response;
				console.log(mythis.exeList);
			}).catch(function(err) {
				console.log(err)
			})
		},
		mounted() {
			this.$eventbus.$emit('cezhan', 'moxin');
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
			// 点击swiper头上的关闭
			fng(index){
				this.swiperxy = false
			},
			// 点击swiper下边的
			fnswipers(){
				this.swiperxy = true
				},
			// 点击新建项目
			fnjzmxxm() {
				// this.$eventbus.$emit('cezhan', 'moxin');
				this.$eventbus.$emit('ceyindj', 'xinjianmoxin');
				this.$eventbus.$emit('ceyinfb', 'xjxm');
				// 调用点击发布的时候轮播显示
				this.$eventbus.$emit('fbswiperss');
				this.fbtu = require('../../assets/image/fbnav.png');
				this.bjtu = require('../../assets/image/bianji.png');
				this.bjcolor = 'color:#333333';
				this.fbcolor = 'color:#333333';
			},
			// 点击建筑模型路径
			fnjzmxs() {
				// this.$router.go(0);
				// this.$router.push('/newjzmodel');
				this.$eventbus.$emit('ceyindj', 'jianzhumoxin');
				this.$eventbus.$emit('ceyinfb', 'jzjg');
					// 调用点击发布的时候轮播显示
				this.$eventbus.$emit('fbswiperss');
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
			down() {
				let mythis = this;
				var id = sessionStorage.getItem("projectid");
				console.log(id)
				var lists = mythis.dataList;
				this.$notify.info({
					title: '消息',
					message: '正在下载请耐心等候！'
				});
				for (var i = 0; i < lists.length; i++) {
					var list = lists[i];
					console.log(list)
					if (id == list.id) {
						sessionStorage.setItem('exeid', list.id);
						console.log(list.id)
						this.$http.post(api.Download, qs.stringify({
							modelid: id
						})).then(function(response) {
							mythis.$notify({
								title: '成功',
								message: '下载成功',
								type: 'success'
							});

						}).catch(function(error) {
							mythis.$notify.error({
								title: '错误',
								message: '下载失败' + console.log(error)
							});
						})
					}
				};
			},
			openexe() {
				let mythis = this;
				var id = sessionStorage.getItem("exeid");
				this.$http.post(api.Openexe, qs.stringify({
					id: id
				})).then(function(response) {
					mythis.$notify.info({
						title: '消息',
						message: response.msg,
					});

				}).catch(function(error) {
					return mythis.disabled = true;
					mythis.$notify.error({
						title: '错误',
						message: '本地没有该模型' + error
					});
				})
			},
			// help1() {
			// 	location.href = 'http://www.jh-bim.com/home/solution';
			// },
			// Preservation1() {
			// 	this.$router.push('/baocun');
			// },
			// xiugai1() {
			// 	this.$router.push('/xiugai');
			// },
			// abouts1() {
			// 	this.$router.push('/about');
			// },
			fns() {
				this.xianyin = !this.xianyin;
				// this.xianyinxuni = false;
				this.$eventbus.$emit('showyin');
			},
			//上传建筑模型保存到数据库
			onFileSuccess: function() {
				axios.post(api.addBuildModel).then(result => {});
				this.fileshow = false;
			},
			// fnxuni(){
			// 	this.xianyin = false;
			// },
			fn4() {
				this.loginWindow = 'display:block';
			},
			look() {
				this.$router.push('/onepengzhuang');
			},
			// 点击编辑
			ceyins() {
				this.$eventbus.$emit('ceyin');
				this.$eventbus.$emit('ceyinxxs');
				// 调用轮播图中的隐藏
				this.$eventbus.$emit('fbswiperss');
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
			fnfabu() {
				this.fbcolor = 'color:#2180ED';
				this.fbtu = require('../../assets/image/fbblue.png');
				this.bjtu = require('../../assets/image/bianji.png');
				(this.release = true), (this.xianyinxuni = false),
				(this.bjcolor = 'color:#333333');
				this.nmfb = require('../../assets/image/shang.png');
				this.nmbj = require('../../assets/image/pmjtxia.png');
				this.lmore = require('../../assets/image/pmjtxia.png');
				// 调用点击发布的时候轮播显示
				this.$eventbus.$emit('fbswipers');
			},
			// 划过更多
			fnmoin() {
				this.lmore = require('../../assets/image/shang.png');
				// this.nmfb = require('../../assets/image/pmjtxia.png');
				// this.nmbj = require('../../assets/image/pmjtxia.png');
				//  this.bjcolor = 'color:#333333';
				// this.bjtu = require('../../assets/image/bianji.png');
				// this.fbcolor = 'color:#333333';
				// this.fbtu = require('../../assets/image/bianji.png');
			},
			// 移出更多
			fnleave() {
				this.lmore = require('../../assets/image/pmjtxia.png');
			},
			//点击项目
			xmfn() {
				this.$router.push('/Login');
			},
			//点击社区
			fnsqtit() {
				this.$router.push('/');
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
				},
			// 移入编辑
			fnhbj(){
				this.bjtu = require('../../assets/image/bjblue.png');
				this.bjcolor = 'color:#2180ED'
				},
			// 移出编辑
			fnhbjlev(){
				this.bjtu = require('../../assets/image/bianji.png'),
				this.bjcolor = 'color:#333333'
			},
			// 移入发布
			fnhfb(){
				this.fbtu = require('../../assets/image/fbblue.png');
				this.fbcolor = 'color:#2180ED'
			},
			// 移出发布
			fnhfblev(){
				this.fbtu = require('../../assets/image/fbnav.png');
				this.fbcolor = 'color:#333333'
			}
		}
	};
</script>

<style>
	.jzmodelmore {
		background: rgba(225, 225, 225, 0.3);
		position: absolute;
		top: 2.125rem !important;
		left: 25.075rem !important;
		border: none;
		padding: 0.1rem;
		border-radius: 0rem !important;
	}
	.popper__arrow {
		border-width: 0rem !important;
		left: 0 !important;
		overflow: hidden;
	}
	.jzmodelmoo {
		width: 4.75rem;
		/* 		height: 195px; */
		/* 	background: url(../../assets/image/mores.png); */
		padding-left: 0.1rem;
		padding-right: 0.25rem;
		cursor: pointer;
	}
	.jzmodelmores1 {
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
	.jzmodelmoresb {
		border: 0;
		text-align: left;
		line-height: 0.9rem;
		color: #666666;
		font-size: 0.46rem;
		font-weight: 500;
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

	.zongjm {
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
	.hometopjzm {
		/* width:46.875rem;
	height:1.78125rem; */
		position: absolute;
		top: 0.9375rem;
		left: 6.9375rem;
		/* background:red; */
		line-height: 1.78125rem;
	}

	/* 左侧边栏 */
	/* .left {
	width:6.78125rem;
	height:30.84375rem;
	padding-right:0.3125rem;
} */
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
		color: #2180ed;
		font-style: normal;
		padding-left: 0.15625rem;
		line-height: 0.53125rem;
	}

	.sqimg,
	.bjimg {
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

	.bj {
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
		color: #2180ed;
	}

	.el-icon-arrow-down {
		font-size: 20px;
	}

	/* 中间图纸部分 */
	.modeldraw {
		width: 15.625rem;
		height: 15.625rem;
		/* background:red; */
		position: absolute;
		left: 25rem;
		top: 9rem;
	}

	.modeldrawtop {
		width: 12.84375rem;
		height: 8.59375rem;
		/* 	background:plum; */
		margin-left: 1.4rem;
	}

	.modeldrawtop img {
		width: 100%;
		height: 100%;
	}

	.mdrawinghz {
		width: 15.625rem;
		height: 3rem;
		/* background:blue; */
		font-size: 0.9375rem;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 3.8rem;
	}

	.mdrawingbtn {
		width: 15.625rem;
		height: 3.9rem;
		/* background:plum; */
	}

	.mdrawdrop {
		/* padding:0.3125rem; */
		border: 0 !important;
		background-color: #FFFFFF !important;
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

	.mdrawdbtn {
		/* padding:0.125rem 0.25rem !important; */
		line-height: 0.8rem !important;
		border-radius: 0 !important;
		font-size: 0.6125rem !important;
		width: 4.76875rem !important;
		height: 0.775rem !important;
		border: none !important;
		color: #ffffff !important;
		padding: 0.03125rem 0.25rem !important;
	}
	
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
</style>
