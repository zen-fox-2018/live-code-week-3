
class Electronics {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
}

class Resistor extends Electronics {
    constructor(type, price, resistance) {
        super(type, price, resistance)
        this.resistance = resistance
    }
}

class Capacitor extends Electronics {
    constructor(type, price, capacitor) {
        super(type, price, capacitor)
        this.capacitor = capacitor
    }
}

class Inductor extends Electronics {
    constructor(type, price, inductance) {
        super(type, price, inductance)
        this.inductance = inductance
    }
}

class ElectronicFactory {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    static produceElectronics(items) {

        let result = [];

        if(items.Resistor) {
            for(let i = 0; i < items.Resistor.quantity; i++) {
                result.push(new Resistor("Resistor", items.Resistor.price, items.Resistor.resistance))
            }
        }
        
        if (items.Inductor) {
            for(let i = 0; i < items.Inductor.quantity; i++) {
                result.push(new Inductor("Inductor", items.Inductor.price, items.Inductor.inductance))
            }
        }

        if(items.Capacitor) {
            for(let i = 0; i < items.Capacitor.quantity; i++) {
                result.push(new Capacitor("Capacitor", items.Capacitor.price, items.Capacitor.capacitance))
            }
        }
        return result
    }

    static buildRobot(name, buildPrice, components) {
        let result = null;
        let count = 0;
        for(let i = 0; i < components.length; i++) {
            count += components[i].price
        }
        let sum = count + buildPrice
        result = new Robot(name, sum)

        return result
    }
}

class Robot extends ElectronicFactory {
    constructor(name, price) {
        super(name, price)
    }
}

// let electro = new Electronics();

// const orderItems = {
//     "Resistor": {
//       quantity: 2, // jumlah barang yang dibeli
//       price: 2000, // harga satuan barang
//       resistance: 1100 // besaran satuan komponen elektronik
//     },
//     "Inductor": {
//       quantity: 3,
//       price: 3000,
//       inductance: 100
//     },
//     "Capacitor": {
//       quantity: 5,
//       price: 2000,
//       capacitance: 200
//     }
//   }
  
//   let components = ElectronicFactory.produceElectronics(orderItems);
//   console.log(components)

//   let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components);
//   console.log(robotTayo)