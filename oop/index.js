//your code here

class Electronic{
    constructor(type, price){
        this.type = type
        this.price = price
    }
}

class Resistor extends Electronic{
    constructor(price, resistance){
        super('resistor', price)
        this.resistance = resistance
    }
}

class Kapasitor extends Electronic{
    constructor(price, capacitance){
        super('kapasitor', price)
        this.capacitance= capacitance
    }
}

class Induktor extends Electronic{
    constructor(price, inductance){
        super('induktor', price)
        this.inductance = inductance
    }
}

class ElectronicFactory{
    static produceElectronics(items){
        let arrItems = []
        for(let prop in items){

            for(let i = 0; i < items[prop].quantity; i++){
                if(prop == 'Resistor'){                   
                    arrItems.push(new Resistor(items[prop].price, items[prop].resistance))
                }
                else if(prop == 'Inductor'){                  
                    arrItems.push(new Induktor(items[prop].price, items[prop].inductance))
                }   else{               
                    arrItems.push(new Kapasitor(items[prop].price, items[prop].capacitance))
                }
            }
        }
        return arrItems
    }

    static buildRobot(name, buildPrice, components){
        let totalComponentPrice = 0

        for(let i = 0; i < components.length; i++){
            totalComponentPrice += components[i].price
        }

        let totalPrice = buildPrice+ totalComponentPrice

        let Robot = {name: name, price: totalPrice}

        return Robot
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
// console.log(components)

let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
console.log(robotTayo)