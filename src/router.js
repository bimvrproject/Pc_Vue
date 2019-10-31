import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
// // 页面刷新时，重新赋值token  
// if (sessionStorage.getItem('token')) {  
// store.commit('set_token', sessionStorage.getItem('token'))  
// }
export default new Router({
	mode: 'history',
	routes: [
		{
			path: "/",
			name: "community",
			component: () => import("./views/user/community.vue"),
			// children:[
			// 	{
			// 		path: 'baocun',
			// 		name: "baocun",
			// 		component: () => import('./views/user/baocun.vue'),
			// 	},
			// 	{
			// 		path: 'xiugai',
			// 		name: "xiugai",
			// 		component: () => import('./views/user/xiugai.vue'),
			// 	},
			// 	{
			// 		path: 'about',
			// 		name: "about",
			// 		component: () => import('./views/user/about.vue'),
			// 	},
			// ]
		},
		{
			path: "/Login",
			name: "Login",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user/Login.vue"),
			children: [
				
			]
		},
		{
			path: "/sbjkbiao",
			name: "sbjkbiao",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user/sbjkbiao.vue")
		},
		{
			path: "/sfjianchapz",
			name: "sfjianchapz",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user/sfjianchapz.vue")
		},
		{
			path: "/gxmoxin",
			name: "gxmoxin",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user/gxmoxin.vue")
		},
		{
			path: "/gxtuzhi",
			name: "gxtuzhi",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user/gxtuzhi.vue")
		},
		{
			path: "/gxcailiao",
			name: "gxcailiao",
			meta: {
				// requireAuth: true
			}, 
			component: () => import("./views/user/gxcailiao.vue")
		},
		{
			path: "/gxpengzhuang",
			name: "gxpengzhuang",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user/gxpengzhuang.vue")
		},
		{
			path: "/jztuzhi",
			name: "jztuzhi",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user/jztuzhi.vue")
		},
		{
			path: "/jzcailiao",
			name: "jzcailiao",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user/jzcailiao.vue")
		},
		{
			path: "/Register",
			name: "Register",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user/Register.vue")
		},
		{
			path: "/jcpznumber",
			name: "/jcpznumber",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user//jcpznumber.vue")
		},
		{
			path: "/onepengzhuang",
			name: "/onepengzhuang",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user//onepengzhuang.vue")
		},
		{
			path: "/twopengzhuang",
			name: "/twopengzhuang",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user//twopengzhuang.vue")
		},
		{
			path: "/Thirdpengzhuang",
			name: "/Thirdpengzhuang",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user//Thirdpengzhuang.vue")
		},
		{
			path: "/endpengzhuang",
			name: "/endpengzhuang",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user//endpengzhuang.vue")
		},
		{
			path: "/newjzmodel",
			name: "/newjzmodel",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user//newjzmodel.vue")
		},
		{
			path: "/information",
			name: "/information",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user//information.vue")
		},
		{
			path: "/personnel",
			name: "/personnel",
			meta: {
				// requireAuth: true
			},
			component: () => import("./views/user//personnel.vue")
		}
	]
});
