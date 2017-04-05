'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arielPlugin = require('./ariel-plugin');

Object.keys(_arielPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _arielPlugin[key];
    }
  });
});
exports.configure = configure;
function configure(config) {
  config.globalResources('./ariel-plugin');
}