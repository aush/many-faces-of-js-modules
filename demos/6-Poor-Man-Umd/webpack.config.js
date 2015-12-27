var path = require('path');

module.exports = {
  entry: './src/app.commonjs.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
