<template>
	<div>
			<div class="hometoplo">
			<!-- 下拉菜单---项目 -->
			<el-dropdown style="float: left;margin-left:-1.4rem;">
				<span class="el-dropdown-link" @mouseenter="fns()" @click="fndianji">
						<img class="xmimg" :src="xmtb" alt="" />
						<i class="xm" ref="xmcol">项目</i>
				<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;"><img src="../../assets/image/pmjtxia.png" alt="" style="width: 100%;height: 100%;"></i>
				</span>
			</el-dropdown>
			<!-- 下拉菜单---项目--结束 -->
			<!-- 下拉菜单---社区 -->
			<el-dropdown style="float: left;margin-left:1.5rem;">
				<span class="el-dropdown-link" @click="fncomenter()" @mouseenter="fnnew">
					<img class="sqimg" :src="sqtb" />
					<i class="sq" ref="sqcol" :style="sqcolor">社区</i>
					<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
				</span>
			</el-dropdown>
			<!-- 下拉菜单---社区--结束 -->
		
			<!-- 下拉菜单---更多 -->
			<el-dropdown style="float: left;margin-left:1.5rem;">
				<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> <-->
				<span class="el-dropdown-link" @mouseenter="sqq" style="position:relative;">
					<img class="moreimg" :src="moretb" />
					<i class="more" ref="gdcol">更多</i>
				<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;"><img src="../../assets/image/pmjtxia.png" alt="" style="width: 100%;height: 100%;"></i>
				</span>
				<el-dropdown-menu slot="dropdown" class="lomore">
					<div class="moo">
						<a class="mores1" href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;">帮助</a>
						<div class="mores1" @click="Preservation">保存设置</div>
						<div class="mores1" @click="xiugai">修改密码</div>
						<div class="mores1" @click="abouts">联系我们</div>
						<div class="moresb">版本号: v 1.0.3</div>
					</div>
				</el-dropdown-menu>
			</el-dropdown>
			<!-- 更多下拉 -->
			<!-- <More v-show="more"></More> -->
			<!-- 下拉菜单---更多--结束 -->
		</div>
		<!-- 新建项目 -->
		
		 <Newjian v-show="newxy"></Newjian>
	</div>
</template>

<script>
	import Newjian from './newjian';
	import More from './more';
	export default {
		data() {
			return {
				username: '',
				password: '',
				loginWindow: '',
				checked: '',
				panduan: false,
				xianyin: false,
				xianyinxuni:false,
				hometop: true,
				title: '12345678901',
				box1: true,
				xmtb: require('../../assets/image/sshouse.png'),
				sqtb: require('../../assets/image/sq@2x.png'),
				moretb: require('../../assets/image/more@2x.png'),
				sqcolor: 'color: #333333',
				//发布组件
				release: false,
				//新建项目
				newxy:true,
				//总的等陆头部
				// zheaderxy:true
			};
		},
		components: {
			Newjian,
			More
			// Release
		},
		mounted() {
			if (window.sessionStorage .getItem('token') != null) {
				this.loginWindow = 'display: none';
				//请求用户接口查询 用户信息
	
				// .then(res => this.loginSuccess(res))
				// .catch(err => this.requestFailed(err))
				// .finally(() => {
				// // state.loginBtn = false;
				// });
			} else {
				this.loginWindow = '';
			}
		},
		methods: {
			fndianji(){
					this.$router.push('/Login');
			},
			Preservation() {
				this.$router.push('/Login/baocun');
			},
			xiugai() {
				this.$router.push('/Login/xiugai');
			},
			abouts() {
				this.$router.push('/Login/about');
			},
			// fnxuni(){
			// 	this.xianyinxuni = !this.xianyinxuni;
			// 	this.xianyin = false;
			// 	this.box1=!this.box1
			// },
			fns() {
				this.xianyin = !this.xianyin;
				// this.xianyinxuni = false;
				// this.$eventbus.$emit('showyin');
				// this.$router.push('/Login/newjian');
				this.newxy = true
				this.xmtb = require('../../assets/image/bluefz.png');
				this.sqtb = require('../../assets/image/sq@2x.png');
				this.moretb = require('../../assets/image/more@2x.png');
				this.$refs.xmcol.style.color = '#2180ED';
				this.sqcolor = 'color:#333333';
				this.$refs.gdcol.style.color = '#333333';
			},
			//划过社区
			fnnew(){
				this.newxy = false
			},
			sqq() {
				this.moretb = require('../../assets/image/moress.png');
				this.$refs.gdcol.style.color = '#2180ED';
				this.xmtb = require('../../assets/image/sshouse.png');
				this.$refs.xmcol.style.color = '#333333';
				this.sqtb = require('../../assets/image/sq@2x.png');
				this.sqcolor = 'color:#333333';
			},
			fncomenter() {
				this.$router.push('/');
				this.sqtb = require('../../assets/image/shequ.png');
				this.sqcolor = 'color:#2180ED';
				this.$refs.xmcol.style.color = '#333333';
				this.xmtb = require('../../assets/image/sshouse.png');
				this.$refs.gdcol.style.color = '#333333';
				this.moretb = require('../../assets/image/more@2x.png');
			},
			// fnxuni(){
			// 	this.xianyin = false;
			// },
			fn4() {
				this.loginWindow = 'display:block';
			},
			fn3() {
				this.$router.push('/Register');
			},
			fn1() {
				var re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|4|5|6|7|8|9])\d{8}$/;
				if (!re.test(this.username)) {
					this.panduan = true;
				} else {
					this.panduan = false;
				}
			},
		}
	};
</script>

<style>
	
	/* 主页top部分*/
	.hometoplo {
	/* width:46.875rem;
		height:1.78125rem; */
		position: absolute;
		top:0.6375rem;
		left:6.9375rem;
		background:red;
		line-height:1.78125rem;
	}
	.el-dropdown-link {
		cursor: pointer;
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
	/* 	color: #2180ed; */
		font-style: normal;
		padding-left: 0.15625rem;
		line-height: 0.53125rem;
	}
	.sqimg {
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
	.moreimg {
		width: 0.78125rem‬;
		height: 0.78125rem;
	}
	.more {
		width:1.21875rem;
		height:0.59375rem;
		font-size:0.625rem;
		font-style: normal;
		padding-left:0.15625rem;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}
/* 更多 */
.lomore {
	background: rgba(225, 225, 225, 0.6);
	position: absolute;
	top:2.125rem  !important;
	left:16.175rem !important;
	border: none;
}
.moo {
	/* width: 183px;
	height: 195px; */
	background: url(../../assets/image/mores.png);
	padding-left:0.2rem;
	padding-right:0.25rem;
	cursor: pointer;
}
.mores1 {
	width:3.2rem;
	height:0.7rem;
	border-bottom: 1px solid #999999;
	text-align: left;
	line-height:0.7rem;
	color: #666666;
	font-size:0.3rem;
	font-weight: 500;
/* 	background:red; */
}
.moresb {
	border: 0;
	text-align: left;
	line-height:0.7rem;
	color: #666666;
	font-size:0.3rem;
	font-weight: 500;
	/* background:red; */
}
a {
	color: #333333;
	text-decoration: none;
}
</style>
