//your code here
const ShowController = require('./controllers/showcontroller')
const HelpController = require('./controllers/helpcontroller')
const TransactionController = require('./controllers/transactioncontroller')

const argv = process.argv.slice(2)
let input = null

switch (argv[0]) {
    case 'shows' :
        if(argv[1] === 'add') {
            input = {
                title_show : argv[2],
                schedule: argv[3],
                price: argv[4]
            }
            ShowController.add(input)
        } else if(argv[1] === 'findby') {
            input = {
                column_name: argv[2],
                value : argv[3]
            }
            ShowController.findBy(input)
        }
    break;

    case 'transaction' :
        if(argv[1] === 'transactions') {
            TransactionController.transaction()
        } else if(argv[1] === 'buyTicket') {
            input = {
                show_id : argv[2],
                email_audiences: argv[3],
                amount_of_ticket : argv[4]
            }
            TransactionController.buyTicket(input)
        }
    break;

    default:
        HelpController.command()
    break;
}

// node index.js shows add [title_show] [schedule] [price]
// node index.js shows findBy [column_name] [value]
// node index.js transaction top3Audience
// node index.js transaction buyTicket [show_id] [email_audiences] [amount_of_ticket]

// ROCKET:
// node index.js transaction refundTicket [ticketNumber] [email_audiences]