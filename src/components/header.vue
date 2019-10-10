<template>
	<div>
		 <!-- 右侧登录标识 -->
		 <div class="login-parent">
		 	<div class="top-right">
		 		<!-- 登录头像 -->
		 		<el-dropdown class="imgzong" style="position:relative;">
					<div  @click="logins" @mouseenter="loginss">
						<img  class="logintopimg1" src="../assets/image/userimg@2x.png" alt="" />
		 				<!-- <span class="logintop">登录</span> -->
		 			<!-- <div class="dengl">{{message ? message : "登录"}}</div> -->
					<div  id="dengl">{{$store.state.phone ? $store.state.phone : "登录"}}</div>
					</div>	
					<el-dropdown-menu slot="dropdown" class="hhh" >
							 	 <div class="dlzong" v-show="headerxy">
								 		 <!-- top -->
								 		 <div class="dltop">
								 			 <!-- 头像图片 -->
								 			 <div class="logindl"></div>
								 			 <!-- 手机号，vip级别，到期时间 -->
								 			 <div class="svdrigh">
								 				 <div style="display:flex;">
								 					 <span class="svdone">{{$store.state.phone ? $store.state.phone : "未登录"}}</span><img src="../assets/image/vipg.png" alt="">
								 				 </div> 
								 				<!-- 到期时间 -->
								 				<div class="comsj">
								 					<span class="comsjo">2020年8月26日</span>
								 					<span class="comsjt">到期</span>
								 				</div>
								 			 </div>
								 		 </div>
								 		 <!-- lineone -->
								 		 <img src="../assets/image/line.png" style="width:6.46875rem;height:0.0625rem;float:left;margin-left:0.45rem;" alt="">
								 		 <!-- 会员升级 -->
								 		 <div class="vip">
								 			 会员升级
								 		 </div>
								 		  <!-- lineone -->
								 		 <img src="../assets/image/line.png" style="width:6.46875rem;height:0.0625rem;float:left;margin-left:0.45rem;" alt="">
								 		 <!-- 退出 -->
								 		 <div class="dllave" @click="outlogin">
								 			 退出
								 		 </div>
						</div>
					</el-dropdown-menu>
		 		</el-dropdown>
		 		<!-- 小化 -->
		 			<div class="guanbi-toprig">
		 			<span class="toprig11"><img src="../assets/image/min.png" alt="" style="width:1.21875‬rem;height:0.875rem;" /></span>
		 			<span class="toprig22"><img src="../assets/image/max.png" alt="" style="width:1.21875‬rem;height:0.875rem;" /></span>
		 			<span class="toprig33"><img src="../assets/image/gb.png" alt="" style="width:1.21875‬rem;height:0.875rem;" /></span>
		 		</div>
		 	</div>
		 </div>
		 <!-- 划过头部的时候显示会员级别到期时间的框 -->
		 <!-- 	<div style="width:5rem;height:1.2rem;position:absolute;right:5rem;z-index:20000;background:green;"  @mouseleave="fnls" >
		 	 </div> -->
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				fndl:true,
				// 登录下拉的显隐
				headerxy:false,
			}
		},
		methods:{
			loginss(){
				if(window.sessionStorage.getItem('token') !== null){
					this.headerxy = true
				}else{
					this.headerxy = false
				}
			},
			logins(){
				if(window.sessionStorage.getItem('token') !== null){
					this.$eventbus.$emit('loginherfal')
				}else{
					this.$eventbus.$emit('loginhertru')
				}
			},
			outlogin(){
				this.$router.push("/");
				sessionStorage.clear();
				this.$forceUpdate();
			}
		},
		created(){
			
		},
		mounted(){
			
		}
	}
</script>

