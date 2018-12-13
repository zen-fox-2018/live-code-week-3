//your code here

class Electronic {
    constructor(name, price) {
        this. name = name;
        this.price = price;
    }
}

class Resistor extends Electronic{
    constructor(price, resistance) {
        super('resistor', price);
        this. resistance = resistance +' ohm'; 
    }
}
class Capacitor extends Electronic{
    constructor(price, capacitance) {
        super('capacitor', price);
        this.capacitance = capacitance +' farrad';
    }
}
class Inductor extends Electronic{
    constructor(price, inductance) {
        super('inductor', price);
        this.inductance = inductance +' henry'; 
    }
}
class Robot extends Electronic{
    constructor(name, price) {
        super(name, price)
    }
}

class ElectronicFactory {
    static produceElectronics(order) {
        let orderList = [];
        for (let i = 0; i < order['Resistor'].quantity; i++) {
            let resistor = new Resistor(order['Resistor'].price, order['Resistor'].resistance)
            orderList.push(resistor)
        }
        for (let i = 0; i < order['Inductor'].quantity; i++) {
            let inductor = new Inductor(order['Inductor'].price, order['Inductor'].inductance)
            orderList.push(inductor)
        }
        for (let i = 0; i < order['Capacitor'].quantity; i++) {
            let capacitor = new Capacitor(order['Capacitor'].price, order['Capacitor'].capacitance)
            orderList.push(capacitor)
        }
        console.log(orderList) 
        return orderList
    }

    static buildRobot(name, buildPrice, components) {
        for (let i = 0; i <= components.length-1; i++) {
            buildPrice += components[i].price
        }
        return new Robot(name, buildPrice)
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