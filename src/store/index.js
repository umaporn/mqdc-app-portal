import Vue from 'vue';
import Vuex from 'vuex';
import { authentication } from './modules/authentication';
import { login } from './modules/login';
import { home } from './modules/home';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		authentication,
		login,
		home,
	},
});
