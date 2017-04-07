'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hadarPlugin = require('./hadar-plugin');

Object.keys(_hadarPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hadarPlugin[key];
    }
  });
});
exports.configure = configure;
function configure(config) {
  config.globalResources('./hadar-plugin');
}