import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import ShopList from './views/Shop/ShopList.vue';
import ShopAdd from './views/Shop/ShopAdd.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
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
		},
		{
			path: '/shop',
			name: 'shop',
			component: ShopList,
		},
		{
			path: '/shop-add',
			name: 'shop-add',
			component: ShopAdd,
		},
	],
});
