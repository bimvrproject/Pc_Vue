import Vue from "vue";
import Router from "vue-router";
// import Login from '/src/views/user/Login.vue';
// import Register from '/src/views/user/Register.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		// {
		//   path: "/home",
		//   name: "home",
		//   component: Home
		// },
		// {
		//   path: "/about",
		//   name: "about",
		//   // route level code-splitting
		//   // this generates a separate chunk (about.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: () =>
		//     import(/* webpackChunkName: "about" */ "./views/About.vue")
		// },
		{
			path: "/",
			name: "login",
			meta: {
				requireAuth: true
			},
			component: () => import("./views/user/Login.vue"),

			children: [{
					path: 'jzmoxin',
					name: "jzmoxin",
					component: () => import('./views/user/jzmoxin.vue'),
				},
				{
					path: 'jztuzhi',
					name: "jztuzhi",
					component: () => import('./views/user/jztuzhi.vue'),
				},
				{
					path: 'jzcailiao',
					name: "jzcailiao",
					component: () => import('./views/user/jzcailiao.vue'),
				},
				{
					path: 'gxmoxin',
					name: "gxmoxin",
					component: () => import('./views/user/gxmoxin.vue'),
				},
				{
					path: 'gxtuzhi',
					name: "gxtuzhi",
					component: () => import('./views/user/gxtuzhi.vue'),
				},
				{
					path: 'sbmoxin',
					name: "sbmoxin",
					component: () => import('./views/user/sbmoxin.vue'),
				},
				{
					path: 'gxcailiao',
					name: "gxcailiao",
					component: () => import('./views/user/gxcailiao.vue'),
				},
				{
					path: 'newjian',
					name: "newjian",
					component: () => import('./views/user/newjian.vue'),
				},
						{
					path: 'gxpengzhuang',
					name: "gxpengzhuang",
					component: () => import('./views/user/gxpengzhuang.vue'),
				},
				{
					path: 'sfjianchapz',
					name: "sfjianchapz",
					component: () => import('./views/user/sfjianchapz.vue'),
				},
			]
		},
	
		{
			path: "/Register",
			name: "Register",
			meta: {
				requireAuth: true
			},
			component: () => import("./views/user/Register.vue")
		},
	]
});
