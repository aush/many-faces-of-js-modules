var loaders = {};
var modules = {};

function require(id) {
  modules[id] = { id: id, exports: {} };
  loaders[id](modules[id]);
  return modules[id].exports;
}

function define(id, loader) {
  loaders[id] = loader;
}