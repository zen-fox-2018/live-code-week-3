//your code here

class Resistor{
  constructor(price, resistance){
    this.type = 'resistor'
    this.price = price
    this.resistance = resistance
  }
}

class  Kapasitor{
  constructor(price, capacitance){
    this.type = 'kapasitor'
    this.price = price
    this.capacitance = capacitance
  }
}


class Induktor{
  constructor(price, inductance){
    this.type = 'induktor'
    this.price = price
    this.inductance = inductance
  }
}

class ElectronicFactory{
  static produceElectronics(orderItems){
    var result = []
    //Resistor
    for (var i = 0; i < orderItems.Resistor.quantity; i++) {
      var resistor = new Resistor (orderItems.Resistor.price, orderItems.Resistor.resistance)
      result.push(resistor)
    }
    for (var i = 0; i < orderItems.Inductor.quantity; i++) {
      var inductor = new Induktor (orderItems.Inductor.price, orderItems.Inductor.inductance)
      result.push(inductor)
    }
    for (var i = 0; i < orderItems.Capacitor.quantity; i++) {
      var capacitor = new Kapasitor (orderItems.Capacitor.price, orderItems.Capacitor.capacitance)
      result.push(capacitor)
    }
    return result;
  }

  static buildRobot(name, buildPrice, components){
    var Robot = {
      name : name,
      price : buildPrice,
    }
    for (var i = 0; i < components.length; i++) {
      Robot.price += components[i].price;
    }
    return Robot;
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
console.log(components);

let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
console.log(robotTayo)
