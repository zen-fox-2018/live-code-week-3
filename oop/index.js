//your code here
class Electronic {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

class Resistor extends Electronic {
  constructor(price, resistance) {
    super('resistor', price);
    this.resistance = `${resistance} Ohm`;
  }
}

class Capacitor extends Electronic {
  constructor(price, capacitance) {
    super('capacitor', price);
    this.capacitance = `${capacitance} Farrad`;
  }
}

class Inductor extends Electronic {
  constructor(price, inductance) {
    super('inductor', price);
    this.inductance = `${inductance} Henry`;
  }
}


class ElectronicFactory {
  static produceElectronics(obj) {
    let resultProduce = [];
    for (let electronic in obj) {
      let newElectronic = null;

      if (electronic === 'Resistor') {
        newElectronic = new Resistor(obj[electronic].price, obj[electronic].resistance);
      } else if (electronic === 'Inductor') {
        newElectronic = new Inductor(obj[electronic].price, obj[electronic].inductance);
      } else if (electronic === 'Capacitor') {
        newElectronic = new Capacitor(obj[electronic].price, obj[electronic].capacitance);
      }
      for (var i = 0; i < obj[electronic].quantity; i++) {
        resultProduce.push(newElectronic);
      }
    }
    return resultProduce;
  }

  static buildRobot (name, buildPrice, components){
    let price = 0
    components.forEach( c => {
      price += c.price;
    })
    return new Robot(name, price);
  }
}

class Robot extends Electronic {
  constructor(name, price) {
    super(name, price)
  }
}

const orderItems = {
  "Resistor": {
    quantity: 2, // jumlah barang yang dibeli
    price: 2000, // harga satuan barang
    resistance: 100 // besaran satuan komponen elektronik
  },
  "Inductor": {
    quantity: 3,
    price: 3000,
    inductance: 10
  },
  "Capacitor": {
    quantity: 5,
    price: 2000,
    capacitance: 4
  }
}

let components = ElectronicFactory.produceElectronics(orderItems);
console.log(components);
let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components);
console.log(robotTayo)
