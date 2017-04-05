define(['exports', './ariel-plugin'], function (exports, _arielPlugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_arielPlugin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _arielPlugin[key];
      }
    });
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./ariel-plugin');
  }
});