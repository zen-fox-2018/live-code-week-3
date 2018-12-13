
class Electronic {
    constructor(type) {
        this.type = type
    }
}

class Resistor extends Electronic {
    constructor(obj) {
        super('resistor') 
        this.price = obj['price']
        this.resistance  = this.resistanceM(obj['resistance'])
    }
    resistanceM(value) {
        let hasil = value
        return `${hasil- 1000} ohm`
    }
}

class Inductor extends Electronic {
    constructor(obj) {
        super('inductor')
        this.price = obj['price']
        this.inductance  = this.inductanceM(obj['inductance'])
    }
    inductanceM(value) {
        let hasil = value
        return `${hasil /10} Henry`
    }
}

class Capacitor extends Electronic {
    constructor(obj) {
        super('capacitor') 
        this.price = obj['price']
        this.capacitance  = this.capacitanceM(obj['capacitance'])
    }
    capacitanceM(value) {
        return `${value /50 } Farrad`
    }
}
module.exports = {Resistor, Inductor, Capacitor}