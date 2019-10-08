<template>
	<div>
		<div class="baocun">
			<!-- 表头 -->
			<div class="biaotop">保存设置</div>
			<div class="shezhi">
				<div class="zuo">设置自动保存时间 :</div>
				<div class="you">
					<el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
				</div>
			</div>
			<div class="quxiao">取消</div>
			<div class="quedin">确定</div>
		</div>
	</div>
</template>

<script>
import api from '@/api/api.js';
import qs from 'qs';
export default {
	data() {
		return {
			options: [
				{
					value: '选项1',
					label: '5分钟'
				},
				{
					value: '选项2',
					label: '10分钟'
				},
				{
					value: '选项3',
					label: '30分钟'
				},
				{
					value: '选项4',
					label: '1小时'
				},
				{
					value: '选项5',
					label: '2小时'
				}
			],
			value: '5分钟',
			changes: 'color:red'
		};
	},
	methods: {
		f() {
			this.changes = 'color:blue';
		}
	}
};
</script>

<style scoped>
.baocun {
	width: 557px;
	height: 417px;
	background: red;
	position: absolute;
	left: 682px;
	top: 332px;
	background: url(../../assets/image/yaunjuxin.png) no-repeat;
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
.shezhi {
	/* 	width: 426px;
	height: 60px; */
	background: red;
	position: absolute;
	top: 165px;
	left: 64px;
}
.quxiao {
	width: 132px;
	height: 30px;
	/* background: red; */
	position: absolute;
	top: 232px;
	left: 117px;
	line-height: 30px;
	background: url(../../assets/image/qxx.png) no-repeat;
	font-family: Microsoft YaHei;
	font-size: 16px;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
}
.quedin {
	width: 132px;
	height: 30px;
	/* background: red; */
	position: absolute;
	top: 232px;
	left: 309px;
	line-height: 30px;
	background: url(../../assets/image/qdd.png) no-repeat;
	font-size: 16px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
}
.zuo {
	width: 206px;
	height: 23px;
	font-size: 24px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
	position: absolute;
	top: 3px;
	left: 0px;
}
.you {
	position: absolute;
	top: 0px;
	left: 210px;
	width: 227px;
	height: 36px;
/* 	background: plum; */
	cursor: pointer;
}
.el-input__inner {
	color: rgba(33, 128, 237, 1) !important;
}
</style>
