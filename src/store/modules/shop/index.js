import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
	status: '',
	shopList: [],
	shopCategories: [],
	shopTiers: [],
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
