<template>
	<div>
		<div class="zongjm">
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
					<span class="el-dropdown-link" @click="xmfn">
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
					<span class="el-dropdown-link" @click="fnsqtit">
						<img class="sqimg" src="../../assets/image/sq@2x.png" />
						<i class="sq" style="color: #333333;">社区</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
				</el-dropdown>
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="ceyins">
						<img class="bjimg" :src="bjtu" />
						<i class="bj" :style="bjcolor">编辑</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="nmbj" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
				</el-dropdown>
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fnfabu">
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
					<span class="el-dropdown-link">
						<img class="moreimg" src="../../assets/image/more@2x.png" />
						<i class="more">更多</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="lmore" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
					<el-dropdown-menu slot="dropdown" class="jzmodelmore">
						<div class="jzmodelmoo" @mouseenter="fnmoin" @mouseleave="fnleave">
							<div class="jzmodelmores1"><a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a></div>
							<div class="jzmodelmores1" @click="fnabout">联系我们</div>
							<div class="jzmodelmoresb">版本号: v 1.0.1</div>
						</div>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目/建筑结构/图纸 -->
			<div style="width:18.75rem;height:0.6875rem;position: absolute;top:3.53125rem;left:8.21875rem;text-align:left;">
				<span @click="fnjzmxxm" style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;">新建项目</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;">/</i>
				<span @click="fnjzmxs" style="margin-right:0.1875rem;margin-left:0.15625rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;">建筑结构</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;">/</i>
				<span style="color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;margin-left:0.15625rem;">模型</span>
				<el-tooltip class="item" effect="dark" content="下载到本地跟清晰" placement="top">
					<el-button type="text" style="padding-left: 30px" @click="down()">下载到本地</el-button>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="打开模型" placement="top">
					<el-button type="text" :disabled="disabled" style="padding-left: 20px" @click="openexe()">打开模型</el-button>
				</el-tooltip>
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
	</div>
	</div>
</template>
<script>
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
				swipers: false
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
		},
		methods: {
			// 点击新建项目
			fnjzmxxm() {
				// this.$eventbus.$emit('cezhan', 'moxin');
				this.$eventbus.$emit('ceyindj', 'xinjianmoxin');
				this.$eventbus.$emit('ceyinfb', 'xjxm');
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
				var id = sessionStorage.getItem("id");
				var lists = mythis.dataList;
				this.$notify.info({
					title: '消息',
					message: '正在下载请耐心等候！'
				});
				for (var i = 0; i < lists.length; i++) {
					var list = lists[i];
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
					} else {
						this.$notify({
							title: '警告',
							message: '暂时没有开放，等待管理员上传！',
							type: 'warning'
						});
					}
				};
			},
			openexe() {
				let mythis = this;
				var id = sessionStorage.getItem("id");
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
			fnfabu() {
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
</style>
