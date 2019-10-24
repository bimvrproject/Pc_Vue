<template>
	<div>
		<div class="logoxnedit">
			<div class="xunitopsedit">
				<div class="xunitopedit">
					<!-- 虚拟建造的图标 -->
					<div class="ce1edit" @click="ce1"></div>
					<!-- 线条 -->
					<div class="cesedit"></div>
					<!-- 信息与材质 -->
					<div style="margin-top:3.75rem;">
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
								<span style="width:5.245rem;height:0.625rem;font-size:0.5rem;display:block;color:#FFFFFF;text-align:left;
								margin-bottom:0.3rem;margin-top:0.38rem;margin-left:0.9rem;">
								墙
								</span>
								<span style="width:5.375rem;margin-left:0.9rem;height:0.03125rem‬;display:block;border-bottom:0.03125rem solid darkgray;margin-bottom:0.3rem;"></span>
								<!-- 创建新的墙的厚度 -->
									<ul>
										<li v-for="(item, index) in newjian" :key="index">
											<div style="height:0.825rem;
											margin-bottom:0.25rem;
											position: relative;
											display:flex;
											padding-left:0.6rem;
											text-align:left;
											justify-content:space-around;
											padding-right:0.5rem;
											">
													<!-- item.change 代表input-->
													<!-- <i style="font-style: normal;color:rgba(225,225,225,1);font-weight:400;float:left;font-size:0.5rem;display:inline-block;"> -->
														<i
														@dblclick="fnwall2(index)"
														style="font-style:normal;display:inline-block;font-size:0.5rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(255,255,255,1);
														position:relative;width:2.38rem;height:0.75rem;line-height:0.8rem;"
														>{{item.msgs}}:</i>
														<input 
														v-model="newjian[index].msgs"
														@blur="changewall2(index)"
														v-show="item.changes"
														type="text"
														style="width:2.5rem;height:0.75rem;font-size:0.5rem;border:none;position:absolute;left:0.3rem;"
														/>
														<i v-show="!item.change" @dblclick="fnwall1(index)" style="font-style:normal;display:inline-block;width:2.075rem;height:0.75rem;
														font-size:0.5rem;padding-top:0.2rem;margin-left:-0.4rem;position:relative;color:#FFFFFF;">{{ item.msg }}</i>
														<input
															v-model="newjian[index].msg"
															type="text"
															@blur="changewall1(index)"
															v-show="item.change"
															style="width:2.03125rem;height:0.75rem;font-size:0.5rem;border:none;margin-left:-0.33rem;"
														/>
													</i>
													<img src="../../assets/image/lj.png" style="width:0.40625rem;height:0.5rem;padding-bottom:0.3125rem;padding-top:0.2rem;" @click="clear(index)" alt="">
											</div>
										</li>
										<li style="width:5.75rem;height:0.98125rem;">
											<span style="display:inline-block;width:0.65625rem;height:0.71875rem;float:right;" @click="establish()">
												<img src="../../assets/image/jjjj.png" alt="" style="width:100%;height:100%;" />
											</span>
										</li>
									</ul>
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
								<div style="width:6.86rem;height:26.8125rem;overflow:hidden;">
									<ul style="width:7.975rem;height:26.675rem;overflow:auto;" ref="ele">
										<li v-for="(item, index) in material" :key="index" class="obj1" @click="fnedit(index)">
						           <img src="../../assets/image/u91_02.png" alt="" style="width:6.875rem;height:5.53125rem;">
											 <span style="width:6.849rem;height:5.51rem;z-index:80;display:inline-block;position:absolute;top:0;
											 left:0;"></span>
					             <ul class="edit-ritopen" :class="{ editopens:index==iseditopens}">
												 <li class="edit-ri edit-ri1"></li>
												 <li class="edit-ri edit-ri2"></li>
												 <li class="edit-ri edit-ri3"></li>
												 <li class="edit-ri edit-ri4"></li>
												 <li class="edit-ri edit-ri5"></li>
												 <li class="edit-ri edit-ri6"></li>
											 </ul>
										</li>
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
			// cexiaoshi: true,
			newjian: [], //墙的厚度数组
			xinxitu: require('../../assets/image/xx.png'),
			xinxitit: 'color:#FFFFFF',
			caizhitu: require('../../assets/image/caizhi.png'),
			cztit: 'color:#FFFFFF',
			// 信息展开的控制
			xinxizhanshi: false,
			czzhankai: false,
			// bigyel: false,
			// show1: false,
			// show2: false,
			// wall11:localStorage.getItem('wallss1') || '50cm',
			wall1: true,
			// walls1:false
			//材质循环
			material:[0,0,0,0,0,0],
			// 材质盘的显隐
	   iseditopens:-1
		};
	},
	created() {
		// console.log(localStorage.getItem('wallss1'));
		this.newjian = localStorage .getItem('wallss1')
			? JSON.parse(localStorage .getItem('wallss1'))
			: [{ msg:50,msgs:'墙体厚度', change: false ,changes:false}, { msg: 50,msgs:'墙体厚度', change: false ,changes:false}, { id: 2, msg: 50,msgs:'墙体厚度', change: false,changes:false }, 
			{ msg: 50, msgs:'墙体厚度',change: false,changes:false }];

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
		localStorage.getItem('wallss1');
		//材质循环
		// this.material.push(0);
	},
	mounted() {
		 
	},
	methods: {
		ce1() {
			this.$router.push('/Login');
		},
		// 点击编辑新建项目
		establish() {
			// this.newjian.push(6);
			this.newjian.push({ msg: 50,msgs:"墙体厚度", change: false ,changes:false });
			localStorage.setItem('wallss1', JSON.stringify(this.newjian));
		},
		// 删除信息
		clear(index) {
			this.newjian.splice(index, 1);
			localStorage.setItem('wallss1', JSON.stringify(this.newjian));
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
		// 墙体厚度修改
		fnwall2(index) {
			// console.log(index);
			this.$set(this.newjian[index], 'changes', true);
			(this.wall1 = false), (this.walls1 = true);
		},
		//失焦的时候
		changewall1(index) {
			(this.walls1 = false), (this.wall1 = true), this.$set(this.newjian[index], 'change', false);
			//设置localStroage值
			localStorage.setItem('wallss1', JSON.stringify(this.newjian));
		},
		//聚焦的时候
		changewall2(index) {
			(this.walls1 = false), (this.wall1 = true), this.$set(this.newjian[index], 'changes', false);
			//设置localStroage值
			localStorage.setItem('wallss1', JSON.stringify(this.newjian));
		},
		// 点击信息标题
		xxtitle() {
			this.xinxitu = require('../../assets/image/information.png');
			this.xinxitit = 'color:#2180ED';
			this.caizhitu = require('../../assets/image/caizhi.png');
			this.cztit = 'color:#FFFFFF';
			// 点击信息材质收,信息展开
			this.xinxizhanshi = !this.xinxizhanshi;
			this.czzhankai = false;
		},
		// 点击材质标题
		cztitle() {
			this.caizhitu = require('../../assets/image/czblue.png');
			this.cztit = 'color:#2180ED';
			this.xinxitu = require('../../assets/image/xx.png');
			this.xinxitit = 'color:#FFFFFF';
			//点击材质展,信息收
			(this.czzhankai = !this.czzhankai), 
			(this.xinxizhanshi = false);
		},
		// 点击材质展开的某一个图片
		fnedit(index){
     this.iseditopens = index
		},
	}
};
</script>

