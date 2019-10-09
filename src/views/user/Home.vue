<template>
	<el-container style="overflow:-Scroll;overflow-y:hidden">
		<el-main>
				<img class="logo" src="../../assets/image/jinghekeji.png" @click="fnxuni"/>
				<Xunilogo v-show="xianyinxuni"></Xunilogo>
				<!-- 下拉菜单---项目 -->
				<el-dropdown style="float: left; margin-left: 5%;">			
					<span class="el-dropdown-link" @click="fns()">
						<img class="xmimg" src="../../assets/image/sshouse.png"/>
						<i class="xm">项目</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<!-- <el-dropdown-menu slot="dropdown">
						<el-dropdown-item>项目1</el-dropdown-item>
						<el-dropdown-item>项目2</el-dropdown-item>
						<el-dropdown-item>项目3</el-dropdown-item>
						<el-dropdown-item disabled>项目4</el-dropdown-item>
						<el-dropdown-item divided>项目5</el-dropdown-item>
					</el-dropdown-menu> -->
					<Newjian v-show="xianyin"></Newjian>
				</el-dropdown>
				<!-- 下拉菜单---项目--结束 -->
				<!-- 下拉菜单---社区 -->
				<el-dropdown style="float: left; margin-left: 5%;">
					<span class="el-dropdown-link">
						<img class="sqimg" src="../../assets/image/shequ.png"/> 
						<i class="sq">社区</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>交友</el-dropdown-item>
						<el-dropdown-item disabled>消息</el-dropdown-item>
						<el-dropdown-item divided>互动</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- 下拉菜单---社区--结束 -->
				
				<!-- 下拉菜单---更多 -->
				<el-dropdown style="float: left; margin-left: 5%;">
					<!-- <img src="../../assets/image/sshouse.png" style="width: 20px;height: auto;" /> -->
					<span class="el-dropdown-link">
						<img class="moreimg" src="../../assets/image/more@2x.png"/> 
						<i class="more">更多</i>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>更改密码</el-dropdown-item>
						<el-dropdown-item disabled>版本 1.0</el-dropdown-item>
						<el-dropdown-item divided>注销登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<!-- 下拉菜单---更多--结束 -->
				<div class="login-parent" style="float:right;cursor:pointer;" @click="fn4">
					<span class="logintopimg" ><img src="../../assets/image/userimg@2x.png" alt=""></span>
					<!-- <span class="logintop">登录</span> -->
					</div>
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
							<!-- 输入用户名 -->
							<div class="user">
								<div class="userimg">
									 <img src="../../assets/image/userimg@2x.png" alt="">
								</div>
								 <div class="fenge">
									 <img src="../../assets/image/juxing11@2x.png" alt="">
								 </div>
								 <input type="text"  placeholder="输入手机号" v-model="username" @blur="fn1">
							</div>
							<!-- 输入密码 -->
							<div class="password">
								<div class="passwordimg">
									 <img src="../../assets/image/userimg@2x.png" alt="">
								</div>
								 <div class="fenge">
									 <img src="../../assets/image/juxing11@2x.png" alt="">
								 </div>
								 <input type="text" placeholder="输入密码"  v-model="password"  @blur="fn2">
							</div>
							<!-- 记住密码  忘记密码 -->
							<div class="refo">
								<div class="remember">
									 	<el-checkbox v-model="checked">记住密码</el-checkbox>
								</div>
								<div class="forget">
								     <div class="forget-paw">忘记密码</div>
								</div>
							</div>	
							<!-- 登录 -->
							<div class="Logon-button" @click="login()">
								<span>
									登录
								</span>
							</div>
							<!-- 还没有账号？马上去注册 -->
							<div class="login-footer">
									 <i class="noreg">还没有账户?</i><i class="login-reg" @click="fn3">马上注册</i>
							</div>
							
							<!-- 临时线 -->
						<!-- 	<div style="margin: auto;border:1px solid blue;width: 30%;margin-top: 10px;"></div>
							<div style="display:inline;">账号 : </div>
							<el-input placeholder="用户名手机号" v-model="username" clearable blur="" style="width: 60%;margin-top: 20px;"></el-input>
							<br />
							<div style="display:inline;">密码 : </div>
							<el-input placeholder="请输入密码" v-model="password" show-password style="width: 60%;margin-top: 10px;"></el-input>
							<br />
							<div>
								<div style="color: #2180ED;font-size: 12px;display: inline-table;float: left;margin-left: 105px;margin-top: 10px;">记住密码</div>
							
						   	<div style="color: #2180ED;font-size: 12px;display: inline-table;float: right;margin-right: 60px;margin-top: 10px;">忘记密码</div>
							</div>
							<div style="margin-top: 40px">
								<el-button type="primary" style="width: 60%;font-size:14px" @click="login">登录</el-button>
							</div>
							<div style="margin-top: 10px">还没有账户 ? <a href="https://www.baidu.com">马上注册</a></div> -->
					</div>
				<!-- 悬浮登录窗口 --结束 -->
		</el-main>
	</el-container>
</template>

