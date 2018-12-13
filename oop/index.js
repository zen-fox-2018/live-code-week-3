class Electronic {
  constructor(type, price) {
    this.type =  type,
    this.price = price
  }
}

class Resistor extends Electronic {
  constructor(price, resistance) {
    super('resistor', price)
    this.resistance = `${resistance} Ohm`
  }
}

class Inductor extends Electronic {
  constructor(price, inductance) {
    super('induktor', price)
    this.resistance = `${inductance} Henry`
  }
}

class Capacitor extends Electronic {
  constructor(price, capacitance) {
    super('kapasitor', price)
    this.resistance = `${capacitance} Farrad`
  }
}

let resistor = new Resistor(2000, 1100)
console.log(resistor);

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
  static produceElectronics(orderItems) {
    let result = []
    let electronic = Object.keys(orderItems)
    for (let i = 0; i < electronic.length; i++) {
      if (electronic[i] === "Resistor") {
        for (let j = 0; j < orderItems["Resistor"].quantity; j++) {
          result.push(new Resistor(orderItems["Resistor"].price,  orderItems["Resistor"].resistance))
        }
      }
      else if (electronic[i] === "Inductor") {
        for (let j = 0; j < orderItems["Inductor"].quantity; j++) {
          result.push(new Inductor(orderItems["Inductor"].price,  orderItems["Inductor"].inductance))
        }
      }
      else if (electronic[i] === "Capacitor") {
        for (let j = 0; j < orderItems["Capacitor"].quantity; j++) {
          result.push(new Capacitor(orderItems["Capacitor"].price,  orderItems["Capacitor"].capacitance))
        }
      }
    }
    return result
  }

  static buildRobot(name, price, components) {
    let totalPrice = price
    for (let i = 0; i < components.length; i++) {
      totalPrice = totalPrice + components[i].price
    }
    return new Robot(name, totalPrice)
  }
}

class Robot {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

let components = ElectronicFactory.produceElectronics(orderItems)
/*
[ Resistor { type: 'resistor', price: 2000, resistance: '100 Ohm' },
  Resistor { type: 'resistor', price: 2000, resistance: '100 Ohm' },
  Inductor { type: 'inductor', price: 3000, inductance: '10 Henry' },
  Inductor { type: 'inductor', price: 3000, inductance: '10 Henry' },
  Inductor { type: 'inductor', price: 3000, inductance: '10 Henry' },
  Capacitor { type: 'capacitor', price: 2000, capacitance: '4 Farrad' },
  Capacitor { type: 'capacitor', price: 2000, capacitance: '4 Farrad' },
  Capacitor { type: 'capacitor', price: 2000, capacitance: '4 Farrad' },
  Capacitor { type: 'capacitor', price: 2000, capacitance: '4 Farrad' },
  Capacitor { type: 'capacitor', price: 2000, capacitance: '4 Farrad' } ]
*/
console.log(components);

let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
console.log(robotTayo)

