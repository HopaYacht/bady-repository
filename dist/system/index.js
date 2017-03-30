'use strict';

System.register(['./natan-plugin'], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources('./natan-plugin');
  }

  _export('configure', configure);

  return {
    setters: [function (_natanPlugin) {
      var _exportObj = {};

      for (var _key in _natanPlugin) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _natanPlugin[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {}
  };
});