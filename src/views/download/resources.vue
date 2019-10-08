<template>
		<el-container style="overflow:-Scroll;overflow-y:hidden;" class="zong">
			<div class="lefttop">
				<div class="left">
					<div><img class="logo" src="../../assets/image/jinghekeji.png" /></div>
					<Xunilogo v-show="xianyinxuni"></Xunilogo>
				</div>
			</div>
			<el-main>
				<!-- 除去侧边栏的剩余部分 -->
				<!-- 右侧登录标识 -->
				<div class="login-parent">
					<div class="top-right">
						<!-- 登录头像 -->
						<div class="imgzong">
							<div class="login-img1" @click="fn4">
								<span class="logintopimg1"><img src="../../assets/image/userimg@2x.png" alt="" /></span>
								<!-- <span class="logintop">登录</span> -->
							</div>
							<div class="dengl">{{ title }}</div>
						</div>
						<!-- 小化 -->
						<div class="guanbi-toprig">
							<span class="toprig11"><img src="../../assets/image/min.png" alt="" style="width:39px;height:28px;" /></span>
							<span class="toprig22"><img src="../../assets/image/max.png" alt="" style="width:39px;height:28px;" /></span>
							<span class="toprig33"><img src="../../assets/image/gb.png" alt="" style="width:39px;height:28px;" /></span>
						</div>
					</div>
				</div>

				<!-- 右侧top部分 -->
				<div class="hometoplo" v-show="hometop">
					<!-- 下拉菜单---项目 -->
					<el-dropdown style="float: left; margin-left:-40px;">
					<span class="el-dropdown-link" @mouseenter="fns()">
						<router-link to="/newjian">
							<img class="xmimg" :src="xmtb" alt="" />
							<i class="xm" ref="xmcol">项目</i>
						</router-link>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					</el-dropdown>
					<!-- 下拉菜单---项目--结束 -->
					<!-- 下拉菜单---社区 -->
					<el-dropdown style="float: left; margin-left: 5%;">
					<span class="el-dropdown-link" @mouseenter="fncomenter()">
						<img class="sqimg" :src="sqtb" />
						<i class="sq" ref="sqcol" :style="sqcolor">社区</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
					</el-dropdown>
					<!-- 下拉菜单---社区--结束 -->

					<!-- 下拉菜单---更多 -->
					<el-dropdown style="float: left; margin-left: 5%;">
						<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> <-->
						<span class="el-dropdown-link" @mouseenter="sqq" style="position:relative;">
						<img class="moreimg" :src="moretb" />
						<i class="more" ref="gdcol">更多</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
						<el-dropdown-menu slot="dropdown" class="lomore">
							<div class="moo">
								<div class="mores1" @click="returnresource()">资源中心</div>
								<div class="mores1" @click="help">帮助</div>
								<div class="mores1" @click="Preservation">保存设置</div>
								<div class="mores1" @click="xiugai">修改密码</div>
								<div class="mores1" @click="abouts">联系我们</div>
								<div class="moresb">版本号: v 1.0.1</div>
							</div>
						</el-dropdown-menu>
					</el-dropdown>
					<!-- 更多下拉 -->
					<!-- <More v-show="more"></More> -->
					<!-- 下拉菜单---更多--结束 -->
				</div>
				<div class="demo-image__placeholder">
					<div class="block"  v-for="(site,index) in dataList" :modelid="site.id">
						<span class="demonstration">{{site.name}}</span>
						<el-image :src="src"></el-image>
						<el-tooltip class="item" effect="dark" content="下载到本地跟清晰" placement="top">
							<el-button type="primary" round @click="down(site.id)" >下载模型</el-button>
						</el-tooltip>

					</div>
				</div>
			</el-main>

		</el-container>



</template>
<script>
import api from '@/api/api.js';
import qs from 'qs';
import axios from 'axios';

