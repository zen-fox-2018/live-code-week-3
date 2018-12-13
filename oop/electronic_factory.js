const {Resistor, Induktor, Kapasitor} = require('./electronic')

class Robot {
  constructor(name,price) {
    this.name = name
    this.pice = price
  }
}



class ElectronicFactory {
    constructor(name,price) {
      this.name = name
      this.pice = price
    }
    static produceElectronics (input) {
      let result = []
        for (let i in input) {
          if( i ==  "Resistor"){
            for(let j = 0 ; j < input[i].quantity; j++){
              result.push(new Resistor('Resistor', input[i].price, input[i].resistance/11+' ohm'))
            }
          }
          else if( i == "Inductor")  {
            for(let j = 0; j < input[i].quantity; j++) {
              result.push(new Induktor('Inductor',input[i].price, input[i].inductance/10+' henry'))
            }
          }
          else if( i == "Capacitor")  {
            for(let j = 0; j < input[i].quantity; j++) {
              result.push(new Kapasitor('Capacitor', input[i].price, input[i].capacitance/50+' farrad'))
            }
          }
        }
        return result
    }

    static buildRobot (name,price, component) {
      let count = 0
      for(let i = 0; i < component.length; i++) {
        count+= component[i].price
      }
      let result = new Robot(name, price+count)
      return result
    }
}


  
  module.exports = ElectronicFactory