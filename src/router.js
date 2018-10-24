import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import ShopList from './views/Shop/ShopList.vue';
import ShopAdd from './views/Shop/ShopAdd.vue';
import store from './store';
import { mapGetters } from 'vuex';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				requiresAuth: false,
			},
		},
		{
			path: '/shop',
			name: 'shop',
			component: ShopList,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/shop-add',
			name: 'shop-add',
			component: ShopAdd,
			meta: {
				requiresAuth: true,
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	store.dispatch('authentication/authentication');
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters['authentication/authStatus']) {
			next();
			return;
		}
		next('/login');
	} else {
		next();
	}
});

export default router;
