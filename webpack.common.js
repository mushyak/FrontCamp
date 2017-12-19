const path = require('path');

module.exports = {
	target: "web",

	entry: {
		js: "./src/scripts/main.js",
		css: "./src/styles/styles.css",
		fetch: "./node_modules/whatwg-fetch/fetch.js",
		promise: "./node_modules/promise-polyfill/promise.js"
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle-[name].js',
		publicPath: "./dist"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, "src/scripts")],
				loader: 'babel-loader'
			},
			{
				test: /\.js$/,
				include: /node_modules/
			},
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, "src/styles")],
				use: ['style-loader', 'css-loader']
			}
		]
	},

	devServer: {
		contentBase: [path.join(__dirname, "dist"), path.join(__dirname, "src")],
		compress: true,
		port: 9000
	},

	resolveLoader: {
		alias: {
			'custom-loader': path.resolve(__dirname, 'src/customLoader/customLoader.js')
		}
	}
};
