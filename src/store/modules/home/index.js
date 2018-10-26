import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
	message: '',
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
