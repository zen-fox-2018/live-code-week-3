//your code here
const command= process.argv.slice(2);
const ShowController = require('./controllers/Show');
const TicketController = require('./controllers/Ticket');

class Broadway {
  constructor(command) {
    this.command = command;
  }

  playIt() {
    switch (this.command[0], this.command[1]) {
      case 'shows', 'add':
        ShowController.addShow(this.command.slice(2));
        break;
      case 'shows', 'findBy':
        ShowController.findBy(this.command.slice(2));
        break;
      case 'transaction', 'top3Audience':
        TicketController.topThree();
        break;
      case 'transaction', 'buyTicket':
        TicketController.buyTicket(this.command.slice(2));
        break;

      default:
      console.log(`Wrong sintax`);
    }
  }
}

let broadway = new Broadway(command);
broadway.playIt();
