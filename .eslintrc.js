module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'linebreak-style': 0,
		indent: [2, 'tab'],
		'no-tabs': 0,
		'max-len': ['error', { code: 150 }],
		"no-param-reassign": 0,
		"prefer-destructuring": ["error", {"object": false, "array": false}]
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
