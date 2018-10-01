import Vue from 'vue';
import Vuex from 'vuex';
import * as state from './state';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use( Vuex );

export default new Vuex.Store( {
	modules: {
		state,
		getters,
		actions,
		mutations
	},
} );
