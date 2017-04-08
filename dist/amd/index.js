define(['exports', './bady-plugin'], function (exports, _badyPlugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_badyPlugin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _badyPlugin[key];
      }
    });
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./bady-plugin');
  }
});