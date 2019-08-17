<template>
	<div>
		<div class="xmb" v-show="biao">
			<h2 class="xmtx">项目信息填写</h2>
			<form action="" class="box">
				<div class="mc"><i class="mc1">项目名称 ：</i><el-input class="mc11"  v-model="input" placeholder="请输入项目名称"></el-input></div>
				<div class="ks"><!-- <i class="ks1">开始时间 ：</i> -->
				   <div class="block">
							<span class="demonstration">开始时间 ：</span>
							<el-date-picker
								v-model="value1"
								type="date"
								placeholder="选择开始日期"
								class="startdata"
								>
							</el-date-picker>
          </div>
				</div>
				<div class="jg">
					<!-- <i class="jg1">结束时间 ：</i> -->
					    <div class="block">
					  		<span class="demonstration">结束时间 ：</span>
					  		<el-date-picker
					  			v-model="value2"
					  			type="date"
					  			placeholder="选择结束日期"
					  			class="enddata"
					  			>
					  		</el-date-picker>
					  </div>
				</div>
				<div class="dd"><i class="dd1">项目地点 ：</i><el-input class="mc11"  v-model="input1" placeholder="请输入项目地点"></el-input></div>
				<div class="bz"><i class="bz1">备注信息 ：</i>
				  <el-input
						type="textarea"
						:rows="5"
						placeholder="请输入备注信息"
						v-model="textarea"
						class="bzxx"
						>
					</el-input>
					</div>
					<el-row>
						<el-button type="primary" class="tj" @click='fntijiao'>提交</el-button>
					</el-row>
			</form>
		<!-- 	<Quanxian v-show="qx"></Quanxian> -->
		<!-- 权限人员 -->
		</div>
			<!-- 权限人员 -->
			<div class="quanxianbiao" v-show="quanxianbiao">
			 <div class="quanxianbox">
				 <div class="quanxiantitle">人员信息填写</div>
				 <div class="qaunxiangroup">
					 <div class="quanxianzh">
							<div class="qxzh1"><i class="qxzh11">账号 ：</i><el-input v-model="input3" placeholder="请输入账号" class="input3"></el-input></div>
							<div class="qxzh2"><i class="qxzh22">账号 ：</i><el-input v-model="input4" placeholder="请输入账号" class="input4"></el-input></div>
							<div class="qxzh3"><i class="qxzh33">账号 ：</i><el-input v-model="input5" placeholder="请输入账号" class="input5"></el-input></div>
							<div class="qxzh4"><i class="qxzh44">账号 ：</i><el-input v-model="input6" placeholder="请输入账号" class="input6"></el-input></div>
							<div class="qxzh5"><i class="qxzh55">账号 ：</i><el-input v-model="input7" placeholder="请输入账号" class="input7"></el-input></div>
							<div class="qxzh6"><i class="qxzh66">账号 ：</i><el-input v-model="input8" placeholder="请输入账号" class="input8"></el-input></div>
							<div class="qxzh7"><i class="qxzh77">账号 ：</i><el-input v-model="input9" placeholder="请输入账号" class="input9"></el-input></div>			
					 </div>
					 <div class="quanxianqx">
						 <div class="qxqx1">
							 <i class="qxqx11">账号权限 ：</i>
						   <el-select v-model="value" placeholder="请选择">
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
						 </div>
				    <span class="shanchu1"><img src="../../assets/image/shanchu@2x.png" alt="" class="scimg1"></span>
						
						 <div class="qxqx2">
						 		<i class="qxqx11">账号权限 ：</i>
						   <el-select v-model="value1" placeholder="请选择">
						 			<el-option
						 				v-for="item in options2"
						 				:key="item.value"
						 				:label="item.label"
						 				:value="item.value">
						 				</el-option>
						 		</el-select>
						 </div>
						  <span class="shanchu2"><img src="../../assets/image/shanchu@2x.png" alt="" class="scimg2"></span>
						 
						  <div class="qxqx2">
						 		<i class="qxqx11">账号权限 ：</i>
						   <el-select v-model="value1" placeholder="请选择">
						 			<el-option
						 				v-for="item in options2"
						 				:key="item.value"
						 				:label="item.label"
						 				:value="item.value">
						 				</el-option>
						 		</el-select>
						 </div>
						  <span class="shanchu3"><img src="../../assets/image/shanchu@2x.png" alt="" class="scimg3"></span>
						 
						  <div class="qxqx2">
						 		<i class="qxqx11">账号权限 ：</i>
						   <el-select v-model="value1" placeholder="请选择">
						 			<el-option
						 				v-for="item in options2"
						 				:key="item.value"
						 				:label="item.label"
						 				:value="item.value">
						 				</el-option>
						 		</el-select>
						 </div>
						  <span class="shanchu4"><img src="../../assets/image/shanchu@2x.png" alt="" class="scimg4"></span>
						 
						  <div class="qxqx2">
						 		<i class="qxqx11">账号权限 ：</i>
						   <el-select v-model="value1" placeholder="请选择">
						 			<el-option
						 				v-for="item in options2"
						 				:key="item.value"
						 				:label="item.label"
						 				:value="item.value">
						 				</el-option>
						 		</el-select>
						 </div>
						  <span class="shanchu5"><img src="../../assets/image/shanchu@2x.png" alt="" class="scimg5"></span>
						 
						  <div class="qxqx2">
						 		<i class="qxqx11">账号权限 ：</i>
						   <el-select v-model="value1" placeholder="请选择">
						 			<el-option
						 				v-for="item in options2"
						 				:key="item.value"
						 				:label="item.label"
						 				:value="item.value">
						 				</el-option>
						 		</el-select>
						 </div>
						  <span class="shanchu6"><img src="../../assets/image/shanchu@2x.png" alt="" class="scimg6"></span>
						 
						  <div class="qxqx2">
						 		<i class="qxqx11">账号权限 ：</i>
						   <el-select v-model="value1" placeholder="请选择">
						 			<el-option
						 				v-for="item in options2"
						 				:key="item.value"
						 				:label="item.label"
						 				:value="item.value">
						 				</el-option>
						 		</el-select>
						 </div>
						  <span class="shanchu7"><img src="../../assets/image/shanchu@2x.png" alt="" class="scimg7"></span>
						 
					 </div>
					  <!--权限提交按钮 -->
					 <div class="qxqxbutton"><el-button type="primary" class="qxqxbutton-tnp" @click="fntiijiaoqx">提交</el-button></div>
				 </div>
				
			 </div>
		  </div>
			<!-- 上传模型 -->
	<!-- 		<div class="getmx" > -->
				 <!-- <uploader :file-status-text="statusText" :key="uploader_key" :options="options3" class="uploader-example"
				           @file-success="onFileSuccess">
				   <uploader-unsupport></uploader-unsupport>
				   <uploader-drop>
				     <uploader-btn :directory="true" :single="true">选择文件夹</uploader-btn>
				   </uploader-drop>
				   <uploader-list></uploader-list>
				 </uploader> -->
				<Uploaderfile v-show="getmx"></Uploaderfile>
			<!-- </div> -->
	</div>
