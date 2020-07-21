const devConfig = require('./webpack.config.dev');

const prodConfig = { ...devConfig };

prodConfig.mode = 'production';
prodConfig.devtool = undefined;

module.exports = prodConfig;
