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
					<span class="el-dropdown-link" @click="fnxiangmu">
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
					<i style="display:inline-block;width:0.5rem;height:0.25rem;line-height:height:0.53125rem‬;margin-left:0.2rem;"><img src="../../assets/image/pmjtxia.png" alt="" style="width: 100%;height: 100%;"></i>
					</span>
					<el-dropdown-menu slot="dropdown" class="lomorecom">
						<div class="moocom">
							<a class="mores1com" href="http://www.jh-bim.com/home/solution" target="_blank" style="display:inline-block;">帮助</a>
							<div class="mores1com" @click="Preservation">保存设置</div>
							<div class="mores1com" @click="xiugai">修改密码</div>
							<div class="mores1com" @click="abouts">联系我们</div>
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
					<div class="close"><img src="../../assets/image/close.png" @click="closeLoginwindow" /></div>
					<div class="loginlogo"><img src="../../assets/image/loginlogo@2x.png" alt="" /></div>
					<!-- 验证账号密码是否正确 -->
					<span class="Nophone" v-if="panduanphone">{{phonename}}</span>
					<!-- 验证码是否正确 -->
					<span class="yanzhengma" v-if="yzm">验证码不正确</span>
					<!-- 输入手机号 -->
					<div class="user">
					<span  class="userimg">86+</span>
						<img class="fenge" src="../../assets/image/juxing11@2x.png" alt="" />
						<input type="text" v-model="phone1" placeholder="请输入手机号"  @blur="fn"/>
					</div>
					<!-- 输入验证码-->
					<div class="code">
						<input type="text" @focus="fn6" placeholder="请输入短信验证码" v-model="phoneyzm" @blur="fn9" maxlength="6" />
						<!-- <div class="codefooter" @click="yzm">获取验证码</div> -->
						<span v-show="sendCode" @click="ObtainCode" style="width:2.30125rem;height:0.7875rem;font-size:0.375rem;font-family:Microsoft YaHei;font-weight:bold;color:rgba(33,128,237,1);;display:inline-block;float:right;line-height:0.775rem;cursor:pointer;">获取验证码</span>
						<span v-show="!sendCode" style="width:2.30125rem;height:0.7875rem;font-size:0.375rem;font-family:Microsoft YaHei;font-weight:bold;color:rgba(33,128,237,1);;display:inline-block;float:right;line-height:0.775rem;cursor:pointer;">{{authTime}} 秒后获取</span>
					</div>
					<!-- 注册 -->
					<div class="reg-button" @click="login()"><span>完成注册</span></div>
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
					<router-view></router-view>
			</div>
</template>

