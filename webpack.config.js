var path = require('path');

module.exports = {
  entry: [
    './src/lib.global.js',
    './src/lib.commonjs.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'demo.js'
  }
};
