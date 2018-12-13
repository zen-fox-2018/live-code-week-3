//your code here
class Electronic {
    constructor(){
        
        
    }
}

class Resistor extends Electronic {
    constructor(hargaBarang, resistansi){
        super()
        this.type = 'resistor'
        this.price = hargaBarang
        this.resistance = `${resistansi} Ohm`
    }
}

// let zz = new Resistor(2000, 500)
// console.log(zz)

class Kapasitor extends Electronic {
    constructor(hargaBarang, resistansi){
        super()
        this.type = 'kapasitor'
        this.price = hargaBarang
        this.capacitance = `${resistansi} Farrad`
    }
}

class Induktor extends Electronic {
    constructor(hargaBarang, resistansi){
        super()
        this.type = 'induktor'
        this.price = hargaBarang
        this.inductance = `${resistansi} Henry`
    }
}

class ElectronicFactory {
    static produceElectronics(items){
        let hasil = []
        for(let i = 0; i < Object.keys(items).length; i++){
            if(Object.keys(items)[i] == "Resistor") {
                for(let j = 0; j < items["Resistor"].quantity; j++){
                    hasil.push(new Resistor(items["Resistor"].price, items["Resistor"].resistance))
                }                
            }
            else if (Object.keys(items)[i] == "Capacitor"){
                for(let j = 0; j < items["Capacitor"].quantity; j++){
                    hasil.push(new Kapasitor(items["Capacitor"].price, items["Capacitor"].capacitance))
                }
            }
            else if (Object.keys(items)[i] == "Inductor"){
                for(let j = 0; j < items["Inductor"].quantity; j++){
                    hasil.push(new Induktor(items["Inductor"].price, items["Inductor"].inductance))
                }
            }
        }
        console.log(hasil)
        return hasil
    }

    static buildRobot(name, hargaRobot, komponenRobot){
        let hargaKomponen = 0
        for(let i = 0; i < komponenRobot.length; i++){
            hargaKomponen += komponenRobot[i].price
        }
        let hargaTotal = hargaRobot + hargaKomponen
        let newRobot = new Robot(name, hargaTotal)
        return newRobot

    }
}

class Robot {
    constructor(name,price){
        this.name = name
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

//   console.log(Object.keys(orderItems).length)
//   console.log(orderItems["Resistor"])
//   console.log(orderItems.length)

  let components = ElectronicFactory.produceElectronics(orderItems)
//   console.log(components)

  let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
    console.log(robotTayo)
    /*
  Robot { name: 'Robot Tayo', price: 24000 }
*/

//   components