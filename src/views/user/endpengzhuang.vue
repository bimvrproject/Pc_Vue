<template>
	<div>
		<div class="zongend">
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
			<!--  <Zheader v-show="zheaderxy"></Zheader> -->
			<!-- 右侧top部分 -->
			<div class="hometopjzmend" v-show="hometop">
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left;margin-left:-1.4rem;">
					<span class="el-dropdown-link" @click="fnendxm()">
						<img class="xmimgend" src="../../assets/image/bluefz.png" />
						<i class="xmend" style="color: #2180ED;">项目</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img src="../../assets/image/pmjtxia.png" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束
				下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fnendsq()">
						<img class="sqimgend" src="../../assets/image/sq@2x.png" />
						<i class="sqend" style="color:#333333;">社区</i>
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束
				下拉菜单---更多 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> -->
					<span class="el-dropdown-link" @mouseenter="fnmoin()">
						<img class="moreimgend" src="../../assets/image/more@2x.png" />
						<i class="moreend">更多</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img :src="lmore" alt="" style="width: 100%;height: 100%;" />
						</i>
					</span>
					<el-dropdown-menu slot="dropdown" class="endmore">
						<div class="endmoo" @mouseenter="fnmoin" @mouseleave="fnleave()">
							<div class="endmores1"><a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a></div>
							<div class="endmores1" @click="fnabout">联系我们</div>
							<div class="endmoresb">版本号: v 1.0.1</div>
						</div>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目/管线综合/图纸 -->
		<div style="width:18.75rem;height:0.6875rem;position: absolute;top:3.93125rem;left:8.21875rem;text-align:left;cursor:pointer;">
			<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;line-height:0.6875rem;" @click="fnjzmx" >新建项目</span>
			<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
			<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;margin-left:0.15625rem;line-height:0.7575rem;"  @click="fnjzmx">管线综合</span>
			<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
			<span style="color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;margin-left:0.15625rem;float:left;line-height:0.7575rem;">模型</span>
		</div>
			<!--碰撞结束 -->
			<div>
				<div class="onep">
					<span>1</span>
					<img src="../../assets/image/1@2x.png" alt="" />
				</div>
				<div class="twop">
					<span>2</span>
					<img src="../../assets/image/2@2x.png" alt="" />
				</div>
				<div class="thirdp">
					<span>3</span>
					<img src="../../assets/image/3@2x.png" alt="" />
				</div>
			</div>
		</div>
		<!-- 点击联系我们的遮罩 -->
		<div style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);" v-show="abouts" @click="fnaboutmark"></div>
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
			panduan: false,
			xianyin: false,
			xianyinxuni: false,
			hometop: true,
			//总的等陆头部
			zheaderxy: true,
			lmore: require('../../assets/image/pmjtxia.png'),
			// 联系我们
			abouts: false
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
		// 点击新建项目
		fnend() {
			this.$router.push('/gxmoxin');
		},
		//点击管线综合
		fnendg() {
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
		fnmoin() {
			this.lmore = require('../../assets/image/shang.png');
		},
		// 移出更多
		fnleave() {
			this.lmore = require('../../assets/image/pmjtxia.png');
		},
		// 点击项目
		fnendxm() {
			this.$router.push('/Login');
		},
		// 点击社区
		fnendsq() {
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
		back2() {
			this.$router.push('/twopengzhuang');
		},
		end() {
			this.$router.push('/endpengzhuang');
		}
	}
};
</script>

<style>
/* 更多 */
.endmore {
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
.endmoo {
	width: 4.75rem;
	/* 		height: 195px; */
	/* 	background: url(../../assets/image/mores.png); */
	padding-left: 0.2rem;
	padding-right: 0.25rem;
	cursor: pointer;
}
.endmores1 {
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
.endmoresb {
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
/* 	.newxg{
		font-weight:900;
		font-style:normal;
		font-size:0.625‬rem;
	} */
* {
	padding: 0;
	margin: 0;
}
.zongend {
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
.hometopjzmend {
	/* width:46.875rem;
	height:1.78125rem; */
	position: absolute;
	top: 0.9375rem;
	left: 6.9375rem;
	/* background:red; */
	line-height: 1.78125rem;
}
/* 左侧边栏 */
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
.xmimgend {
	width: 0.84375rem;
	height: 0.8125rem;
	padding-left: 2.5rem;
	padding-top: 0.0625rem;
}
.xmend {
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
.sqimgend,
.bjimgend {
	width: 0.84375rem;
	height: 0.8125rem;
}
.sqend {
	width: 1.25rem;
	height: 0.5625rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left: 0.1875rem;
	font-style: normal;
}
.moreimgend {
	width: 0.78125rem‬;
	height: 0.78125rem;
}
.moreend {
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
/* 碰撞结束 */
.onep {
	width: 1.75rem;
	height: 2.1875rem;
	position: absolute;
	left: 20.15625rem;
	top: 9.375rem;
}
.onep img {
	width: 100%;
	height: 100%;
}
.onep span {
	position: absolute;
	top: 0.4375rem;
	left: 0.5rem;
	font-size: 1.03125rem;
	color: #ffffff;
}
.twop {
	width: 1.9375rem;
	height: 2.4375rem;
	position: absolute;
	left: 30.5rem;
	top: 16.6875rem;
}
.twop img {
	width: 100%;
	height: 100%;
}
.twop span {
	position: absolute;
	top: 0.46875rem;
	left: 0.65625rem;
	font-size: 1.03125rem;
	color: #ffffff;
}
.thirdp {
	width: 2rem;
	height: 2.5rem;
	position: absolute;
	left: 42.75rem;
	top: 7.325rem;
}
.thirdp img {
	width: 100%;
	height: 100%;
}
.thirdp span {
	position: absolute;
	top: 0.5rem;
	left: 0.65625rem;
	font-size: 1.03125rem;
	color: #ffffff;
}
</style>
