<template>
	<div>
		<div class="logoxn">
			<div class="xunitops">
				<div class="xunitop">
					<div class="ce1s" @click="ce1"></div>
					<div class="ces"></div>
					<div class="cenrgroup">
						<!-- 图片 -->
						<div class="fb-tp">
							<div class="picture" @click="picture()">
								<img :src="fbtp" class="picimg" alt="" />
								<span class="pictp" :style="tpcolor">图片</span>
							</div>
							<!-- 图片展开的拍照 -->
							<div v-show="pzshow">
								<div class="piczk" @click="jishi">
									<img :src="fbpzs" class="picimgzk" alt="" />
									<a href="javascript:StartCapture()" class="picpz"  :style="fbpzscolor"  >拍照</a>
									<span id="info"  style="position: absolute;top: 6.375rem;left: 20.125rem;display: inline-block;width: 16.875rem;color: royalblue"></span>
								</div>
							</div>
						</div>
						<!-- 动画 -->
						<div>
							<div class="animation" @click="animation()">
								<img :src="fbdh" class="picimg1" alt="" />
								<span class="pictp1" :style="fbdhcolor">动画</span>
							</div>
							<!-- 动画展开的拍照 -->
							<div class="animationzk" v-show="animationzk">
								<!-- 自由拍摄 -->
								<div>
									<div class="pzzk" @click="pzzk()">
										<img :src="zyps" class="pzzy" alt="" />
										<span class="zyps" :style="zypscolor">自由拍摄</span>
									</div>
									<!--拍摄-->
									<div class="zypszi" v-show="zypszi">
										<img src="../../assets/image/pss.png" class="zypsziimg" alt="" />
										<span class="zypszips">拍摄</span>
									</div>
								</div>

								<!-- 路径拍摄 -->
								<div>
									<div class="ljps" @click="ljps()">
										<img :src="ljpstp" class="ljpsimg" alt="" />
										<span class="ljpszi" :style="ljpstpcolor">路径拍摄</span>
									</div>
									<div v-show="lujin">
										<!-- 选择文件夹 -->
										<div class="wjj">
											<img :src="ljpswjj" class="wjjimg" alt="" />
											<!-- 给选择文件夹一个按钮，然后往后端发送请求，让后端返回存入数据库的所有图纸 -->
											<span class="chawjj" @click="Folder()">选择文件夹</span>
											<img src="../../assets/image/fbxl.png" class="xlwjj" alt="" />
										</div>
										<!-- 后端获取回来的数据进行循环渲染 -->
										<div v-show="Plane">
											<div class="Plane">
												<img src="../../assets/image/ttt.png" class="ExPlaneimg" alt="" />
												<span class="ExPlane">平面图纸1</span>
											</div>
											<div class="Plane">
												<img src="../../assets/image/ttt.png" class="ExPlaneimg" alt="" />
												<span class="ExPlane">平面图纸1</span>
											</div>
											<div class="Plane">
												<img src="../../assets/image/ttt.png" class="ExPlaneimg" alt="" />
												<span class="ExPlane">平面图纸1</span>
											</div>
										</div>

										<!--预览 -->
										<div>
											<div class="preview" @click="previews">
												<img src="../../assets/image/yl.png" class="previewimg" alt="" />
												<span class="previews">预览</span>
											</div>
										</div>
										<!-- 预览展开 -->
										<div v-show="preview"></div>
										<!-- 拍摄 -->
										<div>
											<div class="Path">
												<img src="../../assets/image/pss.png" class="Pathimg" alt="" />
												<span class="Paths">拍摄</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 动画结束 -->
						<!-- 清单 -->
						<div>
							<div class="list" @click="list()">
								<img :src="fbqd" class="listimg" alt="" />
								<span class="lists" :style="fbqdcolor">清单</span>
							</div>
							<!-- 展开清单 -->
							<div v-show="lists">
								<div class="rele">
									<img src="../../assets/image/feiji.png" class="releimg" alt="" />
									<span class="reles">发布</span>
								</div>
							</div>
						</div>
						<!-- 清单结束 -->
						<!-- 图纸开始 -->
						<div>
							<div class="Drawings" @click="fntuz()">
								<img :src="fbtz" class="Drawingimg" alt="" />
								<span class="Drawings1" :style="fbtzcolor">图纸</span>
							</div>
							<!-- 图纸展开 -->
							<div>
								<!-- 文件夹 -->
								<div v-show="fnwenjj">
									<div class="fdraw" @click="fnwenjianjia()">
										<img :src="xzwjj" class="fdrawimg" alt="" />
										<span class="fdraws">选择文件夹</span>
										<img src="../../assets/image/fbxl.png" class="fdraws1" alt="" />
									</div>
									<!-- 图纸文件夹展开 -->
									<div v-show="tzwjjzk">
										<!-- 平面图纸 -->
										<div>
											<div class="pmloader" @click="fnfbpm()">
												<img :src="pmtuh" class="pmloaderimg" alt="" />
												<span class="pmloaders">平面图纸</span>
												<img src="../../assets/image/fbxl.png" class="pmloaderimg1" alt="" />
											</div>
											<!-- 展开平面图纸 -->
											<ul v-show="fbzkpm">
												<li v-for="(item, index) in zkpmtzarr" :key="index" class="zkpmloader" @click="fnpmtzxh(index)" :class="{checked:dgarr.includes(index)}">
													<img src="../../assets/image/ttt.png" class="zkpmloaderimg" alt="" /></span>
													<span class="zkpmloaders">平面图纸1</span>
													<img src="../../assets/image/dxk.png" class="zkpmloaderimg1" alt="" />
													<!-- 	<img src="../../assets/image/dui.png" class="zkpmloaderimg11" :class="{tzloop:item.tzloop}" alt="" /> -->
												</li>
											</ul>
										</div>
										<!-- 立面图纸 -->
										<div>
											<div class="pmloader" @click="fnlmtz()">
												<img :src="lmtuh" class="pmloaderimg" alt="" />
												<span class="pmloaders">立面图纸</span>
												<img src="../../assets/image/fbxl.png" class="pmloaderimg1" alt="" />
											</div>
											<!-- 展开立面图纸 -->
											<ul v-show="zklmtz">
												<li v-for="(item, index) in zklmtzarr" :key="index" class="zkpmloader">
													<img src="../../assets/image/ttt.png" class="zkpmloaderimg" alt="" />
													<span class="zkpmloaders">立面图纸1</span>
													<img src="../../assets/image/dxk.png" class="zkpmloaderimg1" alt="" />
													<!-- 	<img class="zkpmloaderimg11" src="../../assets/image/dui.png" alt="" /> -->
												</li>
											</ul>
										</div>
										<!-- 发布 -->
										<div>
											<div class="rele">
												<img src="../../assets/image/feiji.png" class="releimg" alt="" />
												<span class="reles">发布</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Swiper -->
		<div class="swiper-container gallery-top" style="position:absolute;top:5rem;left:10rem;" v-show="topswper">
			<div class="swiper-wrapper" v-show="swiperxy">
				<div class="swiper-slide swiper-slidetop" v-for="(item, index) in Printscreen" :key="index" style="position:relative;">
					<!-- "http://192.168.6.152:8080/" -->
					<img :src="'data:image/png;base64,'+item.images" alt="">
					<span class="fa fa-times" style="position:absolute;right:0.016rem;top:0.016rem;z-index:30;font-size:0.66rem;color:#EEEEEE;display:inline-block;width:0.8rem;height:0.8rem;background:rgba(225,225,225,.3);line-height:0.8rem;"
					 @click.stop="fng(index)">
					</span>
				</div>
			</div>
			<div class="swiper-button-next swiper-button-white" v-show="qianjin"></div>
			<div class="swiper-button-prev swiper-button-white" v-show="houtui"></div>
		</div>
		
		<div  class="swiper-container gallery-thumbs" style="width:53rem;height:8rem;position:absolute;top:25.7rem;left:6.9rem;background:#EEEEEE"
		 :style="swipersbj">
			<div class="swiper-wrapper" v-show="swiperbottom">
				<div class="swiper-slide swiper-slidebottom" @click="fnswipers()" v-for="(item, index) in Printscreen" :key="index"
				 @contextmenu.prevent="fnyouji(index)">
					<span class="vvvs" style="width:0.9rem;height:0.9rem;border:2px solid #FFFFFF;
							display:inline-block;position:absolute;top:0rem;right:0.03rem;"
					 :class="checkbox.includes(index)?'checkeds':''" @click.stop="fnxz(index)">
					</span>
					<!-- <img src="../../assets/image/bluedui.png" alt="" style="width:0.9rem;height:0.9rem;z-index:60000;position:absolute;top:0rem;right:0.1rem;" v-show="dgou"> -->
					<!-- http://36.112.65.110:8080/ -->
					<img class="swiper-slidebottomimg" :src="'data:image/png;base64,'+item.images" alt="">  
					<!-- 鼠标右击出现的内容 :class="{activefb:index==isActivefb}"-->
					<div class="xbz" v-show="aaaaaa === index">
						<span class="fqq" @click.stop="fnfbswper()" :style="fbswper">
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
		</div>
	</div>
