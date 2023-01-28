!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(
        ((e =
          'undefined' != typeof globalThis ? globalThis : e || self).FE_utils =
          {})
      );
})(this, function (e) {
  'use strict';
  e.sum = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return (
      console.log('test'),
      e.reduce(function (e, t) {
        return t + e;
      }, 0)
    );
  };
});
