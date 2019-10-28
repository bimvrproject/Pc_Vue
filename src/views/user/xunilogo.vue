<template>
	<div>
		<div class="logoxn">
			<div class="xunitops">
				<div class="xunitop">
					<div class="ce1" @click="ce1"></div>
					<div class="ces"></div>
					<div class="ce2">
						<!-- 建筑结构 -->
						<div class="jinazhu">
							<span @click="fnjian" class="jzjg" :style="jzjg">
								<i class="jianzhuimg"><img :src="jzjgtb" alt="" /></i>
								建筑结构
							</span>
							<div class="jianzhu-group" v-if="a">
								<div class="moxin1" @click="fnmx1" :style="mx1">
									<i class="moxinimg1"><img :src="mxtb1" alt="" /></i>
									模型
								</div>
								<div class="tuzhi1" @click="fntz1" :style="tz1">
									<i class="tuzhiimg1"><img :src="tztb1" alt="" style="vertical-align: bottom;"/></i>
									图纸
								</div>
								<div class="cailiao1" @click="fncl1" :style="cl1">
									<i class="cailiaoimg1"><img :src="cltb1" alt="" /></i>
									材料
								</div>
							</div>
						</div>
						<!-- 管线模型 -->
						<div class="guanxian">
							<span @click="fnguan" class="gxzh" :style="gxzh">
								<i class="gaunxianimg"><img :src="gxzhtb" alt="" /></i>
								管线综合
							</span>
							<div class="guanxian-group" v-if="b">
								<div class="moxin2" @click="fnmx2" :style="mx2">
									<i class="moxinimg2"><img :src="mxtb2" alt="" /></i>
									模型
								</div>
								<div class="tuzhi2" @click="fntz2" :style="tz2">
									<i class="tuzhiimg2"><img :src="tztb2" alt="" style="vertical-align: bottom;"/></i>
									图纸
								</div>
								<div class="cailiao2" @click="fncl2" :style="cl2">
									<i class="cailiaoimg2"><img :src="cltb2" alt="" /></i>
									材料
								</div>
								<div class="pengzhuang" @click="fnpz2" :style="pz2">
									<i class="pengzhuang2"><img :src="pztb2" alt="" /></i>
									碰撞
								</div>
							</div>
						</div>
						<!-- 设备监控 -->
						<div class="shebei">
							<span @click="fnshebei" class="sbjk" :style="sbjk">
								<i class="shebeiimg"><img :src="sbjktb" alt="" /></i>
								设备监控
							</span>
							<div class="shebei-group" v-if="c">
							</div>
						</div>
						<!-- 信息编辑 -->
						<div class="xinxibj">
							<span @click="fnxxbj" class="xxbj" :style="xxbjc">
								<i class="xinxibjimg"><img :src="xinxitb" alt="" /></i>
								信息编辑
							</span>
							<div class="xinxibj-group" v-if="d">
								<div class="xinxibj1" @click="fnxmxx" :style="xmxx">
									<i class="xinxibjimg1"><img :src="xmxxt" alt="" /></i>
									项目信息
								</div>
								<div class="tuzhi4" @click="fnryxx" :style="ryxx">
									<i class="tuzhiimg4"><img :src="ryxxs" alt="" /></i>
									人员信息
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			a: false,
			b: false,
			c: false,
			d:false,
			jzjg: 'color:#FFFFFF',
			mx1: 'color:#2180ED',
			tz1: 'color:#FFFFFF',
			cl1: 'color:#FFFFFF',
			gxzh: 'color:#FFFFFF',
			mx2: 'color:#2180ED',
			tz2: 'color:#FFFFFF',
			cl2: 'color:#FFFFFF',
			pz2: 'color:#FFFFFF',
			sbjk: 'color:#FFFFFF',
			xxbjc:'color:#FFFFFF',
			jzjgtb: require('../../assets/image/jianzhu@2x.png'),
			gxzhtb: require('../../assets/image/guanxian@2x.png'),
			sbjktb: require('../../assets/image/jinakong@2x.png'),
			// 信息编辑
			xinxitb:require('../../assets/image/xxbjs.png'),
			xmxx:'color:#FFFFFF',
			xmxxt: require('../../assets/image/xmxxs.png'),
			ryxx:'color:#FFFFFF',
			ryxxs: require('../../assets/image/ryxx.png'),
			mxtb1: require('../../assets/image/mx11.png'),
			tztb1: require('../../assets/image/tz@2x.png'),
			cltb1: require('../../assets/image/cl@2x.png'),
			mxtb2: require('../../assets/image//mx11.png'),
			tztb2: require('../../assets/image/tz@2x.png'),
			cltb2: require('../../assets/image/cl@2x.png'),
			pztb2: require('../../assets/image/pzb.png'),
		};
	},
	created() {
			// 建立建筑结构模型
		this.$eventbus.$on('cezhan', ite => {
			// console.log(ite, 'a');
			this.a = true;
			this.jzjg = 'color:#2180ED';
			this.jzjgtb = require('../../assets/image/jjj1.png');
			if (ite == 'monxin') {
				this.mxl = 'color:#2180ED';
				this.mxtb1 = require('../../assets/image/moxin.png');
				this.tztb1 = require('../../assets/image/tz@2x.png');
				this.cltb1 = require('../../assets/image/cl@2x.png');
			}
			if (ite == 'tuzhi') {
				this.tz1 = 'color:#2180ED';
				this.cl1 = 'color:#fff';
				this.mx1 = 'color:#fff';
				this.tztb1 = require('../../assets/image/tz11.png');
				this.mxtb1 = require('../../assets/image/moxin.png');
				this.cltb1 = require('../../assets/image/cl@2x.png');
			}
			if (ite == 'cailiao') {
				this.cl1 = 'color:#2180ED';
				this.tz1 = 'color:#fff';
				this.mx1 = 'color:#fff';
				this.cltb1 = require('../../assets/image/cl11.png');
				this.tztb1 = require('../../assets/image/tz@2x.png');
				this.mxtb1 = require('../../assets/image/moxin.png');
			}
		});
		// 建立管线综合事件
		this.$eventbus.$on('cezhan2', ite => {
			//console.log(ite, 'a');
			this.b = true;
			this.gxzh = 'color:#2180ED';
			this.gxzhtb = require('../../assets/image/gx111.png');
			if (ite == 'moxin') {
				this.mx2 = 'color:#2180ED';
				this.mxtb2 = require('../../assets/image/mx11.png');
				this.tztb2 = require('../../assets/image/tz@2x.png');
				this.cltb2 = require('../../assets/image/cl@2x.png');
				this.pztb2 = require('../../assets/image/pzb.png');
			}
			if (ite == 'tuzhi') {
				this.tz2 = 'color:#2180ED';
				this.cl2 = 'color:#fff';
				this.mx2 = 'color:#fff';
				this.pz2 = 'color:#fff';
				this.mxtb2 = require('../../assets/image/moxin.png');
				this.tztb2 = require('../../assets/image/tz11.png');
				this.cltb2 = require('../../assets/image/cl@2x.png');
				this.pztb2 = require('../../assets/image/pzb.png');
			}
			if (ite == 'cailiao') {
				this.cl2 = 'color:#2180ED';
				this.tz2 = 'color:#fff';
				this.mx2 = 'color:#fff';
				this.pz2 = 'color:#fff';
				this.mxtb2 = require('../../assets/image/moxin.png');
				this.tztb2 = require('../../assets/image/tz@2x.png');
				this.cltb2 = require('../../assets/image/cl11.png');
				this.pztb2 = require('../../assets/image/pzb.png');
			}
			if (ite == 'pengzhuang') {
				this.pz2 = 'color:#2180ED';
				this.cl2 = 'color:#fff';
				this.tz2 = 'color:#fff';
				this.mx2 = 'color:#fff';
				this.mxtb2 = require('../../assets/image/moxin.png');
				this.tztb2 = require('../../assets/image/tz@2x.png');
				this.cltb2 = require('../../assets/image/cl@2x.png');
				this.pztb2 = require('../../assets/image/pz.png');
			}
		});
		this.$eventbus.$on('cezhan3', () => {
			this.c = true;
			this.sbjk = 'color:#2180ED';
			this.sbjktb = require('../../assets/image/sbjk11.png');
		});
		// 建立信息编辑事件
			this.$eventbus.$on('cezhan4', ite => {
			// console.log(ite, 'a');
			this.d = true;
			this.xxbjc = 'color:#2180ED';
			this.xinxitb = require('../../assets/image/xxbjblue.png');
			if (ite == 'xianmuxx') {
				this.xmxx = 'color:#2180ED';
				this.ryxx = 'color:#FFFFFF',
				this.xmxxt = require('../../assets/image/xbxxblue.png');
				this.ryxxs = require('../../assets/image/ryxx.png');
			}
			if (ite == 'renyuanxx') {
				this.ryxx = 'color:#2180ED';
				this.xmxx = 'color:#fff';
			  this.xmxxt = require('../../assets/image/xmxxs.png');
			  this.ryxxs = require('../../assets/image/ryxxblue.png');
			}
		});
		// 隐藏建筑结构,管线模型,设备监控
		// this.$eventbus.$on('ceyin', () => {
		// 	this.cexiaoshi = false;
		// });
		// 显示建筑结构,管线模型,设备监控
		// this.$eventbus.$on('ceyindj', ite => {
		// 	if(ite == "bianji"){
		// 		this.ceyinxx = true;
		// 		this.cexiaoshi = false;
		// 		}
		// 		if(ite == "xinjianmoxin"){
		// 			this.cexiaoshi = true;
		// 				this.ceyinxx = false;
		// 		}
		// 		if(ite == "jianzhumoxin"){
		// 			this.cexiaoshi = true;
		// 				this.ceyinxx = false;
		// 		}
		// });
	},
	mounted() {
		
	},
	methods: {
		fnjian() {
			var pro_id =sessionStorage.getItem("projectid");
			this.$router.push({ name: '/newjzmodel', params: { project_modelid: pro_id } });
		},
		//管线综合
		fnguan() {
			var pro_id =sessionStorage.getItem("projectid");
			this.$router.push({ name: 'gxmoxin', params: { pipemodelids: pro_id } });
		},
		fnshebei() {
			this.$router.push('/sbjkbiao');
		},
		// 信息编辑
		fnxxbj(){
			var pro_id =sessionStorage.getItem("projectid");
			this.$router.push({ name: '/information', params: { project_id: pro_id } });
		  // this.$router.push("/information")
		},
			fnxmxx(){
				var pro_id =sessionStorage.getItem("projectid");
				this.$router.push({ name: '/information', params: { project_id: pro_id } });
				 // this.$router.push("/information")
			},
		fnryxx(){
			this.$router.push("/personnel")
		},
		// fnmx1() {
		// 	this.$router.push('/jzmoxin');
		// },
		//建筑模型
		fnmx1() {
			var pro_id = sessionStorage.getItem("projectid");
			this.$router.push({ name: '/newjzmodel', params: { project_modelid: pro_id } });
		},
		//图纸
		fntz1() {
			var pro_id = sessionStorage.getItem("projectid");
			this.$router.push({ name: 'jztuzhi', params: { project_modelid: pro_id } });
		},
		fncl1() {
			this.$router.push('/jzcailiao');
		},
		//管线模型
		fnmx2() {
			var pro_id =sessionStorage.getItem("projectid");
			this.$router.push({ name: 'gxmoxin', params: { pipemodelids: pro_id } });
		},
		fntz2() {
			this.$router.push('/gxtuzhi');
		},
		fncl2() {
			this.$router.push('/gxcailiao');
		},
		fnpz2() {
			this.$router.push('/gxpengzhuang');
		},
		fnmx3() {},
		fntz3() {},
		fncl3() {},
		ce1() {
			this.$router.push('/Login');
		},

	}
};
</script>

