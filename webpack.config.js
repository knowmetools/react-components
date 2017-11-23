const path = require('path');


const BUILD_DIR = path.resolve(__dirname, 'build');
const SOURCE_DIR = path.resolve(__dirname, 'src');


module.exports = {
  entry: path.resolve(SOURCE_DIR, 'index.ts'),
  module: {
    rules: [
      {
        include: SOURCE_DIR,
        loader: 'awesome-typescript-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: 'index.js',
    library: 'KMReactComponents',
    libraryTarget: 'umd',
    path: BUILD_DIR,
  },
  resolve: {
    extensions: ['ts', 'tsx', 'js'],
  },
};
