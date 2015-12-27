var greetings1 = 'Greetins from the lib: umd';

function greet() {
  return greetings1;
};

var greetings2 = 'Hello from the lib: umd';

var hello = function () {
  return greetings2;
};

module.exports = { greet: greet, hello: hello };