export default {
	data() {
		return {
			value: '',
			modelid:'',
			activeIndex: '1',
			activeIndex2: '1',
			src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
			dataList: [],
			model: '',
			projectmodel: '',
			panduan: false,
			xianyin: false,
			xianyinxuni: false,
			hometop: true,
			fileshow: true,
			options: {
				target: api.Uploadpipes, //SpringBoot后台接收文件夹数据的接口
				testChunks: false, //是否分片-不分片
				chunkSize: '2048000000'
			},
			bjtu: require('../../assets/image/bianji.png'),
			bjcolor: 'color:#333333',
			fbtu: require('../../assets/image/bianji.png'),
			fbcolor: 'color:#333333',
			//发布
			release: false,

		};
	},
	mounted() {
		this.list = this.states.map(item => {
			return { value: item, label: item };
		});
	},
	created() {
		this.dld();
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
	},
	methods: {
		help4() {
			location.href = 'http://www.jh-bim.com/home/solution';
		},
		Preservation4() {
			this.$router.push('/baocun');
		},
		xiugai4() {
			this.$router.push('/xiugai');
		},
		abouts4() {
			this.$router.push('/about');
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
		//点击发布
		fnfabug() {
			this.fbcolor = 'color:#2180ED';
			this.fbtu = require('../../assets/image/bjblue.png');
			this.bjtu = require('../../assets/image/bianji.png');
			(this.release = true), (this.xianyinxuni = false), (this.bjcolor = 'color:#333333');
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		returndownload() {
			this.$router.push('/download');
		},
		remoteMethod(query) {
			if (query !== '') {
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
					this.options = this.list.filter(item => {
						return item.label.toLowerCase()
								.indexOf(query.toLowerCase()) > -1;
					});
				}, 200);
			} else {
				this.options = [];
			}
		},
		dld(){
			let mythis=this;
			this.$http.get(api.GetAllList).then(function (response) {
				mythis.dataList=response;
				console.log(mythis.dataList);
			}).catch(function (err) {
				console.log(err)
			})
		},
		down(id){
			this.$http.post(api.Download,qs.stringify({ modelid: id})).then(function (response) {
				alert("下载成功");
			}).catch(function (error) {
				alert("下载失败:"+error);
				console.log(error);
			})
		},
	}
};
</script>

