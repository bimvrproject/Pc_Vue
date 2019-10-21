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
						  <span class="xm">项目</span>
						  <i class="fa fa-angle-down shouye" style="color:rgba(0,0,0,.6);font-size:0.9rem;display:inline-block;
					   	vertical-align: middle;margin-left:0.16rem;">
					  	</i>
						<!-- <i class="xm" style="color: #2180ED;">项目</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img src="../../assets/image/shang.png" alt="" style="width: 100%;height: 100%;" />
						</i> -->
					</span>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
				<!-- 	@mouseleave="fnhsqlev()" -->
					<span class="el-dropdown-link" @click="fnsqtit" @mouseenter="fnhsq()" @mouseleave="fnhsqlev()">
						<img class="sqimg" :src="hsq" />
						<i class="sq" :style="hsqcolor">社区</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
				</el-dropdown>
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<!-- @mouseleave="fnhbjlev()" -->
					<span class="el-dropdown-link" @click="ceyins()" @mouseenter="fnhbj()">
						<img class="bjimg" :src="bjtu" />
						<i class="bj" :style="bjcolor">编辑</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="nmbj" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
				</el-dropdown>
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<!-- @mouseleave="fnhfblev()" -->
					<span class="el-dropdown-link" @click="fnfabu()" @mouseenter="fnhfb()">
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
				<!-- @mouseleave="fnmorlevnj()" -->
				<div class="moretopcomnj" style="height:0.93125rem;" @mouseenter="fnmornj()" @mouseleave="fnmorelev()">
					<img  :src="moretb"  alt="" style="width:0.84375rem;height:0.8125rem;margin-right:0.16rem;float:left;">
					   <span class="hgmorecomnj">更多</span><i class="fa fa-angle-down shouye" style="color:rgba(0,0,0,.6);font-size:0.9rem;display:inline-block;
						 vertical-align: middle;margin-left:0.16rem;">
						 </i>
						  <div class="moocomnj" style="margin-top:0.1rem;">
						 	<div class="mores1comnj">
						 		<a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a>
						 	</div>
						 	<div class="mores1comnj" @click="fnabout">联系我们</div>
						 	<div class="moresbcomnj">版本号: v 1.0.1</div>
						 </div>
				</div>
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
				 <div class="swiper-container gallery-top" style="position:absolute;top:5rem;left:10rem;" v-show="topswper">
				  <div class="swiper-wrapper"  v-show="swiperxy">
				   <div class="swiper-slide swiper-slidetop" v-for="(item, index) in Printscreen" :key="index" style="position:relative;">
						<!-- "http://192.168.6.152:8080/" -->
						 <img :src="'http://192.168.6.153:8080/'+item.images" alt="">
						 	<span class="fa fa-times" style="position:absolute;right:0.016rem;top:0.016rem;z-index:30;font-size:0.66rem;color:#EEEEEE;display:inline-block;width:0.8rem;height:0.8rem;background:rgba(225,225,225,.3);line-height:0.8rem;"
							 @click.stop="fng(index)">
						 </span>
						 </div>
				  </div>
				  <div class="swiper-button-next swiper-button-white " v-show="qianjin"></div>
				  <div class="swiper-button-prev swiper-button-white" v-show="houtui"></div>
				</div>
		 <div class="swiper-container gallery-thumbs" style="width:53rem;height:8rem;position:absolute;top:25.7rem;left:7rem;" :style="swipersbj">
		    <div class="swiper-wrapper" v-show="swiperbottom" >
		      <div class="swiper-slide swiper-slidebottom" @click="fnswipers()" v-for="(item, index) in Printscreen" :key="index" @contextmenu.prevent="fnyouji(index)">
						<span class="vvvs" style="width:0.9rem;height:0.9rem;border:2px solid #FFFFFF;
					display:inline-block;position:absolute;top:0rem;right:0.03rem;"
					 :class="checkbox.includes(index)?'checkeds':''"
						 @click.stop="fnxz(index)">
						</span>
						<!-- <img src="../../assets/image/bluedui.png" alt="" style="width:0.9rem;height:0.9rem;z-index:60000;position:absolute;top:0rem;right:0.1rem;" v-show="dgou"> -->
						<img class="swiper-slidebottomimg" :src="'http://192.168.6.153:8080/'+item.images" alt="">
						<!-- 鼠标右击出现的内容 :class="{activefb:index==isActivefb}"-->
						<div class="xbz" v-show="aaaaaa === index">
							<span class="fqq" @click.stop="fnfbswper(index)" :style="fbswper">
								发布
							</span>
							<span class="fqq quanxuans" @click.stop="fnallswper()" :style="fbswperall">
								 全选
							</span>
							<span class="fqq qxs" @click.stop="fnqxchangswper()" :style="fbswperqxchang">
							   取消选择
							</span>
						</div>
						</div>
		    </div>
				<!-- <div class="swiper-button-prev gos" v-show="goss"></div>
       <div class="swiper-button-next backs" v-show="backs"></div> -->
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
				duigous:"",
				showIndex:false,
				sdsds:false,
				aaaaaa:-1,
				dddd:false,
				// 发布轮播图中最下边鼠标右击事件控制的显隐
				isActivefb:true,
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
				// newarrs:[0,0,0,0,0,0],
				// newarrs:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        checkbox:[],
				// swiper上边部分
				swiperxy:false,
				// 轮播下边隐藏
				swiperbottom:false,
				//轮播下边的最大背景图的显隐
				swipersbj:"background:rgba(225,225,225,0)",
				// 社区默认状态
				hsq:require('../../assets/image/sq@2x.png'),
				hsqcolor:"color:#333333",
				topswper:true,
				moretb: require('../../assets/image/more@2x.png'),
				// 对勾的数组
				dgarrs:[],
				dgou:false,
				// 轮播中的发布的背景色
				fbswper:"background:rgba(225,225,225,0)",
				fbswperall:"background:rgba(225,225,225,0)",
				fbswperqxchang:"background:rgba(225,225,225,0)",
				goss:false,
				backs:false,
				// 动画中自由拍摄组件得显隐
				frees:true,
				qianjin:false,
				houtui:false,
				Printscreen:[],		//接收截图的图片
			};
		},
		components: {
			Newjian,
			Xunilogo,
			Releases,
		},
		created() {
			// 创建点击动画得时候轮播图出现
		   	this.$eventbus.$on('fbswipersfree', () => {
		   this.frees = true
		   });
			// 创建点击发布的时候轮播图出现
				this.$eventbus.$on('fbswipers', () => {
				this.swiperbottom = true;
				// this.topswper = true;
				this.	swipersbj = 'background:#EEEEEE';
				this.goss = true;
				this.backs = true;
				// this.qianjin = true;
				// this.houtui = true;
			});
			// 创建点击发布的时候轮播图消失
				this.$eventbus.$on('fbswiperss', () => {
				this.swiperbottom = false;
				this.swiperxy = false;
				this.topswper = false,
				this.	swipersbj = 'background:rgba(225,225,225,0)'
				this.goos = false;
				this.backs = false;
				this.houtui = false;
				this.qinajin = false
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
			//建筑模型的id
			var projectidss=sessionStorage.getItem("projectid");
			if (projectidss != '' && projectidss != null && projectidss != undefined) {
				axios.get(api.ShowModel + '/1' + '/' + projectidss).then(result => {
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
				//绑定截图的照片
				axios.get(api.SelectPrintscreen+"/"+projectidss).then(result => {
					this.Printscreen = result.data.printscreenslist;
					console.log(this.Printscreen)
				})
			}
			// 点击建筑结构 和模型展示模型
			// var pro_id = this.$route.params.project_modelid;
			// alert(pro_id)
			// sessionStorage.setItem("proid",pro_id)
			// if (projectidss != '' && projectidss != null && projectidss != undefined) {
			// 	axios.get(api.ShowModel + '/1' + '/' + projectidss).then(result => {
			// 		if (result.data.modelId != null || result.data.projectId != null && result.data.url != '' || result.data.projectId !=
			// 			"" && result.data.url != undefined || result.data.projectId != undefined) {
			// 			this.fileshow = false;
			// 		}
			// 		if (result.data.url != null && result.data.url != '' && result.data.url != undefined) {
			// 			this.fileshow = false;
			// 			this.model = result.data.url;
			// 			this.projectmodel = addressurls.url + this.model;
			// 		}
			// 	});
			// }

			let mythis = this;
			this.$http.get(api.GetAllList).then(function(response) {
				mythis.dataList = response;
				// console.log(this.dataList);
			}).catch(function(err) {
				console.log(err)
			})

			this.$http.get(api.GetList).then(function(response) {
				mythis.exeList = response;
				// console.log(mythis.exeList);
			}).catch(function(err) {
				console.log(err)
			})
		},
		mounted() {
			this.$eventbus.$emit('fbswiperss');
			this.$eventbus.$emit('cezhan', 'moxin');
			this.$eventbus.$emit('hometop');
			 var galleryThumbs = new Swiper('.gallery-thumbs', {
			  spaceBetween: 10,
			  slidesPerView:8,
				//  navigation: {
				//   nextEl: '.swiper-button-next',
				//   prevEl: '.swiper-button-prev',
				// },
			  freeMode: true,
			  watchSlidesVisibility: true,
			  watchSlidesProgress: true,
				observer:true,/*启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。*/
       observeParents:true,/*将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。*/
			});
			 new Swiper('.gallery-top', {
			  spaceBetween: 10,
			  navigation: {
			    nextEl: '.swiper-button-next',
			    prevEl: '.swiper-button-prev',
			  },
				observer:true,/*启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。*/
				observeParents:true,/*将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。*/
			  thumbs: {
			    swiper: galleryThumbs
			  }
			});
		},
		methods: {
			 // 这是一个定时器
     //  timer() {
     //    return setTimeout(()=>{
					// 
     //      alert(1)
     //    },1000)
     //  },
			// 点击轮播中的取消选择
			fnqxchangswper(){
				 this.checkbox = [];
				sessionStorage.setItem('qingkongquanbu', JSON.stringify(this.checkbox));
			},
			// 点击轮播中的全选
			fnallswper(){
				 var len = this.Printscreen.length;
				this.checkbox = [];
				for(var i=0;i<len;i++){
				  this.checkbox.push(i);
				}
				sessionStorage.setItem('quanxuan', JSON.stringify(this.checkbox));
			},
			// 点击轮播中的发布
			fnfbswper(){
					sessionStorage.setItem('fabujzmodel', JSON.stringify(this.checkbox));
				// alert(index)
			},
			// 鼠标右击
			fnyouji(index){
				// this.isActivefb = index
				// alert(this.isActivefb)
				this.aaaaaa = index
			},
			// 选择对勾
			fnxz(i){
				var idx = this.checkbox.indexOf(i);
				//如果已经选中了，那就取消选中，如果没有，则选中
				if(idx>-1){
				  this.checkbox.splice(idx,1);
				}else{
				  this.checkbox.push(i);
				}
				sessionStorage.setItem('duoxuan', JSON.stringify(this.checkbox));
			},
			// 点击swiper头上的关闭
			fng(index){
				this.swiperxy = false,
				this.topswper = false;
				this.qianjin = false;
				this.houtui = false
			},
			// 点击swiper下边的
			fnswipers(){
				this.swiperxy = true,
				this.topswper = true,
				this.aaaaaa = null;
				this.qianjin = true;
				this.houtui = true
				// this.dddd = false
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
				this.goos = false;
				this.backs = false
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
				this.goos = false;
				this.backs = false
			},
			// 点击联系我们
			fnabout() {
				this.$eventbus.$emit('abouts');
				this.abouts = true;
					this.goos = false;
				this.backs = false
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
					this.goos = false;
				this.backs = false
			},
			//点击发布
			fnfabu() {
				if(this.Printscreen.length==0){
					// 调用点击发布的时候轮播显示
					this.$eventbus.$emit('fbswiperss');
				}else{
					this.$eventbus.$emit('fbswipers');
				}
				// this.timer();
				this.fbcolor = 'color:#2180ED';
				this.fbtu = require('../../assets/image/fbblue.png');
				this.bjtu = require('../../assets/image/bianji.png');
				(this.release = true), (this.xianyinxuni = false),
				(this.bjcolor = 'color:#333333');
				this.nmfb = require('../../assets/image/shang.png');
				this.nmbj = require('../../assets/image/pmjtxia.png');
				this.lmore = require('../../assets/image/pmjtxia.png');
				
			},
			// 划过更多
			fnmornj(){
				this.moretb = require('../../assets/image/moress.png');
				this.bjtu = require('../../assets/image/bianji.png'),
				this.bjcolor = 'color:#333333';
				this.fbtu = require('../../assets/image/fbnav.png');
				this.fbcolor = 'color:#333333'
				this.hsq = require('../../assets/image/sq@2x.png'),
				this.hsqcolor = "color:#333333";
					this.goos = false;
				this.backs = false
			},
			// 移出更多
			fnmorelev(){
				 this.moretb = require('../../assets/image/more@2x.png');
				 	this.goos = false;
				  this.backs = false
			},
			//点击项目
			xmfn() {
				this.$router.push('/Login');
					this.goos = false;
				this.backs = false
			},
			//点击社区
			fnsqtit() {
				this.$router.push('/');
					this.goos = false;
				this.backs = false
			},
			// 移入社区的时候
			fnhsq(){
				this.hsq = require('../../assets/image/shequ.png')
				this.hsqcolor = "color:#2180ED";
				this.moretb = require('../../assets/image/more@2x.png');
				this.bjtu = require('../../assets/image/bianji.png'),
				this.bjcolor = 'color:#333333';
				this.fbtu = require('../../assets/image/fbnav.png');
				this.fbcolor = 'color:#333333'
					this.goos = false;
				this.backs = false
			},
			// 移出社区的时候
			fnhsqlev(){
				this.hsq = require('../../assets/image/sq@2x.png'),
				this.hsqcolor = "color:#333333";
					this.goos = false;
				this.backs = false				
			 },
			// 移入编辑
			fnhbj(){
				this.bjtu = require('../../assets/image/bjblue.png');
				this.bjcolor = 'color:#2180ED';
				this.fbtu = require('../../assets/image/fbnav.png');
				this.fbcolor = 'color:#333333';
				this.hsq = require('../../assets/image/sq@2x.png'),
				this.hsqcolor = "color:#333333";
				this.moretb = require('../../assets/image/more@2x.png');
					this.goos = false;
				this.backs = false
				},
			// 移出编辑
			// fnhbjlev(){
			// 	this.bjtu = require('../../assets/image/bianji.png'),
			// 	this.bjcolor = 'color:#333333'
			// 	this.goos = false;
			// 	this.backs = false
			// },
			// 移入发布
			fnhfb(){
				this.fbtu = require('../../assets/image/fbblue.png');
				this.fbcolor = 'color:#2180ED';
				this.bjtu = require('../../assets/image/bianji.png'),
				this.bjcolor = 'color:#333333';
				this.hsq = require('../../assets/image/sq@2x.png'),
				this.hsqcolor = "color:#333333";
				this.moretb = require('../../assets/image/more@2x.png');
			},
			// 移出发布
			// fnhfblev(){
			// 	this.fbtu = require('../../assets/image/fbnav.png');
			// 	this.fbcolor = 'color:#333333'
			// }
		}
	};
</script>

<style>
	.gos{
		width:1.5rem;
		height:6rem;
		position:absolute;
		top:1.5rem;
		left:0rem;
		background:url(../../assets/image/tpzh.png) no-repeat;
		background-size:1.5rem 6rem;
		background-color:rgba(225,225,225,.2);
	}
	.backs{
		width:1.5rem;
		height:6rem;
		position:absolute;
		top:1.5rem;
		right:0rem;
		background:url(../../assets/image/tpyh.png) no-repeat;
		background-size:1.5rem 6rem;
		background-color:rgba(225,225,225,.2);
	}
	.activefb{
		display:block;
	}
	.fqq{
		height:0.7rem;
		font-size:0.4375rem;
		text-align:left;
		padding-left:0.4rem;
		color:rgba(51,51,51,1);
		font-family:Microsoft YaHei;
		 font-weight:400;
	}
	.xbz{
		width:5.999rem;
		height:2.34375rem;
		position:absolute;
		bottom:0rem;
		left:0rem;
		display:flex;
		flex-direction: column;
		cursor:pointer;
		background:rgba(225,225,225,.7);
		/* display:none; */
	}
	.checkeds{
		background:url(../../assets/image/bluedui.png) no-repeat 0.07rem 0.03rem;
		background-size:0.8rem 0.8rem;
/* 		z-index:20000; */
	}
	.abc{
			background:url(../../assets/image/bluedui.png) no-repeat 0.07rem 0.03rem;
		background-size:0.8rem 0.8rem;
	}
	.moretopcomnj{
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
	.hgmorecomnj{
		color:#333333;
	}
	.moocomnj{
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
	.mores1comnj{
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
	.moresbcomnj{
			border: 0;
			text-align: left;
			line-height:0.9rem;
			color: #666666;
			font-size:0.46rem;
			font-weight: 500;
			/* background:red; */
		}
	.moretopcomnj:hover .moocomnj{
		  display:block;
	}
	.moretopcomnj:hover .hgmorecomnj{
		 color:#2180ED
	}
	.moretopcomnj:hover .shouye{
		 transform:rotate(180deg);
	}
	
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
		/* width: 59.9375rem; */
		height: 33.65625rem;
	/* 	background:green; */
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
		top:0.6275rem;
		left:7.2rem;
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
		width: 6rem !important;
		height: 6rem !important;
		/* background:red; */
		margin-right: 0.5rem;
	}
	.swiper-slidebottomimg {
		width: 6rem !important;
		height: 6rem !important;
	}
/* 	.swiper-container {
		margin-left: auto;
		margin-right: auto;
	} */
/* 	.swiper-slide {
		background-size: cover;
		background-position: center;
	} */
	.gallery-top {
		width: 45.86875rem !important;
		height: 20.21875rem !important;
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
