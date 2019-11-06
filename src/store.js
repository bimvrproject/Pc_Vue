import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  token:sessionStorage.getItem("token") || "",
	phone:sessionStorage.getItem("phone") || "",
	// Printscreen:JSON.parse(sessionStorage.getItem("Printscreen") || '[]')
  },
  mutations: {
	 
	setPhone(state,phone){
		state.phone=phone;
	},
    //设置vuex的token
    settoken(state, token) {
		state.token = token;
		// localStorage.token=token;
    },
	deletePhone(state,payload){
		state.phone=''
	},
	//删除sessionStorage
	deletetoken(state,payload){
		sessionStorage.clear();
	},
	//截图实施更新
	// setPrintscreen(state,payload){
	// 	state.Printscreen.push(payload)
	// }
  },
  actions: {},
  getters: {}
});
// 订阅
store.subscribe((mutations, state)=>{
		sessionStorage.clear('phone');
    console.log('subscribe->', state.phone)
})
// 导出模块
export default store;
