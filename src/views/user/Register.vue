<template>
	<el-container style="overflow:-Scroll;overflow-y:hidden">
		<el-main>
			<img class="logo" src="../../assets/image/jinghekeji.png" />
			<!-- 下拉菜单---项目 -->
			<el-dropdown style="float: left; margin-left: 5%;">
				<span class="el-dropdown-link" @click="fn4">
					<img class="xmimg" src="../../assets/image/sshouse.png" />
					<i class="xm">项目</i>
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
			</el-dropdown>
			<!-- 下拉菜单---项目--结束 -->
			<!-- 下拉菜单---社区 -->
			<el-dropdown style="float: left; margin-left: 5%;">
				<span class="el-dropdown-link" @click="fn4">
					<img class="sqimg" src="../../assets/image/shequ.png" />
					<i class="sq">社区</i>
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
			</el-dropdown>
			<!-- 下拉菜单---社区--结束 -->

			<!-- 下拉菜单---更多 -->
			<el-dropdown style="float: left; margin-left: 5%;">
				<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> -->
				<span class="el-dropdown-link" @click="fn4">
					<img class="moreimg" src="../../assets/image/more@2x.png" />
					<i class="more">更多</i>
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
			</el-dropdown>
			<!-- 下拉菜单---更多--结束 -->
			<div class="toplogin" @click="fn5">登录</div>
			<!-- 悬浮登录窗口 --开始 -->
			<div id="popContainer" :style="loginWindow" style="position: fixed; z-index: 49;"><!-- 这个是遮罩,蒙窗 --></div>
			<!-- 登录 -->
			<div class="login" :style="loginWindow">
				<div class="close">
					<img src="../../assets/image/close.png" @click="closeLoginwindow" />
				</div>
				<div class="loginlogo"><img src="../../assets/image/loginlogo@2x.png" alt="" /></div>
				<!-- 验证账号密码是否正确 -->
				<span class="yanzheng" v-if="panduan">密码账号不正确</span>
				<!-- 验证码是否正确 -->
				<span class="yanzhengma" v-if="yzm">验证码不正确</span>
				<!-- 输入手机号 -->
				<div class="user">
					<div class="userimg"><span>86+</span></div>
					<div class="fenge"><img src="../../assets/image/juxing11@2x.png" alt="" /></div>
					<input type="text" :value="phone1" @focus="fn" @blur="fn2" />
				</div>
				<!-- 输入验证码-->
				<div class="code">
					<input type="text" @focus="fn6" v-model="phoneyzm" @blur="fn9" maxlength="6" />
					<div class="codefooter" @click="yzm">获取验证码</div>
				</div>
				<!-- 密码 -->
				<el-input v-model="word" @focus="fn7" @blur="fn8"></el-input>
				<!-- 注册 -->
				<div class="reg-button" @click="login()"><span>注册</span></div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
