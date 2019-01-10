const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('../client/webpack.config.js');
const options = {
  contentBase: '../client/dist/',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});