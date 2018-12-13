const Capasitor = require('./kapasitor')
const Resistor = require('./resistor')
const Inductor = require('./Induktor')

class ElectronicFactory {

    static ProduceElectronic(object) {
        
        for (i in object) {
            if (i === "Resistor") {
                for(var i = 0 ;i < object[i].quantity; i++) {
                    let resistor = new Resistor(object[i].type)
                }
            }
        }
    }
}