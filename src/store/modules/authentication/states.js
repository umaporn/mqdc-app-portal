const state = {
	status: '',
	clientToken: localStorage.getItem('clientToken') || '',
	user: {},
};

export default state;
