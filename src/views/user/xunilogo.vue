<template>
	<div>
		<div class="xunitops">
			<div class="animated fadeInLeft xunitop">
				<div class="jinazhu">
					<span @click="fnjian" class="jzjg" ref="jzjgcolor">
						<i class="jianzhuimg" ref="jzjgcolor1"></i>
						建筑结构
					</span>
					<div class="jianzhu-group" v-if="a">
						<div class="moxin1" @click="fnmx1" ref="mx1">
							<i class="moxinimg1"></i>
							模型
						</div>
						<div class="tuzhi1" @click="fntz1" ref="tz1">
							<i class="tuzhiimg1"></i>
							图纸
						</div>
						<div class="cailiao1" @click="fncl1" ref="cl1">
							<i class="cailiaoimg1"></i>
							材料
						</div>
					</div>
				</div>
				<div class="guanxian">
					<span @click="fnguan" class="gxzh" ref="gxzhcolor">
						<i class="gaunxianimg"></i>
						管线综合
					</span>
					<div class="guanxian-group" v-if="b">
						<div class="moxin2" @click="fnmx2" ref="mx2">
							<i class="moxinimg2"></i>
							模型
						</div>
						<div class="tuzhi2" @click="fntz2" ref="tz2">
							<i class="tuzhiimg2"></i>
							图纸
						</div>
						<div class="cailiao2" @click="fncl2" ref="cl2">
							<i class="cailiaoimg2"></i>
							材料
						</div>
						<div class="pengzhuang" @click="fnpz2" ref="pz2">
							<i class="pengzhuang2"></i>
							碰撞
						</div>
					</div>
				</div>
				<div class="shebei">
					<span @click="fnshebei" class="sbjk" ref="sbjkcolor">
						<i class="shebeiimg"></i>
						设备监控
					</span>
					<div class="shebei-group" v-if="c">
						<div class="moxin3" @click="fnmx3" ref="mx3">
							<i class="moxinimg3"></i>
							模型
						</div>
						<div class="tuzhi3" @click="fntz3" ref="tz3">
							<i class="tuzhiimg3"></i>
							图纸
						</div>
						<div class="cailiao3" @click="fncl3" ref="cl3">
							<i class="cailiaoimg3"></i>
							材料
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
			c: false
		};
	},
	methods: {
		fnjian() {
			this.a = !this.a;
			this.b = false;
			this.c = false;
			this.$refs.jzjgcolor.style.color = '#2180ED';
			this.$refs.gxzhcolor.style.color = '#FFFFFF';
			this.$refs.sbjkcolor.style.color = '#FFFFFF';
			this.$router.push('/jzmoxin');
		},
		fnguan() {
			this.b = !this.b;
			this.a = false;
			this.c = false;
			this.$refs.jzjgcolor.style.color = '#FFFFFF';
			this.$refs.gxzhcolor.style.color = '#2180ED';
			this.$refs.sbjkcolor.style.color = '#FFFFFF';
			this.$router.push('/gxmoxin');
		},
		fnshebei() {
			this.c = !this.c;
			this.a = false;
			this.b = false;
			this.$refs.jzjgcolor.style.color = '#FFFFFF';
			this.$refs.gxzhcolor.style.color = '#FFFFFF';
			this.$refs.sbjkcolor.style.color = '#2180ED';
		},
		fnmx1() {
			this.$refs.mx1.style.color = '#2180ED';
			this.$refs.tz1.style.color = '#FFFFFF';
			this.$refs.cl1.style.color = '#FFFFFF';
		},
		fntz1() {
			this.$refs.mx1.style.color = '#FFFFFF';
			this.$refs.tz1.style.color = '#2180ED';
			this.$refs.cl1.style.color = '#FFFFFF';
			this.$router.push('/jztuzhi');
		},
		fncl1() {
			this.$refs.mx1.style.color = '#FFFFFF';
			this.$refs.tz1.style.color = '#FFFFFF';
			this.$refs.cl1.style.color = '#2180ED';
			this.$router.push('/jzcailiao');
		},
		fnmx2() {
			this.$refs.mx2.style.color = '#2180ED';
			this.$refs.tz2.style.color = '#FFFFFF';
			this.$refs.cl2.style.color = '#FFFFFF';
			this.$refs.pz2.style.color = '#FFFFFF';
		},
		fntz2() {
			this.$refs.mx2.style.color = '#FFFFFF';
			this.$refs.tz2.style.color = '#2180ED';
			this.$refs.cl2.style.color = '#FFFFFF';
			this.$refs.pz2.style.color = '#FFFFFF';
			this.$router.push('/gxtuzhi');
		},
		fncl2() {
			this.$refs.mx2.style.color = '#FFFFFF';
			this.$refs.tz2.style.color = '#FFFFFF';
			this.$refs.cl2.style.color = '#2180ED';
			this.$refs.pz2.style.color = '#FFFFFF';
			this.$router.push('/gxcailiao');
		},
		fnpz2() {
			this.$refs.mx2.style.color = '#FFFFFF';
			this.$refs.tz2.style.color = '#FFFFFF';
			this.$refs.cl2.style.color = '#FFFFFF';
			this.$refs.pz2.style.color = '#2180ED';
			this.$router.push("/gxpengzhuang");
		},
		fnmx3() {
			this.$refs.mx3.style.color = '#2180ED';
			this.$refs.tz3.style.color = '#FFFFFF';
			this.$refs.cl3.style.color = '#FFFFFF';
			this.$router.push('/sbmoxin');
		},
		fntz3() {
			this.$refs.mx3.style.color = '#FFFFFF';
			this.$refs.tz3.style.color = '#2180ED';
			this.$refs.cl3.style.color = '#FFFFFF';
		},
		fncl3() {
			this.$refs.mx3.style.color = '#FFFFFF';
			this.$refs.tz3.style.color = '#FFFFFF';
			this.$refs.cl3.style.color = '#2180ED';
		}
	}
};
</script>

