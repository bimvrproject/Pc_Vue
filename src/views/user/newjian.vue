<template>
	<div>
			<ul class="animated fadeInRight newjiantop" v-show="tian">
				<li v-for="(item, index) in arr" :key="index" @click="fnt()" class="xm">
				  <div class="hqtp">
						<img src="" alt="">获取图片
					</div>
					<div class="xmtitle">
						<h4 class="xmmc">项目名称</h4>
						<div class="start">起始时间:2019年06月</div>
						<div class="end">竣工时间:2019年06月</div>
					</div>
				</li>
				<li @click="fns" class="tianjia"></li>
			</ul>
	   <Newxm v-show="xmxinayin"></Newxm>
		<!-- <Newjian v-show="xianyin"></Newjian> -->
	</div>
</template>

<script>
import Newxm from "./newxm";
export default {
	data() {
		return { 
			arr: [],
			xmxinayin:false,
			xianyin:false,
			tian:true
		};
	},
	components:{
		Newxm,
	},
	methods: {
		fns() {
			this.arr.push(6);
		},
		fnt(index){
			// this.arr.splice(index,1)
		 //点击当前创建页面的时候点开填写项目表，同时上边的创建项目消失
			 this.xmxinayin = true;
			 this.tian = false;
			 this.$eventbus.$emit("shows");
		}
	}
};
</script>
<style scoped>
.newjiantop {
	width:1919px;
	height:220px;
	background: rgba(255, 255, 255, 0.2);
	position: fixed;
	top: 68px;
	left: 1px;
	overflow-x:auto;
}
/* .newjiantop li {
	list-style: none;
	width: 176px;
	height: 190px;
  background:red; 
	float: left;
	margin-left: 15px;
	margin-top: 20px;
	margin-bottom: 10px;
} */
.tianjia {
	list-style: none;
	width: 176px;
	height: 190px;
		/* background:red; */
	float: left;
	margin-left: 15px;
	margin-top: 20px;
	margin-bottom: 10px;
	background: url(../../assets/image/jia4@2x.png) no-repeat;
	background-size: 167px 180px;
}
.xm{
	list-style: none;
	width: 176px;
	height:178px;
	background:red; 
	float: left;
	margin-left: 15px;
	margin-top: 20px;
	margin-bottom: 10px;
	
}
/* 获取图片 */
.hqtp{
	 width:173px;
	 height:110px;
	 background:plum;
	}
	/* 项目名称 */
	.xmtitle{
		width:173px;
		height:68px;
		background:pink;
	}
	.xmmc{
		width:173px;
		height:30px;
	/* 	background:green; */
		font-size:18px;
		font-style: normal;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:30px;
	}
	.start{
		width:173px;
		height:15px;
		/* background:blue; */
		font-size:12px;
		text-align: center;
		margin-bottom:5px;
	}
	.end{
			width:173px;
			height:15px;
		/* 	background:blue; */
			font-size:12px;
			text-align: center;
	}
</style>
