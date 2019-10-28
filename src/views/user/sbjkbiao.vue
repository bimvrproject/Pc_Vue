<template>
	<div>
		<div class="zong1" style="background: #FFFFFF;">
			<!-- <iframe src="https://www.baidu.com/s?tn=news&rtt=1&bsst=1&wd=%E9%A6%99%E6%B8%AF&cl=2&origin=ps" frameborder="0" style="width:100%;height:100%;"></iframe> -->
		</div>
		<div class="lefttopjzm">
			<div class="leftjzm">
				<img class="logojzm" src="../../assets/image/jinghekeji.png" />
				<Xunilogo v-show="xianyinxuni"></Xunilogo>
			</div>
		</div>
		<div style="background: #FFFFFF;">
			<!-- 除去侧边栏的剩余部分 -->
			<!-- 右侧登录标识 -->
			<!-- <Zheader v-show="zheaderxy"></Zheader> -->
			<!-- 右侧top部分 -->
			<div class="hometopjzm" v-show="hometop">
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left;margin-left:-1.4rem;">
					<span class="el-dropdown-link" @click="fnsbjkxm()">
						<img class="xmimg" src="../../assets/image/bluefz.png" />
						<span class="xm">项目</span>
						<i style="display:inline-block;width:0.45rem;height:0.53125rem‬;margin-left:0.2rem;">
							<img src="../../assets/image/shang.png" alt="" style="width: 100%;height: 100%;" />
						</i>
						<!-- <i class="xm" style="color: #2180ED;">项目</i>
						<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
							<img src="../../assets/image/shang.png" alt="" style="width: 100%;height: 100%;">
						</i> -->
					</span>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left;margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fnsbjksq()"  @mouseenter="fnhsq()" @mouseleave="fnhsqlev()">
						<img class="sqimg" :src="hsq"/>
						<i class="sq" :style="hsqcolor">社区</i>
						<!-- 	<i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->
				<!-- 下拉菜单---更多 -->
				<div class="moretopcomsbjk" style="height:0.93125rem;" @mouseenter="fnmorsbjk()" @mouseleave="fnmorlevsbjk()">
					<img  :src="moretb"  alt="" style="width:0.84375rem;height:0.8125rem;margin-right:0.16rem;float:left;">
					   <span class="hgmorecomsbjk">更多</span>
						<i style="display:inline-block;width:0.45rem;height:0.53125rem‬;margin-left:0.2rem;">
						  <img :src="nmgd" alt="" style="width: 100%;height: 100%;" />
						</i>
						  <div class="moocomsbjk" style="margin-top:0.1rem;">
						 	<div class="mores1comsbjk">
						 		<a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a>
						 	</div>
						 	<div class="mores1comsbjk" @click="fnabout">联系我们</div>
						 	<div class="moresbcomsbjk">版本号: v 1.0.1</div>
						 </div>
				</div>
				<!-- <el-dropdown style="float: left; margin-left:1.5rem;">
				<span class="el-dropdown-link" @mouseenter="fnmoin">
					<img class="moreimggxjk" src="../../assets/image/more@2x.png" />
					<i class="moregxjk">更多</i>
					<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
						<img :src="lmore" alt="" style="width: 100%;height: 100%;" />
					</i>
				</span>
				<el-dropdown-menu slot="dropdown" class="sbjkmore">
					<div class="sbjkmoo" @mouseenter="fnmoin" @mouseleave="fnleave">
						<div class="sbjkmores1">
						  <a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a>
						</div>
						<div class="sbjkmores1" @click="fnabout">联系我们</div>
						<div class="sbjkmoresb">版本号: v 1.0.1</div>
					</div>
				</el-dropdown-menu>
			</el-dropdown> -->
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目/设备监控/图纸 -->
			<div style="width:18.75rem;height:0.6875rem;position: absolute;top:3.93125rem;left:8.21875rem;text-align:left;cursor:pointer;">
				<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;line-height:0.6875rem;">
					{{projecttitsbjkb}}
				</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
				<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;margin-left:0.15625rem;line-height:0.7575rem;">设备监控</span>
				<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
				<span style="color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;margin-left:0.15625rem;float:left;line-height:0.7575rem;">模型</span>
			</div>
			<!-- 设备表-->
			<div class="shebeitop">
				<span class="sbzj">增加</span>
				<span class="sbsc">删除</span>
			</div>
			<div style="position:absolute;top:5.9rem;right:0.8rem;width:50.3rem;">
				<div class="sbbiao">
					<table border="1" cellpadding="0" cellspacing="0" bordercolor="gray">
						<tr>
							<td><span style="font-size:0.625rem;font-weight:bold;width:14.38375rem;height:1.6rem;display:inline-block;line-height:1.6rem;background:rgba(220,220,220,.4);">设备名称</span></td>
							<td><span style="font-size:0.625rem;font-weight:bold;width:19.976rem;height:1.6rem;display:inline-block;line-height:1.6rem;background:rgba(220,220,220,.4);">设备状态</span></td>
							<td><span style="font-size:0.625rem;font-weight:bold;width:14.38375rem;height:1.6rem;display:inline-block;line-height:1.6rem;background:rgba(220,220,220,.4);">设备地址</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
										<img class="imgb" src="../../assets/image/red.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
									<img class="imgb" src="../../assets/image/red.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/yellow.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
									<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/yellow.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
									<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
									<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/yellow.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
									<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/yellow.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
									<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
									<img class="imgb" src="../../assets/image/yellow.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
									<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
									<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/green.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/green.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
									<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
									<img class="imgb" src="../../assets/image/green.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/green.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
						<tr>
							<td><span style="font-size:0.625rem;font-weight:400;color:#444444;display:inline-block;">轴流风机</span></td>
							<td>
								<div class="sbzt">
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">警报</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/white.png" alt="" />
										<span class="jb">报警</span>
									</div>
									<div class="oneb">
										<img class="imgb" src="../../assets/image/green.png" alt="" />
										<span class="jb">正常</span>
									</div>
								</div>
							</td>
							<td><span class="dizhi">北京市 海淀区 中关村软件园 中兴通大厦</span></td>
						</tr>
					</table>
				</div>
			</div>
			<!-- 合计多少页 -->
