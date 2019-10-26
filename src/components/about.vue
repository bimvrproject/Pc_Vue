<template>
	<div>
		<div class="about">
			<!-- 表头 -->
			<div class="abouttop">联系我们</div>
			<!-- 商标 -->
			<div class="sbt"></div>
			<!-- 虚拟建造 -->
			<div class="xnzz"></div>
			<!-- 联系电话 -->
			<div class="getphone">联系电话 : 186-0093-6100</div>
			<!-- 电子邮箱 -->
			<div class="mail">电子邮箱 : 2240253175@qq.com</div>
			<!-- 联系地址 -->
			<div class="lxdz">联系地址 : 北京市 海淀区 中关村软件园 中兴通大厦</div>
			<!-- 官网 -->
		<div class="wangzhi"><a  href="http://www.jh-bim.com" target="_blank">www.jh-bim.com</a></div>
		</div>
	</div>
</template>

<script></script>

<style>
.about {
	width:17.40625rem;
	height:13.03125rem;
	background: red;
	position: absolute;
	top:10.375rem;
	left:21.3125rem;
	background: url(../assets/image/yaunjuxin.png);
	background-size: 17.40625rem 13.03125rem;
	z-index:50000;
}
.abouttop {
	width:17.15625rem;
	height:1.125rem;
	background: url(../assets/image/bc.png) no-repeat;
	/* position: absolute;
	top:0.0625rem;
	left:0.0625rem; */
	margin-left:0.1rem;
	margin-top:0.1rem;
	font-size:0.625rem;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	line-height:1.125rem;
	text-align: left;
	text-indent:0.3125rem;
}
.sbt {
	width:3.28125rem;
	height:3.28125rem;
	/* position: absolute;
	top:2.78125rem;
	left:7.0625rem; */
	background: url(../assets/image/bimlogo.png) no-repeat;
	background-size:3.28125rem 3.28125rem;
	margin-left:7.1rem;
	margin-top:1.5rem;
}
.xnzz {
	width:3.125rem;
	height:0.8125rem;
	/* position: absolute;
	top:6.25rem;
	left:7.125rem; */
	margin-left:7.2rem;
	margin-top:0.2rem;
	background: url(../assets/image/xxxx.png) no-repeat;
	background-size:3.125rem 0.8125rem;
}
.getphone {
	/* width:9.6875rem; */
	height:0.5625rem;
	/* position: absolute;
	top:8rem;
	left: 4.8125rem; */
  margin-top:0.76rem;
	font-size:0.625rem;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
}
.mail {
	/* width:9.625rem; */
	height:0.6875rem;
	margin-top:0.3rem;
/* 	position: absolute;
	top:8.875rem;
	left:3.875rem; */
	font-size:0.625rem;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
}
/* 联系地址 */
.lxdz {
	/* width:14.3125rem; */
	height:0.625rem;
	/* position: absolute;
	top:9.875rem;
	left:1.53125rem; */
	margin-top:0.3rem;
	font-size:0.625rem;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
}
.wangzhi a{
	/* width:6.25rem; */
	height:0.65625rem;
	/* position: absolute;
	top:10.8125rem;
	left:6.15625rem; */
	font-size:0.625rem;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(33, 128, 237, 1);
}
</style>
