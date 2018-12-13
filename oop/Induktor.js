const Electronic = require('./Electronic')

class Inductor extends Electronic {
    constructor(name, price, iduntance) {
        super(name, price)
        this._inductance = iduntance
    }
}

module.exports = Inductor