const argv = process.argv.slice(2);
const command = argv[0];
const Controller = require('./controller.js');

switch (command) {
  case 'shows':
    if (argv[1] == 'add') {
      Controller.addShows(argv[2], argv[3], argv[4]);
    } else if (argv[1] == 'findBy') {
      Controller.findBy(argv[2], argv[3]);
    }
    break;

  case 'transaction':
    if (argv[1] == 'top3Audience') {
      Controller.mostSpends();
    } else if (argv[1] == 'buyTicket') {
      Controller.buyTicket(argv[1], argv[2], argv[3]);
    }
    break;

  default:
    console.log('insert command');
    break;
}
