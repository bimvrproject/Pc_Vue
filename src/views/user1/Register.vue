<template>
	<el-container style="overflow:-Scroll;overflow-y:hidden">
		<el-main>
				<img class="logo" src="../../assets/image/jinghekeji.png"/>
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left; margin-left: 5%;">			
					<span class="el-dropdown-link" @click="fn4" >
						<img class="xmimg" src="../../assets/image/sshouse.png"/>
						<i class="xm">项目</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left: 5%;">
					<span class="el-dropdown-link"  @click="fn4" >
						<img class="sqimg" src="../../assets/image/shequ.png"/> 
						<i class="sq">社区</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->
				
				<!-- 下拉菜单---更多 -->
				<el-dropdown style="float: left; margin-left: 5%;">
					<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> -->
					<span class="el-dropdown-link"  @click="fn4" >
						<img class="moreimg" src="../../assets/image/more@2x.png"/> 
						<i class="more">更多</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
				</el-dropdown>
				<!-- 下拉菜单---更多--结束 -->
				<div class='toplogin' @click="fn5">登录</div>
				<!-- 悬浮登录窗口 --开始 -->
				<div id="popContainer" :style="loginWindow" style="position: fixed; z-index: 49;">
						<!-- 这个是遮罩,蒙窗 -->
				</div>
				<!-- 登录 -->
				<div class="login" :style="loginWindow" >
							<!-- <div style="width: 100%;height: 40px;background-image: url(../../assets/image/dingbutiao.png);"> -->
							<div class="close">
								<!-- 	<div style="color: #FFFFFF;font-size: 12px;float: left;margin-left: 10px;margin-top: 10px;">用户名</div> -->
									<!-- <img src="../../assets/image/close.png"  style="width: 20px; height: 20px;float: right;margin-right: 10px;margin-top: 10px;" @click="closeLoginwindow"/> -->
									<img src="../../assets/image/close.png"  @click="closeLoginwindow"/>
							</div>
							<div class="loginlogo">
								<img src="../../assets/image/loginlogo@2x.png" alt="">
							</div>
							<!-- 验证账号密码是否正确 -->
							<span class="yanzheng" v-if="panduan">密码账号不正确</span>
							<!-- 验证码是否正确 -->
							<span class="yanzhengma" v-if="yzm">验证码不正确</span>
							<!-- 输入手机号 -->
							<div class="user">
								<div class="userimg">
									<span>86+</span>
								</div>
								 <div class="fenge">
									 <img src="../../assets/image/juxing11@2x.png" alt="">
								 </div>
								 <input type="text"  placeholder="输入手机号" v-model="username" @blur="fn1">
							</div>
							<!-- 输入验证码-->
							<div class="code">
								 <input type="text" placeholder="输入验证码"  v-model="password"  @blur="fn2">
								 	<div class="codefooter">
								 	 获取验证码
								 </div>
							</div>
							<!-- 密码 -->
							<el-input placeholder="请输入密码" v-model="input" show-password >
								
							</el-input>
							
							<!-- 注册 -->
							<div class="reg-button" @click="login()">
								<span>
									注册
								</span>
							</div>
					</div>
		</el-main>
	</el-container>
</template>

<script>
	import api from "@/api/api.js";
	import qs from "qs";
	
	 export default {
    data() {
      return {
        username: '',
				password: '',
				loginWindow:'',
				checked:'',
				panduan:false,
				yzm:false,
				input: ''
      }
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
		fn1(){
			var re = /^[1][3,4,5,6,7,8][0-9]{9}$/;
				if(!re.test(this.username)){
					this.panduan = true;
				}else{
					this.panduan = false;
				}
		},
		fn2(){
			var re = /^\w{6,}$/;
			if(!re.test(this.password)){
				this.panduan= true
			}else{
				this.panduan= false
			}
		},
		fn4(){
			this.loginWindow='display:block';
		},
		fn5(){
			this.$router.push('/')
		},
		login(){
			if(this.username =="" || this.password =="" ){
				 this.panduan = true;
				}else{
					//请求登录接口
						this.$http
					       .post(
					         api.Login,
										qs.stringify({
					           username: this.username,
					           password: this.password
					         })	
					       )
								 .then(res => this.loginSuccess(res))
					       .catch(err => this.requestFailed(err))
					       .finally(() => {
					       // state.loginBtn = false;
					       });
				}
			},
		loginSuccess(res) {
      // 如果登录成功，存储token
      if (res.code == "0") {
        this.$store.commit("settoken", res.data.token);
        window.localStorage.setItem("token", res.data.token);
				// this.$router.push("/home");
				this.loginWindow='display: none';
				this.getUserByToken();
      } else {
        this.msg = res.msg;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 1200);
      }
    },
		requestFailed() {
      this.msg = "应用发生错误";
      this.show = true;
		},
		getUserByToken(){
			this.$http.post(api.GetUser).then(res => this.userHome(res));
		},
		userHome(res){
				this.username = res.data.userName;
				console.log("this.userName   "+this.userName);
		},
		// 关闭login悬浮窗
		closeLoginwindow(){
			this.loginWindow='display:none';
		}
	}
}
</script>

