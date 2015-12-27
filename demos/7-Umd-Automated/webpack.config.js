var path = require('path');

module.exports = {
  entry: './src/lib.umd.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'lib.umd.js',
    library: "lib",
    libraryTarget: "umd"
  }
};
