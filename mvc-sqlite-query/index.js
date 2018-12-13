//your code here
const Controller = require('./controller/Controller.js')

const argv = process.argv.slice(2)

class Index {
  static start(command) {
    if(command[0] === 'shows' && command[1] === 'add') {
      Controller.addShow()
    }
  }
}

Index.start(argv)