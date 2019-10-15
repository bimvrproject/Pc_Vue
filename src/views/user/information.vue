<template>
	<div>
		<div class="zongin" style="overflow:hidden;">
			<!-- 	<iframe src="https://www.baidu.com/s?tn=news&rtt=1&bsst=1&wd=%E9%A6%99%E6%B8%AF&cl=2&origin=ps" frameborder="0" style="width:100%;height:100%;"></iframe> -->
		</div>
		<div class="lefttopjzm">
			<div class="leftjzm">
				<img class="logojzm" src="../../assets/image/jinghekeji.png" />
				<Xunilogo v-show="xianyinxuni"></Xunilogo>
			</div>
		</div>
		<div style="width:47.8125rem;height:28.4375rem;line-height:28.4375rem;position:absolute;top:5rem;left:6.875rem;background:red;" v-if="false">
			<img :src="drawpicture" style="" />
		</div>
		<div class="box">
			<!-- 除去侧边栏的剩余部分 -->
			<!-- 右侧登录标识 -->
			<!-- <Zheader v-show="zheaderxy"></Zheader> -->
			<!-- 右侧top部分 -->
			<div class="hometopjzmin" v-show="hometop">
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left;margin-left:-1.4rem;">
					<span class="el-dropdown-link" @click="fnxxxm">
						<img class="xmimgin" src="../../assets/image/bluefz.png" alt="" />
						<i class="xmin" ref="xmcol" style="color: #2180ED;">项目</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="xmxl" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fnxxsq" @mouseenter="fnhsq()" @mouseleave="fnhsqlev()">
						<img class="sqimgin" :src="hsq"/>
						<i class="sqin" :style="hsqcolor">社区</i>
						<!-- 	<i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->
				<!-- 下拉菜单---更多 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> -->
					<span class="el-dropdown-link" style="position:relative;" @mouseenter="fnmoin">
						<img class="moreimgin" src="../../assets/image/more@2x.png" />
						<i class="morein">更多</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="lmore" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
					<el-dropdown-menu slot="dropdown" class="inmodelmore">
						<div class="inmoo" @mouseenter="fnmoin" @mouseleave="fnleave">
							<div class="inmores1"><a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a></div>
							<div class="inmores1" @click="fnabout">联系我们</div>
							<div class="inmoresb">版本号: v 1.0.1</div>
						</div>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目/信息编辑/图纸 -->
			<div style="width:18.75rem;height:0.6875rem;position: absolute;top:3.93125rem;left:8.21875rem;text-align:left;cursor:pointer;">
				<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;line-height:0.6875rem;">新建项目</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
				<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;margin-left:0.15625rem;line-height:0.7575rem;">信息编辑</span>
			</div>
			<!-- 项目信息表 -->
			<div class="xmb">
				<h2 class="xmtx">项目信息填写</h2>
				<form action="" class="boxg">
					<div class="mc">
						<i class="mc1">项目名称 ：</i>
						<el-input class="mc11" v-model="input" placeholder="请输入项目名称"></el-input>
					</div>
					<div class="ks">
						<!-- <i class="ks1">开始时间 ：</i> -->
						<div class="block">
							<span class="demonstration">开始时间 ：</span>
							<el-date-picker v-model="value1" type="date" placeholder="选择开始日期" class="startdata"></el-date-picker>
						</div>
					</div>
					<div class="jg">
						<!-- <i class="jg1">结束时间 ：</i> -->
						<div class="block">
							<span class="demonstration">结束时间 ：</span>
							<el-date-picker v-model="value2" type="date" placeholder="选择结束日期" class="enddata"></el-date-picker>
						</div>
					</div>
					<div class="dd">
						<i class="dd1" style="font-size:0.4rem;">项目地点 ：</i>
						<el-input class="mc11" v-model="input1" placeholder="请输入项目地点"></el-input>
					</div>
					<div class="bz">
						<i class="bz1" style="font-size:0.4rem;">备注信息 ：</i>
						<el-input type="textarea" :rows="5" placeholder="请输入备注信息" v-model="textarea" class="bzxx"></el-input>
					</div>
					<el-row><el-button type="primary" class="tj" @click="fntijiao">提交</el-button></el-row>
				</form>
				<!-- 	<Quanxian v-show="qx"></Quanxian> -->
				<!-- 权限人员 -->
			</div>
		</div>
		<!-- 点击联系我们的遮罩 -->
		<div style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);" v-show="abouts" @click="fnaboutmark"></div>
	</div>