<script>
import api from '@/api/api.js';
import qs from 'qs';
import axios from 'axios';
import Newjian from './newjian';
import Xunilogo from './xunilogo';
import More from './more';
// import Zheader from './header';
export default {
	data() {
		return {
			sendCode: true, // 控制发送验证码按钮显示
			authTime: 0, // 倒计时
			username: '',
			password: '',
			loginWindow: '',
			checked: '',
			//手机号是否正确
			panduanphone:false,
			phonename:"手机号格式不正确",
			//验证码不正确
			yzm: false,
			input: '',
			phone1: '',
			yz: '点击',
			// phone: false,
			// word: '请输入密码',
			phoneyz: '1234567',
				panduan: false,
			xianyin: false,
			xianyinxuni: false,
			phonesj: true,
			phoneyzm: '',
			yzshj: false,
			yzword: false,
			hometop:true,
			xmtb: require('../../assets/image/sshouse.png'),
			sqtb: require('../../assets/image/sq@2x.png'),
			moretb: require('../../assets/image/more@2x.png'),
			sqcolor: 'color: #333333',
			token:"",
			//总的等陆头部
			// zheaderxy:true,
				comarr: [0,0],
		};
	},
	components: {
		Newjian,
		Xunilogo,
		// Zheader
		// Release
	},
	methods: {
	//一分钟倒计时
		ObtainCode () {
			axios.get(api.GetPhone+"?phone"+"="+this.phone1).then(result=>{
				console.log(result.data)
				if(this.phone1==null || this.phone1=="" || this.phone1==undefined){
					this.panduanphone = true;
				}else{
					//判断手机号格式是否正确
					var re = /^1[3456789]\d{9}$/;
					if (!re.test(this.phone1)) {
						this.panduanphone = true;
					} else if(re.test(this.phone1)){		//判断改手机号是否已被注册
						axios.get(api.GetPhone+"?phone"+"="+this.phone1).then(result=>{
							console.log(result.data)
							if(result.data==undefined){//以上判断都没有经过说明可以通过我们的注册条件 实现发送验证码
								this.panduanphone = false;
									//发送验证码
								axios.get(api.RegisterphoneLogin+"?mobile="+this.phone1).then(result=>{
									this.$store.commit("settoken",this.token);
									this.token=result.data.token;
									this.sendCode = false  // 控制显示隐藏
									this.authTime = 59;
									let timeInt = setInterval(() => {
										this.authTime--
										if (this.authTime <= 0) {
										  this.sendCode = true
										  window.clearInterval(timeInt)
										}
									}, 1000)
								})
							}else{
								this.phonename="注册失败,该账户已被使用";
								this.panduanphone = true;
							}
						})
						this.panduanphone = false;
					}
				}
			})
		},
		fn6() {
			// this.phoneyzm = '';
		},
		fn9() {
			// if (this.phoneyzm == this.phoneyz) {
			// 	this.yzshj = true;
			// } else {
			// 	this.yzshj = false;
			// 	this.phoneyzm = '验证码错误';
			// }
		},
		fnxiangmu(){
				if(	window.localStorage.getItem('token') != null){
			   this.$router.push('/Login');
			}else{
					this.loginWindow = 'display:block';
			}
			// this.loginWindow = 'display:block';
		},
		fncom() {
			this.comarr.push(0);
		},
		fnxnjz(){
			if(	window.localStorage.getItem('token') != null){
			   this.$router.push('/Login');
			}else{
					this.loginWindow = 'display:block';
			}
			// this.loginWindow = 'display:block';
		},
		Preservation() {
			this.$router.push('/baocun');
		},
		xiugai() {
			this.$router.push('/xiugai');
		},
		abouts() {
			this.$router.push('/about');
		},
		sqq() {
			// this.moretb = require('../../assets/image/moress.png');
			// this.$refs.gdcol.style.color = '#2180ED';
			this.xmtb = require('../../assets/image/sshouse.png');
			this.$refs.xmcol.style.color = '#333333';
			// this.sqtb = require('../../assets/image/sq@2x.png');
			// this.sqcolor = 'color:#333333';
		},
		fn5() {
			this.$router.push('/');
		},
		//输入手机号@blur事件
		fn() {
			if(this.phone1==null){
				this.phonename="手机号格式不正确";
				this.panduanphone = true;
				return;
				}
				var re = /^1[3456789]\d{9}$/;
				if (!re.test(this.phone1)) {
					this.panduanphone = true;
				} else {
					axios.get(api.GetPhone+"?phone"+"="+this.phone1).then(result=>{
						if(result.data==undefined){
							this.panduanphone = false;
						}else{
							this.phonename="注册失败,该账户已被使用";
							this.panduanphone = true;
						}
					})
					this.panduanphone = false;
				}
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
		//注册
		login() {
			
			if(this.phone1==null || this.phone1==""){
				this.phonename="手机号不能为空";
				this.panduanphone = true;
			}else{
				axios.get(api.RegistercheckSmsCode+"?smsCode="+this.phoneyzm+"&phone="+this.phone1).then(result=>{
					if(result.code!=0){
						this.phonename=result.msg;
						this.panduanphone = true;
					}else if(result.code==0){
						window.localStorage.setItem('token',this.token);
						//注册成功跳转页面
						this.panduanphone = false;
					this.loginWindow = 'display:none';
						alert("跳转页面")
						alert(this.phone1)
					}else{
						this.phonename = '应用发生错误';
						this.panduanphone = true;
					}
					console.log(result.msg);
				})
			}
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
		left:16.175rem !important;
		border: none;
	}
	.moocom {
		/* width: 183px;
		height: 195px; */
		background: url(../../assets/image/mores.png);
		padding-left:0.2rem;
		padding-right:0.25rem;
		cursor: pointer;
	}
	.mores1com {
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
	.moresbcom {
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
	width:2.8rem;
	height:0.78rem;
	position: absolute;
	left:4.79rem;
	top:2.7rem;
}
.loginlogo img {
	width: 100%;
	height: 100%;
}
/* 请输入手机号 */
.user {
	width:6.05125rem;
	height:0.836rem;
	position: absolute;
	top:4.4rem;
	left:3.1rem;
	background: #ffffff;
	/* background:red; */
}
.userimg {
	width:0.78rem;
	height:0.6rem;
	display:inline-block;
	float: left;
	/* padding-let: 9px;
	padding-top: 9px;
	padding-right: 4px; */
	/* background:blue; */
	font-size:0.36rem;
	margin-top:0.2rem;
	margin-left:0.1rem;
	margin-right:0.02rem;
}

.fenge {
	width:0.05rem;
	height:0.68rem;
	float: left;
	margin-top:0.05rem;
}
.user input {
	width:4.72rem;
	height:0.84rem;
	float: left;
	padding-left:0.3rem;
	border: none;
	line-height:0.3rem;
	display: inline-block;
	margin-left:0.05rem;
	color:rgba(153,153,153,1);
}
/* 请输入手机号结束 */
/* 手机号已注册 */
.Nophone {
	display: block;
	/* width: 128px;
	height: 16px; */
	font-size:0.3rem;
	font-weight: 400;
	font-family: MicrosoftYaHei;
	color: red;
	position: absolute;
	left:4rem;
	top:3.7rem;
}
/* 手机号已注册结束 */
/* 获取验证码 */
.code {
	width:6.03125rem;
	height:0.88rem;
	position: absolute;
	top:5.8rem;
	left:3.1rem;
	background: #ffffff;
/* 	background:red; */
}
.code input {
	width:3.46rem;
	height:0.88rem;
	color: #999999;
	float: left;
	padding-left:0.25rem;
	border: none;
	line-height:0.88rem;
	display: inline-block;
	font-size:0.3rem;
}
.codefooter {
	width:2rem;
	height:0.88rem;
	float: left;
	font-size:0.3rem;
	color: #2180ed;
	line-height:0.88rem;
	cursor: pointer;
	/* background:plum; */
}
/* 验证码是否正确 */
.yanzhengma {
	color: #ff0000;
	font-size:0.3rem;
	position: absolute;
	top:3.9rem;
	left:4.8rem;
}
/* 密码 */
/* .el-input__inner {
	width: 290px;
	height: 40px;
	position: absolute;
	top: 330px;
	left: 133px;
	color: #999999;
} */
/* .el-icon-view {
	position: fixed;
	top: 628px;
	left: 745px;
	width: 30px;
	height: 20px;
	line-height: 30px; */

	/* background:url(../../assets/image/biyan3@2x.png) no-repeat red; */
	/* 	background-size:20px 9px; */
/* } */
/* 注册按钮 */
.reg-button {
	width:5.32rem;
	height:0.78rem;
	position: absolute;
	top:8rem;
	left:3.5rem;
	background: url(../../assets/image/juxing3@2x.png);
	background-size:5.32rem 0.78rem; 
	cursor: pointer;
	line-height:0.41rem;
}
.reg-button span {
	font-size:0.3rem;
	font-weight: 400;
	font-family: MicrosoftYaHei;
	color: #ffffff;
	text-align: center;
	line-height:0.41rem;
}
</style>
