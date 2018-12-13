//your code here
const Resistor =  require('./Electronic').Resistor
const Inductor =  require('./Electronic').Inductor
const Capacitor =  require('./Electronic').Capacitor


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
      static produceElectronics(obj) {
        let arrayHasil = []
        for(let i = 0; i < obj.Resistor.quantity; i++) {
            arrayHasil.push(new Resistor(obj.Resistor))
        }
        for(let i = 0; i < obj.Inductor.quantity; i++) {
            arrayHasil.push(new Inductor(obj.Inductor))
        }
        for(let i = 0;i < obj.Capacitor.quantity; i++){
            arrayHasil.push(new Capacitor(obj.Capacitor))
        }
        return arrayHasil
      }
  }

  let components = ElectronicFactory.produceElectronics(orderItems)

  console.log(components);
  