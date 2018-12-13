const Capasitor = require('./kapasitor')
const Resistor = require('./resistor')
const Inductor = require('./Induktor')
const Robot = require('./robot')

class ElectronicFactory {

    static produceElectronics(object) {

        // console.log(object.Resistor)
            for (let i = 0 ; i < object.Resistor.quantity ; i++) {
                let resis = new Resistor(object.Resistor.price, object.Resistor.resistance)
                console.log(resis)
            }
            for (let i = 0 ; i < object.Inductor.quantity ; i++) {
                let resis = new Inductor(object.Inductor.price, object.Inductor.inductance)
                console.log(resis)
            }
            for (let i = 0 ; i < object.Capacitor.quantity ; i++) {
                let resis = new Capasitor(object.Capacitor.price, object.Capacitor.capacitance)
                console.log(resis)
            }
    }

    static buildRobot(name, price, componen) {
        
        let robot = new Robot(name, price)

    }
}

module.exports = ElectronicFactory