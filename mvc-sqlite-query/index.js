const Controller = require('./Controller.js')
const argv = process.argv.slice(2)

let command = argv[0]
let command2 = argv[1]
let options = argv.slice(2)

switch (command) {
  case "shows":
    if (command2 === "add") {
      Controller.addShows(options)
    }
    else if (command2 === "findBy") {
      Controller.findBy(options)
    }
    break;

  case "transaction":
    if (command2 === "top3Audience") {
      Controller.top3Audience()
    }
    else if (command2 === "buyTicket") {
      Controller.buyTicket(options)
    }
    break;
  default:

}
