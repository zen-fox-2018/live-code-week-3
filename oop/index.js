const Resistor = require('./resistor.js')
const Induktor = require('./induktor.js')
const Capacitor = require('./capacitor.js')
const Robot = require('./robot.js')

class ElectronicFactory {
    static produceElectronics(items) {
        let electronicProduced = []
        let itemName = Object.keys(items)
        let itemValues = Object.values(items)
        
        for (let i = 0; i < itemName.length; i++) {
            for (let j = 0; j < itemValues[i].quantity; j++) {
                if (itemName[i] === 'Resistor') {
                    electronicProduced.push(new Resistor())
                } else if (itemName[i] === 'Capacitor') {
                    electronicProduced.push(new Capacitor())
                } else {
                    electronicProduced.push(new Induktor())
                }
            }
        }
        return electronicProduced;
    }

    static buildRobot(name, buildPrice, components) {
        let componentsPrice = 0
        for (let i = 0; i < components.length; i++) {
            componentsPrice += components[i].price
        }
        let totalPrice = componentsPrice + buildPrice
        let newRobot = new Robot(name, totalPrice)
        return newRobot
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
//   console.log(components)

let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
console.log(robotTayo)