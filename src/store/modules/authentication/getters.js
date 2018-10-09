export const getters = {
	authStatus: state => !!state.clientToken,
};