<template>
  <div>
<!--    <p>单选框</p>
    <ul>
      <li v-for="(item,index) in radioList" :key="index" :class="selectedNum==index?'active':''" @click="select(index)">{{item}}</li>
    </ul>
 -->
    <p>多选框</p>
    <ul>
      <li v-for="(item,index) in checkboxList" :key="item" :class="checkbox.includes(index)?'active':''" @click="check(index)">{{item}}</li>
   
   <!-- <button @click="letsGetThisFuckingCheck">{{isCheckAll?'取消全选':'选择全部'}}</button> -->
	  <button @click="checkAll">选择全部</button>
		<button @click="clearCheckbox">取消全选</button>
	<button @click="fabu">发布</button>
	 </ul>
  <!--  <button @click="checkOpposite">反选</button> -->
	<button @keyup.13="fn" style="width:50px;height:20px;background:red;">
		
	</button>
		<h2><i></i><input type="button" value="忘记密码?" class="btn1"></h2>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      // selectedNum:"",
      // radioList: ["某个元素", "某个元素", "某个元素", "某个元素", "某个元素"],
      checkbox:[],
      checkboxList:["某个元素", "某个元素", "某个元素", "某个元素", "某个元素","某个元素", "某个元素"],
    };
  },

  computed: {
    //判断是否全部选中
    isCheckAll(){
      if(this.checkbox.length==this.checkboxList.length){
        return true;
      }
      return false;
    }
  },
  methods: {
		fn(){
			this.fabu()
		},
		fabu(){
			alert(1231)
			sessionStorage.setItem('cgcgcg', JSON.stringify(this.checkbox));
		},
    //单选
    select(i) {
      this.selectedNum = i;
    },
    //多选
    check(i){
      var idx = this.checkbox.indexOf(i);
      //如果已经选中了，那就取消选中，如果没有，则选中
      if(idx>-1){
				
        this.checkbox.splice(idx,1);
      }else{
        this.checkbox.push(i);
      }
			sessionStorage.setItem('duoxuan', JSON.stringify(this.checkbox));
    },
    // 判断全选还是全取消的真假
    // letsGetThisFuckingCheck(){
    //   if(this.isCheckAll){
    //     this.clearCheckbox();
    //   }else{
    //     this.checkAll()
    //   }
    // },
    //选中全部
    checkAll(){
      var len = this.checkboxList.length;
      this.checkbox = [];
      for(var i=0;i<len;i++){
        this.checkbox.push(i);
      }
			sessionStorage.setItem('quanxuan', JSON.stringify(this.checkbox));
    },
    //清空选择
    clearCheckbox(){
      this.checkbox = [];
		sessionStorage.setItem('qingkongquanbu', JSON.stringify(this.checkbox));
    },
    //反选
  //   checkOpposite(){
  //     console.log(1)
  //     var len = this.checkboxList.length;
  //     var idx;
  //     for(var i=0;i<len;i++){
  //       idx = this.checkbox.indexOf(i)
  //       //已经选中的删去，没选中的加进去
  //       if(idx>-1){
  //         this.checkbox.splice(idx,1);
  //       }else{
  //         this.checkbox.push(i);
  //       }
  //     }
		// sessionStorage.setItem('relea', JSON.stringify(this.checkbox));
  //   }
  }
};
</script>
<style scoped>
li{
  display: inline-block;
  font-size: 16px;
  padding: 5px;
  background-color: #e6e6e6;
  margin: 5px 10px;
  cursor: pointer;
}
.active {
  border: 2px solid red;
}
.btn1{
				width:70%;	
					color:#000;
						border: 1px solid black;
						height: 0.6rem;
						border-radius: 0.3rem;
						padding-left: 0.2rem;
						background: #ccc;
			}
</style>




