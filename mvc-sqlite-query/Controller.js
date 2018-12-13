const View = require('./View')
const Show = require('./Show') 
const Audience = require('./Audiences') 
const Ticket = require('./Ticket') 

class Controller {
  static excute(option) {
    let input = option.slice(2)
    switch (option[0]) {
      case 'shows':
        if(option[1] == 'add') {
          Controller.add(input)
        } else if (option[1] == 'findBy') {
          Controller.findBy(input)
        } else {
          Controller.help()
        }
        break;
      case 'transaction':
        if(option[1] == 'top3Audience') {
          Controller.topAu()
        } else if (option[1] == 'buyTicket') {
          Controller.buyTic(input)
        } else {
          Controller.help()
        } 
        break;
      default: Controller.help()
        break;
    }
  }

  //done
  static add(input) {
    let obj = {
      show: input[0],
      schedule: input[1],
      price: input[2],
    }
    let newShow = new Show(obj)
    newShow.create((err, dataThis) => {
      if(err) {
        View.disErr(`creating data`, err)
      } else {
        View.display(`Successfully added a ${obj.show}`)
      }
    })
  } 

  //done
  static findBy(input) {
    let obj = {
      where : input[0] , value: input[1]
    }

    Show.findWhere(obj, (err, data) =>{
      if(err) {
        View.disErr(`find show` , err)
      } else {
        if(!data) {
          View.display(`There is no such shows!`)
        } else {
          View.display(`Here are the shows you look for \n` , data)
        }
      }
    })
  }

  static topAu() {
    
  }

  static buyTic(input) {

  }


  static help() {
    View.help()
  }
}
module.exports = Controller