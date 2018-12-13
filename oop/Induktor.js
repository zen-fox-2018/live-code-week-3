const Electronic = require('./Electronic')

class Inductor extends Electronic {
    constructor(price, inductance) {
        super("Inductor", price)
        this._inductance = inductance + " Henry"
    }
}

module.exports = Inductor