const path = require('path');


const BUILD_DIR = path.resolve(__dirname, 'build');
const SOURCE_DIR = path.resolve(__dirname, 'src');


module.exports = {
  entry: path.resolve(SOURCE_DIR, 'index.js'),
  output: {
    filename: 'index.js',
    library: 'KMReactComponents',
    libraryTarget: 'umd',
    path: BUILD_DIR,
  }
};