</template>
<script>
import api from '@/api/api.js';
import axios from 'axios';
import Newjian from './newjian';
import Xunilogo from './xunilogo';
import addressurls from '@/api/ip.js';
// import Zheader from './header';
export default {
	data() {
		return {
			panduan: false,
			xianyin: false,
			xianyinxuni: false,
			hometop: true,
			//总的等陆头部
			zheaderxy: true,
			input: '',
			value1: '',
			value2: '',
			input1: '',
			textarea: '',
			xmxl: require('../../assets/image/shang.png'),
			lmore: require('../../assets/image/pmjtxia.png'),
			// 联系我们
			abouts: false,
			// 社区默认状态
			hsq:require('../../assets/image/sq@2x.png'),
			hsqcolor:"color:#333333"
		};
	},
	components: {
		Newjian,
		Xunilogo
		// Zheader
	},
	created() {
		var pro_id = this.$route.params.project_id;
		alert(pro_id)
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
		this.$eventbus.$emit('cezhan4', 'xianmuxx');
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
		fnmoin() {
			this.lmore = require('../../assets/image/shang.png');
		},
		// 移出更多
		fnleave() {
			this.lmore = require('../../assets/image/pmjtxia.png');
		},
		// 点击项目
		fnxxxm() {
			this.$router.push('/Login');
		},
		// 点击社区
		fnxxsq() {
			this.$router.push('/');
		},
		fns() {
			this.xianyin = !this.xianyin;
			// this.xianyinxuni = false;
			this.$eventbus.$emit('showyin');
		},
		//填写项目
		fntijiao() {
			var pro_id = this.$route.params.project_id;
			alert(pro_id)
			
			//点提交的时候跳转到权限页
			if (!this.input) {
				alert('项目名称不能为空');
			} else if (!this.value1) {
				alert('开始时间不能为空');
			} else if (!this.value2) {
				alert('结束时间不能为空');
			} else if (!this.input1) {
				alert('项目地点不能为空');
			} else {
				this.biao = false;
				this.qx = true;
				this.quanxianbiao = true;
				// // 新增项目
				axios.post(api.AddProject, { 
					projectName: this.input,
					startTime: this.value1, 
					endTime: this.value2, 
					projectAddress: this.input1, 
					projectContent: this.textarea,
					projectId: pro_id})
					.then(result => {
						console.log(result.data);
						this.$router.push('/newjzmodel');
					});
			}
			sessionStorage.removeItem('projectid');
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
/* 更多 */
.inmodelmore {
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
.inmoo {
	width: 4.75rem;
	/* 		height: 195px; */
	/* 	background: url(../../assets/image/mores.png); */
	padding-left: 0.1rem;
	padding-right: 0.25rem;
	cursor: pointer;
}
.inmores1 {
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
.inmoresb {
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
.zongin {
	width: 60rem;
	height: 33.75rem;
	/* 	background:green; */
	/* background: url(../../assets/image/bjt.jpg);
	background-repeat: no-repeat;
	background-size: 100% 100%; */
	/* 	background-attachment: fixed; */
	position: relative;
}
.el-main {
	/* padding-left:50px; */
	/* padding-top:29px; */
	padding: 0 !important;
}
/* 主页top部分*/
.hometopjzmin {
	position: absolute;
	top: 0.9375rem;
	left: 6.9375rem;
	/* background:red; */
	line-height: 1.78125rem;
}
/* 左侧边栏 */
.left {
	width: 217px;
	height: 987px;
	/* background:blue; */
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
	top: 0rem;
}
.el-dropdown-link {
	cursor: pointer;
	color: #333333;
}
.xmimgin {
	width: 0.84375rem;
	height: 0.8125rem;
	padding-left: 2.5rem;
	padding-top: 0.0625rem;
}
.xmin {
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
.sqimgin,
.bjimgin {
	width: 0.84375rem;
	height: 0.8125rem;
}
.sqin {
	width: 1.25rem;
	height: 0.5625rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left: 0.1875rem;
	font-style: normal;
}
.moreimgin {
	width: 0.78125rem‬;
	height: 0.78125rem;
}
.morein {
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
/* 项目信息 */
i {
	font-style: normal;
	font-size: 18px;
	color: #333333;
	font-weight: 400;
}
.xmb {
	width: 50.6rem;
	height: 24.7rem;
	background: rgba(255, 255, 255, 0.3);
	position: absolute;
	top: 4.8rem;
	left: 7.8rem;
	padding-top: 2.1rem;
}
/* 项目填写标题 */
.xmtx {
	width: 18rem;
	height: 0.8rem;
	font-size: 0.625rem;
	/* 	background:red; */
	font-style: none;
	margin-left: 16rem;
	margin-bottom: 1rem;
}
.mc1 {
	font-weight: 400;
	font-size: 0.4rem;
	color: #333333;
}
.mc11 {
	width: 22.6rem;
	height: 0.8rem;
	margin-bottom: 0.8rem;
/* 	background:red; */
}
.demonstration {
	font-weight: 400;
	font-size: 0.4rem;
	color: #333333;
}
.startdata,
.enddata,
.bzxx {
	width: 22.625rem;
	height: 0.9375rem;
	margin-bottom: 1.09375rem;
}
.bz1 {
	display: inline-block;
	padding-bottom: 0.6rem;
}
.tj {
	width: 20.625rem;
	height: 1.40625rem;
	margin-bottom: 1.09375rem;
	margin-top: 6.25rem;
	margin-left: 2.8rem;
	font-size: 0.5rem;
	color: #ffffff;
	font-weight: 400;
	line-height:0.40625rem;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
	width: 22.34375rem;
}
.el-picker-panel__body {
	width: 22.3rem;
}
/* .el-picker-panel__content{
	width:20.53125rem;
}
.el-date-picker{
	width:19.96875rem;
} */
.el-date-picker .el-picker-panel__content {
	width: 21.34375rem !important;
}
.el-date-picker {
	width: 22.28125rem !important;
}
/* 项目名称，开始时间，结束时间，项目地点 */
.el-input__inner{
	height:1.25rem;
	}
.el-input__icon{
	width:0.78125rem;
	line-height:1.25rem;
}
</style>
