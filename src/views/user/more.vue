<template>
	<div>
		<div class="mores" :style="more">
			<div class="mores1" @click="help">帮助</div>
			<div class="mores1" @click="Preservation">保存设置</div>
			<div class="mores1" @click="Xiugai">修改密码</div>
			<div class="mores1" @click="abouts">联系我们</div>
			<div class="moresb">版本号: v 1.0.1</div>
		</div>
	</div>
</template>

<script>
import api from '@/api/api.js';
import qs from 'qs';
export default {
	data() {
		return {};
	},
	methods: {
		help() {
			window.open('http://www.jh-bim.com/home/solution');
		},
		Preservation() {
			this.$router.push('/baocun');
		},
		Xiugai() {
			this.$router.push('/xiugai');
		},
		abouts() {
			this.$router.push('/about');
		}
	}
};
</script>

<style scoped>
/* 更多下拉 */
.mores {
	width: 183px;
	height: 176px;
	position: absolute;
	top: 35px;
	left: 60px;
	background: url(../../assets/image/mores.png);
	padding-left: 10px;
	padding-right: 10px;
	cursor: pointer;
}
.mores1 {
	width: 183px;
	height: 34px;
	border-bottom: 1px solid #999999;
	text-align: left;
	line-height: 34px;
	color: #666666;
	font-size: 16px;
	font-weight: 500;
}
.moresb {
	border: 0;
	text-align: left;
	line-height: 34px;
	color: #666666;
	font-size: 16px;
	font-weight: 500;
}
</style>
