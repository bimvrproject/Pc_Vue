<template>
	<div>
		<div class="zong1"><!-- <iframe src="http://39.105.191.230/1166880289847382017/1/model/model.html" frameborder="0" style="width:100%;height:100%;"></iframe> --></div>
		<div class="lefttopjzm">
			<div class="leftjzm">
				<img class="logojzm" src="../../assets/image/jinghekeji.png" />
				<Xunilogo v-show="xianyinxuni"></Xunilogo>
			</div>
		</div>
		<el-main class="box">
			<!-- 除去侧边栏的剩余部分 -->
			<!-- 右侧登录标识 -->
			<div class="login-parent1">
				<div class="top-right">
					<!-- 登录头像 -->
					<div class="imgzong">
						<div class="login-img1" @click="fn4" style="position: absolute;">
							<span class="logintopimg"><img src="../../assets/image/userimg@2x.png" alt="" /></span>
							<!-- <span class="logintop">登录</span> -->
						</div>
						<div class="dengl2">12345645699</div>
					</div>
					<!-- 小化 -->
					<div class="guanbi-toprig">
						<span class="toprig1"><img src="../../assets/image/min.png" alt="" style="width:39px;height:28px;" /></span>
						<span class="toprig2"><img src="../../assets/image/max.png" alt="" style="width:39px;height:28px;" /></span>
						<span class="toprig3"><img src="../../assets/image/gb.png" alt="" style="width:39px;height:28px;" /></span>
					</div>
				</div>
			</div>
			<!-- 右侧top部分 -->
			<div class="hometopjzm" v-show="hometop">
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left; margin-left:0px;">
					<span class="el-dropdown-link">
						<img class="xmimg" src="../../assets/image/bluefz.png" />
						<i class="xm" style="color: #2180ED;">项目</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left: 5%;">
					<span class="el-dropdown-link">
						<img class="sqimg" src="../../assets/image/sq@2x.png" />
						<i class="sq" style="color:#333333;">社区</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
				</el-dropdown>
				<el-dropdown style="float: left; margin-left: 5%;">
					<span class="el-dropdown-link">
						<img class="bjimg" src="../../assets/image/bianji.png" />
						<i class="bj">编辑</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->
				<!-- 下拉菜单---更多 -->
				<el-dropdown style="float: left; margin-left: 5%;">
					<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> -->
					<span class="el-dropdown-link">
						<img class="moreimg" src="../../assets/image/more@2x.png" />
						<i class="more">更多</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
				</el-dropdown>
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 标签名 -->

			<!-- 上传 -->
			<div>
				<div class="upfile">
					<div class="upfilezx">
						<span class="upfiletit1">上传建筑结构的模型</span>
						<uploader :file-status-text="statusText" :options="options" class="uploader-example" @file-complete="onFileSuccess">
							<uploader-unsupport></uploader-unsupport>
							<uploader-drop><uploader-btn :directory="true" :single="true">选择文件夹</uploader-btn></uploader-drop>
							<uploader-list></uploader-list>
						</uploader>
					</div>
				</div>
			</div>
		</el-main>
	</div>
</template>
<script>
import api from '@/api/api.js';
import qs from 'qs';
import Newjian from './newjian';
import Xunilogo from './xunilogo';
import axios from 'axios';
export default {
	data() {
		return {
			panduan: false,
			xianyin: false,
			xianyinxuni: false,
			hometop: true,
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
			}
		};
	},
	components: {
		Newjian,
		Xunilogo
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
		this.$eventbus.$emit('shows');
	},
	mounted() {
		this.$eventbus.$emit('cezhan', 'moxin');
		this.$eventbus.$emit('hometop');
	},
	methods: {
		fns() {
			this.xianyin = !this.xianyin;
			// this.xianyinxuni = false;
			this.$eventbus.$emit('showyin');
		},
		onFileSuccess: function() {
			axios.post(api.addBuildModel).then(result => {});
		},
		// fnxuni(){
		// 	this.xianyin = false;
		// },
		fn4() {
			this.loginWindow = 'display:block';
		},
		look() {
			this.$router.push('/onepengzhuang');
		}
	}
};
</script>

