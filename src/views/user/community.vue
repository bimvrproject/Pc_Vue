<template>
	<div>
		<div>
			<div class="lefttopcom">
				<div class="left" style="cursor:pointer;">
					<img class="logocom" src="../../assets/image/jinghekeji.png" @click="fnxnjz"/>
					<Xunilogo v-show="xianyinxuni"></Xunilogo>
				</div>
			</div>
				<!-- 除去侧边栏的剩余部分 -->
			<!-- 右侧登录标识 -->
			 <!-- <Zheader v-show="zheaderxy"></Zheader> -->
			<!-- 右侧top部分 -->
			<div class="hometoplocom" v-show="hometop">
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left;margin-left:-1.4rem;">
					<span class="el-dropdown-link"  @click="fndianji">
							<img class="xmimgcom" :src="xmtb" alt="" />
							<i class="xmcom" ref="xmcol">项目</i>
					<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;"><img src="../../assets/image/pmjtxia.png" alt="" style="width: 100%;height: 100%;"></i>
					</span>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left;margin-left:1.5rem;">
					<span class="el-dropdown-link" @click="fncomenter()">
						<img class="sqimgcom" :src="sqtb" />
						<i class="sqcom" ref="sqcol" style="color: #2180ED;">社区</i>
						<!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->
			
				<!-- 下拉菜单---更多 -->
				<el-dropdown style="float: left;margin-left:1.5rem;">
					<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> <-->
					<span class="el-dropdown-link" @mouseenter="sqq" style="position:relative;">
						<img class="moreimgcom" :src="moretb" />
						<i class="morecom" ref="gdcol">更多</i>
					<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;">
						<img :src="lmore" alt="" style="width: 100%;height: 100%;">
					</i>
					</span>
					<el-dropdown-menu slot="dropdown" class="lomorecom">
						<div class="moocom" @mouseleave="fnleave">
							<div class="mores1com" >
								<a href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;color:#666666;">帮助</a>
							</div>	
							<div class="mores1com" @click="fnabout">联系我们</div>
							<div class="moresbcom">版本号: v 1.0.1</div>
						</div>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- 更多下拉 -->
				<!-- <More v-show="more"></More> -->
				<!-- 下拉菜单---更多--结束 -->
			</div>
				<!-- 悬浮登录窗口 --开始 -->
			<div id="popContainer" :style="loginWindow" style="position:absolute; z-index: 49;"><!-- 这个是遮罩,蒙窗 --></div>
					<!-- 登录 -->
	<div class="login" :style="loginWindow">
				<!-- <div style="width: 100%;height: 40px;background-image: url(../../assets/image/dingbutiao.png);"> -->
				<div class="close">
					<img src="../../assets/image/close.png" @click="closeLoginwindow" />
				</div>
				<div class="loginlogo"><img src="../../assets/image/loginlogo@2x.png" alt="" /></div>
				<!-- 验证账号密码是否正确 -->
				<span class="yanzheng" v-if="panduan">{{phonename}}</span>
				<!-- 输入用户名 -->
				<div class="user">
					<input type="text" placeholder="输入手机号" v-model="username" class="userinput" @blur="fn1" />
				</div>
				<!-- 输入验证码 -->
				<div class="password">
					<input type="text" placeholder="输入验证码" v-model="password" @blur="fn2"/>
					<span v-show="sendCode" @click="ObtainCode" style="width:2.30125rem;height:0.7875rem;font-size:0.375rem;font-family:Microsoft YaHei;font-weight:bold;color:rgba(33,128,237,1);;display:inline-block;float:right;line-height:0.775rem;cursor:pointer;">获取验证码</span>
					<span v-show="!sendCode" style="width:2.30125rem;height:0.7875rem;font-size:0.375rem;font-family:Microsoft YaHei;font-weight:bold;color:rgba(33,128,237,1);;display:inline-block;float:right;line-height:0.775rem;cursor:pointer;">{{authTime}} 秒后获取</span>
				</div>
				
				<!-- 登录 -->
				<div class="Logon-button" @click="login()">登录</div>
				<!-- 还没有账号？马上去注册 -->
				<div class="login-footer">
					<i class="noreg">还没有账户?</i>
					<i class="login-reg" @click="fn3">马上注册</i>
				</div>
			</div>
			 	<!-- 社区部分 -->
			 <div>
			 	<div class="community">
			 		<!-- 社区头部 -->
			 		<div class="conmunitytop">
			 			<!-- 社区头部左侧线 -->
			 			<div class="conmunitytopleft"></div>
			 			<!-- 社区头部中间汉字 -->
			 			<div class="conmunitytopchi">为你推荐</div>
			 			<!-- 社区头部右侧线 -->
			 			<div class="conmunitytopright"></div>
			 		</div>
			 		<!-- 社区main -->
			 		<div class="communitymain" v-for="(item, index) in comarr" :key="index">
			 			<!-- 第一排 -->
			 			<div class="communitymain1">
			 				<div class="community11"><img src="../../assets/image/diyi.png" alt="" /></div>
			 				<div class="community12">
			 					<!-- 第一排第二个框的第一个 -->
			 					<div class="community12-1">
			 						<div class="com12-1title">
			 							<h2 style="font-weight:normal;width:6.25rem;height:1.15625rem;font-size:1.1875rem;font-family:Microsoft YaHei;font-weight:300;color:rgba(204,204,204,1);">建筑结构</h2>
			 						</div>
			 						<div class="com12-line"></div>
			 						<div class="com12-1titlemin"><span>京止阁</span></div>
			 						<div class="com12-1zan"><span>200点赞</span></div>
			 						<div class="from12">
			 							来自
			 							<span style="font-size:0.4375rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(33,128,237,1);">136****5089</span>
			 						</div>
			 					</div>
			 					<!-- 第一排第二个框的第二个 -->
			 					<div class="community12-2">
			 						<div class="com22-1title">
			 							<h2 style="font-weight:normal;width:6.25rem;height:1.15625rem;font-size:1.1875rem;font-family:Microsoft YaHei;font-weight:300;color:rgba(204,204,204,1);">建筑结构</h2>
			 						</div>
			 						<div class="com22-line"></div>
			 						<div class="com22-1titlemin"><span>室内</span></div>
			 						<div class="com22-1zan"><span>200点赞</span></div>
			 						<div class="from22">
			 							来自
			 							<span style="font-size:0.4375rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(33,128,237,1);">136****5089</span>
			 						</div>
			 					</div>
			 				</div>
			 				<div class="community13"><img src="../../assets/image/disan.png" alt="" /></div>
			 				<div class="community14"><img src="../../assets/image/diyi.png" alt="" /></div>
			 				<div class="community15">
			 					<div class="community12-1">
			 						<div class="com12-1title">
			 							<h2 style="font-weight:normal;width:6.25rem;height:1.15625rem;font-size:1.1875rem;font-family:Microsoft YaHei;font-weight:300;color:rgba(204,204,204,1);">建筑结构</h2>
			 						</div>
			 						<div class="com12-line"></div>
			 						<div class="com12-1titlemin"><span>京止阁</span></div>
			 						<div class="com12-1zan"><span>200点赞</span></div>
			 						<div class="from12">
			 							来自
			 							<span style="font-size:0.4375rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(33,128,237,1);">136****5089</span>
			 						</div>
			 					</div>
			 				</div>
			 			</div>
			 			<!-- 第二排 -->
			 			<div class="communitymain2">
			 				<div class="community21">
			 					<div class="community12-2">
			 						<div class="com22-1title">
			 							<h2 style="font-weight:normal;width:6.25rem;height:1.15625rem;font-size:1.1875rem;font-family:Microsoft YaHei;font-weight:300;color:rgba(204,204,204,1);">建筑结构</h2>
			 						</div>
			 						<div class="com22-line"></div>
			 						<div class="com22-1titlemin"><span>室内</span></div>
			 						<div class="com22-1zan"><span>200点赞</span></div>
			 						<div class="from22">
			 							来自
			 							<span style="font-size:0.4375rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(33,128,237,1);">136****5089</span>
			 						</div>
			 					</div>
			 				</div>
			 				<div class="community22"><img src="../../assets/image/disan.png" alt="" /></div>
			 				<div class="community23"><img src="../../assets/image/diyi.png" alt="" /></div>
			 				<div class="community24">
			 					<!-- 第二排第三个框的第一个 -->
			 					<div class="community12-1">
			 						<div class="com12-1title">
			 							<h2 style="font-weight:normal;width:6.25rem;height:1.15625rem;font-size:1.1875rem;font-family:Microsoft YaHei;font-weight:300;color:rgba(204,204,204,1);">建筑结构</h2>
			 						</div>
			 						<div class="com12-line"></div>
			 						<div class="com12-1titlemin"><span>京止阁</span></div>
			 						<div class="com12-1zan"><span>200点赞</span></div>
			 						<div class="from12">
			 							来自
			 							<span style="font-size:0.4375rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(33,128,237,1);">136****5089</span>
			 						</div>
			 					</div>
			 					<!-- 第二排第二个框的第二个 -->
			 					<div class="community12-2">
			 						<div class="com22-1title">
			 							<h2  style="font-weight:normal;width:6.25rem;height:1.15625rem;font-size:1.1875rem;font-family:Microsoft YaHei;font-weight:300;color:rgba(204,204,204,1);">建筑结构</h2>
			 						</div>
			 						<div class="com22-line"></div>
			 						<div class="com22-1titlemin"><span>室内</span></div>
			 						<div class="com22-1zan"><span>200点赞</span></div>
			 						<div class="from22">
			 							来自
			 							<span style="font-size:0.4375rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(33,128,237,1);">136****5089</span>
			 						</div>
			 					</div>
			 				</div>
			 				<div class="community25"><img src="../../assets/image/disan.png" alt="" /></div>
			 			</div>
			 		</div>
			 		<!-- 社区尾部 -->
			 		<div></div>
			 	</div>
			 	<!-- 社区尾部 -->
			 	<div class="comend">
			 		<!-- 尾部左边 -->
			 		<div class="comendleft"></div>
			 		<!-- 尾部中间按钮 -->
			 		<div class="comendbtn" @click="fncom">查看更多</div>
			 		<!-- 尾部右边 -->
			 		<div class="comendright"></div>
			 	</div>
			 </div>
		</div>
		<!-- 点击联系我们的遮罩 -->
		<div style="width:59.9375rem;height:33.65625rem;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.2);" v-show="abouts" @click="fnaboutmark">
			
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	/*eslint-disable*/
import api from '@/api/api.js';
import axios from 'axios';
import qs from 'qs';
import Newjian from './newjian';
import Xunilogo from './xunilogo';
import More from './more';
import {mapActions} from 'vuex'
// import Zheader from './header';
// import Release from './release';
export default {
	data() {
		return {
			// a:null,
			username:"",
			sendCode: true, // 控制发送验证码按钮显示
			authTime: 0, // 倒计时
			phonename:"手机号不正确",		//输入不正确友好提示
			comarr: [0,0],
			password: '',
			loginWindow: '',
			checked: '',
			panduan: false,
			xianyin: false,
			xianyinxuni: false,
			hometop: true,
			title: '12345678901',
			box1: true,
			xmtb: require('../../assets/image/sshouse.png'),
			sqtb: require('../../assets/image/shequ.png'),
			moretb: require('../../assets/image/more@2x.png'),
			//发布组件
			release: false,
			//总的等陆头部
			// zheaderxy:true,
				token:"",
		   lmore:require('../../assets/image/pmjtxia.png'),
		   // 联系我们
		   abouts:false
		};
	},
	components: {
		Newjian,
		Xunilogo,
		// Zheader
		// Release
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
		this.$eventbus.$on('changetitle', str => {
			this.title = str;
		});
		this.$eventbus.$on('xmcolor', () => {
			this.xmtb = require('../../assets/image/bluefz.png');
			this.$refs.xmcol.style.color = '#2180ED';
			this.sqtb = require('../../assets/image/sq@2x.png');
			this.this.$refs.xmcol.style.color = '#333333';
			this.sqcolor = 'color:#333';
		});
	},
	mounted() {
		if (window.localStorage.getItem('token') != null) {
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
			//一分钟倒计时
		ObtainCode () {
			axios.get(api.GetPhone+"?phone"+"="+this.username).then(result=>{
				if(result.data==undefined){
					this.phonename="您未注册，请注册！";
					this.panduan = true;
				}else{
					axios.get(api.Login+"?mobile="+this.username).then(result=>{
						this.token=result.data.token;
						// this.$store.commit("settoken",this.token);
						// alert(this.username)
						// this.$store.commit("setphone",this.username);
						this.sendCode = false  // 控制显示隐藏
						this.authTime = 59
						let timeInt = setInterval(() => {
						  this.authTime--
						  if (this.authTime <= 0) {
						    this.sendCode = true
						    window.clearInterval(timeInt)
						  }
						}, 1000)
					})
				}
			})
		 
		},
		// fngd(){
		// 	this.loginWindow = 'display:block';
		// },
			fncom() {
			this.comarr.push(0);
		},
		fndianji(){
				
				if(	window.localStorage.getItem('token') != null){
				   this.$router.push('/Login');
				}else{
						this.loginWindow = 'display:block';
				}
				// this.loginWindow = 'display:block';
		},
		fnxnjz(){
			if(	window.localStorage.getItem('token') != null){
			   this.$router.push('/Login');
			}else{
					this.loginWindow = 'display:block';
			}
			// this.loginWindow = 'display:block';
		},
		// Preservation() {
		// 	this.$router.push('/baocun');
		// },
		// xiugai() {
		// 	this.$router.push('/xiugai');
		// },
		// abouts() {
		// 	this.$router.push('/about');
		// },
		// 移入更多
		sqq() {
			// this.moretb = require('../../assets/image/moress.png');
			// this.$refs.gdcol.style.color = '#2180ED';
			this.xmtb = require('../../assets/image/sshouse.png');
			this.$refs.xmcol.style.color = '#333333';
			this.lmore=require('../../assets/image/shang.png');
			// this.sqtb = require('../../assets/image/sq@2x.png');
			// this.sqcolor = 'color:#333333';
		},
		// 移出更多
		fnleave(){
			this.lmore=require('../../assets/image/pmjtxia.png')
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
		// fn4() {
		// 	this.loginWindow = 'display:block';
		// },
		fn3() {
			this.$router.push('/Register');
		},
		fn1() {
			var re = /^1[3456789]\d{9}$/;
			if (!re.test(this.username)) {
				this.panduan = true;
			} else {
				this.panduan = false;
			}
			axios.get(api.GetPhone+"?phone"+"="+this.username).then(result=>{
				if(result.data==undefined){
					this.phonename="您未注册，请注册！";
					this.panduan = true;
				}
			})
		},
		fn2() {
			var re = /^\w{6,12}$/;
			if (!re.test(this.password)) {
				this.panduan = true;
			} else {
				this.panduan = false;
			}
		},
		login() {
			if(this.username==null || this.username==""){
				this.phonename="手机号不能为空";
				this.panduan = true;
			}else{
				axios.get(api.LogincheckSmsCode+"?smsCode="+this.password+"&phone="+this.username).then(res => this.loginSuccess(res))
			}
		},
		loginSuccess(res) {
			if(res.code!=0){
				this.phonename=res.msg;
				this.panduan = true;
			}else{
				this.$store.commit("settoken",this.token);
				this.$store.commit("setPhone",this.username);
				window.localStorage.setItem('token',this.token);
				this.getUserByToken();
				//注册成功跳转页面
				this.panduan = false;
				// alert("跳转页面")
				this.loginWindow = 'display:none';
				// alert(this.username)
					// window.localStorage.setItem('userpho',this.username);
				// this.a = this.username;
			}
		},
		getUserByToken(){
			this.$http.post(api.GetUser).then(res => this.userHome(res));
		},
		userHome(res){
				this.username = res.data.userName;
				console.log("this.userName"+this.userName);
		},
		requestFailed() {
			this.msg = '应用发生错误';
			this.show = true;
		},
		getUserByToken() {
			this.$http.post(api.GetUser).then(res => this.userHome(res));
		},
		userHome(res) {
			this.username = res.data.userName;
			console.log('this.userName   ' + this.userName);
		},
		// 关闭login悬浮窗
		closeLoginwindow() {
			this.loginWindow = 'display:none';
		}
	}
};
</script>

<style>
	.lomorecom {
		background: rgba(225, 225, 225, 0.6);
		position: absolute;
		top:2.125rem  !important;
		left:14.975rem !important;
		border: none;
	}
	.moocom {
		width:3.75rem;
		/* width: 183px;
		height: 195px; */
		/* background: url(../../assets/image/mores.png); */
		padding-left:0.2rem;
		padding-right:0.25rem;
		cursor: pointer;
	}
	.mores1com {
		width:3.75rem;
		height:0.9rem;
		border-bottom: 1px solid #999999;
		text-align: left;
		line-height:1rem;
		color: #666666;
		font-size:0.46rem;
		font-weight: 500;
	/* 	background:red; */
	}
	.moresbcom {
		border: 0;
		text-align: left;
		line-height:0.9rem;
		color: #666666;
		font-size:0.46rem;
		font-weight: 500;
		/* background:red; */
	}
	a {
		color: #333333;
		text-decoration: none;
	}
	* {
		padding: 0;
		margin: 0;
	}
	body {
		width:100%;
	}
	html {
		width:100%;
	}
.community {
	width:57.43375rem;
	height:29.06rem;
	/* background: red; */
	background: #ffffff;
	position: absolute;
	top:3.28125rem;
	left:1.5625rem;
	overflow-y: auto;
	overflow-x:hidden;
/* 	background:red; */
}
/* 社区头部 */
.conmunitytop {
	width:56.9rem;
	height:0.59375rem;
	margin-bottom:0.625rem;
	/* background:plum; */
}
.conmunitytopleft {
	width:25.28125rem;
	height:0.03125rem;
	background: url(../../assets/image/sqxian.png) no-repeat;
	background-size:25.28125rem 0.03125rem;
	float: left;
	margin-top:0.3125rem;
	/* background-color:blue; */
}
.conmunitytopchi {
	width:6.3125rem;
	height:0.59375rem;
	float: left;
	line-height:0.59375rem;
	font-size:0.625rem;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(153, 153, 153, 1);
	/* background:plum; */
}
.conmunitytopright {
	width:25.28125rem;
	height:0.03125rem;
	background: url(../../assets/image/sqxian.png) no-repeat;
	background-size:25.28125rem 0.03125rem;
	float: left;
	margin-top:0.3125rem;
/* 	background-color:blue; */
}
/* 社区main */
.communitymain {
	width:56.875rem;
	/* height:930px; */
	/* background: plum; */
}
.communitymain1,
.communitymain2 {
	width:56.875rem;
	height:11.125rem;
	background: #ffffff;
	float: left;
}
.communitymain1 {
	margin-bottom:0.15625rem;
}
.communitymain2 {
	margin-bottom:0.15625rem;
}
.community11,
.community14 {
	width:11.125rem;
	height:11.125rem;
	/* background:blue; */
	float: left;
}
.community11 img,
.community14 img {
	width: 100%;
	height: 100%;
}
.community12,
.community15 {
	width:11.625rem;
	height:11.125rem;
	/* 	background:blue; */
	float: left;
}
.community15 {
	background: rgba(250, 250, 250, 1);
}
.community13 {
	width:11.125rem;
	height:11.125rem;
	/* background:blue; */
	float: left;
	margin-right:0.25rem;
}
.community13 img {
	width: 100%;
	height: 100%;
}
/* 第二个框上部分内容 */
.community12-1 {
	width:11.4375rem;
	height:5.40625rem;
	/* background:#FFFFFF; */
	background: rgba(250, 250, 250, 1);
	margin-bottom:0.3125;
}
.com12-1title {
	width:10.8125rem;
	height:1.5625rem;
	/* 	background:plum; */
	text-align: left;
	line-height:1.875rem;
	padding-left:0.625rem;
}
.com12-line {
	width:5.5rem;
	height:0.0625rem;
	background: lightgrey;
	margin-left:0.625rem;
}
.community12-2 {
	width:11.4375rem;
	height:5.40625rem;
	/* background:red; */
	float: right;
}
.com12-1titlemin {
	width:10.8125rem;
	height:1.09375rem;
	/* background:plum; */
	text-align: left;
	line-height:1.71875rem;
	padding-left:0.625rem;
	font-size:0.625rem;
	font-weight: 400;
	font-family: Microsoft YaHei;
	color: rgba(51, 51, 51, 1);
}
.com12-1zan {
	width:10.8125rem;
	height:0.9375rem;
	/* 	background:red; */
	text-align: left;
	padding-left:0.625rem;
	padding-top:0.15625rem;
	font-size:0.375rem;
	font-family: Microsoft YaHei;
	font-weight: 300;
	color: rgba(153, 153, 153, 1);
}
.from12 {
	width:10.8125rem;
	height:1.5625rem;
	/* 	background:plum; */
	text-align: left;
	padding-left:0.625rem;
	font-size:0.4375rem;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(102, 102, 102, 1);
	line-height:1.5625rem;
}
/* 第二个框下部分内容 */
.community12-2 {
	width:11.4375rem;
	height:5.40625rem;
	/* 	background:#FFFFFF; */
	background: rgba(250, 250, 250, 1);
	margin-bottom:0.3125rem;
}
.from22 {
	width:10.8125rem;
	height:1.5625rem;
	padding-right:0.625rem;
	/* background:plum; */
	text-align: right;
	font-size:0.4375rem;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(102, 102, 102, 1);
	line-height:1.5625rem;
}
.com22-1zan {
	width:10.8125rem;
	height:0.9375rem;
	/* background:red; */
	text-align: right;
	padding-right:0.625rem;
	padding-top:0.15625rem; 
	font-size:0.375rem;
	font-family: Microsoft YaHei;
	font-weight: 300;
	color: rgba(153, 153, 153, 1);
}
.com22-1titlemin {
	width:10.8125rem;
	height:1.09375rem;
	/* 	background:plum; */
	text-align: right;
	line-height:1.71875rem;
	padding-right:0.625rem;
	font-size:0.625rem;
	font-weight: 400;
	font-family: Microsoft YaHei;
	color: rgba(51, 51, 51, 1);
}
.com22-1title {
	width:11.4375rem;
	height:1.5625rem;
	/* 	background:plum; */
	line-height:1.875rem;
	padding-left:4.625rem;
	text-align: right;
}
.com22-line {
	width:5.5rem;
	height:0.03125rem;
	background: lightgrey;
	margin-left:5.3125rem;
}
/* 第二排 */
.community21 {
	width:11.75rem;
	height:11.125rem;
	background: rgba(250, 250, 250, 1);
	/* background: plum; */
	float: left;
}
.community12-2 {
	width:11.4375rem;
	height:5.40625rem;
	/* 	background:#FFFFFF; */
	background: rgba(250, 250, 250, 1);
	margin-bottom:0.3125rem;
}
.from22 {
	width:10.8125rem;
	height:1.5625rem;
	padding-right:0.625rem;
	/* background:plum; */
	text-align: right;
	font-size:0.4375rem;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(102, 102, 102, 1);
	line-height:1.5625rem;
}
.com22-1zan {
	width:10.8125rem;
	height:0.9375rem;
	/* background:red; */
	text-align: right;
	padding-right:0.625rem;
	padding-top:0.15625rem;
	font-size:0.375rem;
	font-family: Microsoft YaHei;
	font-weight: 300;
	color: rgba(153, 153, 153, 1);
}
.com22-1titlemin {
	width:10.8125rem;
	height:1.09375rem;
	/* 	background:plum; */
	text-align: right;
	line-height:1.71875rem;
	padding-right:0.625rem;
	font-size:0.625rem;
	font-weight: 400;
	font-family: Microsoft YaHei;
	color: rgba(51, 51, 51, 1);
}
.com22-1title {
	width:11.4375rem;
	height:1.5625rem;
	/* 	background:plum; */
	line-height:1.875rem;
	padding-left:4.625rem;
	text-align: right;
}
/* 第二排第二个框 */
.community22 {
	width:11.125rem;
	height:11.125rem;
	/* background: black; */
	float: left;
}
.community22 img {
	width: 100%;
	height: 100%;
}
.community23 {
	width:11.125rem;
	height:11.125rem;
	/* background: blue; */
	float: left;
}
.community23 img {
	width: 100%;
	height: 100%;
}
/* 第二排第三个框 */
.community24 {
	width:11.75rem;
	height:11.125rem;
	float: left;
}
.community25 {
	width:11.125rem;
	height:11.125rem;
	float: left;
	background: black;
}
.community25 img {
	width: 100%;
	height: 100%;
}
/* 社区尾部 */
.comend {
	width:57.3925rem;
	height:1.21875rem;
	background: #ffffff;
	position: absolute;
  top:32.09375rem;
	left:1.56375rem;
	/* background:red; */
}
/* 社区尾部左边 */
.comendleft {
	width:19.09375rem;
	height:0.0625rem;
	border-top:0.03125rem solid gainsboro;
	float: left;
	margin-top:0.625rem;
}
/* 社区中间按钮 */
.comendbtn {
	width:14.9375rem;
	height:1.21875rem;
	background: rgba(247, 247, 247, 1);
	float: left;
	margin-left:2.03125rem;
	margin-right:2.03125rem;
	font-size:0.625rem;
	font-family: PingFang SC;
	font-weight: 500;
	color: rgba(153, 153, 153, 1);
	line-height:1.21875rem;
	cursor: pointer;
}
.comendright {
	width:19.09375rem;
	height:0.0625rem;
	border-top: 0.03125rem solid gainsboro;
	float: left;
	margin-top:0.625rem;
}

.logocom {
	width: 3.65625rem;
	height: 0.875rem;
	/* padding-left: 1.8625rem; */
	padding-top: 0.90625rem;
	margin-left:0.5625rem;
/* 	background:red; */
}
.lefttopcom {
	width:6.75rem;
	height:1.875rem;
	/* 	background-color:green;
			background: url(../../assets/image/homecebian8@2x.png); */
	position: absolute;
	top: 0px;
	/* background:blue; */
}

/*登录右上角的登录 */
.top-rightcom {
 height:0.90625rem;
}
.login-parentcom {
 height:0.90625rem;
 position: absolute;
 top: 0;
 right:0.3rem;
 background:red;
}
.imgzongcom{
	width:4.5rem;
	height:0.78125rem;
	/* background:green; */
	float: left;
	padding-top:0.125rem;
	line-height:0.78125rem;
}
.dengcom {
	width:3.3rem;
	height:0.6628rem;
	background:skyblue;
	float: left;
	margin-left:0.125rem;
	font-size:0.4375rem;
	color: #2180ed;
	line-height:0.8125rem;
}
.guanbi-toprigcom {
	width:3.75rem;
	height:0.90625rem;
	float: left;
}
.toprig11com,
.toprig33com {
	display:inline-block;
	width: 1.125rem;
	height:0.84375rem;
	float: left;
}
.toprig22com {
	display:inline-block;
	width: 1.125rem;
	height:0.84375rem;
	float:left;
}
.toprig11com img,.toprig22com img,.toprig33com img{
	width:100%;
	height:100%;
}
.logintopimgcom {
	width:0.625rem;
	height:0.5625rem;
	display: inline-block;
	float: left;
	background:red;
	line-height:0.90625rem;
	padding-top:0.15625rem;
}
/* 主页top部分*/
.hometoplocom {
/* width:46.875rem;
	height:1.78125rem; */
	position: absolute;
	top:0.6375rem;
	left:6.9375rem;
	/* background:red; */
	line-height:1.78125rem;
}
.el-dropdown-link {
	cursor: pointer;
}
.xmimgcom {
	width:0.84375rem;
	height:0.8125rem;
	padding-left:2.5rem;
	padding-top:0.0625rem;
}
.xmcom {
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
.sqimgcom {
	width:0.84375rem;
	height: 0.8125rem;
}
.sqcom {
	width:1.25rem;
	height:0.5625rem;
	font-size:0.625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left:0.1875rem;
	font-style: normal;
}
.moreimgcom {
	width: 0.78125rem‬;
	height: 0.78125rem;
}
.morecom {
	width:1.21875rem;
	height:0.59375rem;
	font-size:0.625rem;
	font-style: normal;
	padding-left:0.15625rem;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
}
/* 登录 */
.login {
	width:12.34375rem;
	height:12.34375rem;
	position: absolute;
	z-index: 50;
	top:10.5rem;
	left:22.3125rem;
/* 	margin-top: -228px;
	margin-left: -550px; */
	background-color: white;
	background: url(../../assets/image/beijing@2x.png) no-repeat;
	background-size: 12.34375rem 12.34375rem;
}
#popContainer {
	width:59.9375rem;
	height:33.65625rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.2);
}
/* .logintopimg {
	display: block;
	width: 18px;
	height: 18px;
	float: left;
	padding-top: 4px;
	margin-right: 3px;
}
.logintopimg img {
	width: 100%;
	height: 100%;
} */
.logintop {
	color: #2180ed;
	font-size: 14px;
	float: left;
}
.close {
	width:0.445rem;
	height:0.445rem;
	/* background: linear-gradient(180deg, rgba(255, 255, 255, 0.2)); */
	border-radius: 2px;
	position: absolute;
	right: -1.2625rem;
}
.close img {
	width:0.445rem;
	height:0.445rem;
}
.loginlogo {
	width:3.53125rem;
	height:0.85625rem;
	position: absolute;
	left:4.256rem;
	top:2.7062rem;
}
.loginlogo img {
	width: 100%;
	height: 100%;
}
.user {
	width:6.03125rem;
	height:0.838rem;
	position: absolute;
	top:4.625rem;
	right:3.2rem;
	background: #ffffff;
/* 	background:red; */
}
.userinput{
	width:5.7rem;
	height:0.838rem;
	float: left;
	padding-left:0.3rem;
	border: none;
	line-height:1.25rem;
	display: inline-block;
}
.yanzheng {
	display: block;
	/* width:3.0rem;
	height:0.5rem; */
	font-size:0.3rem;
	font-weight: 400;
	font-family: MicrosoftYaHei;
	color: red;
	position: absolute;
	left:4.6rem;
	top:3.9rem;
}
.password {
	width:6rem;
	height:0.82rem;
	position: absolute;
	top:6.19rem;
	right:3.2rem;
	background: #ffffff;
	/* background:red; */
}
.password input {
	width:3.4rem;
	height:0.82rem;
	/* float: left; */
	padding-left:0.25rem;
	border: none;
	line-height:0.82rem;
	display: inline-block;
	float:left;
}
/* 登录按钮 */
.Logon-button {
	width:5.279rem;
	height:0.8017rem;
	position: absolute;
	top:7.7rem;
	left:3.3875rem;
	background: url(../../assets/image/juxing3@2x.png);
	background-size:5.279rem 0.8017rem;
	cursor: pointer;
	font-size:0.3933rem;
	font-weight: 400;
	font-family: MicrosoftYaHei;
	color: #ffffff;
	text-align: center;
	line-height:0.8017rem;
}
/* 还没有账号？马上注册 */
.login-footer {
	width:4.0375rem;
	height:0.625rem;
	font-size:0.375rem;
	position: absolute;
	top:8.725rem;
	/* left:4.3rem; */
	right:4.3rem;
}
.noreg {
	font-family: MicrosoftYaHei;
	display:inline-block;
	font-weight: 400;
	font-style: normal;
	font-size:0.375rem;
	color: rgba(51, 51, 51, 1);
}
.login-reg {
	color: #2180ed;
	font-family: MicrosoftYaHei;
	display:inline-block;
	font-weight: 400;
	font-size:0.333rem;
	font-style: normal;
	cursor: pointer;
}
</style>
