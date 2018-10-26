import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
	status: '',
	userToken: localStorage.getItem('userToken') || '',
	userProfile: {},
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};