</template>

<script>
	 // import Quanxian from "./quanxian";
	  import Uploaderfile from "./uploaderfile";
	  export default {
	  data() {
	    return {
		     input: '',
				 value1:'',
				 value2:'',
				 input1:'',
				 input2:'',
				 textarea: '',
				 biao:true,
				 qx:false,
				 quanxianbiao:false,
				 getmx:false,
				 input3: '',
				 input4: '',
				 input5: '',
				 input6: '',
				 input7: '',
				 input8: '',
				 input9: '',
				 options: [{
          value: '选项1',
          label: '权限一'
        }, {
          value: '选项2',
          label: '权限二'
        }, {
          value: '选项3',
          label: '权限三'
        }
				],
        value: '',
				options2: [{
				  value1: '选项1',
				  label: '权限一'
				}, {
				  value1: '选项2',
				  label: '权限二'
				}, {
				  value1: '选项3',
				  label: '权限三'
				}
				],
				// uploader_key: new Date().getTime(),//这个用来刷新组件--解决不刷新页面连续上传的缓存上传数据（注：每次上传时，强制这个值进行更改---根据自己的实际情况重新赋值）
				// options3: {
				// 	target: api.Upload,//SpringBoot后台接收文件夹数据的接口
				// 	testChunks: false//是否分片-不分片
				// },
				// statusText: {
				//   success: '成功了',
				//   error: '出错了',
				//   uploading: '上传中',
				//   paused: '暂停中',
				//   waiting: '等待中'
				// }
	    }
	},
	// components:{
	// 	Quanxian,
	// },
	components:{
		Uploaderfile,
	},
	methods:{
		fntijiao(){
		//点提交的时候跳转到权限页
		// if( !this.input){
		// 	  alert("项目名称不能为空")
		// 	}else if(!this.value1){
		// 		alert("开始时间不能为空")
		// 	}else if(!this.value2){
		// 		alert('结束时间不能为空')
		// 	}else if(!this.input1){
		// 		alert("项目地点不能为空")
		// 	}else{
		// 		this.biao = false;
				//跳转页面
				this.biao = false;
				this.qx = true;
				this.quanxianbiao = true;
			},
			fntiijiaoqx(){
				this.quanxianbiao = false;
				this.biao = false;
				this.getmx = true;
			}
		}
	// }
}
</script>

