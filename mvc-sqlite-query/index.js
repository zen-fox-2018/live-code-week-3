//your code here
const command = process.argv.slice(2)
const Controller = require('./controller/Controller.js')

switch (command[0]) {
    case `shows add`:
        let title = command[1]
        let schedule = command[2]
        let price = command[3]
        Controller.addShow(title, schedule, price)
        break;

    default:
        break;
}