<style>
	*{padding:0;margin:0}
/* 	html{height:100%};
	body{height:100%}; */
	.el-main {
		background-image: url(../../assets/image/bg@2x.png);
		background-repeat: no-repeat;
		background-size:100% 100%;
    background-attachment: fixed;
		width: 1920px  !important;
		height: 1080px  !important;
		padding-left:50px;
		padding-top:29px;
	}
	.toplogin{
			float:right;
			color:#2180ED;
			cursor:pointer;
	}

	.logo{
		width:117px;
		height:28px;
		float:left;
	}
 .el-dropdown-link {
    cursor: pointer;
    color: #333333;
  }
	.xmimg{
		width:27px;
		height:26px;
		padding-left:80px;
		padding-top:2px;
	}
	.xm{
		width:38px;
    height:17px;
    font-size:20px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
		font-size:20px;
		font-style:normal;
		padding-left:5px;
		line-height:17px;
	}
	.sqimg{
		width:27px;
		height:26px;
	}
	.sq{
		width:40px;
		height:18px;
		color:#2180ED;
		font-size:20px;
		font-family:MicrosoftYaHei;
		font-weight:400;
		padding-left:6px;
		font-style:normal;
	}
	.moreimg{
		width:25px;
		height:25px;
	}
	.more{
		width:39px;
		height:19px;
		font-size:20px;
		font-style:normal;
		padding-left:5px;
		font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
	}
	.el-dropdown-link2 {
    cursor: pointer;
    color: #2180ED;
  }
  .el-icon-arrow-down {
    font-size: 20px;
  }
	/* 登录 */
	.login{
		width:555px;
		height:555px;
		position:absolute;
		z-index:50;
		top:40%;
		left:50%;
		margin-top:-175px;
		margin-left:-175px;
		background-color: white;
		background:url(../../assets/image/beijing@2x.png) no-repeat;
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

.close{
	width:20px;
	height:20px;
	background:linear-gradient(180deg,rgba(255,255,255,0.2));
  border-radius:2px;
	position:absolute;
	right:-50px;
}
.close img{
	width:20px;
	height:20px;
}
.loginlogo{
	width:129px;
	height:37px;
	position:absolute;
  left:214px;
	top:126px;
}
.loginlogo img{
	width:100%;
	height:100%;
}
/* 请输入手机号 */
.user{
	width:289px;
	height:40px;
	position:absolute;
	top:217px;
	left:134px;
	background:#FFFFFF; 
}
.userimg{
	width:36px;
	height:30px;
	display:block;
	float:left;
	padding-let:9px;
	padding-top:9px;
	padding-right:4px;
}
.userimg span{
	width:100%;
	height:100%;
	padding-left:3px;
}
.fenge{
	 width:3px;
	 height:25px;
	 float:left;
	}
.fenge img{
	width:2px;
	height:25px;
	padding-top:5px;
}
.user input{
	 width:232px;
   height:40px;
	 float:left;
	 padding-left:12px;
	 border:none;
	 line-height:40px;
	 display:inline-block;
}
/* 请输入手机号结束 */
/* 手机号已注册 */
.yanzheng{
	display:block;
	width:128px;
	height:16px;
	font-size:16px;
	font-weight:400;
	font-family:MicrosoftYaHei;
	color:red;
	position:absolute;
	left:214px;
	top:191px;
}
/* 手机号已注册结束 */
/* 获取验证码 */
.code{
	width:289px;
	height:40px;
	position:absolute;
	top:283px;
	left:134px;
	background:#FFFFFF;
}
.code input{
	 width:180px;
   height:40px;
	 color:#999999;
	 float:left;
	 padding-left:12px;
	 border:none;
	 line-height:40px;
	 display:inline-block;
	 font-size:16px;
}
.codefooter{
	 width:96px;
	 height:40px;
	 float:left;
	 font-size:16px;
	 color:#2180ED;
	 line-height:40px;
	 cursor:pointer;
}
/* 验证码是否正确 */
.yanzhengma{
	color:#FF0000;
	font-size:16px;
	position:absolute;
	top:170px;
	left:228px;
	
	}
/* 密码 */
.el-input__inner{
	 width:290px;
	 height:40px;
	 position:absolute;
	 top:330px;
	 left:133px;
	 color:#999999;
	}
.el-icon-view{
	position:fixed;
	top:628px;
	left:745px;
	width:30px;
	height:20px;
	line-height:30px;
	
	/* background:url(../../assets/image/biyan3@2x.png) no-repeat red; */
/* 	background-size:20px 9px; */
}
/* 注册按钮 */
.reg-button{
	 width:255px;
	 height:36px;
	 position:absolute;
	 top:410px;
	 left:150px;
	 background:url(../../assets/image/juxing3@2x.png);
	 cursor:pointer;
	}
.reg-button span{
	font-size:14px;
	font-weight:400;
	font-family:MicrosoftYaHei;
	color:#FFFFFF;
	text-align:center;
	line-height:36px;
}

</style>
