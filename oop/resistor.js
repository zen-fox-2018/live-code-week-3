const Electronic = require('./Electronic')

class Resistor extends Electronic {
    constructor(_name , price, resistance) {
        super(name , price)
        this._resistance = resistance
    }
}

module.exports = Resistor