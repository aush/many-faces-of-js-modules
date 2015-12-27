(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.lib = factory();
  }
}(this, function () {
  
  var greetings1 = 'Greetins from the lib: umd';

  function greet() {
    return greetings1;
  };

  var greetings2 = 'Hello from the lib: umd';

  var hello = function () {
    return greetings2;
  };

  return { greet: greet, hello: hello };
}));