<style>
	/*登录右上角的登录 */
	.login-parent {
	 height:0.90625rem;
	 position: absolute;
	 top: 0;
	 right:0.3rem;
	/* background:red; */
	z-index:30000;
	cursor:pointer;
	}
	.imgzong {
		width:4.0rem;
		height:0.78125rem;
		/* background:green; */
		float: left;
		padding-top:0.125rem;
		line-height:0.78125rem;
	}
	#dengl {
		width:2.8rem;
		height:0.6628rem;
	/* 	background:skyblue; */
		float: left;
		margin-left:0.125rem;
		font-size:0.4375rem;
		color: #2180ed;
		line-height:0.8125rem;
		text-align:left;
	}
	.guanbi-toprig {
		width:3.75rem;
		height:0.90625rem;
		float: left;
	}
	.toprig11,
	.toprig33 {
		display:inline-block;
		width: 1.125rem;
		height:0.84375rem;
		float: left;
	}
	.toprig22 {
		display:inline-block;
		width: 1.125rem;
		height:0.84375rem;
		float:left;
	}
	.toprig11 img,.toprig22 img,.toprig33 img{
		width:100%;
		height:100%;
	}
	/*top右上角 */
	.top-right {
	 height:0.90625rem;
	}
	.logintopimg1 {
		width:0.625rem;
		height:0.5625rem;
		display: inline-block;
		float: left;
	/* 	background:red; */
		line-height:0.90625rem;
		padding-top:0.15625rem;
	}
	/* 登录下拉框 */
		.dlzong{
			width:7.3125rem;
			height:5.21875rem;
			/* position:absolute;
			right:0.78rem;
			top:0.6rem; */
		/* 	background:url(../assets/image/dlbj.png) no-repeat;
			background-size:7.3125rem 5.21875rem; */
			background:rgba(225,225,225,.3) !important;
			}
		.hhh{
			position:absolute;
			left:51.5rem !important;
			top:0.6rem !important;
			margin-top:0.5rem;
			width:0rem;
			height:0rem;
			z-index:200;
			margin-left:0.3rem;
			cursor:pointer;
			/* background:url(../assets/image/dlbj.png) no-repeat !important; */
			background:rgba(225,225,225,.3) !important;
			border:none !important;
		}
			/* top */
	.dltop{
		width:6.56875rem;
		height:2.75rem;
	/* 	background:red; */
	/* 	margin-top:1.1rem; */
		margin-left:0.45rem;
		display:flex;
		align-items: center;
	}
	/* 登录下拉中的头像 */
	.logindl{
		width:1.4375rem;
		height:1.4375rem;
		background:url(../assets/image/dllogo.png) no-repeat;
		background-size:1.4375rem 1.4375rem;
		/* background-color:paleturquoise; */
		/* margin-left:0.3rem; */
	}
	/* 到期，权限，级别总 */
	.svdrigh{
		width:4.3rem;
		height:1.3625rem;
	/* 	background:palegreen; */
		margin-left:0.5rem;
	}
	.svdrigh img{
		width:0.59375rem;
		height:0.65625rem;
		margin-left:0.22rem;
	}
	/*下拉手机号 */
	.svdone{
		display:inline-block;
		font-size:16px;
		font-family:Microsoft YaHei;
		font-weight:400;
		color:rgba(102,102,102,1);
		/* background:black; */
		float:left;
	}
	/* 到期时间 */
	.comsj{
		font-size:0.4375rem;
		font-family:Microsoft YaHei;
		font-weight:400;
		/* background:black; */
		margin-top:0.1rem;
		text-align:left;
		}
		.comsjo{
			color:rgba(33,128,237,1);
		}
		.comsjt{
			color:#666666;
			margin-left:0.2rem;
		}
	/* 会员升级，退出 */
	.vip,.dllave{
		width:6.36875rem;
		height:1.1rem;
		/* background:blue; */
		margin-left:0.45rem;
		font-size:0.5rem;
	  font-family:Microsoft YaHei;
	  font-weight:400;
	  color:rgba(102,102,102,1);
		line-height:1.1rem;
		text-align:left;
		padding-left:0.3rem;
		}
</style>
