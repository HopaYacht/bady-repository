define(['exports', './hadar-plugin'], function (exports, _hadarPlugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_hadarPlugin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _hadarPlugin[key];
      }
    });
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./hadar-plugin');
  }
});