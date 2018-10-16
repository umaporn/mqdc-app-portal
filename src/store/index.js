import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import shop from './modules/shop';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home,
		shop,
	},
});
