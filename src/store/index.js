import Vue from 'vue';
import Vuex from 'vuex';
import { authentication } from './modules/authentication';
import { home } from './modules/home';

Vue.use( Vuex );

export default new Vuex.Store( {
	modules: {
		authentication,
		home,
	},
} );