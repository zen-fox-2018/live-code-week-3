//your code here

class ElectronicFactory{
    constructor(type, price) {
        this.type = type
        this.price = price
    }

    // produceElements(type,qty,price,satuan){
    //     if(type == 'resistor') {

    //     }
    // }

}

class Resistor extends ElectronicFactory{
    constructor(type, price, resistance) {
        super(type, price) 
        this.resistance = `${resistance/11} Ohm`

    }

}

class Capacitor extends ElectronicFactory{
    constructor(type, price, capacitance) {
        super(type, price) 
        this.capacitance = `${capacitance/5} Farrad`

    }

}

class Inductor extends ElectronicFactory{
    constructor(type, price, inductance) {
        super(type, price) 
        this.inductance = `${inductance/10} Henry`

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
  
//   let components = ElectronicFactory.produceElectronics(orderItems)

//   console.log(orderItems.Resistor)

  for (const type in orderItems) {
      if (orderItems.hasOwnProperty('Resistor')) {
          console.log(orderItems)
          
      }
  }



/*
 Resistor

  type: 'resistor',
  price: <harga barang>
  resistance: <besaran satuan pada resistor dalam ohm>

  Kapasitor

  type: 'kapasitor',
  price: <harga barang>
  capacitance: <besaran satuan pada kapasitor dalam farrad>

  Induktor

  type: 'induktor',
  price: <harga barang>
  inductance: <besaran satuan pada induktor dalam henry>

  const orderItems = {
  "Resistor": {
    quantity: 2, // jumlah barang yang dibeli
    price: 2000, // harga satuan barang
    resistance: 1100 // besaran satuan komponen elektronik
    resistance: '100 Ohm
  },
  "Inductor": {
    quantity: 3,
    price: 3000,
    inductance: 100
    inductance: '10 Henry
  },
  "Capacitor": {
    quantity: 5,
    price: 2000,
    capacitance: 200
    capacitance: '4 Farrad
  }
}
*/