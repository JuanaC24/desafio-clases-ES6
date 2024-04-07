"use strict";

var _cliente = require("./cliente.js");
var _calculadoraimpuestos = require("./calculadoraimpuestos.js");
var cliente1 = new _cliente.Cliente('Empresa XYZ', 100000, 10000);
var impuestoCliente1 = _calculadoraimpuestos.CalculadoraImpuestos.calcularImpuesto(cliente1);
console.log("El impuesto a pagar por ".concat(cliente1.nombre, " es: ").concat(impuestoCliente1));