//your code here
class Electronic {
  constructor (name, price) {
    this.type = name
    this.price = price
  }
}

class Resistor extends Electronic {
  constructor(harga, resistance) {
    super('resistor', harga)
    this.resistance = resistance
  }
}

class Kapasitor extends Electronic {
  constructor(harga, capasistance) {
    super('kapasitor', harga)
    this.capasistance = capasistance
  }
}

class Induktor extends Electronic {
  constructor(harga, inductance) {
    super('kapasitor', harga)
    this.inductance = inductance
  }
}

class ElectronicFactory {
  static produceElectronics (input) {
    let result = []
    for(let key in input) {
      let obj = null
      if(key == 'Resistor') {
        for(let i = 0; i < input[key].quantity; i++) {
          obj = new Resistor (input[key].price, input[key].resistance)
          result.push(obj)
        }
      }else if (key == 'Inductor') {
        for(let i = 0; i < input[key].quantity; i++) {
          obj = new Induktor (input[key].price, input[key].inductance)
          result.push(obj)
        }
      }else if (key == 'Capacitor') {
        for(let i = 0; i < input[key].quantity; i++) {
          obj = new Kapasitor (input[key].price, input[key].capacitance)
          result.push(obj)
        }
      } 
    }
    console.log(result)
  }

  static buildRobot (name, buildPrice, price) {
    this.name = name
    this.buildRobot = buildPrice
    this.price = price
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

// let components = ElectronicFactory.produceElectronics(orderItems)
// console.log(orderItems)

let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
console.log(robotTayo)