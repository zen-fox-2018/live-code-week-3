const Show = require('../models/Show.js')
// const Ticket = require('../models/Ticket.js')
// const Audience = require('../models/Audience.js')
// const View = require('../view/View.js)

class Controller {
  static addShow(title, schedule, price){
    if (title === undefined || schedule === undefined || price === undefined ) {
      console.log('command salah')
    } else {
      Show.create([title, schedule, price], (err, data) => {})
    }
  }
}