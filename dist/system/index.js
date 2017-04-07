'use strict';

System.register(['./hadar-plugin'], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources('./hadar-plugin');
  }

  _export('configure', configure);

  return {
    setters: [function (_hadarPlugin) {
      var _exportObj = {};

      for (var _key in _hadarPlugin) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _hadarPlugin[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {}
  };
});