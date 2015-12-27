var lib = (function() {
  var greetings1 = 'Greetins from the lib: Better globals';

  function greet() {
    return greetings1;
  }

  var greetings2 = 'Hello from the lib: Better globals';

  var hello = function () {
    return greetings2;
  }

  return {
    greet: greet,
    hello: hello
  }
})();