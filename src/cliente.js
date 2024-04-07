export class Cliente {
    constructor(nombre, montoBrutoAnual, deducciones) {
        this._nombre = nombre;
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(nuevoMontoBrutoAnual) {
        this._montoBrutoAnual = nuevoMontoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    set deducciones(nuevasDeducciones) {
        this._deducciones = nuevasDeducciones;
    }
}
