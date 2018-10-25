const getters = {
	status: state => !!state.userToken,
	userProfile: state => state.userProfile,
};

export default getters;
