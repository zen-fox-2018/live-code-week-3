//your code here
const Controller = require('./controllers/Controller.js')

const argv = process.argv.slice(2)

class Index {
  static start(command) {
    if(command[0] === 'shows' && command[1] === 'add') {
      Controller.addShow(command[2], command[3], command[4])
    } else if (command[0] === 'shows' && command[1] === 'findBy') {
      Controller.findBy(command[2], command[3])
    } else if (command[0] === 'transaction' && command[1] === 'top3Audience') {
      Controller.top3Audience()
    } else if (command[0] === 'transaction' && command[1] === 'buyTicket') {
      Controller.buyTicket(command[2], command[3], command[4])
    }
  }
}

Index.start(argv)