<script>
	import api from "@/api/api.js";
	import qs from "qs";
	import Newjian from "./newjian";
	import Xunilogo from "./xunilogo";
	 export default {
    data() {
      return {
			username: '',
			password: '',
			loginWindow:'',
			checked:'',
			panduan:false,
			xianyin : false,
			xianyinxuni:false,
      }
	},
	components:{
		Newjian,
		Xunilogo,
	},
	created() {
		this.$eventbus.$on("shows",()=>{
			this.xianyinxuni=true;
		});
		console.log(this.xianyinxuni)
	},
	mounted() {
			if(window.sessionStorage.getItem("token") != null){
				this.loginWindow='display: none';
				 //请求用户接口查询 用户信息
				
						// .then(res => this.loginSuccess(res))
            // .catch(err => this.requestFailed(err))
            // .finally(() => {
            // // state.loginBtn = false;
            // });
			}else{
				this.loginWindow='';
			};
  },
	methods: {
		fnxuni(){
			this.xianyinxuni = !this.xianyinxuni;
				this.xianyin = false;
		},
		fns(){
			this.xianyin = !this.xianyin;
			this.xianyinxuni = false;
		},
		// fnxuni(){
		// 	this.xianyin = false;
		// },
		fn4(){
				this.loginWindow='display:block';
		},
		fn3(){
			this.$router.push('/Register')
		},
		fn1(){
			var re =  /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|4|5|6|7|8|9])\d{8}$/;
				if(!re.test(this.username)){
					this.panduan = true;
				}else{
					this.panduan = false;
				}
		},
		fn2(){
			var re =  /^\w{6,12}$/;
			if(!re.test(this.password)){
				this.panduan= true
			}else{
				this.panduan= false
			}
		},
		login(){
			if(this.username =="" || this.password =="" ){
				 this.panduan = true;
				}else{
					//请求登录接口
						this.$http.post(api.Login,qs.stringify({username: this.username,
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
        window.sessionStorage.setItem("token", res.data.token);
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
		/* padding-top:29px; */
	}
	.logo{
		width:117px;
		height:28px;
		float:left;
		padding-left:50px;
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
		margin-top:-223px;
		margin-left:-360px;
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
.logintopimg{
	display:block;
	width:18px;
	height:18px;
	float:left;
	padding-top:4px;
	margin-right:3px;
}
.logintopimg img {
	width:100%;
	height:100%;
}
.logintop{
	color:#2180ED;
	font-size:14px;
	float:left;
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
.user{
	width:289px;
	height:40px;
	position:absolute;
	top:217px;
	left:134px;
	background:#FFFFFF;
}
.userimg{
	width:27px;
	height:30px;
	display:block;
	float:left;
	padding-let:9px;
	padding-top:6px;
	padding-right:4px;
}
.userimg img{
	width:100%;
	height:100%;
}
.fenge{
	 width:2px;
	 height:25px;
	 float:left;
	}
.fenge img{
	width:2px;
	height:25px;
	padding-top:5px;
}
.user input{
	 width:244px;
   height:40px;
	 float:left;
	 padding-left:12px;
	 border:none;
	 line-height:40px;
	 display:inline-block;
}
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
.password{
	width:289px;
	height:40px;
	position:absolute;
	top:283px;
	left:134px;
	background:#FFFFFF; 
}
.passwordimg{
	width:27px;
	height:30px;
	display:block;
	float:left;
	padding-let:9px;
	padding-top:6px;
	padding-right:4px;
}
.passwordimg img{
	width:100%;
	height:100%;
}
.fenge{
	 width:2px;
	 height:25px;
	 float:left;
	}
.fenge img{
	width:2px;
	height:25px;
	padding-top:5px;
}
.password input{
	 width:239px;
   height:39px;
	 float:left;
	 padding-left:12px;
	 border:none;
	 line-height:40px;
	 display:inline-block;
}

/* 记住忘记密码 */
.refo{
	width:260px;
	height:15px;
	position:absolute;
	top:330px;
	left:152px;
	margin-top:5px;
}
.el-checkbox__label{
	position:absolute;
	left:-30px;
	top:-2px;
	font-size:12px;
	color:#2180ED;
	padding-left:13px;
	background:rgba(0,0,0,0);
}
.el-checkbox__inner{
	position:absolute;
	left:-35px;
	top:-10px;
}
 .remember{
	width:63px;
	height:11px;
	}
/* 忘记密码 */
.forget-paw{
	  color:#2180ED;
		font-size:12px;
		position:absolute;
		left:186px;
		top:-4px;
		font-weight:400;
		cursor:pointer;
	}
/* 登录按钮 */
.Logon-button{
	 width:255px;
	 height:36px;
	 position:absolute;
	 top:372px;
	 left:150px;
	 background:url(../../assets/image/juxing3@2x.png);
	 cursor:pointer;
	}
.Logon-button span{
	font-size:14px;
	font-weight:400;
	font-family:MicrosoftYaHei;
	color:#FFFFFF;
	text-align:center;
	line-height:36px;
}
/* 还没有账号？马上注册 */
.login-footer{
	 width:155px;
	 height:20px;
	 font-size:12px;
	 position:absolute;
	 top:418px;
	 left:216px;
	}
	.noreg{
		font-family:MicrosoftYaHei;
		font-weight:400;
		font-style: normal;
    color:rgba(51,51,51,1);
	}
	.login-reg{
		color:#2180ED;
		font-family:MicrosoftYaHei;
		font-weight:400;
		font-style:normal;
		cursor:pointer;
	}
</style>

