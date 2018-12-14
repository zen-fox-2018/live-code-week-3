class Electronic {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
}

class Resistor extends Electronic {
    constructor(price, resistence) {
        super(price, resistence)
        this.type = 'resistor';
        this.price = price;
        this.resistence = `${resistence / 11} Ohm`;
    }
}

class Capacitor extends Electronic {
    constructor(price, capacitance) {
        super(price, capacitance)
        this.type = 'kapasitor';
        this.price = price;
        this.capacitance = `${capacitance / 50} Farrad`;
    }
}

class Inductor extends Electronic {
    constructor(price, inductance) {
        super(price, inductance)
        this.type = 'induktor';
        this.price = price;
        this.inductance = `${inductance / 10} Henry`;
    }
}

class ElectronicFactory {

    static produceElectronics(input) {
        let res = [];
        for (let item in input) {
            // console.log(input[item]);
            for (let i = 0; i < input[item].quantity; i++) {
                if (item === 'Resistor') {
                    res.push(new Resistor(input[item].price, input[item].resistance));
                } else if (item === 'Capacitor') {
                    res.push(new Capacitor(input[item].price, input[item].capacitance));
                } else if (item === 'Inductor') {
                    res.push(new Inductor(input[item].price, input[item].inductance));
                }
            }
        }
        return res
    }

    static buildRobot(name, buildPrice, components) {

        let countPrice = 0;

        for (let i = 0; i < components.length; i++) {
            countPrice += components[i].price;
        }

        let price = buildPrice + countPrice;

        let robot = { name: name, price: price }

        return robot;
    }
}



const orderItems = {
    "Resistor": {
        quantity: 2,
        price: 2000,
        resistance: 1100
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

let components = ElectronicFactory.produceElectronics(orderItems);
console.log(components);

console.log();

let robotTayo = ElectronicFactory.buildRobot("Robot Tayo", 1000, components)
console.log(robotTayo)