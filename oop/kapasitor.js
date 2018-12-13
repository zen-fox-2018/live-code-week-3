const Electronic = require('./Electronic')

class Capasitor extends Electronic {

    constructor(name, price,capacitance) {
        super(name, price)
        this._capacitance = capacitance
    }

}

module.exports = Capasitor