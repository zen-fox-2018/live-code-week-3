//your code here
const command = process.argv.slice(2)
const Controller = require('./controller/Controller.js')

switch (command[0]) {
    case `showsAdd`:
        let title = command[1]
        let schedule = command[2]
        let price = command[3]
        Controller.addShow(title, schedule, price)
        break;
    case `showsFindBy`:
        let parameter = command[1]
        Controller.findShowBy(parameter)
        break;
    case `transactionTop3Audience`:
        Controller.top3Audience()
        break;
    case `transactionBuyTicket`:
        let showId = command[1]
        let email = command[2]
        let ticketAmount = command[3]
        Controller.buyTicket(showId, email, ticketAmount)
        break;
    default:
        console.log('test')
        break;
}
