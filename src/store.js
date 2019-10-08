import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
	phone:""
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
	//删除token
	deletetoken(state){
		state.token = ''
		localStorage.removeItem('token')
	}
  },
  actions: {},
  getters: {}
});
