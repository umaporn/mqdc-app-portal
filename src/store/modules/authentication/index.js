import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

const initialState = {
	status: '',
	token: localStorage.getItem('token') || '',
	user : {}
}

export const authentication = {
	namespaced: true,
	state: initialState,
	actions,
	mutations,
	getters,
};
