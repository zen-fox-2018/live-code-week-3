const Electronic = require('./Electronic')

class Capasitor extends Electronic {

    constructor(price,capacitance) {
        super("Capasitor", price)
        this._capacitance = capacitance + " Farrad"
    }

}

module.exports = Capasitor