<style scoped>
/* .xunitops{
	width:217px;
	height:1080px;
	background:green;
} */
.czxlzong{
	width:7.03125rem;
	height:6.34375rem;
	background:#FFFFFF;
	position:absolute;
	right:-7.84375rem;
	top:7.15625rem;
	display:none;
}
.czong{
	display:block;
}
.obj1 {
	width:6.875rem;
	height:5.53125rem;
	/* background-color: red; */
	background: url(../../assets/image/u91_02.png);
	background-size: 100% 100%;
	margin-top:0.46875rem;
}

/* .logoxn {
	width:6.78125rem;
	height:3.625rem;
} */
.xunitop {
	width:6.875rem;
	height:33.75rem;
	background: url(../../assets/image/homecebian8@2x.png) no-repeat;
	position: absolute;
	top: 0px;
	background-size: 6.875rem 33.75rem;
	padding-top: 0px;
}
.ce1 {
	width: 6.78125rem;
	height:2.5rem;
	background: url(../../assets/image/logotop@2x.png) no-repeat;
	background-size:3.65625rem 0.875rem;
	position: absolute;
	top:0.90625rem;
	left: 1.875rem;
}
.ce2 {
	margin-top: 3.75rem;
	margin-left:0.625rem;
/* 	background:red; */
}
.ces {
	width:6.15625rem;
	height:0.0625rem;
	background: url(../../assets/image/fgx.png) no-repeat;
	background-size:6.15625rem 0.09375rem;
	position: absolute;
	top:2.5rem;
	right:0.3125rem;
	left:0.3125rem;
}
ul,ol,li{list-style:none}
.jzjg,
.gxzh,
.sbjk,
.xxbj
{
	font-size:0.5625rem;
	height:0.5625rem;
	line-height: 0.5625rem;
	color: #ffffff;
	cursor: pointer;
}
/* 建筑结构 */
.jinazhu,.xinxibj {
	/* background:blue; */
	margin-bottom:0.9375rem;
}
.jianzhu-group,.guanxian-group,.xinxibj-group,.shebei-group {
	padding-left:1.5625rem;
	cursor: pointer;
}
.jianzhuimg,.gaunxianimg,.shebeiimg,.xinxibjimg{
	width: 0.6875rem;
	height: 0.6875rem;
	line-height: 0.6875rem;
	display: inline-block;
	/* 	background: url(../../assets/image/jianzhu@2x.png) no-repeat; */
	/* background-size: 22px 22px; */
	/* position: absolute; */
	left: 1.71875rem;
}
.jianzhuimg img,.gaunxianimg img,.shebeiimg img,.xinxibjimg img{
	width: 100%;
	height: 100%;
}
.moxin1 {
	color: #2180ed;
}
.tuzhi1,
.cailiao1 {
	color: #ffffff;
}
.moxin1,
.tuzhi1,
.cailiao1,
.xinxibj1
{
	width:3.5625rem;
	height:0.9375rem;
/* 	background:plum; */
	padding-top:0.5625rem;
	font-size:0.5rem;
}
.moxinimg1 {
	width:0.54rem;
	height:0.63rem;
	display: inline-block;
	/* background: url(../../assets/image/moxin.png) no-repeat; */
	/* background-size: 22px 22px;
	position: absolute; */
/* 	left:2.5rem; */
}
.moxinimg1 img {
	width: 100%;
	height: 100%;
}
.tuzhiimg1 {
	width:0.54rem;
	height:0.63rem;
	display: inline-block;
	/* 	background: url(../../assets/image/tz@2x.png) no-repeat; */
	/* background-size: 22px 22px;
	position: absolute;
	left: 80px; */
}
.tuzhiimg1 img {
	width: 100%;
	height: 100%;
}
.cailiaoimg1 {
	width:0.55rem;
	height:0.63rem;
	display: inline-block;
	/* 	background: url(../../assets/image/cl@2x.png) no-repeat; */
	/* background-size: 22px 22px;
	position: absolute;
	left: 80px; */
}
.cailiaoimg1 img {
	width: 100%;
	height: 100%;
}
/* 管线综合 */
.guanxian {
	/* background:red; */
	margin-bottom:0.9375rem;
}
.moxin2 {
	color: #2180ed;
}
.tuzhi2,
.cailiao2,
.pengzhuang {
	color: #ffffff;
}
.moxin2,
.tuzhi2,
.cailiao2,
.pengzhuang {
	width:3.5625rem;
	height:0.9375rem;
	padding-top:0.5625rem;
	font-size:0.5rem;
}
.moxinimg2 {
	width:0.54rem;
	height:0.59375rem;
	display: inline-block;
	/* 	background: url(../../assets/image/moxin.png) no-repeat; */
/* 	background-size: 22px 22px;
	position: absolute;
	left: 80px; */
}
.moxinimg2 img {
	width: 100%;
	height: 100%;
}
.tuzhiimg2 {
	width:0.54rem;
	height:0.63rem;
	display: inline-block;
	/* background: url(../../assets/image/tz@2x.png) no-repeat; */
	/* background-size: 22px 22px;
	position: absolute;
	left: 80px; */
}
.tuzhiimg2 img {
	width: 100%;
	height: 100%;
}
.cailiaoimg2 {
	width:0.55rem;
	height:0.63rem;
	display: inline-block;
	/* background: url(../../assets/image/cl@2x.png) no-repeat; */
	/* background-size: 22px 22px;
	position: absolute;
	left: 80px; */
}
.cailiaoimg2 img {
	width: 100%;
	height: 100%;
}
.pengzhuang2 {
	width:0.55rem;
	height:0.63rem;
	display: inline-block;
	/* background: url(../../assets/image/pz.png) no-repeat; */
	/* background-size: 22px 22px;
	position: absolute;
	left: 80px; */
}
.pengzhuang2 img {
	width: 100%;
	height: 100%;
}
/* 设备监控 */
.shebei {
	/* background:red; */
	margin-bottom:0.9375rem;
}
/* 材质 */
.caizhi {
  height:0.9375rem;
	/* background:plum; */
	margin-bottom: 5px;
}
.czimg {
	width:0.625rem;
	height:0.625rem;
	display:inline-block;
	float:left;
	line-height:0.9375rem;
	margin-left:2rem;
}
/* 信息编辑 */
.xinxibjimg1{
	width:0.625rem;
		height:0.65625rem;
		display: inline-block;
		/* background: url(../../assets/image/moxin.png) no-repeat; */
		/* background-size: 22px 22px;
		position: absolute; */
	/* 	left:2.5rem; */
	}
	.xinxibjimg1 img {
		width: 100%;
		height: 100%;
	}
	.tuzhiimg4{
	 width:0.625rem;
	 height:0.59375rem;
	 display: inline-block;
	 /* background: url(../../assets/image/tz@2x.png) no-repeat; */
	 /* background-size: 22px 22px;
	 position: absolute;
	 left: 80px; */
		}
	.tuzhiimg4 img {
		width: 100%;
		height: 100%;
	}
	.tuzhi4{
			width:3.5625rem;
			height:0.9375rem;
			/* background:plum; */
			padding-top:0.5625rem;
			font-size:0.5rem;
		}
</style>
