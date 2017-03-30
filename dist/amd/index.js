define(['exports', './natan-plugin'], function (exports, _natanPlugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_natanPlugin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _natanPlugin[key];
      }
    });
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./natan-plugin');
  }
});