//your code here
class Electronic {
  constructor(input) {
    this.type = this.constructor.name
    this.price = input.price
  }
}

class Resistor extends Electronic {
  constructor(input) {
    super(input)
    this.resistance = input.resistance
  }
}

class Capacitor extends Electronic {
  constructor(input) {
    super(input)
    this.capacitance = input.capacitance
  }
}

class Inductor extends Electronic {
  constructor(input) {
    super(input)
    this.inductance = input.inductance
  }
}

class Robot {
  constructor(input) {
    this.name = input.name
    this.price = input.price
  }
}

class ElectronicFactory {
  static produceElectronics(items) {
    let result = []

    for( let i in items) {
      if(i == 'Resistor') {
        let num = items[i].quantity
        let price = items[i].price
        let res = items[i].resistance
        for (let i = 0; i < num; i++) {
          result.push(new Resistor({price : price, resistance: res}))
        }
      } else if ( i == 'Inductor') {
        let num = items[i].quantity
        let price = items[i].price
        let res = items[i].inductance
        for (let i = 0; i < num; i++) {
          result.push(new Inductor({price : price, inductance: res}))
        }
      } else if (i == 'Capacitor') {
        let num = items[i].quantity
        let price = items[i].price
        let res = items[i].capacitance
        for (let i = 0; i < num; i++) {
          result.push(new Capacitor({price : price, capacitance: res}))
        }
      }
    }
    return result
  }

  static buildRobot(name, price, comp) {
    let harga = 0
    for (let i = 0; i < comp.length; i++) {
      harga += comp[i].price
    }
    let newobj = {
      name: name, price: price+ harga
    }
    let newRob = new Robot(newobj)
    return newRob
  }
}

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
let components = ElectronicFactory.produceElectronics(orderItems)
let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
console.log(robotTayo)