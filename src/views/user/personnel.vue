<template>
	<div>
		<div class="zongper" style="overflow:hidden;">
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
		<div>
			<!-- 除去侧边栏的剩余部分 -->
			<!-- 右侧登录标识 -->
			<!-- 	 <Zheader v-show="zheaderxy"></Zheader> -->
			<!-- 右侧top部分 -->
			<div class="hometopjzmper" v-show="hometop">
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left;margin-left:-1.4rem;">
					<span class="el-dropdown-link" @click="fnperxm()">
						<img class="xmimgper" src="../../assets/image/bluefz.png" alt="" />
						<span class="xmper">项目</span>
					<i style="display:inline-block;width:0.45rem;height:0.53125rem‬;margin-left:0.2rem;">
						<img src="../../assets/image/shang.png" alt="" style="width: 100%;height: 100%;" />
					</i>
					</span>
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fnpersq()"  @mouseenter="fnhsq()" @mouseleave="fnhsqlev()">
						<img class="sqimgper" :src="hsq"/>
						<i class="sqper" :style="hsqcolor">社区</i>
						<!-- 	<i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->
				<!-- 下拉菜单---更多 -->
				<div class="moretopcomper" style="height:0.93125rem;"  @mouseenter="fnmorper()" @mouseleave="fnmorlevper()">
					<img  :src="moretb"  alt="" style="width:0.84375rem;height:0.8125rem;margin-right:0.16rem;float:left;">
					   <span class="hgmorecomper">更多</span>
						<i style="display:inline-block;width:0.45rem;height:0.53125rem‬;margin-left:0.2rem;">
						  <img :src="nmgd" alt="" style="width: 100%;height: 100%;" />
						</i>
						  <div class="moocomper" style="margin-top:0.1rem;">
						 	<div class="mores1comper">
						 		<a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;width:4.5rem;">帮助</a>
						 	</div>
						 	<div class="mores1comper" @click="fnabout">联系我们</div>
						 	<div class="moresbcomper">版本号: v 1.0.3</div>
						 </div>
				</div>
				<!-- 下拉菜单---更多--结束 -->
			</div>
			<!-- 新建项目/管线综合/图纸 -->
		<div style="width:18.75rem;height:0.6875rem;position: absolute;top:3.93125rem;left:8.21875rem;text-align:left;cursor:pointer;">
			<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;line-height:0.6875rem;">
				{{projecttitperson}}
			</span>
			<i style="font-weight:900;font-style:normal;font-size:0.625rem;cursor:pointer;float:left;line-height:0.6875rem;">/</i>
			<span style="margin-right:0.1875rem;color:#2180ED;font-size:0.5rem;font-weight:500;cursor:pointer;float:left;margin-left:0.15625rem;line-height:0.7575rem;">信息编辑</span>
		</div>
			<!-- 人员信息表 -->
			<div class="renyuanxx">
				<!-- 人员信息表标题 -->
				<div class="ryxxtitle">人员信息填写</div>
				<ul class="ryxxcenter">
					<li class="reyxh" v-for="(item,index) in qxarr" :key="index">
						<div class="accountnub">
							<span class="accountnubspan">账号</span>
							<input v-model="qxarr[index].msgss" placeholder="请输入内容" class="accountnubinp" @blur="changewall3(index)"></input>
						</div>
						<div class="accountper">
							<span class="accountperspan">账号权限</span>
							<el-select v-model="item.value" clearable placeholder="请选择" class="accountpersel" @change="qxs(index)">
								<el-option v-for="(item) in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
							</el-select>
							
						 <!-- <select class="info-select" style="width:6rem;height:1.3rem;line-height:1.3rem;font-size:0.4rem;border:1px solid gainsboro;border-radius:4px;padding-left:0.1rem;">
							 <option value0="" class="changqx">请选择权限</option>
						   <option value1="权限一">权限一</option>
						   <option value2 ="权限二">权限二</option>
					 	   <option value3="权限三">权限三</option>
						 </select> -->
						</div>
						<div class="accountdel" @click="fnqxdel(index)"></div>
					</li>
					<div class="njzhqx" @click="fnnjqx()" style="float:right;">
						<img src="../../assets/image/j.png" alt="" />
						<span>新建项目</span>
					</div>
				</ul>
				<!-- 人员信息填写的提交 -->
				<div class="ryxxtj" @click="fntijiao">提交</div>
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
			// 账号1
			accountnr: '',
			options: [
				{
					value: '选项1',
					label: '权限一'
				},
				{
					value: '选项2',
					label: '权限二'
				},
				{
					value: '选项3',
					label: '权限三'
				}
			],
			value: '',
			qxarr: [],
			lmore: require('../../assets/image/pmjtxia.png'),
			// 更多下拉
			nmgd: require('../../assets/image/pmjtxia.png'),
			// 联系我们
			abouts: false,
			// 社区默认状态
			hsq:require('../../assets/image/sq@2x.png'),
			hsqcolor:"color:#333333",
			moretb: require('../../assets/image/more@2x.png'),
			projecttitperson:''
		};
	},
	components: {
		Newjian,
		Xunilogo
		// Zheader
	},
	created() {
		// 接收一下title
		this.projecttitperson = sessionStorage.getItem('projecttit');
		// 人员信息填写中的账号
		this.qxarr = localStorage .getItem('wallss1ss')
			? JSON.parse(localStorage .getItem('wallss1ss'))
			: [{ msgss:'',value:''}, { msgss:'',value:''}, {msgss:'',value:''}, 
			{ msgss:'',value:''}];
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
		this.$eventbus.$emit('cezhan4', 'renyuanxx');
		this.$eventbus.$emit('hometop');
	},
	methods: {
		// 提交
		fntijiao(){
			console.log(this.qxarr) 
		},
		qxs(index){
			//设置localStroage值
		 this.$set(this.qxarr[index]);
		localStorage.setItem('wallss1ss', JSON.stringify(this.qxarr));
		},
		// fnns(index){
		// 	alert(index)
		// },
		//人员信息中的账号失焦事件
		changewall3(index){
				 this.$set(this.qxarr[index]);
			localStorage.setItem('wallss1ss', JSON.stringify(this.qxarr));
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
		fnmorper(){
			this.moretb = require('../../assets/image/moress.png');
			this.nmgd = require('../../assets/image/shang.png');
		},
		// 移出更多
		 fnmorlevper(){
			this.moretb = require('../../assets/image/more@2x.png');
			this.nmgd = require('../../assets/image/pmjtxia.png');
		},
		// 移出社区
		fnleave() {
			this.lmore = require('../../assets/image/pmjtxia.png');
		},
		// 点击权限的删除
		fnqxdel(index) {
			this.qxarr.splice(index, 1);
		},
		// 点击权限的新建项目
		fnnjqx() {
			this.qxarr.push({ msgss:'',value:''});
			// localStorage.setItem('wallss1ss', JSON.stringify(this.qxarr))
		},
		// 点击项目
		fnperxm() {
			this.$router.push('/Login');
		},
		// 点击社区
		fnpersq() {
			this.$router.push('/');
		},
		fns() {
			this.xianyin = !this.xianyin;
			// this.xianyinxuni = false;
			this.$eventbus.$emit('showyin');
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
.moretopcomper{
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
.hgmorecomper{
	color:#333333;
}
.moocomper{
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
.mores1comper{
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
.moresbcomper{
		border: 0;
		text-align: left;
		line-height:0.9rem;
		color: #666666;
		font-size:0.46rem;
		font-weight: 500;
		/* background:red; */
	}
.moretopcomper:hover .moocomper{
		  display:block;
	}
	.moretopcomper:hover .hgmorecomper{
		 color:#2180ED
	}
	.moretopcomper:hover .shouye{
		 transform:rotate(180deg);
	}
.permodelmore {
	background: rgba(225, 225, 225, 0.3);
	position: absolute;
	top: 2.125rem !important;
	left: 16.175rem !important;
	border: none;
	padding: 0.1rem;
	border-radius:0rem !important;
}
.popper__arrow{
		border-width:0rem !important;
		left:0 !important;
		overflow:hidden;
	}
.permoo {
	width:4.75rem;
	/* 		height: 195px; */
	/* 	background: url(../../assets/image/mores.png); */
	padding-left: 0.2rem;
	padding-right: 0.25rem;
	cursor: pointer;
}
.permores1 {
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
.permoresb {
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
.zongper {
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
.hometopjzmper {
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
.xmimgper {
	width: 0.84375rem;
	height: 0.8125rem;
	padding-left: 2.5rem;
	padding-top: 0.0625rem;
}
.xmper {
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
.sqimgper,
.bjimgper {
	width: 0.84375rem;
	height: 0.8125rem;
}
.sqper {
	width: 1.25rem;
	height: 0.5625rem;
	font-size: 0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left: 0.1875rem;
	font-style: normal;
}
.moreimgper {
	width: 0.78125rem‬;
	height: 0.78125rem;
}
.moreper {
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
/* 人员信息表 */
.renyuanxx {
	width: 43rem;
	height: 26.5rem;
	/* background:plum; */
	position: absolute;
	top: 5.6rem;
	right: 6.8rem;
}
/* 人员信息标题 */
.ryxxtitle {
	width: 26rem;
	height: 3rem;
	/* background:hotpink; */
	margin-left: 10rem;
	font-size: 0.75rem;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
	line-height: 3.1rem;
}
/* 人员信息权限主要部分 */
.ryxxcenter {
	width: 26rem;
	min-height: 10.4rem;
	max-height:22rem;
	/* background:red; */
	margin-left: 10rem;
	overflow: auto;
}
/* 人员信息填写的提交 */
.ryxxtj {
	width: 22.59375rem;
	height: 0.9375rem;
	background: url(../../assets/image/ryxxtj.png) no-repeat;
	background-size: 22.59375rem 0.9375rem;
	margin-left: 12rem;
	margin-top: 1rem;
	font-size: 0.5rem;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	line-height: 0.95rem;
}
li {
	list-style: none;
}
.reyxh {
	width: 25rem;
	height: 1.3rem;
	/* background:paleturquoise; */
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
}
/* 账号总体 */
.accountnub {
	/* width: 8.125rem;
	height: 1.3rem; */
	/* background:peru; */
	margin-left: 1.8rem;
	display: flex;
	justify-content: space-around;
}
/* 账号权限总体 */
.accountper {
	/* width: 11.25rem;
	height: 1.3rem; */
	/* background:blue; */
	margin-left:2.6rem;
	display: flex;
	justify-content:space-around
}
/* 删除按钮 */
.accountdel {
	width: 0.6875rem;
	height: 0.78125rem;
	/* background:green; */
	margin-right: 0.25rem;
	margin-top: 0.3rem;
	background: url(../../assets/image/lajit.png) no-repeat;
	background-size: 0.6875rem 0.78125rem;
}
.accountnubspan {
	display: inline-block;
	width: 1.9rem;
	height: 1.3rem;
	/* background:blue; */
	font-size: 0.5625rem;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
	line-height: 1.3rem;
	background:url(../../assets/image/mh.png) no-repeat 1.2rem;
	background-size:1rem 0.8rem;
}
/* 账号中的请输入内容 */
.accountnubinp {
	width: 6.1rem;
	height:1.18rem;
	font-size:0.43rem;
	border-radius:4px;
	border:#E8E7EB solid 1px;
	font-size:0.48rem;
	line-height:1.2rem;
}
.accountperspan {
	display: inline-block;
	width: 3rem;
	height: 1.3rem;
	/* 	background:green; */
	font-size: 0.5625rem;
	line-height: 1.3rem;
	background:url(../../assets/image/mh.png) no-repeat 2.3rem;
	background-size:1rem 0.8rem;
}
/* 账号权限 */
.accountpersel {
	width: 8.2rem;
	height: 1rem;
}
/* 新建项目 */
.njzhqx {
	/* width: 3.825rem;
	height: 0.78125rem; */
	/* background:palegreen; */
	display: flex;
	/* margin-right:3.3rem; */
	margin-top: 1.3rem;
	margin-right:1.8rem;
}
.njzhqx img {
	width: 0.75rem;
	height: 0.75rem;
}
.njzhqx span {
	/* width: 2.5875rem;
	height: 0.59375rem; */
	font-size: 0.5625rem;
	/* display:inline-block; */
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
	margin-left:0.2rem;
	line-height:0.75rem;
}
.el-input__inner{
	height:1.25rem;
	}
.el-input__icon{
	width:0.78125rem;
	line-height:1.25rem;
}
select::-ms-expand { display: none; }          
         .info-select{
    /*        width: 12%;
            margin-left: 64%; */
            border: none;
            outline: none;
						color:#333333; 
            /*将默认的select选择框样式清除*/
            appearance:none;
            -moz-appearance:none;
            -webkit-appearance:none;
            -ms-appearance:none;
           /*在选择框的最右侧中间显示小箭头图片*/
          /* background: url(../img/arrow.png) no-repeat scroll right center transparent; */          
         }
</style>