<style>
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
.zong1 {
	width: 1920px;
	height: 1080px;
	/* 	background:green; */
	background: url(../../assets/image/bjt.jpg);
	background-repeat: no-repeat;
	background-size: 1920px 1080px;
	background-attachment: fixed;
	position: relative;
}
.el-main {
	/* padding-left:50px; */
	/* padding-top:29px; */
	padding: 0 !important;
}
/*top右上角 */
.top-right {
	width: 282px;
	height: 29px;
	float: right;
}
.login-img1 {
	cursor: pointer;
	width: 60px;
	height: 30px;
}
/*登录右上角的登录 */
.login-parent1 {
	width: 1703px;
	height: 29px;
	position: absolute;
	top: 0;
	left: 216px;
}
.imgzong {
	width: 160px;
	height: 25px;
	float: left;
	padding-top: 4px;
}
.dengl2 {
	float: left;
	margin-left: 30px;
	font-size: 14px;
	color: #2180ed;
	width: 60px;
	height: 22px;
	line-height: 35px;
}
.guanbi-toprig {
	width: 120px;
	height: 29px;
	float: left;
}
.toprig11,
.toprig33 {
	display: block;
	width: 36px;
	height: 27px;
	float: left;
}
.toprig22 {
	display: block;
	width: 36px;
	height: 27px;
	float: left;
}
.logintopimg {
	display: inline-block;
	width: 26px;
	height: 26px;
	float: left;
}
.logintopimg img {
	width: 26px;
	height: 26px;
}
/* 主页top部分*/
.hometopjzm {
	width: 1500px;
	height: 57px;
	position: absolute;
	top: 30px;
	left: 222px;
}
/* 左侧边栏 */
.left {
	width: 217px;
	height: 987px;
	padding-right: 10px;
}
.logojzm {
	width: 117px;
	height: 28px;
	padding-left: 50px;
	padding-top: 29px;
	padding-right: 0px;
}
.lefttopjzm {
	width: 216px;
	height: 60px;
	/* 	background-color:green;
			background: url(../../assets/image/homecebian8@2x.png); */
	position: absolute;
	top: 0px;
}
.el-dropdown-link {
	cursor: pointer;
	color: #333333;
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
	color: #2180ed;
	font-size: 20px;
	font-style: normal;
	padding-left: 5px;
	line-height: 17px;
}
.sqimg,
.bjimg {
	width: 27px;
	height: 26px;
}
.sq {
	width: 40px;
	height: 18px;
	font-size: 20px;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left: 6px;
	font-style: normal;
}
.bj {
	width: 40px;
	height: 18px;
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
	color: #2180ed;
}
.el-icon-arrow-down {
	font-size: 20px;
}
.upfile {
	width: 400px;
	height: 148px;
	background: rgba(225, 225, 225, 0.6);
	position: absolute;
	top: 460px;
	left: 770px;
	border-radius: 15px;
	/* 	border:2px dashed ghostwhite; */
}
.upfilezx {
	width: 390px;
	height: 115px;
	background: rgba(225, 225, 225, 0.3);
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	border-radius: 9px;
	border: 3px solid #ffffff;
	padding-top: 25px;
}
.upfiletit1 {
	width: 390px;
	color: #333333;
	font-size: 30px;
	display: inline-block;
}
.uploader-drop {
	display: inline-block;
	width: 180px;
	height: 30px;
	margin-top: 15px;
	border-radius: 20px;
	background: url(../../assets/image/juxing3@2x.png) no-repeat;
	text-align: center;
	line-height: 30px;
	color: #ffffff;
}
.uploader-btn {
	display: inline-block;
	border: 0 solid #0000ff !important;
	color: #e8e7eb !important;
	font-size: 26px !important;
	padding: 0 !important;
}
/* 查看碰撞点 */
.number {
	width: 400px;
	height: 148px;
	background: rgba(225, 225, 225, 0.3);
	position: absolute;
	top: 500px;
	left: 848px;
	border-radius: 10px;
	border: 2px solid #ffffff;
	cursor: pointer;
}

/* 上传显示的样式 */
.uploader-file {
	top: 9px;
	border-radius: 5px;
}
</style>