<style scoped>
	/* 权限人员信息表 */
	.quanxianbiao{
		width:1700px;
		height:887px;
		background:rgba(255,255,255,0.3);
		position:absolute;
		top:126px;
		left:219px;
	}
	.quanxianbox{
		width:840px;
		height:887px;
		position:absolute;
		left:0;
		right:0;
		top:0;
		bottom:0;
		margin:auto;
		/* background:red; */
	}
	.quanxiantitle{
		width:840px;
		height:24px;
	/* 	background:pink; */
		padding-top:69px;
		padding-bottom:35px;
		font-size:24px;
	  color:#333333;
		}
		.qaunxiangroup{
			width:840px;
			height:758px;
		/* 	background:green; */
		}
		 .quanxianzh{
			 width:400px;
			 height:600px;
			 /* background:plum; */
			 float:left;
		}
		.quanxianqx{
			width:440px;
			height:600px;
			/* background:paleturquoise; */
			float:left;
		}
		.input3,.input4,.input5,.input6,.input7,.input8,.input9{
			width:200px;
			height:30px;
			}
		.qxzh11,.qxzh22,.qxzh33,.qxzh44,.qxzh55,.qxzh66,.qxzh77{
			font-size:18px;
		  color: #333333;
		}
		.qxzh1,.qxzh2,.qxzh3,.qxzh4,.qxzh5,.qxzh6,.qxzh7{
			padding-bottom:30px;
		}
		.qxqx11{
			font-size:18px;
			color: #333333;
			}
			.qxqx1,.qxqx2{
				margin-bottom:20px;
				width:400px;
			/* 	background:blue; */
				}
			.qxqxbutton-tnp{
				margin-top:20px;
				width:723px;
				height:36px;
				line-height:16px;
			}
		.shanchu1{
			 display:inline-block;
			 width:20px;
			 height:25px;
			 margin-left:3px;
			 position:absolute;
			 top:137px;
			 left:777px;
			 cursor:pointer;
		}
		.shanchu2{
			display:inline-block;
			width:20px;
			height:25px;
			margin-left:3px;
			position:absolute;
			top:196px;
			left:777px;
			cursor:pointer;
		}
		.shanchu3{
			display:inline-block;
			width:20px;
			height:25px;
			margin-left:3px;
			position:absolute;
			top:255px;
			left:777px;
			lcursor:pointer;
		}
	 .shanchu4{
	 	display:inline-block;
	 	width:20px;
	 	height:25px;
	 	margin-left:3px;
	 	position:absolute;
	 	top:315px;
	 	left:777px;
	 cursor:pointer;
	 }
	 .shanchu5{
	 	display:inline-block;
	 	width:20px;
	 	height:25px;
	 	margin-left:3px;
	 	position:absolute;
	 	top:375px;
	 	left:777px;
		cursor:pointer;
	 }
	 .shanchu6{
	 	display:inline-block;
	 	width:20px;
	 	height:25px;
	 	margin-left:3px;
	 	position:absolute;
	 	top:435px;
	 	left:777px;
	 cursor:pointer;
	 }
	 .shanchu7{
	 	display:inline-block;
	 	width:20px;
	 	height:25px;
	 	margin-left:3px;
	 	position:absolute;
	 	top:495px;
	 	left:777px;
		cursor:pointer;
	 }
		.scimg1,.scimg2,.scimg3,.scimg4,.scimg5,.scimg6,.scimg7{
			width:100%;
			height:100%;
		}
	/* 权限人员信息表 结束*/
i{
	font-style:normal;
	font-size:18px;
	color: #333333;
	font-weight:400;
}
 .xmb{
	 width:1700px;
	 height:887px;
	 background:rgba(255,255,255,0.3);
	 position:absolute;
	 top:164px;
	 left:219px;
	 padding-top:50px;
 }
 /* 项目填写标题 */
 .xmtx{
	  width:144px;
		height:24px;
	/* 	background:red; */
		font-style:none;
		margin-left:800px;
		margin-bottom:50px;
	 }

.mc11{
	 width:724px;
	 height:30px;
	 margin-bottom:35px;
	}
	.demonstration{
		 font-weight:400;
		 font-size:18px;
		 color: #333333;
		}
	.startdata,.enddata,.bzxx{
		width:724px;
		height:30px;
		margin-bottom:35px;
	}	
	.bz1{
		display:inline-block;
		padding-bottom:38px;
		}
	.tj{
		width:724px;
		height:45px;
		margin-bottom:35px;
		margin-top:200px;
		margin-left:80px;
	  font-size:16px;
		color:#FFFFFF;
		font-weight:400;
	}
	
	/* 上传 */
	.uploader-example {
	  width: 90%;
	  padding: 15px;
	  margin: 40px auto 0;
	  font-size: 12px;
	  box-shadow: 0 0 10px rgba(0, 0, 0, .4);
	}
	 
	.uploader-example .uploader-btn {
	  margin-right: 4px;
	}
	 
	.uploader-example .uploader-list {
	  max-height: 440px;
	  overflow: auto;
	  overflow-x: hidden;
	  overflow-y: auto;
	}
</style>
