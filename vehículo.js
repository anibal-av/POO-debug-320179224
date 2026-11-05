class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo) {
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log(`Auto: ${this.marca} ${this.modelo}`);
    }
}

const miAuto = new Auto("Nissan", "Tiida");
miAuto.mostrarInfo();
