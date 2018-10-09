import { actions } from './actions';
import { states } from './states';
import { mutations } from './mutations';
import { getters } from './getters';

export const authentication = {
	namespaced: true,
	states,
	actions,
	mutations,
	getters,
};
