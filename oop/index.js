//your code here
const ElectronicFactory = require('./ElectronicFactory')



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

 let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
 console.log(robotTayo)

  