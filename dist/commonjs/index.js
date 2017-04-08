'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badyPlugin = require('./bady-plugin');

Object.keys(_badyPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _badyPlugin[key];
    }
  });
});
exports.configure = configure;
function configure(config) {
  config.globalResources('./bady-plugin');
}