<template>
	<div>
		<div class="zongsfjc">
			<!-- <iframe src="https://www.baidu.com/s?tn=news&rtt=1&bsst=1&wd=%E9%A6%99%E6%B8%AF&cl=2&origin=ps" frameborder="0" style="width:100%;height:100%;"></iframe> -->
		</div>
		<div class="lefttopjzm">
			<div class="leftjzm">
				<img class="logojzm" src="../../assets/image/jinghekeji.png" />
				<Xunilogo v-show="xianyinxuni"></Xunilogo>
			</div>
		</div>
		<div>
			<!-- 除去侧边栏的剩余部分 -->
			<!-- 右侧登录标识 -->
			<!-- <Zheader v-show="zheaderxy"></Zheader> -->
			<!-- 右侧top部分 -->
			<div class="hometopjzmsfjc" v-show="hometop">
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left;margin-left:-1.4rem;">
					<span class="el-dropdown-link" @click="fnsfxm">
						<img class="xmimgsfjc" src="../../assets/image/bluefz.png" />
						 <span class="xmsfjc">项目</span>
						<i class="fa fa-angle-down shouye" style="color:rgba(0,0,0,.6);font-size:0.9rem;display:inline-block;
						vertical-align: middle;margin-left:0.16rem;">
						</i>
				<!-- 		<i class="xmsfjc" style="color: #2180ED;">项目</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img src="../../assets/image/pmjtxia.png" alt="" style="width: 100%;height: 100%;" />
						</i> -->
					</span>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fnsfsq" @mouseenter="fnhsq()" @mouseleave="fnhsqlev()">
						<img class="sqimgsfjc" :src="hsq" />
						<i class="sqsfjc" :style="hsqcolor">社区</i>
						<!-- 	<i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->
				<!-- 下拉菜单---更多 -->
				<div class="moretopcomsfjc" style="height:0.93125rem;" @mouseenter="fnmorsfjc()" @mouseleave="fnmorlevsfjc()">
					<img  :src="moretb"  alt="" style="width:0.84375rem;height:0.8125rem;margin-right:0.16rem;float:left;">
					   <span class="hgmorecomsfjc">更多</span><i class="fa fa-angle-down shouye" style="color:rgba(0,0,0,.6);font-size:0.9rem;display:inline-block;
						 vertical-align: middle;margin-left:0.16rem;">
						 </i>
						  <div class="moocomsfjc" style="margin-top:0.1rem;">
						 	<div class="mores1comsfjc">
						 		<a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a>
						 	</div>
						 	<div class="mores1comsfjc" @click="fnabout">联系我们</div>
						 	<div class="moresbcomsfjc">版本号: v 1.0.1</div>
						 </div>
				</div>
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目/管线综合/碰撞 -->
			<div style="width:18.75rem;height:0.6875rem;position: absolute;top:3.93125rem;left:8.21875rem;text-align:left;cursor:pointer;">
				<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;line-height:0.6875rem;">新建项目</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
				<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;margin-left:0.15625rem;line-height:0.7575rem;">管线综合</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
				<span style="color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;margin-left:0.15625rem;float:left;line-height:0.7575rem;">模型</span>
			</div>
			<!-- 请问要进行碰撞检查吗 -->
			<div class="sfjcpz">
				<div class="sfjcpz-title"><span>请问要进行碰撞检查吗？</span></div>
				<div class="sfjcpz-bottom">
					<span class="qu1" @click="fnqx">取消</span>
					<span class="qd1" @click="fn9">确定</span>
				</div>
			</div>
		</div>
		<!-- 点击联系我们的遮罩 -->
		<div style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);" v-show="abouts" @click="fnaboutmark"></div>
		<!-- 点进碰撞页中询问是否点击碰撞的遮罩 -->
		<!-- 		<div style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);" v-show="sfjcpz"></div> -->
	</div>
