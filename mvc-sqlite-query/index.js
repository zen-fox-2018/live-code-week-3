//your code here

const Controller = require('./controller.js')

class Index {

  constructor (command) {
    this.command = command
  }
  getGenerate () {
    switch (this.command[0]) {
      case 'shows': Controller.shows(this.command.slice(1))
        break;
      case 'transaction': Controller.transaction(this.command.slice(1))
        break;
      default: console.log('show menu')
        break;
    }
  }
}

let argv = process.argv.slice(2)
let command = new Index(argv)
command.getGenerate()
