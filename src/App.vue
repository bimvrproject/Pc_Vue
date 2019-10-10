<template>
  <div id="app" >
   <Zheader v-show="zheaderxy"></Zheader>
   <About v-show="aboutxy"></About>
    <router-view />
  </div>
 
</template>
<script>
 import Zheader from './components/header';
 import About from './components/about';
 export default {
  data(){
   return {
    zheaderxy:true,
	  aboutxy:false
   }
  },
  //2.注册
  components:{
   Zheader,
   About
  },
  //利用$on创建$eventbus事件
    created(){
		this.$eventbus.$on('abouts', () => {
			this.aboutxy = true;
		});
		 this.$eventbus.$on('aboutsbi', () => {
			this.aboutxy = false;
		});
    }
 }
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 width:100%;
 height:100%;
}
#nav {
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>