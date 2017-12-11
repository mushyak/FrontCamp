const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: [path.join(__dirname, "dist"), path.join(__dirname, "./")],
		compress: true,
		port: 9000
	}
});