<style scoped>
	/* 材质展开中的li */
.obj1 {
	width:6.875rem;
	height:5.53125rem;
	/* background-color: red; */
	margin-top:0.46875rem;
	position:relative;
	overflow: hidden;
}
  .edit-ri1:after{
	position:absolute;
	left:-5.7rem;
	top:0;
	display: block;
	width:5.71rem;
	height: 100%;
	background-color: rgba(255,0,0, 0.3);
	content: attr(data-text);
	transition:all 1s ease;
	transform: translateY(-100%);
	}
	.edit-ri1:hover:after{
		 transform: translateY(0);
		}
	.edit-ri2:after{
		position:absolute;
		left:-5.7rem;
		top:0;
		display: block;
		width:5.71rem;
		height: 100%;
		background-color: rgba(255,153,18, 0.3);
		content: attr(data-text);
		transition:all 1s ease;
		transform: translateY(-100%);
   }
	.edit-ri2:hover:after{
		transform: translateY(0);
	}
	.edit-ri3:after{
		position:absolute;
		left:-5.7rem;
		top:0;
		display: block;
		width:5.71rem;
		height: 100%;
		background-color: rgba(255,255,0,0.3);
		content: attr(data-text);
		transition:all 1s ease;
		transform: translateY(-100%);
	 }
	.edit-ri3:hover:after{
		transform: translateY(0);
	}
	.edit-ri4:after{
		position:absolute;
		left:-5.7rem;
		top:0;
		display: block;
		width:5.71rem;
		height: 100%;
		background-color: rgba(34,139,34,0.3);
		content: attr(data-text);
		transition:all 1s ease;
		transform: translateY(-100%);
	 }
	.edit-ri4:hover:after{
		transform: translateY(0);
	}
	.edit-ri5:after{
		position:absolute;
		left:-5.7rem;
		top:0;
		display: block;
		width:5.71rem;
		height: 100%;
		background-color: rgba(64,224,205,0.3);
		content: attr(data-text);
		transition:all 1s ease;
		transform: translateY(-100%);
	 }
	.edit-ri5:hover:after{
		transform: translateY(0);
	}
	.edit-ri6:after{
		position:absolute;
		left:-5.7rem;
		top:0;
		display: block;
		width:5.71rem;
		height: 100%;
		background-color: rgba(0,0,255,0.3);
		content: attr(data-text);
		transition:all 1s ease;
		transform: translateY(-100%);
	 }
	.edit-ri6:hover:after{
		transform: translateY(0);
	}
