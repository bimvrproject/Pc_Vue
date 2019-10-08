<template>
	<div>
		
	</div>
</template>

<script>
// import Quanxian from "./quanxian";
import Uploaderfile from './uploaderfile';
import axios from 'axios';
import api from '../../api/api.js';
export default {
	data() {
		return {
			input: '',
			value1: '',
			value2: '',
			input1: '',
			input2: '',
			textarea: '',
			//项目表
			biao: true,
			qx: false,
			//权限
			quanxianbiao:false,
			getmx: false,
			input3: '',
			input4: '',
			input5: '',
			input6: '',
			input7: '',
			input8: '',
			input9: '',
			options: [
				{
					value: '选项1',
					label: '权限一'
				},
				{
					value: '选项2',
					label: '权限二'
				},
				{
					value: '选项3',
					label: '权限三'
				}
			],
			value: '',
			options2: [
				{
					value1: '选项1',
					label: '权限一'
				},
				{
					value1: '选项2',
					label: '权限二'
				},
				{
					value1: '选项3',
					label: '权限三'
				}
			]
		};
	},
	components: {
		Uploaderfile
	},
	methods: {
		fntijiao() {
			localStorage.removeItem('projectid');
			//点提交的时候跳转到权限页
			if (!this.input) {
				alert('项目名称不能为空');
			} else if (!this.value1) {
				alert('开始时间不能为空');
			} else if (!this.value2) {
				alert('结束时间不能为空');
			} else if (!this.input1) {
				alert('项目地点不能为空');
			} else {
				this.biao = false;
				this.qx = true;
				this.quanxianbiao = true;
				// // 新增项目
				axios
					.post(api.AddProject, { projectName: this.input, startTime: this.value1, endTime: this.value2, projectAddress: this.input1, projectContent: this.textarea })
					.then(result => {
						console.log(result.data);
					});
			}
		},
		fntiijiaoqx() {
			this.quanxianbiao = false;
			this.biao = false;
			this.getmx = true;
			this.$router.push('/newjzmodel');
			this.$eventbus.$emit('cezhan');
		}
	}
};
</script>

<style scoped>
/* 权限人员信息表 */
.qxchange{
	width:5.3rem;
	height:0.9rem;
}
.quanxianbiao {
	width:51rem;
	height:30rem;
	background: rgba(255, 255, 255, 0.3);
	position: absolute;
	top:2.6rem;
	left:8rem;
	/* background:blue; */
}
.quanxianbox {
	width:18.25rem;
	height:18.25rem;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	background:red;
}
.quanxiantitle {
	width:17.199rem;
	height:0.4rem;
	background:pink;
	padding-top:1.15625rem;
	padding-bottom:0.7rem;
	font-size:0.5rem;
	color: #333333;
}
.qaunxiangroup {
	/* width: 840px;
	height: 758px; */
	/* 	background:green; */
}
.quanxianzh {
	/* width:8.5rem;
	height:13rem; */
	/* background:plum; */
	float: left;
	margin-left:2.3rem;
}
.quanxianqx {
	/* width:9rem; */
	/* height: 600px; */
	background:paleturquoise;
	float: left;
	margin-left:1.6rem;
}
.input3,
.input4,
.input5,
.input6,
.input7,
.input8,
.input9 {
	width:4.25rem;
	height:0.6rem;
}
.qxzh11,
.qxzh22,
.qxzh33,
.qxzh44,
.qxzh55,
.qxzh66,
.qxzh77 {
	font-size:0.3rem;
	color: #333333;
}
.qxzh1,
.qxzh2,
.qxzh3,
.qxzh4,
.qxzh5,
.qxzh6,
.qxzh7 {
margin-bottom:0.7rem;
}
.qxqx11 {
	font-size:0.3rem;
	color: #333333;
/* 	float:left; */
	/* margin-top:0.5rem; */
}
.qxqx1,
.qxqx2 {
	margin-bottom:0.59rem;
	/* width:8rem; */
	/* 	background:blue; */
}
.qxqxbutton-tnp {
	margin-top:0.5rem;
	width:13rem;
	height:1.1rem;
	line-height:0.8rem;
}

/* .shanchu3 {
	display: inline-block;
	width: 20px;
	height: 25px;
	margin-left: 3px;
	position: absolute;
	top: 255px;
	left: 777px;
	lcursor: pointer;
}
.shanchu4 {
	display: inline-block;
	width: 20px;
	height: 25px;
	margin-left: 3px;
	position: absolute;
	top: 315px;
	left: 777px;
	cursor: pointer;
}
.shanchu5 {
	display: inline-block;
	width: 20px;
	height: 25px;
	margin-left: 3px;
	position: absolute;
	top: 375px;
	left: 777px;
	cursor: pointer;
}
.shanchu6 {
	display: inline-block;
	width: 20px;
	height: 25px;
	margin-left: 3px;
	position: absolute;
	top: 435px;
	left: 777px;
	cursor: pointer;
}
.shanchu7 {
	display: inline-block;
	width: 20px;
	height: 25px;
	margin-left: 3px;
	position: absolute;
	top: 495px;
	left: 777px;
	cursor: pointer;
} */
.scimg1,
.scimg2,
.scimg3,
.scimg4,
.scimg5,
.scimg6,
.scimg7 {
	width: 100%;
	height: 100%;
}
/* 权限人员信息表 结束*/
i {
	font-style: normal;
	font-size: 18px;
	color: #333333;
	font-weight: 400;
}
.xmb {
	width:50.6rem;
	height:24.7rem;
	background: rgba(255, 255, 255, 0.3);
	position: absolute;
	top:3.5rem;
	left:7.8rem;
	padding-top:2.1rem;
}
/* 项目填写标题 */
.xmtx {
	width:18rem;
	height:0.8rem;
	font-size:0.625rem;
/* 	background:red; */
	font-style: none;
	margin-left:16rem;
	margin-bottom:1rem;
}
.mc1{
	font-weight: 400;
	font-size:0.4rem;
	color: #333333;
}
.mc11 {
	width:22.6rem;
	height:0.8rem;
	margin-bottom:0.8rem;
}
.demonstration {
	font-weight: 400;
	font-size:0.4rem;
	color: #333333;
}
.startdata,
.enddata,
.bzxx {
	width:22.625rem;
	height:0.9375rem;
	margin-bottom:1.09375rem;
}
.bz1 {
	display: inline-block;
	padding-bottom:0.6rem;
}
.tj {
	width:20.625rem;
	height:1.40625rem;
	margin-bottom:1.09375rem;
	margin-top:6.25rem;
	margin-left:2.8rem;
	font-size:0.5rem;
	color: #ffffff;
	font-weight: 400;
}
</style>