</template>
<script>
	import api from '@/api/api.js';
	import axios from 'axios';
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css'
	import $ from 'jquery'
	window.Init();//截图
	export default {
		data() {
			return {
				// 选择文件夹时的图片初始状态
				xzwjj: require('../../assets/image/wjhezhu.png'),
				//图纸中的选择文件夹中的平面图纸
				pmtuh: require('../../assets/image/wjhezhu.png'),
				// 图纸中的选择文件夹中的立面图纸
				lmtuh: require('../../assets/image/wjhezhu.png'),
				chooseNum: true,
				//拍照显隐
				pzshow: false,
				// 自由拍摄显隐
				zypszi: true,
				//点击动画显隐
				animationzk: false,
				// 点击路径拍摄文件夹时控制图纸显隐
				Plane: false,
				// 路径拍摄中的选择文件夹的图片
				ljpswjj: require('../../assets/image/wjhezhu.png'),
				//点击预览时控制预览中的内容
				preview: false,
				//点击路径拍摄控制路径拍摄的显隐
				lujin: false,
				//点击清单控制清单的显隐
				lists: false,
				// 对勾对勾对勾数组
				dgarr: [],
				//平面图纸循环中的对号
				isTzloop: true,
				//平面展开图
				fbzkpm: false,
				//立面展开图
				zklmtz: false,
				//图纸文件夹展开
				tzwjjzk: false,
				//图纸显隐
				fnwenjj: false,
				// 展开平面图纸数组
				zkpmtzarr: [0, 0, 0, 0, 0],
				// 展开立面图纸数组
				zklmtzarr: [0],
				// 发布图片
				fbtp: require('../../assets/image/tuimg.png'),
				// 图片字体颜色
				tpcolor: 'color:#FFFFFF',
				// 发布动画
				fbdh: require('../../assets/image/dh.png'),
				// 发布动画字体颜色
				fbdhcolor: 'color:#FFFFFF',
				// 发布清单
				fbqd: require('../../assets/image/qingdan.png'),
				// 发布清单字体颜色
				fbqdcolor: 'color:#FFFFFF',
				// 发布图纸
				fbtz: require('../../assets/image/ttt.png'),
				// 发布图纸字体颜色
				fbtzcolor: 'color:#FFFFFF',
				// 发布图片中的拍照
				fbpzs: require('../../assets/image/paizhao.png'),
				// 发布图片中的拍照字体颜色
				fbpzscolor: 'color:#FFFFFF',
				// 动画中的自由拍摄图片
				zyps: require('../../assets/image/zypsblue.png'),
				// 动画中的自由拍摄的字体颜色
				zypscolor: 'color:#2180ED',
				// 路径拍摄图片
				ljpstp: require('../../assets/image/ljpss.png'),
				//路径拍摄的字体颜色
				ljpstpcolor: 'color:#FFFFFF',
				Printscreen: [], //接收截图的图片
				checkboxPrintscreen: [],  //点击截图复选框获取到图片的id
				// 对勾的数组
				dgarrs: [],
				dgou: false,
				// 轮播中的发布的背景色
				fbswper: "background:rgba(225,225,225,0)",
				fbswperall: "background:rgba(225,225,225,0)",
				fbswperqxchang: "background:rgba(225,225,225,0)",
				goss: false,
				backs: false,
				// 中间部分隐藏
				centerxy: true,
				swipers: false,
				// newarrs:[0,0,0,0,0,0],
				// newarrs:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				checkbox: [],
				// swiper上边部分
				swiperxy: false,
				// 轮播下边隐藏
				swiperbottom: true,
				//轮播下边的最大背景图的显隐
				swipersbj: "display:none",
				aaaaaa: -1,
				dddd: false,
				// 发布轮播图中最下边鼠标右击事件控制的显隐
				isActivefb: true,
				topswper: false,
				// 动画中自由拍摄组件得显隐
				frees: true,
				qianjin: false,
				houtui: false,
				// 点击拍照的时候显示的内容
				pzts:false,
				timer:"", //超出5秒显示截图插件
			};
		},
		created() {
			this.$eventbus.$on('xianshi-01', () => {
				clearInterval(this.timer);
			});
			// 控制下边轮播的显隐
			this.$eventbus.$on('btnswiper-01', () => {
		        if(this.Printscreen.length<=0){
					this.swipersbj = 'display:none';
				}else{
					this.swipersbj = 'display:block';
				}
			});
			//绑定截图的照片
			var projectidss = sessionStorage.getItem("projectid");
			if (projectidss != '' && projectidss != null && projectidss != undefined) {
				axios.get(api.SelectPrintscreen + "/" + projectidss+"/1"+"/1").then(result => {
					if(result.data.printscreenslist!=null){
						this.swipersbj = 'display:block';
						this.Printscreen = result.data.printscreenslist;
					}else{
						this.swipersbj = 'display:none';
					}
				})
			}
			
		},
		destroy(){ 
			clearInterval(this.timer);
		},
		mounted() {
			var galleryThumbs = new Swiper('.gallery-thumbs', {
				spaceBetween: 10,
				slidesPerView: 8,
				//  navigation: {
				//   nextEl: '.swiper-button-next',
				//   prevEl: '.swiper-button-prev',
				// },
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				observer: true,
				/*启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。*/
				observeParents: true,
				/*将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。*/
			});
			new Swiper('.gallery-top', {
				spaceBetween: 10,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				observer: true,
				/*启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。*/
				observeParents: true,
				/*将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。*/
				thumbs: {
					swiper: galleryThumbs
				}
			}); 
		},
		methods: {
			jishi(){
				//实时更新接口
				var projectidss = sessionStorage.getItem("projectid");
				this.timer=setInterval(()=>{
					if (projectidss != '' && projectidss != null && projectidss != undefined) {
						axios.get(api.SelectPrintscreen + "/" + projectidss+"/1"+"/1").then(result => {
							if(result.data.printscreenslist!=null){
								this.swipersbj = 'display:block';
								this.Printscreen = result.data.printscreenslist;
							}else{
								this.swipersbj = 'display:none';
							}
						})
					}
				},5000)
			},
			// 点击轮播中的取消选择
			fnqxchangswper() {
				//清楚计时器
				this.$eventbus.$emit("xianshi-01");
				this.checkbox = [];
				this.checkboxPrintscreen = [];
			},
			// 点击轮播中的全选
			fnallswper() {
				//清楚计时器
				this.$eventbus.$emit("xianshi-01");
				this.checkboxPrintscreen = [];
				var len = this.Printscreen.length;
				for (var i = 0; i < len; i++) {
					this.checkboxPrintscreen.push(this.Printscreen[i].printscreenId);
					this.checkbox.push(i);
				}
			},
			// 点击轮播中的发布
			fnfbswper() {
				//清楚计时器
				this.$eventbus.$emit("xianshi-01");
				// window.location.href="";
				// sessionStorage.setItem('fabujzmodel', JSON.stringify(this.checkboxPrintscreen));
				// var printscreenIds=sessionStorage.getItem("fabujzmodel");
				// console.log(printscreenIds)
				if(this.checkboxPrintscreen.length!=0){
					console.log(this.checkboxPrintscreen)
					axios.get(api.DynamicForeachTest+"?ids="+this.checkboxPrintscreen).then(result=>{
						window.location.href=result.data
					})
				}
				this.checkbox = [];
				this.checkboxPrintscreen = [];
			},
			// 鼠标右击
			fnyouji(index) {
				//清楚计时器
				this.$eventbus.$emit("xianshi-01");
				this.aaaaaa = index
			},
			// 选择对勾
			fnxz(i) {
				//清楚计时器
				this.$eventbus.$emit("xianshi-01");
				var idx = this.checkbox.indexOf(i);
				var projectidid = this.checkboxPrintscreen.indexOf(this.Printscreen[i].printscreenId);
				//如果已经选中了，那就取消选中，如果没有，则选中
				if (idx > -1) {
					this.checkboxPrintscreen.splice(projectidid, 1);
					this.checkbox.splice(idx, 1);
				} else {
					this.checkboxPrintscreen.push(this.Printscreen[i].printscreenId);
					this.checkbox.push(i);
				}
			},
			// 点击swiper头上的关闭
			fng(index) {
				this.swiperxy = false,
				this.topswper = false;
				this.qianjin = false;
				this.houtui = false
			},
			// 点击swiper下边的
			fnswipers() {
				this.swiperxy = true,
				this.topswper = true,
				this.aaaaaa = null;
				this.qianjin = true;
				this.houtui = true
				// this.dddd = false
			},
			//点击平面图纸中的具体某一个平面图纸
			fnpmtzxh(i) {
				if (this.dgarr.includes(i)) {
					//includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
					//filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
					this.dgarr = this.dgarr.filter(function(ele) {
						return ele != i;
					});
				} else {
					this.dgarr.push(i)
				}

			},
			ce1() {
				this.$router.push('/');
			},
			//点击图片
			picture() {
				// 点击图片时候的颜色
				this.fbtp = require('../../assets/image/tpblue.png'),
					// 点击图片时候的字体颜色
					this.tpcolor = 'color:#2180ED',
					// 图片中的拍照图片
					this.fbpzs = require('../../assets/image/paizhao.png'),
					// 图片中的拍照的字体颜色
					this.fbpzscolor = 'color:#FFFFFF',
					// 点击动画的时候图标
					this.fbdh = require('../../assets/image/dh.png'),
					//点击动画的时候动画字体颜色
					this.fbdhcolor = 'color:#FFFFFF',
					// 发布清单图片
					this.fbqd = require('../../assets/image/qingdan.png'),
					// 发布清单字体颜色
					this.fbqdcolor = 'color:#FFFFFF',
					// 图纸图片
					this.fbtz = require('../../assets/image/ttt.png'),
					// 图纸字体颜色
					this.fbtzcolor = 'color:#FFFFFF',
					// 自由拍摄图片
					this.zyps = require('../../assets/image/zyps.png'),
					// 自由拍摄字体颜色
					this.zypscolor = 'color:#FFFFFF',
					// 路径拍摄的图片
					this.ljpstp = require('../../assets/image/ljpss.png');
				// 路径拍摄的字体颜色
				this.ljpstpcolor = 'color:#FFFFFF',
					// 图纸中的选择文件夹的图纸
					this.xzwjj = require('../../assets/image/wjhezhu.png');
				// 点击时立面的图片
				this.lmtuh = require('../../assets/image/wjhezhu.png');
				// 点击时平面图纸的图片
				this.pmtuh = require('../../assets/image/wjhezhu.png');
				// 路径拍摄中的文件夹
				this.ljpswjj = require('../../assets/image/wjhezhu.png'),
					//拍照显示
					(this.pzshow = true),
					//动画隐藏
					(this.animationzk = false),
					// 自由拍摄显隐
					(this.zypszi = false),
					//点击路径拍摄控制路径拍摄的显隐
					(this.lujin = false),
					//点击预览时控制预览中的内容
					(this.preview = false),
					// 点击路径拍摄文件夹时控制图纸显隐
					(this.Plane = false),
					//清单隐藏
					(this.lists = false),
					//图纸隐藏
					(this.fnwenjj = false),
					// 平面图纸循环
					(this.pmtzxunhuan = false),
					//平面展开图
					(this.fbzkpm = false),
					//立面展开图
					(this.zklmtz = false),
					//图纸文件夹展开
					(this.tzwjjzk = false)
			},
			// 点击自由拍摄控制拍摄显隐
			pzzk() {
				// 自由拍摄图片
				this.zyps = require('../../assets/image/zypsblue.png'),
					// 自由拍摄字体颜色
					this.zypscolor = 'color:#2180ED',
					// 路径拍摄的图片
					this.ljpstp = require('../../assets/image/ljpss.png');
				// 路径拍摄的字体颜色
				this.ljpstpcolor = 'color:#FFFFFF';
				this.zypszi = true;
				this.lujin = false;
				// 图纸中的选择文件夹的图纸
				this.xzwjj = require('../../assets/image/wjhezhu.png');
				// 点击时立面的图片
				this.lmtuh = require('../../assets/image/wjhezhu.png');
				// 点击时平面图纸的图片
				this.pmtuh = require('../../assets/image/wjhezhu.png');
				this.Plane = false;
				// 路径拍摄中的文件夹
				this.ljpswjj = require('../../assets/image/wjhezhu.png')
			},
			//点击动画
			animation() {
				//清楚计时器
				this.$eventbus.$emit("xianshi-01");
				// clearInterval(this.timer);
				// this.$router.push('/donghua')
				// this.$eventbus.$emit('cgcg');
				// this.$eventbus.$emit('fbswiperss');
				// alert(131)
				// this.$eventbus.$emit('fbswipersfree');
				// this.$eventbus.$emit('fbswipers');
				// 点击动画得时候图纸中得内容消失
				// this.$eventbus.$emit('fbswiperss');
				// 点击图片时候的颜色
				this.fbtp = require('../../assets/image/tuimg.png'),
					// 点击图片时候的字体颜色
					this.tpcolor = 'color:#FFFFFF',
					// 图片中的拍照图片
					this.fbpzs = require('../../assets/image/paizhao.png'),
					// 图片中的拍照的字体颜色
					this.fbpzscolor = 'color:#FFFFFF',
					// 点击动画的时候图标
					this.fbdh = require('../../assets/image/dhblue.png'),
					//点击动画的时候动画字体颜色
					this.fbdhcolor = 'color:#2180ED',
					// 发布清单图片
					this.fbqd = require('../../assets/image/qingdan.png'),
					// 发布清单字体颜色
					this.fbqdcolor = 'color:#FFFFFF',
					// 图纸图片
					this.fbtz = require('../../assets/image/ttt.png'),
					// 图纸字体颜色
					this.fbtzcolor = 'color:#FFFFFF',
					// 自由拍摄图片
					this.zyps = require('../../assets/image/zypsblue.png'),
					// 自由拍摄字体颜色
					this.zypscolor = 'color:#2180ED',
					// 图纸中的选择文件夹的图纸
					this.xzwjj = require('../../assets/image/wjhezhu.png');
				// 点击时立面的图片
				this.lmtuh = require('../../assets/image/wjhezhu.png');
				// 点击时平面图纸的图片
				this.pmtuh = require('../../assets/image/wjhezhu.png');
				// 路径拍摄中的文件夹
				this.ljpswjj = require('../../assets/image/wjhezhu.png'),
					//自由拍摄显示
					this.zypszi = true,
					//自由拍摄与路径拍摄显隐
					(this.animationzk = true),
					//图片中得拍照隐藏
					(this.pzshow = false),
					//清单隐藏
					(this.lists = false),
					//图纸隐藏
					(this.fnwenjj = false),
					// 平面图纸循环
					(this.pmtzxunhuan = false),
					//平面展开图
					(this.fbzkpm = false),
					//立面展开图
					(this.zklmtz = false),
					//图纸文件夹展开
					(this.tzwjjzk = false);
			},
			//点击动画中的路径拍摄的选择文件夹
			Folder() {
				this.Plane = true;
				// 点击动画中的路径拍摄的文件夹的图片
				this.ljpswjj = require('../../assets/image/fbwjj.png')
			},
			//点击预览
			previews() {
				this.preview = true;
			},
			//路径拍摄
			ljps() {
				//路径拍摄显示
				this.lujin = true;
				//自由拍摄隐藏
				this.zypszi = false;
				// 路径拍摄的图片
				this.ljpstp = require('../../assets/image/ljps.png');
				// 路径拍摄的字体颜色
				this.ljpstpcolor = 'color:#2180ED';
				// 自由拍摄图片
				this.zyps = require('../../assets/image/zyps.png'),
					// 自由拍摄字体颜色
					this.zypscolor = 'color:#FFFFFF';
				// 图纸中的选择文件夹的图纸
				this.xzwjj = require('../../assets/image/wjhezhu.png');
				// 点击时立面的图片
				this.lmtuh = require('../../assets/image/wjhezhu.png');
				// 点击时平面图纸的图片
				this.pmtuh = require('../../assets/image/wjhezhu.png')
			},
			//点击清单
			list() {
				//清楚计时器
				this.$eventbus.$emit("xianshi-01");
				// 点击图片时候的颜色
				this.fbtp = require('../../assets/image/tuimg.png'),
					// 点击图片时候的字体颜色
					this.tpcolor = 'color:#FFFFFF',
					// 图片中的拍照图片
					this.fbpzs = require('../../assets/image/paizhao.png'),
					// 图片中的拍照的字体颜色
					this.fbpzscolor = 'color:#FFFFFF',
					// 点击动画的时候图标
					this.fbdh = require('../../assets/image/dh.png'),
					//点击动画的时候动画字体颜色
					this.fbdhcolor = 'color:#FFFFFF',
					// 发布清单图片
					this.fbqd = require('../../assets/image/fbqdblue.png'),
					// 发布清单字体颜色
					this.fbqdcolor = 'color:#2180ED',
					// 图纸图片
					this.fbtz = require('../../assets/image/ttt.png'),
					// 图纸字体颜色
					this.fbtzcolor = 'color:#FFFFFF',
					// 自由拍摄图片
					this.zyps = require('../../assets/image/zyps.png'),
					// 自由拍摄字体颜色
					this.zypscolor = 'color:#FFFFFF',
					// 路径拍摄的图片
					this.ljpstp = require('../../assets/image/ljpss.png');
				// 路径拍摄的字体颜色
				this.ljpstpcolor = 'color:#FFFFFF',
					// 图纸中的选择文件夹的图纸
					this.xzwjj = require('../../assets/image/wjhezhu.png');
				// 点击时立面的图片
				this.lmtuh = require('../../assets/image/wjhezhu.png');
				// 点击时平面图纸的图片
				this.pmtuh = require('../../assets/image/wjhezhu.png');
				// 路径拍摄中的文件夹
				this.ljpswjj = require('../../assets/image/wjhezhu.png'),
					//清单里边得内容出现
					(this.lists = true),
					//动画隐藏
					(this.animationzk = false),
					//自由拍摄与路径拍摄显隐
					(this.animationzk = false),
					// 自由拍摄显隐
					(this.zypszi = false),
					//点击路径拍摄控制路径拍摄的显隐
					(this.lujin = false),
					//点击预览时控制预览中的内容
					(this.preview = false),
					// 点击路径拍摄文件夹时控制图纸显隐
					(this.Plane = false),
					//图片中得拍照隐藏
					(this.pzshow = false),
					//图纸隐藏
					(this.fnwenjj = false),
					// 平面图纸循环
					(this.pmtzxunhuan = false),
					//平面展开图
					(this.fbzkpm = false),
					//立面展开图
					(this.zklmtz = false),
					//图纸文件夹展开
					(this.tzwjjzk = false);
			},
			//点击平面图纸让展开
			fnfbpm() {
				// 平面展开
				this.fbzkpm = true;
				// 立面展开
				this.zklmtz = false;
				// 点击平面时的图片
				this.pmtuh = require('../../assets/image/fbwjj.png');
				// 点击平面时立面的图片
				this.lmtuh = require('../../assets/image/wjhezhu.png')
			},
			//点击立面图纸让展开
			fnlmtz() {
				// 立面图纸展开
				this.zklmtz = true;
				// 平面合住
				this.fbzkpm = false;
				// 立面图纸展开时的图片
				this.lmtuh = require('../../assets/image/fbwjj.png');
				// 点击立面图纸时平面图纸的图片
				this.pmtuh = require('../../assets/image/wjhezhu.png');
			},
			//点击图纸中得文件夹
			fnwenjianjia() {
				this.tzwjjzk = true;
				this.xzwjj = require('../../assets/image/fbwjj.png')
			},
			//点击图纸
			fntuz() {
				//清楚计时器
				this.$eventbus.$emit("xianshi-01");
				// 点击图片时候的颜色
				this.fbtp = require('../../assets/image/tuimg.png'),
					// 点击图片时候的字体颜色
					this.tpcolor = 'color:#FFFFFF',
					// 图片中的拍照图片
					this.fbpzs = require('../../assets/image/paizhao.png'),
					// 图片中的拍照的字体颜色
					this.fbpzscolor = 'color:#FFFFFF',
					// 点击动画的时候图标
					this.fbdh = require('../../assets/image/dh.png'),
					//点击动画的时候动画字体颜色 
					this.fbdhcolor = 'color:#FFFFFF',
					// 发布清单图片
					this.fbqd = require('../../assets/image/qingdan.png'),
					// 发布清单字体颜色
					this.fbqdcolor = 'color:#FFFFFF',
					// 图纸图片
					this.fbtz = require('../../assets/image/fbtz.png'),
					// 图纸字体颜色
					this.fbtzcolor = 'color:#2180ED',
					// 自由拍摄图片
					this.zyps = require('../../assets/image/zyps.png'),
					// 自由拍摄字体颜色
					this.zypscolor = 'color:#FFFFFF',
					// 路径拍摄的图片
					this.ljpstp = require('../../assets/image/ljpss.png');
				// 路径拍摄中的文件夹
				this.ljpswjj = require('../../assets/image/wjhezhu.png'),
					// 路径拍摄的字体颜色
					this.ljpstpcolor = 'color:#FFFFFF',
					//文件夹出现
					(this.fnwenjj = true),
					//清单里边得内容出现
					(this.lists = false),
					//动画隐藏
					(this.animationzk = false),
					// 自由拍摄显隐
					(this.zypszi = false),
					//点击路径拍摄控制路径拍摄的显隐
					(this.lujin = false),
					//点击预览时控制预览中的内容
					(this.preview = false),
					//图片中得拍照隐藏
					(this.pzshow = false);
			}
		},
	}
