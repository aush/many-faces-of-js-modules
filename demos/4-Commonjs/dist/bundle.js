/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var lib = __webpack_require__(1);

	var app = document.getElementById('app');

	var greetings1 = lib.greetings1;
	var greet = lib.greet();
	var hello = lib.hello();

	app.appendChild(document.createTextNode(greetings1));
	app.appendChild(document.createElement('br'));
	app.appendChild(document.createTextNode(greet));
	app.appendChild(document.createElement('br'));
	app.appendChild(document.createTextNode(hello));

/***/ },
/* 1 */
/***/ function(module, exports) {

	var greetings1 = 'Greetins from the lib: commonjs';

	function greet() {
	  return greetings1;
	};

	var greetings2 = 'Hello from the lib: commonjs';

	var hello = function () {
	  return greetings2;
	};

	module.exports = { greet: greet, hello: hello };

/***/ }
/******/ ]);