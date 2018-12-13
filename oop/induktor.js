const Electronic = require('./electronic.js')

class Induktor extends Electronic {
    constructor() {
        super('inductor', 3000)
        this.inductance = '10 Henry'
    }
}

module.exports = Induktor