/* 材质展开中的材质颜色盘 */
.edit-ritopen{
	width:1.2rem;
	height:5.53125rem;
	background:rgba(225,225,225,.6);
	position:absolute;
	top:0rem;
	right:0rem;
	z-index:80;
	display:none;
}
.editopens{
	display:block;
}
/* 具体某一个 */
.edit-ri{
	width:1.2rem;
	height:0.922rem;
}
.edit-ri1{
	background: #FF0000;
}
.edit-ri2{
	background:#FF8C00;
}
.edit-ri3{
	background:#FFFF00;
}
.edit-ri4{
	background:#228B22;
}
.edit-ri5{
	background:#00B2EE;
}
.edit-ri6{
	background:#0000FF;
}
.logoxnedit {
	width:6.78125rem;
	height:3.625rem;
}
.xunitopedit {
	width:6.875rem;
	height:33.75rem;
	background: url(../../assets/image/homecebian8@2x.png) no-repeat;
	position: absolute;
	top: 0px;
	background-size: 6.875rem 33.75rem;
	padding-top: 0px;
}
.ce1edit {
	width: 4.08125rem;
	height:1.2rem;
	background: url(../../assets/image/logotop@2x.png) no-repeat;
	background-size:3.65625rem 0.875rem;
	position: absolute;
	top:0.90625rem;
	left: 1.875rem;
}
.cesedit {
	width:6.15625rem;
	height:0.0625rem;
	background: url(../../assets/image/fgx.png) no-repeat;
	background-size:6.15625rem 0.09375rem;
	position: absolute;
	top:2.5rem;
	right:0.3125rem;
	left:0.3125rem;
}
ul,ol,li{
	list-style:none;
  margin:0;padding:0
}
/* 材质 */
.caizhi {
  height:0.9375rem;
	/* background:plum; */
	margin-bottom: 0.16625rem;
}
.czimg {
	width:0.625rem;
	height:0.625rem;
	display:inline-block;
	float:left;
	line-height:0.9375rem;
	margin-left:2rem;
}
</style>
