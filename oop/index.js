//your code here

class Electronic {
    constructor(name, type, price) {
        this.name = name
        this.price = price
        this.type = type
    }
}

class Resistor extends Electronic {
    constructor(resistance) {
        super(type, price)
        this.resistance = resistance
    }
}

class Capasitor extends Electronic {
    constructor(inductance) {
        super(type, price)
        this.inductance = inductance
    }
}

class Inductor extends Electronic {
    constructor(capacitance) {
        super(type, price)
        this.capacitance = capacitance
    }
}

let resistor = new Resistor('resistor', 2000, '100 Ohm')
let inductor = new Inductor('inductor', 3000, '10 Henry')
let capasitor = new Capasitor('capasitor', 2000, '4 Farrad')

const orderItems = {
    "Resistor": {
      quantity: 2, // jumlah barang yang dibeli
      price: 2000, // harga satuan barang
      resistance: 1100 // besaran satuan komponen elektronik
    },
    "Inductor": {
      quantity: 3,
      price: 3000,
      inductance: 100
    },
    "Capacitor": {
      quantity: 5,
      price: 2000,
      capacitance: 200
    }
  }

  class ElectronicFactory {
    constructor() {
    }

    static produceElectronics() {
        let result = []
        // let resistor = 
        return result
    }

    static builRobot() {

    }
}

let components = ElectronicFactory.produceElectronics(orderItems)
console.log(components)


