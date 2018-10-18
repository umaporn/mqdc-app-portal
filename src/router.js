import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				requiresAuth: false,
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	store.dispatch('authentication/authentication');
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters.authStatus) {
			next();
			return;
		}
		next('/login');
	} else {
		next();
	}
});

export default router;
