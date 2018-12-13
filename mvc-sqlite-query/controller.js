const Show = require ('./Show.js')


class Controller {

  static shows (input) {
    if(input[0] == 'add') {
      //shows add
      let tittle = input[1]
      let shchedule = input[2]
      let price = input[3]
      Show.create(tittle, shchedule, price, function(err, data) {
        if(err) {
          console.log(err)
        }else {
          console.log(data)
        }
      })
    } else if (input[0] == 'findBy') {
      let field = input[1]
      let value = input[2]
    }
  }
}

module.exports = Controller;