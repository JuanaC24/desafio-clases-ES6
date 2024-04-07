"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalculadoraImpuestos = void 0;
var _cliente = require("./cliente.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CalculadoraImpuestos = exports.CalculadoraImpuestos = /*#__PURE__*/function () {
  function CalculadoraImpuestos() {
    _classCallCheck(this, CalculadoraImpuestos);
  }
  return _createClass(CalculadoraImpuestos, null, [{
    key: "calcularImpuesto",
    value: function calcularImpuesto(cliente) {
      if (!(cliente instanceof _cliente.Cliente)) {
        throw new Error('El argumento debe ser una instancia de Cliente');
      }
      var baseImponible = cliente.montoBrutoAnual - cliente.deducciones;
      return baseImponible * 0.21;
    }
  }]);
}();