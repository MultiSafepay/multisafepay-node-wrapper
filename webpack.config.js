const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/multisafepay.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist', 'es5'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'nodejs-wrapper',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        /* options: see below */
      }),
    ],
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: ['ts-loader'], exclude: /node_modules/ }],
  },
};
