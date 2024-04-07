import { Cliente } from './cliente.js';
import { CalculadoraImpuestos } from './calcculadoraimpuestos.js';

const cliente1 = new Cliente('Empresa XYZ', 100000, 10000);
const impuestoCliente1 = CalculadoraImpuestos.calcularImpuesto(cliente1);

console.log(`El impuesto a pagar por ${cliente1.nombre} es: ${impuestoCliente1}`);