<style scoped>
/* .xunitops{
	width:217px;
	height:1080px;
	background:green;
} */
.xunitop {
	width: 167px;
	height: 987px;
	background: url(../../assets/image/homecebian8@2x.png) no-repeat;
	position: absolute;
	top: 60px;
	background-size: 217px 1017px;
	padding-left: 50px;
	padding-top: 30px;
	border-top: 1px dashed #999999;
}
li {
	list-style: none;
}
.jzjg,
.gxzh,
.sbjk {
	font-size: 18px;
	color: #ffffff;
	cursor: pointer;
}
/* 建筑结构 */
.jinazhu {
	/* background:blue; */
	margin-bottom: 30px;
}
.jianzhu-group {
	padding-left: 50px;
	cursor: pointer;
}
.jianzhuimg {
	width: 22px;
	height: 22px;
	display: inline-block;
	background: url(../../assets/image/jianzhu@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 70px;
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
.cailiao1 {
	width: 60px;
	height: 30px;
	/* background:plum; */
	padding-top: 18px;
	font-size: 16px;
}
.moxinimg1 {
	width: 20px;
	height: 19px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 90px;
}
.tuzhiimg1 {
	width: 20px;
	height: 19px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 90px;
}
.cailiaoimg1 {
	width: 20px;
	height: 19px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 90px;
}
/* 管线综合 */
.guanxian {
	/* background:red; */
	margin-bottom: 30px;
}
.guanxian-group {
	padding-left: 50px;
	cursor: pointer;
}
.gaunxianimg {
	width: 22px;
	height: 22px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 70px;
}
.moxin2 {
	color: #2180ed;
}
.tuzhi2,
.cailiao2,
.pengzhuang 
{
	color: #ffffff;
}
.moxin2,
.tuzhi2,
.cailiao2,
.pengzhuang {
	width: 60px;
	height: 30px;
	padding-top: 18px;
	font-size: 16px;
}
.moxinimg2 {
	width: 20px;
	height: 19px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 90px;
}
.tuzhiimg2 {
	width: 20px;
	height: 19px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 90px;
}
.cailiaoimg2 {
	width: 20px;
	height: 19px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 90px;
}
.pengzhuang2 {
	width: 20px;
	height: 19px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 90px;
}
/* 设备监控 */
.shebei {
	/* background:red; */
	margin-bottom: 30px;
}
.shebei-group {
	padding-left: 50px;
	cursor: pointer;
}
.shebeiimg {
	width: 22px;
	height: 22px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 70px;
}
.moxin3 {
	color: #2180ed;
}
.tuzhi3,
.cailiao3 {
	color: #ffffff;
}
.moxin3,
.tuzhi3,
.cailiao3 {
	width: 60px;
	height: 30px;
	/* background:plum; */
	padding-top: 18px;
	font-size: 16px;
}
.moxinimg3 {
	width: 20px;
	height: 19px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 90px;
}
.tuzhiimg3 {
	width: 20px;
	height: 19px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 90px;
}
.cailiaoimg3 {
	width: 20px;
	height: 19px;
	display: inline-block;
	background: url(../../assets/image/guanxian@2x.png) no-repeat;
	background-size: 22px 22px;
	position: absolute;
	left: 90px;
}
</style>
