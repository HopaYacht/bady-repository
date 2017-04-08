'use strict';

System.register(['./bady-plugin'], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources('./bady-plugin');
  }

  _export('configure', configure);

  return {
    setters: [function (_badyPlugin) {
      var _exportObj = {};

      for (var _key in _badyPlugin) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _badyPlugin[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {}
  };
});