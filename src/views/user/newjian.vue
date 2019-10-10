<template>
	<div>
		<ul class="animated fadeIn newjiantop" v-show="tian">
			<li @click="fns" class="tianjia"></li>
			<li v-for="(item, index) in projectLists" :key="index" class="xmn" @click="fnt(index)">
				<div class="hqtp">
					<span class="delimg"><img src="../../assets/image/shanchu@2x.png"  @click.stop="delproject(index)" /></span>
					<img class="ttu" :src="item.projectModelAddr" alt="" />
				</div>
				<div class="xmtitle">
					<h4 class="xmmc">{{item.projectName}}</h4>
					<span class="start">起始时间:{{ dateFormat(item.createTime) }}</span>
					<span class="end">竣工时间:{{ dateFormat(item.endTime) }}</span>
				</div>
			</li>
		</ul>
   <Newxm v-show="xmxinayin"></Newxm>
  </div>
</template>
<script>
/*eslint-disable*/
import api from '@/api/api.js';
import axios from 'axios';
import Newxm from './newxm';
export default {
	data() {
		return {
			projectLists: [],
			xmxinayin: false,
			xianyin: false,
			tian: true
		};
	},
	components: {
		Newxm
	},
	methods: {
		fns() {
			this.projectLists.unshift(0);
		},
		fnt(index) {
			//点击当前创建页面的时候点开填写项目表，同时上边的创建项目消失
			if (this.projectLists[index].projectId == undefined) {
				this.xmxinayin = true;
				this.$router.push("/information");
				this.$eventbus.$emit('shows');
			} else {
				var id = this.projectLists[index].projectId;
				sessionStorage.setItem('projectid', id);
				this.$router.push({ name: '/newjzmodel', params: { project_id: this.projectLists[index].projectId } });
				// this.$router.push("/newjzmodel")
			}
		},
		dateFormat: function(time) {
			var date = new Date(time);
			var year = date.getFullYear();
			/* 在日期格式中，月份是从0开始的，因此要加0的123
			 * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
			 * */
			var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
			// var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
			// 拼接
			// return year + '年' + month + '月' + day + '日';
			return year + '年' + month + '月';
		},
		delproject(index) {
			var id = this.projectLists[index].projectId;
			if(id == undefined){
				this.projectLists.splice(index, 1)
			}else{
					this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				})
					.then(() => {
						// var id = this.projectLists[index].projectId;
						if (id != '' && id != null && id != undefined) {
							axios.delete(api.DeleteProject + '/' + id).then(reulst => {
								this.$message({
									type: 'success',
									message: '删除成功!'
								});
									this.projectLists.splice(index, 1);
							});
						}
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除'
						});
					});
			}
		
		}
	},
	created() {
		axios.get(api.BindingProject).then(result => {
			console.log(result.data+"反思");
			this.projectLists = result.data.projectList;
		});
	}
};
</script>

<style scoped>
.newjiantop {
  width:59.9rem;
  /* height:4.8075rem; */
  background: rgba(255, 255, 255, 0.2);
/* position: fixed;
  top:2.3rem;
  left:0rem; */
  overflow-x: auto;
/* 	background:plum; */
}

.tianjia {
  list-style: none;
  width:4.6rem;
  height:4.4rem;
  float: left;
  margin-left:0.37875rem;
  margin-top:0.2rem;
 /* margin-bottom:0.2125rem; */
  background: url(../../assets/image/jia4@2x.png) no-repeat;
  background-size:4.6rem 4.4rem;
}
.xmn{
  list-style: none;
  width:4.6rem;
  height:4.5rem;
  background: #ffffff;
  float: left;
  margin-left:0.32rem;
  margin-top:0.15rem;
  padding-left: 0px;
  padding-right: 0px;
	/* background:red; */
}
/* 获取图片 */
.hqtp {
  width:4.6rem;
  height:2.3rem;
  position: relative;
	background:plum;
}
.ttu {
 width:4.6rem;
  height: 100%;
}
/* 项目名称 */
.xmtitle {
  cursor: pointer;
  width:4.6rem;
  height:1.8rem;
  font-size:0.5rem;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
/* 	background:red; */
}
.xmmc {
  width:4.6rem;
  height:0.7rem;
  font-size:0.52rem;
  font-style: normal;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height:0.6rem;
	/* background:blue; */
  text-align: center;
}
.start,.end {
  display:inline-block;
  width:4.6rem;
  height:0.4rem;
  font-size:0.3rem;
  text-align: center;
  margin-bottom:0.05rem;
  /* padding-left:0.1rem; */
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  font-family: Microsoft YaHei;
  padding:0rem !important;
/* 	background:plum; */
}
/* 图片删除按钮 */
 .delimg{
	 width:0.6rem;
	 height:0.8625rem;
	 
 }
 .delimg img {
  width:0.3rem;
  height:0.3625rem;
  position: absolute;
  top:0rem;
  right:0rem;
  cursor: pointer;
	background:rgba(225,225,225,.3);
	padding:0.3rem;
	/* padding-right:0.6rem;
	padding-top:0.4rem;
	padding-left:0.9rem;
	padding-bottom:0.8rem; */
	/* border-radius:0.1rem 0.1rem 0rem 1.2rem; */
}
 </style>
