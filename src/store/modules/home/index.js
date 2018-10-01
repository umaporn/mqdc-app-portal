import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getter from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use( Vuex );

export default new Vuex.Store( {
	modules: {
		state,
		getter,
		actions,
		mutations
	},
} );