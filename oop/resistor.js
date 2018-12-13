const Electronic = require('./Electronic')

class Resistor extends Electronic {
    constructor(price, resistance) {
        super("Resistor", price)
        this._resistance = resistance +" Ohm"
    }
}

module.exports = Resistor