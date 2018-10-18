const state = {
	status: '',
	userToken: localStorage.getItem('userToken') || '',
	user: {},
};

export default state;
