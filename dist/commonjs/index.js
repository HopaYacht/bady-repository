'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _natanPlugin = require('./natan-plugin');

Object.keys(_natanPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _natanPlugin[key];
    }
  });
});
exports.configure = configure;
function configure(config) {
  config.globalResources('./natan-plugin');
}