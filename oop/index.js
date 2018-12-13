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


class Electronic {
    constructor(type, price) {
        this.type = type
        this.price = price
    }
}

class Resistor extends Electronic {
    constructor(type, price, resistance) {
        super(type, price)
        this.resistance = resistance
    }
}

class Kapasitor extends Electronic {
    constructor(type, price, capacitance) {
        super(type, price)
        this.capacitance = capacitance
    }
}

class Induktor extends Electronic {
    constructor(type, price, inductance) {
        super(type, price)
        this.inductance = inductance
    }
}

class Robot {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class ElectronicFactory {
    static produceElectronics(orderItems) {
        let array = []
        for (const key in orderItems) {
            if (key == `Resistor`) {
                for (let i = 0; i < orderItems[key].quantity; i++) {
                    array.push(new Resistor(key, orderItems[key].price, `${orderItems[key].resistance/11} Ohm`))
                }
            } else if (key == `Capacitor`) {
                for (let i = 0; i < orderItems[key].quantity; i++) {
                    array.push(new Kapasitor(key, orderItems[key].price, `${orderItems[key].capacitance/50} Farrad`))
                }    
            } else if(key == `Inductor`){
                for (let i = 0; i < orderItems[key].quantity; i++) {
                    array.push(new Induktor(key, orderItems[key].price, `${orderItems[key].inductance/10} Henry`))
                }
            }
        }
        return array
    }

    static buildRobot(name, buildPrice, components) {
        let price = buildPrice
        for (const key in components) {
            price += components[key].price
        }
        return new Robot(name, price)
    }
}

let components = ElectronicFactory.produceElectronics(orderItems)
let robotTayo  = ElectronicFactory.buildRobot(`Robot Tayo`, 1000, components)
console.log(components);
console.log(robotTayo);
