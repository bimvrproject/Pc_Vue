<template>
	<div>
		<div class="upfile">
			<div class="upfilezx">
				<span class="upfiletit">上传建筑结构的模型</span>
				<uploader :file-status-text="statusText" :key="uploader_key" :options="options" class="uploader-example" @file-success="onFileSuccess">
					<uploader-unsupport></uploader-unsupport>
					<uploader-drop><uploader-btn :directory="true" :single="true" @click="fnwenjian">选择文件夹</uploader-btn></uploader-drop>
					<uploader-list></uploader-list>
				</uploader>
			</div>
		</div>
	</div>
</template>

<script>
import api from '@/api/api.js';
// import qs from "qs";
// import axios from "axios";
export default {
	data() {
		return {
			uploader_key: new Date().getTime(), //这个用来刷新组件--解决不刷新页面连续上传的缓存上传数据（注：每次上传时，强制这个值进行更改---根据自己的实际情况重新赋值）
			options: {
				target: api.Upload, //SpringBoot后台接收文件夹数据的接口
				testChunks: false //是否分片-不分片
			},
			statusText: {
				success: '成功了',
				error: '出错了',
				uploading: '上传中',
				paused: '暂停中',
				waiting: '等待中'
			}
		};
	},
	methods: {
		onFileSuccess: function(rootFile, file, response, chunk) {
			//这里可以根据response（接口）返回的数据处理自己的实际问题（如：从response拿到后台返回的想要的数据进行组装并显示）
			//注，这里从文件夹每上传成功一个文件会调用一次这个方法
			console.log(rootFile + file + response + chunk);
		}
		// updated(){
		// 	this.$eventbus.$emit("xianyin");
		// }
	}
};
</script>

<style>
.upfile {
	width: 400px;
	height: 148px;
	background: rgba(225, 225, 225, 0.6);
	position: absolute;
	top: 460px;
	left: 600px;
	border-radius: 15px;
	/* 	border:2px dashed ghostwhite; */
}
.upfilezx {
	width: 390px;
	height: 115px;
	background: rgba(225, 225, 225, 0.3);
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	border-radius: 9px;
	border: 5px solid #ffffff;
	padding-top: 25px;
}
.upfiletit {
	width: 390px;
	color: #333333;
	font-size: 30px;
	display: inline-block;
}
.uploader-drop {
	display: inline-block;
	width: 175px;
	height: 40px;
	margin-top: 15px;
	border-radius: 20px;
	background: url(../../assets/image/juxing3@2x.png) no-repeat #0000ff;
	text-align: center;
	line-height: 40px;
	color: #ffffff;
}
.uploader-btn {
	border: 0 solid #0000ff !important;
	color: #e8e7eb !important;
	font-size: 26px !important;
}
</style>
