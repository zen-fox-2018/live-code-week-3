//your code here
const argv = process.argv;
const command = argv.slice(2);
const Controller = require('./controller.js')

switch (command[0]) {
  case 'shows':
    if (command[1] == 'add') {
      Controller.addShow(command[2], command[3], command[4]);
    }
    else if (command[1] == 'findBy') {
      Controller.findByShow(command[2], command[3]);
    }
    break;
  case 'transaction':
      if (command[1] == 'top3Audience') {
        Controller.top3Audiences();
      }
      else if(command[1] == 'buyTicket') {
        Controller.buyTicket(showId, email, amount);
      }
    break;
  default:

}
