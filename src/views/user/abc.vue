<!-- <template>
	<div id="img">
		<button class="btn" @click="btn()">截 图</button>
		<div class="bg-img" style="display: none"></div>
		<div id="capture" style="padding: 10px; background: #f5da55">
			<h4 style="color: #000; " id="aa">Hello world!</h4>
		</div>
		<div style="margin-top: 200px;text-align: center;">
			<img id="result"/>
		</div>
	</div>
</template>

<script>
	import api from '@/api/api.js';
	import axios from 'axios';
	import $ from 'jquery'  //加上这句话
	import html2canvas from 'html2canvas'
	import kscreenshot from 'kscreenshot'
	//65指键盘中的A
	var kscreen = new kscreenshot({
		 key: 65, // 设置快捷键 目前为 shift+a
		endCB:function(data){
			console.log('截图');
			console.log(data);
			document.getElementById('result').setAttribute('src', data)
			// 			//过滤data:URL
			axios.get(api.Ceshi+"?data="+data).then(result=>{
				console.log(result.data+"++++++++++");
			})
		},
		cancelCB: function () {
			console.log('取消')
		}
	})
	export default {
    data() {
      return {
		dataurl:""
      }
    },
	methods: {
		btn() {
			kscreen.startScreenShot() // 开启截屏 也可以使用快捷键 开启截屏

		}
	}
  }
</script>

<style>
	
</style>

 -->
 <!-- <template>
	 <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>

</template>
<style>
</style> -->
<template>
	<el-menu  mode="horizontal" >
	  <el-submenu>
	    <template slot="title" class="gzt" style="color">我的工作台</template>
	    <!-- <el-menu-item index="2-1">选项1</el-menu-item>
	    <el-menu-item index="2-2">选项2</el-menu-item>
	    <el-menu-item index="2-3">选项3</el-menu-item> -->
			<div>
				1321
			</div>
	  </el-submenu>
	</el-menu>
	
</template>
	
<script>
  export default {
    data() {
      return {
        // activeIndex: '1',
        // activeIndex2: '1'
      };
    },
    methods: {
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    }
  }
</script>
<style>
	.el-submenu__icon-arrow, .el-icon-arrow-down{
		display:none;
	}
	.el-menu.el-menu--horizontal{
		border-bottom:0rem !important;
		color:red
	}
</style>