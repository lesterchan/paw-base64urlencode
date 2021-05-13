const path = require('path');

const name = 'Base64URLEncode';

module.exports = {
  mode: 'production',
  entry: `./src/${name}.js`,
  output: {
    path: path.resolve(__dirname, `./build/com.lesterchan.PawExtensions.${name}`),
    filename: `${name}.js`,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    fallback: {
      'buffer': require.resolve('buffer/'),
      'crypto': require.resolve('crypto-browserify'),
      'stream': require.resolve('stream-browserify'),
    },
  },
};
