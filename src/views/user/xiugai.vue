<template>
	<div>
		<div class="xg">
			<!-- 表头 -->
			<div class="biaotop">修改密码</div>
			<!-- 表身 -->
			<!-- 旧密码 -->
			<div class="jiu">
				<span class="jm">旧密码 :</span>
				<el-input v-model="jiu" placeholder="请输入旧密码"></el-input>
			</div>
			<!-- 新密码 -->
			<div class="xin">
				<span class="xmm">新密码 :</span>
				<el-input v-model="xin" placeholder="请输入新密码"></el-input>
			</div>
			<!-- 确认密码 -->
			<div class="qr">
				<span class="qrmm">确认密码 :</span>
				<el-input v-model="xin" placeholder="请输入确认密码" class="qrr"></el-input>
			</div>
			<!-- 取消 -->
			<div class="quxiao">取消</div>
			<div class="quedin">确定</div>
			<!-- 确定 -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			jiu: '',
			xin: ''
		};
	},
	methods: {}
};
</script>

<style scoped>
.xg {
	width: 557px;
	height: 417px;
	background: red;
	position: absolute;
	top: 332px;
	left: 682px;
	background: url(../../assets/image/yaunjuxin.png);
	background-size: 557px 417px;
}
.biaotop {
	width: 554px;
	height: 41px;
	background-color: red;
	background: url(../../assets/image/bc.png) no-repeat;
	line-height: 41px;
	font-size: 20px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	text-align: left;
	text-indent: 10px;
}
/* 旧密码 */
.jiu {
	width: 400px;
	height: 36px;
	position: absolute;
	top: 125px;
	left: 125px;
}
.jm {
	display: inline-block;
	font-size: 24px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
	position: absolute;
	top: 2px;
	left: 0;
}
.el-input {
	width: 227px;
	height: 36px;
}
/* 新密码 */
.xin {
	width: 400px;
	height: 36px;
	position: absolute;
	top: 181px;
	left: 125px;
}
.xmm {
	display: inline-block;
	font-size: 24px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
	position: absolute;
	top: 2px;
	left: 0;
}
/* 确认新密码 */
.qr {
	width: 400px;
	height: 36px;
	position: absolute;
	top: 237px;
	left: 100px;
}
.qrmm {
	display: inline-block;
	font-size: 24px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
	position: absolute;
	top: 2px;
	left: 0;
}
.qrr {
	position: absolute;
	top: 0px;
	left: 110px;
}
/* 取消确定 */
.quxiao {
	width: 132px;
	height: 30px;
	background: red;
	position: absolute;
	top: 326px;
	left: 114px;
	line-height: 30px;
	background: url(../../assets/image/qxx.png) no-repeat;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
}
.quedin {
	width: 132px;
	height: 30px;
	background: red;
	position: absolute;
	top: 326px;
	left: 306px;
	line-height: 30px;
	background: url(../../assets/image/qdd.png) no-repeat;
	font-size: 16px;
	font-size: 16px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
}
</style>
