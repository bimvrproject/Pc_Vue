<template>
	<div>
		 <!-- 右侧登录标识 -->
		 <div class="login-parent">
		 	<div class="top-right">
		 		<!-- 登录头像 -->
		 		<div class="imgzong">
		 			<img  class="logintopimg1" src="../../assets/image/userimg@2x.png"alt="" />
		 				<!-- <span class="logintop">登录</span> -->
		 			<div class="dengl">{{message}}</div>
		 		</div>
		 		<!-- 小化 -->
		 			<div class="guanbi-toprig">
		 			<span class="toprig11"><img src="../../assets/image/min.png" alt="" style="width:1.21875‬rem;height:0.875rem;" /></span>
		 			<span class="toprig22"><img src="../../assets/image/max.png" alt="" style="width:1.21875‬rem;height:0.875rem;" /></span>
		 			<span class="toprig33"><img src="../../assets/image/gb.png" alt="" style="width:1.21875‬rem;height:0.875rem;" /></span>
		 		</div>
		 	</div>
		 </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				message:"登录"
			}
		},

		mounted(){
			// console.log(this.message)
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
	}
	.imgzong {
		width:4.5rem;
		height:0.78125rem;
		/* background:green; */
		float: left;
		padding-top:0.125rem;
		line-height:0.78125rem;
	}
	.dengl {
		width:3.3rem;
		height:0.6628rem;
		/* background:skyblue; */
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
</style>
