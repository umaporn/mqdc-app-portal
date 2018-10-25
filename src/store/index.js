import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './modules/authentication';
import login from './modules/login';
import home from './modules/home';
import shop from './modules/shop';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	modules: {
		authentication,
		login,
		home,
		shop,
	},
});