<!-- 			<div>
				<div>
					<div class="oney">
						<span @mouseenter="oneye" class="diyiye">
							第1页
							<span class="an"><img src="../../assets/image/dijiye.png" alt="" /></span>
						</span>
						<div class="yeshu" v-if="yeshu">
							<span>第1页</span>
							<span>第2页</span>  
							<span>第3页</span>
							<span>第4页</span>
							<span>第5页</span>
						</div>
					</div>
					<div class="gong">共50条,共5项</div>
					<div class="left-rig">
						<span class="zuo"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
						<span class="you"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
					</div>
				</div>
			</div> -->
			  <div style="position:absolute;top:30.6rem;right:1.8rem;">
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="currentPage4"
							:page-size="12"
							layout="total, sizes, prev, pager, next, jumper"
							:total="48">
						</el-pagination>
       </div>
		</div>
		<!-- 点击联系我们的遮罩 -->
		<div style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);" v-show="abouts" @click="fnaboutmark">
			
		</div>
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
			yeshu: false,
			currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
				//总的等陆头部
				zheaderxy:true,
				lmore:require('../../assets/image/pmjtxia.png'),
				// 更多下拉
				nmgd: require('../../assets/image/pmjtxia.png'),
			// 联系我们
			abouts:false,
			// 社区默认状态
			hsq:require('../../assets/image/sq@2x.png'),
			hsqcolor:"color:#333333",
			moretb: require('../../assets/image/more@2x.png'),
			projecttitsbjkb:''
		};
	},
	components: {
		Newjian,
		Xunilogo,
	  // Zheader
	},
	created() {
		// 接收一下title
		this.projecttitsbjkb = sessionStorage.getItem('projecttit');
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
		this.$eventbus.$emit('cezhan3', '');
	},
	methods: {
		// 点击联系我们
		fnabout(){
				this.$eventbus.$emit('abouts');
				this.abouts = true
		},
		// 点击联系之后出现的遮罩
		fnaboutmark(){
			this.$eventbus.$emit('aboutsbi');
			this.abouts = false;
		},
			// 划过更多
		fnmorsbjk(){
			this.moretb = require('../../assets/image/moress.png');
			this.nmgd = require('../../assets/image/shang.png');
		},
		// 移出更多
		 fnmorlevsbjk(){
			 this.moretb = require('../../assets/image/more@2x.png');
			 this.nmgd = require('../../assets/image/pmjtxia.png');
		},
		//点击项目 
		fnsbjkxm(){
			this.$router.push('/Login');
			},
		//点击社区
		fnsbjksq(){
			this.$router.push('/');
			},
		handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
		help9() {
			location.href = 'http://www.jh-bim.com/home/solution';
		},
		Preservation9() {
			this.$router.push('/baocun');
		},
		xiugai9() {
			this.$router.push('/xiugai');
		},
		abouts9() {
			this.$router.push('/about');
		},
		fnxuni() {
			this.xianyinxuni = !this.xianyinxuni;
			this.xianyin = false;
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
		oneye() {
			this.yeshu = !this.yeshu;
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
	/* .el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon{
		font-size:0.39rem !important;
	}
.el-input--mini .el-input__inner{
	height:0.875rem;
	line-height:0.875rem;
}
.el-pagination{
	
}
.el-pagination .btn-prev{
	padding-right:0.375rem;
	margin-top:-0.3rem;
}
.el-pagination .btn-next{
	margin-top:0.1rem;
	margin-top:-0.3rem;
}
.el-pagination .btn-next, .el-pagination .btn-prev{
	background-size:0.375rem;
}
.el-pagination button,.el-pagination{
	font-size:0.40625rem;
	min-width:1.109375rem;
	height:1.9rem;
	line-height:0.75rem;
}
.el-pagination__total{
	margin-right:0.3125rem;
}
.el-pagination__jump{
	margin-left:0.75rem;
}
.el-pager li{
	padding:0 0.125rem;
	font-size:0.40625rem;
	min-width:1.109375rem;
	height:0.875rem;
	line-height:1.2rem;
}
.el-pager{
	margin-top:0.1rem;
}
.el-pagination__editor.el-input .el-input__inner{
	height:0.875rem !important;
	margin-left:0.1rem;
}
.el-pagination__jump{
	padding: 0.04375rem;
} */
.moretopcomsbjk{
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
.hgmorecomsbjk{
	color:#333333;
}
.moocomsbjk{
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
.mores1comsbjk{
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
.moresbcomsbjk{
		border: 0;
		text-align: left;
		line-height:0.9rem;
		color: #666666;
		font-size:0.46rem;
		font-weight: 500;
		/* background:red; */
	}
	.moretopcomsbjk:hover .moocomsbjk{
		  display:block;
	}
	.moretopcomsbjk:hover .hgmorecomsbjk{
		 color:#2180ED
	}
	.moretopcomsbjk:hover .shouye{
		 transform:rotate(180deg);
	}
.el-scrollbar__view .el-select-dropdown__list{
	display:none;
}
.sbjkmore {
	background: rgba(225, 225, 225, 0.3);
	position: absolute;
	top:2.125rem  !important;
	left:16.175rem !important;
	border: none;
	padding:0.1rem;
	border-radius:0rem !important;
}
.popper__arrow{
		border-width:0rem !important;
		left:0 !important;
		overflow:hidden;
	}
.sbjkmoo {
	width:4.75rem;
	/* 		height: 195px; */
		/* 	background: url(../../assets/image/mores.png); */
			padding-left:0.2rem;
			padding-right:0.25rem;
			cursor: pointer;
}
.sbjkmores1 {
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
.sbjkmoresb {
	border: 0;
	text-align: left;
	line-height:0.9rem;
	color: #666666;
	font-size:0.46rem;
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
.zong1 {
	width:59.9375rem;
	height:33.65625rem;
	/* background:green; */
	background: url(../../assets/image/bjt.jpg);
	background-repeat: no-repeat;
	background-size:100% 100%;
	position: relative;
}
.el-main {
	/* padding-left:50px; */
	/* padding-top:29px; */
	padding: 0 !important;
}
/* 主页top部分*/
.hometopjzm {
	/* width:46.875rem;
	height:1.78125rem; */
	position: absolute;
	top:0.6275rem;
	left:7.2rem;
/* 	background:red; */
	line-height:1.78125rem;
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
	width:6.75rem;
	height:1.875rem;
	/* 	background-color:green;
			background: url(../../assets/image/homecebian8@2x.png); */
	position: absolute;
	top: 0rem;
}
.el-dropdown-link {
	cursor: pointer;
	color: #333333;
}
.xmimg {
	width:0.84375rem;
	height:0.8125rem;
	padding-left:2.5rem;
	padding-top:0.0625rem;
}
.xm {
	width:0.84375rem;
	height:0.53125‬;
	font-size:0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: #2180ed;
	font-style: normal;
	padding-left: 0.15625rem;
	line-height: 0.53125rem;
}
.sqimg,
.bjimg {
	width:0.84375rem;
	height: 0.8125rem;
}
.sq {
	width:1.25rem;
	height:0.5625rem;
	font-size:0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left:0.1875rem;
	font-style: normal;
}
.moreimggxjk {
	width: 0.78125rem‬;
	height: 0.78125rem;
}
.moregxjk {
	width:1.21875rem;
	height:0.59375rem;
	font-size:0.625rem;
	font-style: normal;
	padding-left:0.15625rem;
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
/* 表格 */
.shebeitop {
	/* width:49.4rem; */
	height:1.5rem;
	position:absolute;
	right:1.8rem;
	top:3.6rem;
	/* background:plum; */
	/* background:red; */
 /* margin-bottom:0.8rem; */
}
.sbsc {
	display: inline-block;
	width:3.1875rem;
	height:1.20625rem;
	background: #2180ed;
	float: right;
	margin-top:0.3125rem;
	margin-right:0.3rem;
	line-height:1.40625rem;
	font-size:0.625rem;
	color:#FFFFFF
}
.sbzj {
	display: inline-block;
	width:3.1875rem;
	height:1.20625rem;
	background: #2180ed;
	float: right;
	margin-top:0.3125rem;
	line-height:1.40625rem;
	font-size:0.625rem;
	margin-left:0.3rem;
	color:#FFFFFF
}
.sbbiao {
	/* width: 1693px;
	height: 900px; */
	/* 	background:peru; */
	margin-left: 0.3125rem;
}
/* 设备状态中的警报，报警和正常的外壳 */
.sbzt {
	/* width: 600px;
	height: 60px; */
	/* width:25.75rem;
	height:0.625rem; */
/* 	background:red; */
	/* 	background:green; */
	line-height: 1.575rem;
  margin-left:5.8rem;
}
.oneb {
	/* width:2.125rem;
	height:1.475rem; */
/* 	background:yellow; */
	float: left;
	margin-right:1.625rem;
	line-height: 1.575rem;
}
.imgb {
	width:0.625rem; 
  height:0.625rem;
	display: inline-block;
/* 	margin-right:0.1875rem; */
	float: left;
	padding-top:0.45625rem;
	/* background:red; */
}
.jb {
	/* width:1.25rem;
	height:1.875rem; */
	float: left;
	font-size:0.525rem;
	color: #444444;
	font-weight: 400;
	line-height: 1.575rem;
}
.dizhi {
	font-size:0.4375rem;
	color: #666666;
	font-weight: 400;
}
.oney {
	width:15.625rem;
	height:0.625rem;
	position: absolute;
	top:29rem;
	right:1.7rem;
}
.diyiye {
	display: inline-block;
	width: 76px;
	height: 30px;
	border: 1px solid #e8e7eb;
	font-size: 20px;
	/* position: absolute;
	left: 419px;
	top: 9px; */
/* 	background:red; */
}
.an {
	display: inline-block;
	width: 14px;
	height: 12px;
	margin-left: 5px;
}
.an img {
	width: 100%;
	height: 100%;
}
.yeshu {
	width: 76px;
	position: absolute;
	top: -3.3875rem;
	left:6.9rem;
	font-size: 20px;
}
.yeshu span {
	width: 72px;
	height: 30px;
	display: inline-block;
	border: 1px solid #e8e7eb;
	line-height: 30px;
	text-align: left;
	padding-left: 4px;
	background: #ffffff;
}
/* 共50页50条 */
.gong {
	width:6.25rem;
	height:1.25rem;
	position: absolute;
	right:3.5rem;
	top:29.3rem;
	font-size:0.625rem;
}
/* 左右按钮 */
.left-rig {
	width:6.25rem;
	height:1.25rem;
	position: absolute;
	right:0rem;
	top:29rem
}
.zuo {
	display: inline-block;
	width: 45px;
	height: 45px;
	font-size: 24px;
	line-height: 45px;
	border: 1px solid #e8e7eb;
}
.you {
	display: inline-block;
	width: 45px;
	height: 45px;
	font-size: 24px;
	line-height: 45px;
	border: 1px solid #e8e7eb;
	margin-left: 18px;
}
</style>