</template>
<script>
import api from '@/api/api.js';
import qs from 'qs';
import Newjian from './newjian';
import Xunilogo from './xunilogo';
// import Zheader from './header';
export default {
	data() {
		return {
			title: '1234567890',
			panduan: false,
			xianyin: false,
			xianyinxuni: false,
			hometop: true,
			//总的等陆头部
			zheaderxy: true,
			lmore: require('../../assets/image/pmjtxia.png'),
			// 联系我们
			abouts: false,
			//点进碰撞页中询问是否点击碰撞的遮罩
			// sfjcpz:true
			// 社区默认状态
		 hsq:require('../../assets/image/sq@2x.png'),
		 hsqcolor:"color:#333333",
		 moretb: require('../../assets/image/more@2x.png')
		};
	},
	components: {
		Newjian,
		Xunilogo
		// Zheader
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
		this.$eventbus.$emit('cezhan2', 'pengzhuang');
		this.$eventbus.$emit('hometop');
	},
	methods: {
		// 点击管线综合路径
		fngx() {
			this.$router.push('/gxmoxin');
		},
		fng() {
			this.$router.push('/gxmoxin');
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
		// 划过更多
		fnmorsfjc(){
			this.moretb = require('../../assets/image/moress.png');
		},
		// 移出更多
		 fnmorlevsfjc(){
			 this.moretb = require('../../assets/image/more@2x.png');
		},
		// 点击项目
		fnsfxm() {
			this.$router.push('/Login');
		},
		// 点击社区
		fnsfsq() {
			this.$router.push('/');
		},
		fns() {
			this.xianyin = !this.xianyin;
			// this.xianyinxuni = false;
			this.$eventbus.$emit('showyin');
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
		//点击取消按钮
		fnqx() {
			this.$router.push('/endpengzhuang');
		},
		// 点击确定按钮
		fn9() {
			this.$router.push('/jcpznumber');
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
.moretopcomsfjc{
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
.hgmorecomsfjc{
	color:#333333;
}
.moocomsfjc{
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
.mores1comsfjc{
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
.moresbcomsfjc{
		border: 0;
		text-align: left;
		line-height:0.9rem;
		color: #666666;
		font-size:0.46rem;
		font-weight: 500;
		/* background:red; */
	}
	.moretopcomsfjc:hover .moocomsfjc{
		  display:block;
	}
	.moretopcomsfjc:hover .hgmorecomsfjc{
		 color:#2180ED
	}
	.moretopcomin:hover .shouye{
		 transform:rotate(180deg);
	}
.sfjcmore {
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
.sfjcmoo {
	width: 4.75rem;
	/* 		height: 195px; */
	/* 	background: url(../../assets/image/mores.png); */
	padding-left: 0.1rem;
	padding-right: 0.25rem;
	cursor: pointer;
}
.sfjcmores1 {
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
.sfjcmoresb {
	border: 0;
	text-align: left;
	line-height: 0.9rem;
	color: #666666;
	font-size: 0.46rem;
	font-weight: 500;
	/* 	background:red; */
}
* {
	padding: 0;
	margin: 0;
}
.zongsfjc {
	width: 59.9375rem;
	height: 33.65625rem;
	/* background:green; */
	background: url(../../assets/image/sfpz.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: relative;
}
.el-main {
	/* padding-left:50px; */
	/* padding-top:29px; */
	padding: 0 !important;
}
/* 主页top部分*/
.hometopjzmsfjc {
	/* width:46.875rem;
	height:1.78125rem; */
	position: absolute;
	top:0.6275rem;
	left:7.2rem;
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
	padding-right: 0rem;
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
.xmimgsfjc {
	width: 0.84375rem;
	height: 0.8125rem;
	padding-left: 2.5rem;
	padding-top: 0.0625rem;
}
.xmsfjc {
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
.sqimgsfjc,
.bjimgsfjc {
	width: 0.84375rem;
	height: 0.8125rem;
}
.sqsfjc {
	width: 1.25rem;
	height: 0.5625rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left: 0.1875rem;
	font-style: normal;
}
.moreimgsfjc {
	width: 0.78125rem‬;
	height: 0.78125rem;
}
.moresfjc {
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
/* 查看碰撞点 */
/* .number {
	width: 400px;
	height: 148px;
	background: rgba(225, 225, 225, 0.3);
	position: absolute;
	top: 500px;
	left: 848px;
	border-radius: 10px;
	border: 2px solid #ffffff;
	cursor: pointer;
} */
/* 是否检查碰撞 */
.sfjcpz {
	width: 12.5rem;
	height: 4.625rem;
	background: url(../../assets/image/sfjcbjt.png) no-repeat;
	background-size: 12.5rem 4.625rem;
	position: absolute;
	top: 14.0625rem;
	left: 25rem;
	border-radius: 0.625rem;
	border: 0.09375rem solid #ffffff;
	z-index: 200;
}
.sfjcpz-title {
	width: 12.5rem;
	height: 2.5rem;
	text-align: center;
	line-height: 2.5rem;
	font-size: 0.9375rem;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
	/* background:red; */
}
.sfjcpz-bottom {
	width: 12.5rem;
	height: 3.75rem;
	/* display:flex;
			justify-content: space-around;
			align-items:center; */
}
.qu1 {
	display: inline-block;
	width: 3.125rem;
	height: 1.25rem;
	background: #ffffff;
	line-height: 1.25rem;
	border-radius: 0.625rem;
	margin-right: 0.625rem;
	margin-top: 0.2375rem;
	cursor: pointer;
	font-size: 0.6875rem;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(102, 102, 102, 1);
}
.qd1 {
	display: inline-block;
	width: 3.125rem;
	height: 1.25rem;
	background: #2180ed;
	line-height: 1.25rem;
	border-radius: 0.625rem;
	cursor: pointer;
	font-size: 0.6875rem;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(255, 255, 255, 1);
}
</style>
