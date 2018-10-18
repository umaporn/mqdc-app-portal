const getMessages = (context) => {
	context.commit('MESSAGES_UPDATED');
};

export default {
	getMessages,
};