import api from '@/api/api.js';
import qs from 'qs';
import axios from 'axios';
export default {
	data() {
		return {
			username: '',
			password: '',
			loginWindow: '',
			checked: '',
			panduan: false,
			yzm: false,
			input: '',
			phone1: '请输入手机号',
			yz: '点击',
			phone: false,
			word: '请输入密码',
			phoneyz: '1234567',
			phonesj: true,
			phoneyzm: '请输入短信验证码',
			yzshj: false,
			yzword: false
		};
	},
	mounted() {
		// if(window.localStorage.getItem("token") != null){
		// 	this.loginWindow='display: none';
		// 	 //请求用户接口查询 用户信息
		//
		// 			// .then(res => this.loginSuccess(res))
		//          // .catch(err => this.requestFailed(err))
		//          // .finally(() => {
		//          // // state.loginBtn = false;
		//          // });
		// }else{
		// 	this.loginWindow='';
		// };
	},
	methods: {
		fn8() {
			let re = /^\w{6,12}$/;
			if (re.test(this.word)) {
				this.yzword = true;
			} else {
				this.yzword = false;
				this.word = '6-12位任意数字字母下划线';
			}
		},
		fn7() {
			this.word = '';
		},
		fn2(e) {
			let a = e.target.value;
			let re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|4|5|6|7|8|9])\d{8}$/;
			if (!re.test(a)) {
				// console.log('yzc')
				this.phone1 = '';
				this.phone1 = '请输入正确的手机号';
				this.phone = false;
			} else {
				this.phone1 = a;
				this.phone = true;
				// console.log(this.phone1)
			}
		},
		fn6() {
			this.phoneyzm = '';
		},
		fn9() {
			if (this.phoneyzm == this.phoneyz) {
				this.yzshj = true;
			} else {
				this.yzshj = false;
				this.phoneyzm = '验证码错误';
			}
		},
		fn4() {
			this.loginWindow = 'display:block';
		},
		fn5() {
			this.$router.push('/');
		},
		fn(e) {
			e.target.value = '';
		},
		yzm() {
			if (!this.phone) {
				alert('请输入正确的手机号');
			} else {
				if (this.phonesj) {
					let time = 300;
					let timer = setInterval(
						function() {
							this.phonesj = false;
							time--;
							this.yz = time;
							if (time < 0) {
								this.yz = '点击';
								this.phonesj = true;
								this.phoneyz = 1234567;

								clearInterval(timer);
							}
						}.bind(this),
						1000
					);
					this.$axios.post('http://localhost:8848/phone', 'phone=' + this.phone1).then(
						function(result) {
							this.phoneyz = result.data;
							console.log(result.data);
						}.bind(this)
					);
				} else {
					alert('请在' + this.yz + '秒后再试');
				}
			}
		},
		login() {
			if (this.phone) {
				if (this.yzshj) {
					if (this.yzword) {
						this.$axios.post('http://127.0.0.1:6666/v1.0/user/register', 'username=' + this.phone1 + '&password=' + this.word).then(
							function(result) {
								if (result.data == 0) {
									alert('手机号重复');
								} else {
									//   this.$router.push({ path:'/buy',query:{id:item}})
									alert('注册成功');
									this.$router.push('/Login');
								}
							}.bind(this)
						);
					} else {
						alert('密码格式错误');
						return;
					}
				} else {
					alert('验证码错误');
					return;
				}
			} else {
				alert('请输入正确的手机号');
				return;
			}
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
* {
	padding: 0;
	margin: 0;
}
/* 	html{height:100%};
	body{height:100%}; */
.el-main {
	background-image: url(../../assets/image/bg@2x.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-attachment: fixed;
	width: 1920px !important;
	height: 1080px !important;
	padding-left: 50px;
	padding-top: 29px;
}
.toplogin {
	float: right;
	color: #2180ed;
	cursor: pointer;
}

.logo {
	width: 117px;
	height: 28px;
	float: left;
}
.el-dropdown-link {
	cursor: pointer;
	color: #333333;
}
.xmimg {
	width: 27px;
	height: 26px;
	padding-left: 80px;
	padding-top: 2px;
}
.xm {
	width: 38px;
	height: 17px;
	font-size: 20px;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
	font-size: 20px;
	font-style: normal;
	padding-left: 5px;
	line-height: 17px;
}
.sqimg {
	width: 27px;
	height: 26px;
}
.sq {
	width: 40px;
	height: 18px;
	color: #2180ed;
	font-size: 20px;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	padding-left: 6px;
	font-style: normal;
}
.moreimg {
	width: 25px;
	height: 25px;
}
.more {
	width: 39px;
	height: 19px;
	font-size: 20px;
	font-style: normal;
	padding-left: 5px;
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
/* 登录 */
.login {
	width: 555px;
	height: 555px;
	position: absolute;
	z-index: 50;
	top: 40%;
	left: 50%;
	margin-top: -223px;
	margin-left: -360px;
	background-color: white;
	background: url(../../assets/image/beijing@2x.png) no-repeat;
	background-size: 555px 555px;
}
#popContainer {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0);
}

.close {
	width: 20px;
	height: 20px;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.2));
	border-radius: 2px;
	position: absolute;
	right: -50px;
}
.close img {
	width: 20px;
	height: 20px;
}
.loginlogo {
	width: 129px;
	height: 37px;
	position: absolute;
	left: 214px;
	top: 126px;
}
.loginlogo img {
	width: 100%;
	height: 100%;
}
/* 请输入手机号 */
.user {
	width: 289px;
	height: 40px;
	position: absolute;
	top: 217px;
	left: 134px;
	background: #ffffff;
}
.userimg {
	width: 36px;
	height: 30px;
	display: block;
	float: left;
	padding-let: 9px;
	padding-top: 9px;
	padding-right: 4px;
}
.userimg span {
	width: 100%;
	height: 100%;
	padding-left: 3px;
}
.fenge {
	width: 3px;
	height: 25px;
	float: left;
}
.fenge img {
	width: 2px;
	height: 25px;
	padding-top: 5px;
}
.user input {
	width: 232px;
	height: 40px;
	float: left;
	padding-left: 12px;
	border: none;
	line-height: 40px;
	display: inline-block;
}
/* 请输入手机号结束 */
/* 手机号已注册 */
.yanzheng {
	display: block;
	width: 128px;
	height: 16px;
	font-size: 16px;
	font-weight: 400;
	font-family: MicrosoftYaHei;
	color: red;
	position: absolute;
	left: 214px;
	top: 191px;
}
/* 手机号已注册结束 */
/* 获取验证码 */
.code {
	width: 289px;
	height: 40px;
	position: absolute;
	top: 283px;
	left: 134px;
	background: #ffffff;
}
.code input {
	width: 180px;
	height: 40px;
	color: #999999;
	float: left;
	padding-left: 12px;
	border: none;
	line-height: 40px;
	display: inline-block;
	font-size: 16px;
}
.codefooter {
	width: 96px;
	height: 40px;
	float: left;
	font-size: 16px;
	color: #2180ed;
	line-height: 40px;
	cursor: pointer;
}
/* 验证码是否正确 */
.yanzhengma {
	color: #ff0000;
	font-size: 16px;
	position: absolute;
	top: 170px;
	left: 228px;
}
/* 密码 */
.el-input__inner {
	width: 290px;
	height: 40px;
	position: absolute;
	top: 330px;
	left: 133px;
	color: #999999;
}
.el-icon-view {
	position: fixed;
	top: 628px;
	left: 745px;
	width: 30px;
	height: 20px;
	line-height: 30px;

	/* background:url(../../assets/image/biyan3@2x.png) no-repeat red; */
	/* 	background-size:20px 9px; */
}
/* 注册按钮 */
.reg-button {
	width: 255px;
	height: 36px;
	position: absolute;
	top: 410px;
	left: 150px;
	background: url(../../assets/image/juxing3@2x.png);
	cursor: pointer;
}
.reg-button span {
	font-size: 14px;
	font-weight: 400;
	font-family: MicrosoftYaHei;
	color: #ffffff;
	text-align: center;
	line-height: 36px;
}
</style>
