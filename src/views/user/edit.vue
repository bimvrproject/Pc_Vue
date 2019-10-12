<template>
	<div>
		<div class="logoxn1">
			<div class="xunitops1">
				<div class="xunitop1">
					<div class="ce11"></div>
					<div class="ces1"></div>
					<div class="ce21" v-if="cexiaoshi">
					</div>
					<!-- 信息与材质 -->
					<div style="width:6.8rem;height:16.75rem;margin-top:3.75rem;">
						<!-- 信息 -->
						<div style="margin-bottom:0.69375rem;cursor:pointer;">
							<!-- 信息标题 -->
							<div style="height:0.9375rem;" @click="xxtitle">
								<span class="xinxitu1" style="width:0.625rem;height:0.625rem;display:inline-block;float:left;line-height:0.9375rem;margin-left:2rem;">
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
							<!-- 材质标题 -->
							<div class="caizhi1" @click="cztitle()">
								<span class="czimg1"><img :src="caizhitu" alt="" style="width:100%;height:100%;" /></span>
								<i style="font-style:normal;font-size:0.5625rem;font-weight:400;color:#FFFFFF;display:inline-block;line-height:0.9375rem;float:left;margin-left:0.1rem;" :style="cztit">材质</i>
							</div>
							<!-- 材质标题结束 -->
							<!-- 材质展开 -->
							<div v-show="czzhankai">
								<div style="width:6.83128rem;height:27.3525rem;overflow:hidden;background:red;">
									<ul style="width:7.4128rem;height:26.975rem;overflow-y:auto;margin-top:0.2rem;">
										<li v-for="(item, index) in material" :key="index" class="obj11" style="position:relative;">
											<div class="obj11"><img src="../../assets/image/u91_02.png" alt="" style="width:100%;height:100%;"></div>
											<div style="width:7.03125rem;height:6.34375rem;background:plum;position:absolute;z-index:30000;right:-3rem;">
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
			cexiaoshi: true,
			newjian: [], //墙的厚度数组
			xinxitu: require('../../assets/image/xx.png'),
			xinxitit: 'color:#FFFFFF',
			caizhitu: require('../../assets/image/caizhi.png'),
			cztit: 'color:#FFFFFF',
			xinxizhanshi: false,
			// 材质的下拉
			czzhankai:true,
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
			material:[0,0,0,0,0,0]
		};
	},
	created() {
		// console.log(localStorage.getItem('wallss1'));
		this.newjian = sessionStorage .getItem('wallss1')
			? JSON.parse(sessionStorage .getItem('wallss1'))
			: [{ msg: 50, change: false }, { msg: 50, change: false }, { id: 2, msg: 50, change: false }, { msg: 50, change: false }];
		// 显示信息与材质
		// this.$eventbus.$on('ceyinxxs', () => {
		// 	this.ceyinxx = true;
		// });
		// 获取存储的值
		sessionStorage.getItem('wallss1');
		//材质循环
		this.material.push(0);
	},
	mounted() {
		
	},
	methods: {
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
			(this.czzhankai = true),
			 (this.xinxizhanshi = false);
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
		// entrmodel1(index) {
		// 	(this.show1 = true)
		// },
		// 移入材质第二个
		// entrmodel2(index) {
		// 	(this.show2 = true), (this.show1 = false);
		// },
		// 鼠标移出事件
		// leavemodel1() {
		// 	(this.bigblue = false),
		// 	(this.bigred = false),
		// 	(this.bigyel = false), 
		// 	(this.bigju1 = false),
		//   (this.biggren = false), 
		// 	(this.bigqian = false);
		// },
		// 鼠标移出第二个事件
		// leavemodel2() {
		// 	(this.bigblue = false), (this.bigred = false), (this.bigyel = false), (this.bigju1 = false), (this.biggren = false), (this.bigqian = false);
		// }
	}
};
</script>

<style scoped>
	ul{
		padding:0;
	}
.obj11 {
	width:6.83128rem;
	height:5.53125rem;
	/* background-color: red; */
	/* background: url(../../assets/image/u91_02.png);
	background-size: 100% 100%; */
	margin-top:0.46875rem;
	background:plum;
}
.logoxn1 {
	width:6.78125rem;
	height:3.625rem;
}
.xunitop1 {
	width:6.875rem;
	height:33.75rem;
	background: url(../../assets/image/homecebian8@2x.png) no-repeat;
	position: absolute;
	top: 0px;
	background-size: 6.875rem 33.75rem;
	padding-top: 0px;
}
.ce11 {
	width: 6.78125rem;
	height:2.5rem;
	background: url(../../assets/image/logotop@2x.png) no-repeat;
	background-size:3.65625rem 0.875rem;
	position: absolute;
	top:0.90625rem;
	left: 1.875rem;
}
.ce21 {
	margin-top: 3.75rem;
	margin-left:0.625rem;
/* 	background:red; */
}
.ces1 {
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
/* 材质 */
.caizhi1 {
  height:0.9375rem;
	background:plum;
	margin-bottom:0.05625rem;
}
.czimg1 {
	width:0.625rem;
	height:0.625rem;
	display:inline-block;
	float:left;
	line-height:0.9375rem;
	margin-left:2rem;
}
</style>
