const Electronic = require('./electronic.js')

class Resistor extends Electronic {
    constructor() {
        super('resistor', 2000)
        this.resistance = '100 Ohm'
    }
}

module.exports = Resistor