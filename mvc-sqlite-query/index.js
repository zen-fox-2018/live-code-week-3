const AudiencesCon = require('./controllers/controllerAudiences.js')
const TicketsCon = require('./controllers/ticketsController.js')
const ShowCon = require('./controllers/showscontroller.js')
const argv = process.argv.slice(2)
const command = argv[0]

switch (command) {
    case 'shows':
        if (argv[1] === 'add') {
            ShowCon.addShow(argv[2], argv[3], argv[4])
        } else if (argv[1] === 'findBy') {
            ShowCon.findBy(argv[2], argv[3])
        }
        break;
    case 'top3Audience':
        TicketsCon.top3Audience()
        break;
    case 'transaction':
        if (argv[1] === 'buyTicket') {
            AudiencesCon.buyTicket(argv[2], argv[3], argv[4])
        } else if (argv[1] === 'refundTicket') {
            
        }
        break;
    default:
        break;
}
