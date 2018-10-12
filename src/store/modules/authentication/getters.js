const getters = {
	isLoggedIn: state => !!state.token,
	authStatus: state => state.status,
};
export {
	getters,
};