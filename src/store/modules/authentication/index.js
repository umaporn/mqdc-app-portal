import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
	status: '',
	clientToken: localStorage.getItem('clientToken') || '',
	user: {},
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};
