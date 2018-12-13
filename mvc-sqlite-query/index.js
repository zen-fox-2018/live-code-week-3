//your code here
const command = process.argv.slice(2)
const showsController = require('./contollers/showsController.js')
const TransactionsController = require('./contollers/audiencesController')

class Index{
    constructor(command){
        this.command = command
    }

    executeCommand(){
        if(this.command[0] == 'shows'){
            switch(this.command[1]){
                case 'add':
                    showsController.add(this.command[2], this.command[3], this.command[4])
                break;
                case 'findBy':
                    showsController.findBy(this.command[2], this.command[3])
                break;
            }
        }

        if(this.command[0] == 'transaction'){
            switch(this.command[1]){
                case 'top3Audience':
                    TransactionsController.top3Audience()
                break;
                case 'buyTicket':
                    TransactionsController.buyTicket(this.command[2], this.command[3], this.command[4])
                break;
            }
        }
    }
}

let action = new Index(command)
action.executeCommand()



// node index.js shows add [title_show] [schedule] [price]
// node index.js shows findBy [column_name] [value]
// node index.js transaction top3Audience
// node index.js transaction buyTicket [show_id] [email_audiences] [amount_of_ticket]

// ROCKET:
// node index.js transaction refundTicket [ticketNumber] [email_audiences]