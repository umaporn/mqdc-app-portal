const state = {
	status: '',
	userToken: localStorage.getItem('userToken') || '',
	userProfile: {},
};
export default state;
