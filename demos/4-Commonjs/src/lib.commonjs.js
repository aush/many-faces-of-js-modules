var greetings1 = 'Greetins from the lib: commonjs';

function greet() {
  return greetings1;
};

var greetings2 = 'Hello from the lib: commonjs';

var hello = function () {
  return greetings2;
};

module.exports = { greet: greet, hello: hello };