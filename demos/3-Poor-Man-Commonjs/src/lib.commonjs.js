var greetings1 = 'Greetins from the lib: poor man\'s commonjs';

function greet() {
  return greetings1;
};

var greetings2 = 'Hello from the lib: poor man\'s commonjs';

var hello = function () {
  return greetings2;
};

module.exports = { greet: greet, hello: hello };