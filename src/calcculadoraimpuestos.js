import { Cliente } from './cliente.js';

export class CalculadoraImpuestos {
    static calcularImpuesto(cliente) {
        if (!(cliente instanceof Cliente)) {
            throw new Error('El argumento debe ser una instancia de Cliente');
        }
        const baseImponible = cliente.montoBrutoAnual - cliente.deducciones;
        return baseImponible * 0.21;
    }
}
