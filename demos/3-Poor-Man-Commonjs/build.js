var fs = require('fs');
var path = require('path');
var util = require('util');

var inputFileName = process.argv[2];
var outputFileName = process.argv[3];

fs.writeFileSync(outputFileName, util.format(
  'define("%s", function(module) {\n%s\n})', 
  path.parse(inputFileName).name, 
  fs.readFileSync(inputFileName)));