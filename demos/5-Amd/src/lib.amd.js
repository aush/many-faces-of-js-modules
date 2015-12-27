define(function () {

  var greetings1 = 'Greetins from the lib: amd';

  function greet() {
    return greetings1;
  };

  var greetings2 = 'Hello from the lib: amd';

  var hello = function () {
    return greetings2;
  };

  return { greet: greet, hello: hello };
});
