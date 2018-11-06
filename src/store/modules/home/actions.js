const actionMessage = (context) => {
	context.commit('MESSAGES_UPDATED', 'Home Page');
};

export default {
	actionMessage,
};
