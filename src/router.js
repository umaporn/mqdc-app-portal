import Vue from 'vue';
import Router from 'vue-router';
import moment from 'moment';
import axios from 'axios';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import ShopList from './views/Shop/ShopList.vue';
import ShopAdd from './views/Shop/ShopAdd.vue';
import store from './store';

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

const clientTokenTimestamp = localStorage.getItem('clientTokenTimestamp') || '';
const clientToken = localStorage.getItem('clientToken') || '';

router.beforeEach((to, from, next) => {
	if (!clientTokenTimestamp || moment().unix() === clientTokenTimestamp) {
		store.dispatch('authentication/authentication');
	}

	axios.defaults.headers.common.Authorization = `Bearer ${clientToken}`;
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters['login/status']) {
			next();
			return;
		}
		next('/login');
	} else {
		next();
	}
});

export default router;
