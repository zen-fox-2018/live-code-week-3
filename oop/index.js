//your code here
class Electronic {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

class Resistor extends Electronic {
  constructor(type, price, resistance) {
    super(type, price);
    this.resistance = resistance;
  }
}

class Kapasitor extends Electronic{
  constructor(type, price, capacitance) {
    super(type, price);
    this.capacitance = capacitance;
  }
}

class Induktor extends Electronic{
  constructor(type, price, inductance) {
    super(type, price);
    this.inductance = inductance;
  }
}

//FACTORY
class ElectronicFactory {
  constructor(quantity, price) {
    this.quantity = quantity;
    this.price = price;
  }

  static produceElectronics(orderItems) {
    console.log(orderItems);
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
