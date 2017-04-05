'use strict';

System.register(['./ariel-plugin'], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources('./ariel-plugin');
  }

  _export('configure', configure);

  return {
    setters: [function (_arielPlugin) {
      var _exportObj = {};

      for (var _key in _arielPlugin) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _arielPlugin[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {}
  };
});