</script>

<style scoped>
	/* 图纸中的对勾 */
	.checked {
		background: url(../../assets/image/dui.png) no-repeat 5.75rem 0.05rem;
		background-size: 0.8rem 0.5rem;
	}

	/* 发布侧边栏轮廓 */
/* 	.logoxn {
		width: 6.78125rem;
		height: 31.625rem;
	} */
	.xunitop {
		width: 6.875rem;
		height: 33.75rem;
		background: url(../../assets/image/homecebian8@2x.png) no-repeat;
		position: absolute;
		top: 0px;
		background-size: 6.875rem 33.75rem;
		padding-top: 0rem;
	}

	.ce1s {
		width: 4.78125rem;
		height: 2.5rem;
		background: url(../../assets/image/logotop@2x.png) no-repeat;
		background-size: 3.65625rem 0.875rem;
		position: absolute;
		top: 0.90625rem;
		left: 1.875rem;
		/* 	background-color:red; */
	}

	.ces {
		width: 6.15625rem;
		height: 0.0625rem;
		background: url(../../assets/image/fgx.png) no-repeat;
		background-size: 6.15625rem 0.09375rem;
		position: absolute;
		top: 2.5rem;
		right: 0.3125rem;
		left: 0.3125rem;
		/* background-color:red; */
	}

	li {
		list-style: none;
	}

	/* 侧边下部 */
	.cenrgroup {
		width: 6.78125rem;
		height: 29.78125rem;
		/* background:blue; */
		position: absolute;
		top: 3.84375rem;
		left: 0rem;
	}

	/* 图片 */
	.fb-tp {
		margin-bottom: 1.40625rem;
		cursor: pointer;
		/* background:red; */
	}

	.picture {
		width: 5.0625rem;
		height: 0.625rem;
		/* background:red; */
		padding-left: 1.71875rem;
		margin-bottom: 0.625rem;
	}

	.picimg {
		width: 0.65625rem;
		height: 0.625rem;
		/* background:green; */
		float: left;
	}

	.pictp {
		display: inline-block;
		font-size: 0.5625rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		float: left;
		/* background:plum; */
		margin-left: 0.15625rem;
		line-height: 0.625rem;
	}

	/* 拍照 */
	.piczk {
		width: 4.6875rem;
		height: 0.625rem;
		/* background:green; */
		padding-left: 2.0626rem;
		cursor: pointer;
	}

	.picimgzk {
		width: 0.71875rem;
		height: 0.5rem;
		float: left;
		margin-right: 0.15625rem;
		padding-top: 0.09375rem;
		/* background:red; */
	}

	.picpz {
		font-size: 0.5rem;
		font-size: 0.5rem;
		font-family: PingFang SC;
		font-weight: 500;
		/* color: rgba(255, 255, 255, 1); */
		float: left;
		/* background:plum; */
	}

	/* 动画 */
	.animation {
		width: 5.1875rem;
		height: 0.625rem;
		/* background:red; */
		padding-left: 1.71875rem;
		margin-bottom: 0.625rem;
		cursor: pointer;
	}

	.picimg1 {
		width: 0.65625rem;
		height: 0.625rem;
		/* 	background:green; */
		float: left;
	}

	.pictp1 {
		display: inline-block;
		font-size: 0.5625rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		float: left;
		/* background:plum; */
		margin-left: 0.15625rem;
		line-height: 0.625rem;
	}

	/* 动画的展开部分 */
	.animationzk {
		padding-left: 1.875rem;
	}

	/* 自由拍摄 */
	.pzzk {
		width: 4.90625rem;
		height: 0.625rem;
		/* 	background:red; */
		cursor: pointer;
	}

	.pzzy {
		width: 0.625rem;
		height: 0.59375rem;
		/* background:green; */
		float: left;
	}

	.zyps {
		display: inline-block;
		font-size: 0.5rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		/* color: rgba(255, 255, 255, 1); */
		float: left;
		margin-left: 0.15625rem;
	}

	/* 自由拍摄里边的拍摄 */
	.zypszi {
		width: 4.21875rem;
		height: 0.625rem;
		/* background:red; */
		margin-top: 0.46875rem;
		padding-left: 0.6875rem;
		cursor: pointer;
	}

	.zypsziimg {
		width: 0.4375rem;
		height: 0.4375rem;
		/* background:green; */
		float: left;
		padding-top: 3px;
	}

	.zypszips {
		display: inline-block;
		font-size: 0.4375rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		float: left;
		margin-left: 0.15625rem;
	}

	/*路径拍摄 */
	.ljps {
		width: 4.84375rem;
		height: 0.625rem;
		/* 	background:red; */
		margin-top: 0.9375rem;
		cursor: pointer;
	}

	.ljpsimg {
		width: 0.625rem;
		height: 0.6875rem;
		/* background:plum; */
		float: left;
	}

	.ljpszi {
		font-size: 0.5rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		/* color: #ffffff; */
		float: left;
		margin-left: 0.2rem;
	}

	/* 选择文件夹 */
	.wjj {
		width: 3.8875rem;
		height: 0.625rem;
		/* background:red; */
		padding-left: 0.6875rem;
		margin-top: 0.46875rem;
		cursor: pointer;
	}

	.wjjimg {
		width: 0.5rem;
		height: 0.4375rem;
		/* 	background:plum; */
		float: left;
		padding-top: 0.09375rem;
	}

	.chawjj {
		/* background:green; */
		font-size: 0.375rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		float: left;
		margin-left: 0.15625rem;
		line-height: 0.6375rem;
	}

	.xlwjj {
		width: 0.375rem;
		height: 0.25rem;
		/* background:green; */
		float: left;
		margin-left: 0.25rem;
		margin-top: 0.23rem;
	}

	/* 后端获取回来的平面图纸展示 */
	.Plane {
		width: 3.375rem;
		height: 0.625rem;
		/* background:red; */
		margin-top: 0.25rem;
		padding-left: 1rem;
		cursor: pointer;
	}

	.ExPlaneimg {
		width: 0.5rem;
		height: 0.5625rem;
		/* background:plum; */
		float: left;
		padding-top: 0.09375rem;
	}

	.ExPlane {
		font-size: 0.375rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		float: left;
		margin-left: 0.21875rem;
		/* 	background:green; */
		padding-top: 0.1rem;
	}

	/* 预览 */
	.preview {
		width: 4.6875rem;
		height: 0.625rem;
		/* background:red; */
		margin-top: 0.46875rem;
		padding-left: 0.15625rem;
		cursor: pointer;
	}

	.previewimg {
		width: 0.5625rem;
		height: 0.40625rem;
		/* background:plum; */
		float: left;
		padding-top: 0.0625rem;
	}

	.previews {
		font-size: 0.4375rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		float: left;
		margin-left: 0.25rem;
	}

	/* 拍摄 */
	.Path {
		width: 4.53125rem;
		height: 0.625rem;
		/* background:red; */
		margin-top: 0.46875rem;
		padding-left: 0.25rem;
		cursor: pointer;
	}

	.Pathimg {
		width: 0.4375rem;
		height: 0.4375rem;
		/* 	background:plum; */
		float: left;
		padding-top: 0.09375rem;
	}

	.Paths {
		font-size: 0.4375rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #ffffff;
		float: left;
		margin-left: 0.25rem;
	}

	/* 清单 */
	.list {
		width: 5.0625rem;
		height: 0.625rem;
		/* 	background:red; */
		padding-left: 1.71875rem;
		margin-top: 1.40625rem;
		cursor: pointer;
	}

	.listimg {
		width: 0.53125rem;
		height: 0.6562rem;
		/* 	background:plum; */
		float: left;
	}

	.lists {
		font-size: 0.5625rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		/* color: rgba(255, 255, 255, 1); */
		float: left;
		margin-left: 0.25rem;
		line-height: 0.625rem;
	}

	/* 图纸 */
	.Drawings {
		width: 5rem;
		height: 0.625rem;
		margin-top: 1.40625rem;
		padding-left: 1.71875rem;
		cursor: pointer;
	}

	.Drawingimg {
		width: 0.5rem;
		height: 0.625rem;
		float: left;
	}

	.Drawings1 {
		font-size: 0.5625rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		/* color: rgba(255, 255, 255, 1); */
		float: left;
		margin-left: 0.25rem;
		line-height: 0.625rem;
	}

	/* 图片展开的文件夹 */
	.fdraw {
		width: 5rem;
		height: 0.625rem;
		margin-top: 0.3125rem;
		padding-left: 1.71875rem;
		cursor: pointer;
	}

	.fdrawimg {
		width: 0.59375rem;
		height: 0.5rem;
		padding-top: 0.09375rem;
		float: left;
	}

	.fdraws {
		font-size: 0.4375rem;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 0.625rem;
		margin-left: 6px;
		float: left;
	}

	.fdraws1 {
		width: 0.4375rem;
		height: 0.1875rem;
		float: left;
		line-height: 0.625rem;
		margin-left: 0.25rem;
		margin-top: 0.2rem;
		/* background:red; */
	}

	/* 选择文件夹中的平面图纸 */
	.pmloader {
		width: 5rem;
		height: 0.625rem;
		/* background:red; */
		margin-top: 0.3125rem;
		padding-left: 1.9375rem;
		cursor: pointer;
	}

	.pmloaderimg {
		width: 0.59375rem;
		height: 0.5rem;
		float: left;
	}

	.pmloaders {
		font-size: 0.4375rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		float: left;
		margin-left: 0.1875rem;
		line-height: 0.625rem;
	}

	.pmloaderimg1 {
		float: left;
		line-height: 0.625rem;
		margin-left: 0.25rem;
		width: 0.4375rem;
		height: 0.25rem;
		margin-top: 0.2rem;
	}

	/* 平面,立面图纸展开 */
	.zkpmloader {
		width: 4.3125rem;
		height: 0.625rem;
		/* background:red; */
		margin-top: 0.3125rem;
		padding-left: 2.34375rem;
		position: relative;
		cursor: pointer;
	}

	.zkpmloaderimg {
		width: 0.4375rem;
		height: 0.5625rem;
		/* background:plum; */
		float: left;
	}

	.zkpmloaders {
		width: 2.8125rem;
		height: 0.625rem;
		display: inline-block;
		font-size: 0.4375rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		/* background:blue; */
		float: left;
		margin-left: 0.1875rem;
		text-align: left;
	}

	.zkpmloaderimg1 {
		width: 0.5rem;
		height: 0.5rem;
		/* background:plum; */
		float: left;
		margin-top: 0.1rem;
	}

	.zkpmloaderimg11 {
		width: 0.5625rem;
		height: 0.375rem;
		position: absolute;
		left: 5.8125rem;
		top: 0.15625rem;
		/* display:none; */
	}

	/* 图纸中的发布 */
	.rele {
		width: 4.0625rem;
		height: 0.625rem;
		/* background:red; */
		margin-top: 0.9375rem;
		padding-left: 2.8125rem;
		cursor: pointer;
	}

	.releimg {
		display: inline-block;
		width: 0.59375rem;
		height: 0.5625rem;
		float: left;
	}

	.releimg img {
		width: 100%;
		height: 100%;
	}

	.reles {
		font-size: 0.4375rem;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		float: left;
		line-height: 0.625rem;
		margin-left: 0.1875rem;
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
		margin-right: 0.5rem;
	}

	.swiper-slidebottomimg {
		width: 6rem !important;
		height: 6rem !important;
	}

	.gallery-top {
		width: 45.86875rem !important;
		height: 20.21875rem !important;
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
</style>
