<template>
	<div>
		<div class="logoxn">
			<div class="xunitops">
				<div class="xunitop">
					<div class="ce1" @click="ce1"></div>
					<div class="ces"></div>
					<div class="ce2" v-if="cexiaoshi">
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
									<i class="tuzhiimg1"><img :src="tztb1" alt="" /></i>
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
									<i class="tuzhiimg2"><img :src="tztb2" alt="" /></i>
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
					<!-- 信息与材质 -->
					<div style="width:6.8rem;height:16.75rem;margin-top:3.75rem;" v-if="ceyinxx">
						<!-- 信息 -->
						<div style="margin-bottom:1.09375rem;cursor:pointer;">
							<!-- 信息标题 -->
							<div style="height:0.9375rem;" @click="xxtitle">
								<span class="xinxitu" style="width:0.625rem;height:0.625rem;display:inline-block;float:left;line-height:0.9375rem;margin-left:2rem;">
									<img :src="xinxitu" alt="" style="width:100%;height:100%;" />
								</span>
								<i style="font-style:normal;font-size:0.5625rem;font-weight:400;color:#FFFFFF;display:inline-block;line-height:0.9375rem;float:left;margin-left:0.1rem;" :style="xinxitit">信息</i>
							</div>
							<!-- 信息展开 -->
							<div v-show="xinxizhanshi">
								<span style="width:5.75rem;height:0.625rem;font-size:0.5rem;display:inline-block;padding-left:0.5rem;color:#FFFFFF;margin-top:0.46875rem;">
									<i style="float:left;font-style: normal;">墙</i>
								</span>
								<span style="width:5.375rem;height:0.03125rem‬;display:inline-block;border-bottom:0.03125rem solid darkgray;margin-bottom:0.15625rem;"></span>
								<!-- 创建新的墙的厚度 -->
								<div>
									<ul>
										<li v-for="(item, index) in newjian" :key="index">
											<div style="width:5.98rem;height:0.625rem;margin-bottom:0.25rem;">
												<span @dblclick="fnwall1(index)" style="position: relative;display:inline-block;">
													<!-- item.change 代表input-->
													<i style="font-style: normal;color:rgba(225,225,225,1);font-weight:400;float:left;font-size:0.5rem;display:inline-block;">
														<i style="font-style:normal;display:inline-block;font-size:0.5rem;width:2.5625rem;">墙的厚度 :</i>
														<i v-show="!item.change" style="font-style:normal;display:inline-block;width:1.375rem;">{{ item.msg }}cm</i>
														<input
															v-model="newjian[index].msg"
															type="text"
															@blur="changewall1(index)"
															v-show="item.change"
															style="width:1.53125rem;height:0.75rem;background:rgba(225,225,225,.3);font-size:0.5rem;"
														/>
													</i>
													<img src="../../assets/image/lj.png" style="width:0.40625rem;height:0.5rem;padding-bottom:0.3125rem;padding-left:0.3125rem;" @click="clear(index)"alt="">
													<!-- <i style="font-style:normal;display:inline-block;width:0.40625rem;height:0.5rem;margin-bottom:10px;" @click="clear(index)">
														<img src="../../assets/image/lj.png" alt="" style="width:100%;height:100%;" />
													</i> -->
													<!-- <i style="font-style:normal;display:inline-block;width:0.46875rem;height:0.5rem;float:right;" @click="store(index)">
														<img src="../../assets/image/bcc.png" alt="" style="width:100%;height:100%;" />
													</i> -->
												</span>
											</div>
										</li>
										<li style="width:5.75rem;height:0.78125rem;margin-top:0.9375rem;margin-bottom:1.5625rem;">
											<span style="display:inline-block;width:0.65625rem;height:0.71875rem;float:right;" @click="establish">
												<img src="../../assets/image/jjjj.png" alt="" style="width:100%;height:100%;" />
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<!-- 材质 -->
						<div style="cursor:pointer;">
							<div class="caizhi" @click="cztitle">
								<span class="czimg"><img :src="caizhitu" alt="" style="width:100%;height:100%;" /></span>
								<i style="font-style:normal;font-size:0.5625rem;font-weight:400;color:#FFFFFF;display:inline-block;line-height:0.9375rem;float:left;margin-left:0.1rem;" :style="cztit">材质</i>
							</div>
							<!-- 材质展开 -->
							<div v-show="czzhankai">
								<div style="width:6.78128rem;height:26.8125rem;overflow:hidden;">
									<ul style="width:6.875rem;height:26.675rem;overflow:auto;padding-right:200000px;" ref="ele">
										<li v-for="(item, index) in material" :key="index" class="obj1" @mouseenter="entrmodel1(index)" @mouseleave="leavemodel1(index)">
											<div style="width:7.03125rem;height:6.34375rem;background:#FFFFFF;position:absolute;right:-7.84375rem;top:7.15625rem;" v-if="show1">
												<div style="float:left;position:absolute;top:0.15625rem;left:0.75rem;">
													<img src="../../assets/image/dyellow.png" alt="" style="width:3.15625rem;height:2.875rem;" @mouseenter="fnyellow" />
												</div>
												<img src="../../assets/image/bigyellow.png" alt="" style="width:3.28125rem;height:3.0625rem;position:absolute;top:-0.03125rem;left:0.65625rem;z-index:1;" v-show="bigyel" />
												<div style="float:left;position:absolute;top:0.15625rem;left:3.3125rem;">
													<img src="../../assets/image/dgreen.png" alt="" style="width:3.15625rem;height:2.875rem;" @mouseenter="fngreen" />
												</div>
												<img src="../../assets/image/biggreen.png" alt="" style="width:3.28125rem;height:3.0625rem;position:absolute;top:0.03125rem;left:3.21875rem;z-index:1;" v-show="biggren" />
												<div style="float:left;position:absolute;top:1.59375rem;left:0.375rem;">
													<img src="../../assets/image/dju.png" alt="" style="width:2.375rem;height:3.5625rem;" @mouseenter="fngju" />
												</div>
												<img src="../../assets/image/bigju.png" alt="" style="width:2.4375rem;height:3.6875rem;position:absolute;top:1.25rem;left:0.28125rem;z-index:1;" v-show="bigju1" />
												<div style="float:left;position:absolute;top:1.625rem;left:4.4825rem;">
													<img src="../../assets/image/dqianblue.png" alt="" style="width:2.375rem;height:3.5625rem;" @mouseenter="fnqianbu" />
												</div>
												<img src="../../assets/image/bigqianblue.png" alt="" style="width:2.28125rem;height:3.6875rem;position:absolute;top:1.25rem;left:4.5625rem;z-index:1;" v-show="bigqian" />
												<div style="float:left;position:absolute;top:3.78125rem;left:0.78125rem;">
													<img src="../../assets/image/dred.png" alt="" style="width:3.15625rem;height:2.84375rem;" @mouseenter="fnred" />
												</div>
												<img src="../../assets/image/bigred.png" alt="" style="width:3.28125rem;height:2.8125rem;position:absolute;top:3.5rem;left:0.6875rem;z-index:1;" v-show="bigred" />
												<div style="float:left;position:absolute;top:3.75rem;left:3.3125rem;">
													<img src="../../assets/image/dblue.png" alt="" style="width:3.15625rem;height:2.875rem;" @mouseenter="fnblue" />
												</div>
												<img src="../../assets/image/bigblue.png" alt="" style="3.28125rem;height:2.8125rem;position:absolute;top:3.5rem;left:3.25rem;z-index:1;" v-show="bigblue" />
											</div>
										</li>
										<!-- <li class="obj1" @mouseenter="entrmodel2" @mouseleave="leavemodel2">
											<div style="width:225px;height:203px;background:#FFFFFF;position:absolute;right:-251PX;top:301px;" v-if="show2">
												<div style="float:left;position:absolute;top:5px;left:24px;">
													<img src="../../assets/image/dyellow.png" alt="" style="width:101px;height:92px;" @mouseenter="fnyellow" />
												</div>
												<img src="../../assets/image/bigyellow.png" alt="" style="width:105px;height:98px;position:absolute;top:-1px;left:21px;z-index:1;" v-show="bigyel" />
												<div style="float:left;position:absolute;top:5px;left:106px;">
													<img src="../../assets/image/dgreen.png" alt="" style="width:101px;height:92px;" @mouseenter="fngreen" />
												</div>
												<img src="../../assets/image/biggreen.png" alt="" style="width:105px;height:98px;position:absolute;top:1px;left:103px;z-index:1;" v-show="biggren" />
												<div style="float:left;position:absolute;top:51px;left:12px;">
													<img src="../../assets/image/dju.png" alt="" style="width:76px;height:114px;" @mouseenter="fngju" />
												</div>
												<img src="../../assets/image/bigju.png" alt="" style="width:78px;height:118px;position:absolute;top:40px;left:9px;z-index:1;" v-show="bigju1" />
												<div style="float:left;position:absolute;top:52px;left:144px;">
													<img src="../../assets/image/dqianblue.png" alt="" style="width:76px;height:114px;" @mouseenter="fnqianbu" />
												</div>
												<img src="../../assets/image/bigqianblue.png" alt="" style="width:73px;height:118px;position:absolute;top:40px;left:146px;z-index:1;" v-show="bigqian" />
												<div style="float:left;position:absolute;top:121px;left:25px;">
													<img src="../../assets/image/dred.png" alt="" style="width:101px;height:91px;" @mouseenter="fnred" />
												</div>
												<img src="../../assets/image/bigred.png" alt="" style="width:105px;height:90px;position:absolute;top:112px;left:22px;z-index:1;" v-show="bigred" />
												<div style="float:left;position:absolute;top:120px;left:106px;">
													<img src="../../assets/image/dblue.png" alt="" style="width:101px;height:92px;" @mouseenter="fnblue" />
												</div>
												<img src="../../assets/image/bigblue.png" alt="" style="width:105px;height:90px;position:absolute;top:112px;left:104px;z-index:1;" v-show="bigblue" />
											</div>
										</li> -->
										<!-- <li class="obj1"></li>
										<li class="obj1"></li>
										<li class="obj1"></li>
										<li class="obj1"></li> -->
									</ul>
								</div>
							</div>
						</div>
						<!-- 材质结束 -->
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
			cexiaoshi: true,
			ceyinxx: false,
			newjian: [], //墙的厚度数组
			xinxitu: require('../../assets/image/xx.png'),
			xinxitit: 'color:#FFFFFF',
			caizhitu: require('../../assets/image/caizhi.png'),
			cztit: 'color:#FFFFFF',
			xinxizhanshi: false,
			czzhankai: false,
			bigyel: false,
			show1: false,
			show2: false,
			biggren: false,
			bigju1: false,
			bigqian: false,
			bigred: false,
			bigblue: false,
			// wall11:localStorage.getItem('wallss1') || '50cm',
			wall1: true,
			// walls1:false
			//材质循环
			material:[0,0,0,0]
		};
	},
	created() {
		// console.log(localStorage.getItem('wallss1'));
		this.newjian = sessionStorage .getItem('wallss1')
			? JSON.parse(sessionStorage .getItem('wallss1'))
			: [{ msg: 50, change: false }, { msg: 50, change: false }, { id: 2, msg: 50, change: false }, { msg: 50, change: false }];
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
		this.$eventbus.$on('ceyin', () => {
			this.cexiaoshi = false;
		});
		// 显示建筑结构,管线模型,设备监控
		this.$eventbus.$on('ceyindj', ite => {
			if(ite == "bianji"){
				this.ceyinxx = true;
				this.cexiaoshi = false;
				}
				if(ite == "xinjianmoxin"){
					this.cexiaoshi = true;
						this.ceyinxx = false;
				}
				if(ite == "jianzhumoxin"){
					this.cexiaoshi = true;
						this.ceyinxx = false;
				}
		});
		// 显示信息与材质
		this.$eventbus.$on('ceyinxxs', () => {
			this.ceyinxx = true;
		});
		// 获取存储的值
		sessionStorage.getItem('wallss1');
		//材质循环
		this.material.push(0);
	},
	mounted() {},
	methods: {
		fnjian() {
			var pro_id = sessionStorage.projectid;
			this.$router.push({ name: '/newjzmodel', params: { project_modelid: pro_id } });
		},
		//管线综合
		fnguan() {
			var pro_id = sessionStorage.projectid;
			this.$router.push({ name: 'gxmoxin', params: { pipemodelids: pro_id } });
		},
		fnshebei() {
			this.$router.push('/sbjkbiao');
		},
		// 信息编辑
		fnxxbj(){
		  this.$router.push("/information")
		},
			fnxmxx(){
				 this.$router.push("/information")
			},
		fnryxx(){
			this.$router.push("/personnel")
		},
		// fnmx1() {
		// 	this.$router.push('/jzmoxin');
		// },
		//建筑模型
		fnmx1() {
			var pro_id = sessionStorage.projectid;
			this.$router.push({ name: '/newjzmodel', params: { project_modelid: pro_id } });
		},
		fntz1() {
			this.$router.push('/jztuzhi');
		},
		fncl1() {
			this.$router.push('/jzcailiao');
		},
		//管线模型
		fnmx2() {
			var pro_id = sessionStorage.projectid;
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
		establish() {
			// this.newjian.push(6);
			this.newjian.push({ msg: 50, change: false });
			sessionStorage.setItem('wallss1', JSON.stringify(this.newjian));
		},
		// 删除信息
		clear(index) {
			this.newjian.splice(index, 1);
			sessionStorage.setItem('wallss1', JSON.stringify(this.newjian));
		},
		// 删除默认的第一个信息
		// clear1() {
		// 	this.newjian.splice(index, 1);
		// },
		// 保存信息
		// store(index){
		// 	 localStorage.setItem("'xinxi'+index",this.mmm);
		// 	},
		// 修改
		fnwall1(index) {
			// console.log(index);
			this.$set(this.newjian[index], 'change', true);
			(this.wall1 = false), (this.walls1 = true);
		},
		//聚焦的时候
		changewall1(index) {
			(this.walls1 = false), (this.wall1 = true), this.$set(this.newjian[index], 'change', false);
			//设置localStroage值
			sessionStorage.setItem('wallss1', JSON.stringify(this.newjian));
		},
		// 点击信息标题
		xxtitle() {
			this.xinxitu = require('../../assets/image/information.png');
			this.xinxitit = 'color:#2180ED';
			this.caizhitu = require('../../assets/image/caizhi.png');
			this.cztit = 'color:#FFFFFF';
			// 点击信息材质收,信息展开
			this.xinxizhanshi = true;
			this.czzhankai = false;
		},
		// 点击材质标题
		cztitle() {
			this.caizhitu = require('../../assets/image/czblue.png');
			this.cztit = 'color:#2180ED';
			this.xinxitu = require('../../assets/image/xx.png');
			this.xinxitit = 'color:#FFFFFF';
			//点击材质展,信息收
			(this.czzhankai = true), (this.xinxizhanshi = false);
		},
		// 划过黄色变大
		fnyellow() {
			(this.bigyel = true), (this.bigju1 = false), (this.biggren = false), (this.bigqian = false), (this.bigred = false), (this.bigblue = false);
		},
		// 划过橘色变大
		fngju() {
			(this.bigyel = false), (this.bigju1 = true), (this.biggren = false), (this.bigqian = false), (this.bigred = false), (this.bigblue = false);
		},
		// 划过绿色变大
		fngreen() {
			(this.biggren = true), (this.bigyel = false), (this.bigju1 = false), (this.bigqian = false), (this.bigred = false), (this.bigblue = false);
		},
		// 划过浅蓝变大
		fnqianbu() {
			(this.bigqian = true), (this.bigyel = false), (this.bigju1 = false), (this.biggren = false), (this.bigred = false), (this.bigblue = false);
		},
		// 划过红色变大
		fnred() {
			(this.bigred = true), (this.bigyel = false), (this.bigju1 = false), (this.biggren = false), (this.bigqian = false), (this.bigblue = false);
		},
		//划过蓝色半大
		fnblue() {
			(this.bigblue = true), (this.bigred = false), (this.bigyel = false), (this.bigju1 = false), (this.biggren = false), (this.bigqian = false);
		},
		// 移入材质第一个
		entrmodel1(index) {
			(this.show1 = true)
		},
		// 移入材质第二个
		// entrmodel2(index) {
		// 	(this.show2 = true), (this.show1 = false);
		// },
		// 鼠标移出事件
		leavemodel1() {
			(this.bigblue = false), (this.bigred = false), (this.bigyel = false), (this.bigju1 = false), (this.biggren = false), (this.bigqian = false);
		},
		// 鼠标移出第二个事件
		// leavemodel2() {
		// 	(this.bigblue = false), (this.bigred = false), (this.bigyel = false), (this.bigju1 = false), (this.biggren = false), (this.bigqian = false);
		// }
	}
};
</script>

<style scoped>
/* .xunitops{
	width:217px;
	height:1080px;
	background:green;
} */
.obj1 {
	width:6.875rem;
	height:5.53125rem;
	/* background-color: red; */
	background: url(../../assets/image/u91_02.png);
	background-size: 100% 100%;
	margin-top:0.46875rem;
}

.logoxn {
	width:6.78125rem;
	height:3.625rem;
}
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
li {
	list-style: none;
}
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
	/* background:plum; */
	padding-top:0.5625rem;
	font-size:0.5rem;
}
.moxinimg1 {
	width:0.625rem;
	height:0.65625rem;
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
	width:0.625rem;
	height:0.59375rem;
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
	width:0.625rem;
	height:0.59375rem;
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
	width:0.625rem;
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
	width:0.625rem;
	height:0.59375rem;
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
	width:0.625rem;
	height:0.59375rem;
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
	width:0.625rem;
	height:0.59375rem;
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
