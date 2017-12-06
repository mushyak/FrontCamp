const path = require('path');

module.exports = {
	target: "web",

	entry: './scripts/main.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	// resolve: {
	// 	modules: ["node_modules"],
	// 	extensions: ["js"]
	// },

	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "scripts"),
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, "styles"),
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
				],
			}
		]
	}
};
