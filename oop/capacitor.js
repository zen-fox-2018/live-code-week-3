const Electronic = require('./electronic.js')

class Capacitor extends Electronic {
    constructor() {
        super('capacitor', 2000)
        this.capacitance = '4 Farrad'
    }
}

module.exports = Capacitor