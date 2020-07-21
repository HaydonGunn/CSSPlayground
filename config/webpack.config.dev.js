const paths = require('./paths');

const webpackConfig = {
	mode: 'development',
	entry: {
		scripts: `${paths.root.flatbuild}/assets/src/scripts/scripts.js`,
	},
	output: {
		filename: '[name].js',
		jsonpFunction: 'customWebpackJsonp'
	},
	devtool: 'eval-source-map',
	optimization: {
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor'
				}
			}
		}
	},
	module: {
		rules: [{
			test: /^(?!.*\.{test,min}\.js$).*\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader'
			}
		}]
	},
	plugins: [
		//new VueLoaderPlugin()
	]
};

module.exports = webpackConfig;