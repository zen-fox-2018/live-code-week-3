//your code here
class Electronic {
  constructor(type, price) {
    this.type = type
    this.price = price
  }
}

class Resistor extends Electronic {
  constructor(price, resistance){
    super('resistor', price)
    this.resistance = resistance + 'Ω'
  }
}

class Capacitor extends Electronic {
  constructor(price, capacitance){
    super('capacitor', price)
    this.capacitance = capacitance + 'F'
  }
}

class Inductor extends Electronic {
  constructor(price, inductance){
    super('inductor', price)
    this.inductance = inductance + 'H'
  }
}

class Robot {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class ElectronicFactory {
  // constructor(){
  //   // this.quantity = quantity
  //   // this.price = price
  //   // this.resistance = resistance
  // }

  static produceElectronics(obj) {
    let output = []
    for (let key in obj) {
      for (let i = 0 ; i < obj[key].quantity ; i++) {
        // console.log(key)
        if (key === 'Resistor') {
          output.push(new Resistor(obj[key].price, obj[key].resistance))
        } else if (key === 'Inductor') {
          output.push(new Inductor(obj[key].price, obj[key].inductance))
        } else if (key === 'Capacitor') {
          output.push(new Capacitor(obj[key].price, obj[key].capacitance))
        }
      }
    }
    return output
  }

  static buildRobot(name, price, components) {
   return new Robot(name, this.buildPrice(components) + price)
  }

  static buildPrice(components) {
    let priceTotal = 0
    components.forEach( a=> {
      priceTotal += a.price
    })
    return priceTotal
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
console.log(components)

let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
console.log(robotTayo)