<style>
	.demo-image__placeholder{
		width: 100%;
		height: 300px;
	}
	.block {
		float: left;
		width: 20%;
		height: 300px;
		margin: 3% 1%;

	}
	.search{
		margin: 10px auto;
	}
	.lomore {
		background: rgba(225, 225, 225, 0.6);
		position: absolute;
		top: 0;
		left: 585px !important;
		border: none;
	}
	.moo {
		width: 183px;
		height: 176px;
		background: url(../../assets/image/mores.png);
		padding-left: 10px;
		padding-right: 10px;
		cursor: pointer;
	}
	.mores1 {
		width: 183px;
		height: 34px;
		border-bottom: 1px solid #999999;
		text-align: left;
		line-height: 34px;
		color: #666666;
		font-size: 16px;
		font-weight: 500;
	}
	.moresb {
		border: 0;
		text-align: left;
		line-height: 34px;
		color: #666666;
		font-size: 16px;
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
		width: 1920px;
	}
	html {
		width: 1920px;
	}
	.zong {
		width: 1920px;
		height: 1080px;
		/* 	background:green; */
		background-image: url(../../assets/image/u91_02.png);
		background-repeat: no-repeat;
		background-size: 1920px 1080px;
		/* background-attachment: fixed; */
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

	/*top右上角 */
	.top-right {
		width: 289px;
		height: 29px;
		/* 	background:blue; */
		float: right;
	}
	.login-img1 {
		width: 20px;
		height: 18px;
		cursor: pointer;
		float: left;
		display: inline-block;
		padding-top: 3px;
	}
	.logintopimg1 {
		display: inline-block;
		width: 20px;
		height: 18px;
		float: left;
		/* background:red; */
	}
	.logintopimg1 img {
		width: 100%;
		height: 100%;
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
	/*登录右上角的登录 */
	.login-parent {
		width: 1703px;
		height: 29px;
		/* 	background:red; */
	}
	.imgzong {
		width: 160px;
		height: 25px;
		/* background:green; */
		float: left;
		padding-top: 4px;
	}
	.dengl {
		float: left;
		margin-left: 4px;
		font-size: 14px;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: rgba(33, 128, 237, 1);
		line-height: 26px;
	}
	.guanbi-toprig {
		width: 120px;
		height: 29px;
		/* background:red; */
		float: left;
	}
	.toprig11,
	.toprig33 {
		display: block;
		width: 36px;
		height: 27px;
		/* 	background:blue; */
		float: left;
		/* border:1px solid #2180ED; */
	}
	.toprig22 {
		display: block;
		width: 36px;
		height: 27px;
		/* 	background:blue; */
		float: left;
		/* border-top:1px solid #2180ED;
            border-bottom:1px solid #2180ED; */
	}
	/* 主页top部分*/
	.hometoplo {
		width: 1500px;
		height: 57px;
		/* 	background:plum; */
		position: absolute;
		top: 30px;
		left: 222px;
	}
	/* 左侧边栏 */
	.left {
		width: 217px;
		height: 987px;
		/* background:blue; */
	}
	.logo {
		width: 117px;
		height: 28px;
		padding-left: 16px;
		/* background:black; */
		padding-top: 29px;
		/* left:15px; */
		/* background:red; */
	}
	.lefttop {
		width: 216px;
		height: 60px;
		/* background-color:green;
            background: url(../../assets/image/homecebian8@2x.png); */
	}
	.el-dropdown-link {
		cursor: pointer;
	}
	.xmimg {
		width: 27px;
		height: 26px;
		padding-left: 80px;
		padding-top: 2px;
	}
	.xm {
		width: 38px;
		height: 17px;
		font-size: 20px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		font-size: 20px;
		font-style: normal;
		padding-left: 5px;
		line-height: 17px;
	}
	.sqimg {
		width: 27px;
		height: 26px;
	}
	.sq {
		width: 40px;
		height: 18px;
		/* color:#2180ED; */
		font-size: 20px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		padding-left: 6px;
		font-style: normal;
	}
	.moreimg {
		width: 25px;
		height: 25px;
	}
	.more {
		width: 39px;
		height: 19px;
		font-size: 20px;
		font-style: normal;
		padding-left: 5px;
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
		width: 555px;
		height: 555px;
		position: absolute;
		z-index: 50;
		top: 42%;
		left: 62%;
		margin-top: -223px;
		margin-left: -550px;
		background-color: white;
		background: url(../../assets/image/beijing@2x.png) no-repeat;
		background-size: 555px 555px;
	}
	#popContainer {
		width: 1920px;
		height: 1080px;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.2);
	}
	/* .logintopimg {
        display: block;
        width: 18px;
        height: 18px;
        float: left;
        padding-top: 4px;
        margin-right: 3px;
    }
    .logintopimg img {
        width: 100%;
        height: 100%;
    } */
	.logintop {
		color: #2180ed;
		font-size: 14px;
		float: left;
	}
	.close {
		width: 20px;
		height: 20px;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.2));
		border-radius: 2px;
		position: absolute;
		right: -50px;
	}
	.close img {
		width: 20px;
		height: 20px;
	}
	.loginlogo {
		width: 129px;
		height: 37px;
		position: absolute;
		left: 214px;
		top: 126px;
	}
	.loginlogo img {
		width: 100%;
		height: 100%;
	}
	.user {
		width: 289px;
		height: 40px;
		position: absolute;
		top: 217px;
		left: 134px;
		background: #ffffff;
	}
	.userimg {
		width: 27px;
		height: 30px;
		display: block;
		float: left;
		padding-let: 9px;
		padding-top: 6px;
		padding-right: 4px;
	}
	.userimg img {
		width: 100%;
		height: 100%;
	}
	.fenge {
		width: 2px;
		height: 25px;
		float: left;
	}
	.fenge img {
		width: 2px;
		height: 25px;
		padding-top: 5px;
	}
	.user input {
		width: 244px;
		height: 40px;
		float: left;
		padding-left: 12px;
		border: none;
		line-height: 40px;
		display: inline-block;
	}
	.yanzheng {
		display: block;
		width: 128px;
		height: 16px;
		font-size: 16px;
		font-weight: 400;
		font-family: MicrosoftYaHei;
		color: red;
		position: absolute;
		left: 214px;
		top: 191px;
	}
	.password {
		width: 289px;
		height: 40px;
		position: absolute;
		top: 283px;
		left: 134px;
		background: #ffffff;
	}
	.passwordimg {
		width: 27px;
		height: 30px;
		display: block;
		float: left;
		padding-let: 9px;
		padding-top: 6px;
		padding-right: 4px;
	}
	.passwordimg img {
		width: 100%;
		height: 100%;
	}
	.fenge {
		width: 2px;
		height: 25px;
		float: left;
	}
	.fenge img {
		width: 2px;
		height: 25px;
		padding-top: 5px;
	}
	.password input {
		width: 239px;
		height: 39px;
		float: left;
		padding-left: 12px;
		border: none;
		line-height: 40px;
		display: inline-block;
	}

	/* 记住忘记密码 */
	.refo {
		width: 260px;
		height: 15px;
		position: absolute;
		top: 330px;
		left: 152px;
		margin-top: 5px;
	}
	.el-checkbox__label {
		position: absolute;
		left: -30px;
		top: -2px;
		font-size: 12px;
		color: #2180ed;
		padding-left: 13px;
		background: rgba(0, 0, 0, 0);
	}
	.el-checkbox__inner {
		position: absolute;
		left: -35px;
		top: -10px;
	}
	.remember {
		width: 63px;
		height: 11px;
	}
	/* 忘记密码 */
	.forget-paw {
		color: #2180ed;
		font-size: 12px;
		position: absolute;
		left: 186px;
		top: -4px;
		font-weight: 400;
		cursor: pointer;
	}
	/* 登录按钮 */
	.Logon-button {
		width: 255px;
		height: 36px;
		position: absolute;
		top: 372px;
		left: 150px;
		background: url(../../assets/image/juxing3@2x.png);
		cursor: pointer;
	}
	.Logon-button span {
		font-size: 14px;
		font-weight: 400;
		font-family: MicrosoftYaHei;
		color: #ffffff;
		text-align: center;
		line-height: 36px;
	}
	/* 还没有账号？马上注册 */
	.login-footer {
		width: 155px;
		height: 20px;
		font-size: 12px;
		position: absolute;
		top: 418px;
		left: 216px;
	}
	.noreg {
		font-family: MicrosoftYaHei;
		font-weight: 400;
		font-style: normal;
		color: rgba(51, 51, 51, 1);
	}
	.login-reg {
		color: #2180ed;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		font-style: normal;
		cursor: pointer;
	}
</style>


