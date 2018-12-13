
class Electronic {
    constructor(type, price,) {
        this.type = type
        this.price =  price
    }
}

class Resistor extends Electronic {
    constructor(type, price, resistance) {
        super(type, price) 
            this.resistance = resistance
        
    }
}



class Induktor extends Electronic {
    constructor(type, price, inductance) {
        super(type, price) 
            this.inductance = inductance
        
    }
}


class Kapasitor extends Electronic {
    constructor(type, price, capacitance) {
        super(type, price) 
            this.capacitance = capacitance
        
    }
}




module.exports = {Resistor, Induktor, Kapasitor}