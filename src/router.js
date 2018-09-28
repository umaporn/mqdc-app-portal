import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router)

export default new Router({
	mode:   'history',
	base:   process.env.BASE_URL,
	routes: [
	{
		path:      '/',
		name:      'home',
		component: Home,
	},
	{
		path:      '/shop',
		name:      'shop',
		component: () => import('./views/Shop/ShopList.vue'),
	},
	{
		path:      '/shop-add',
		name:      'shop-add',
		component: () => import('./views/Shop/ShopAdd.vue'),
	},
	], } )