//your code here
const argv = process.argv.slice(2);
const Controller = require('./controllers/controller');

switch (argv[0], argv[1]) {
  case 'shows', 'add':
    Controller.addShows(argv[2], argv[3], argv[4]);
    break;

  case 'shows', 'findBy':
    Controller.findBy(argv[2], argv[3]);
    break;

  case 'transaction', 'top3Audience':
    Controller.top3();
    break;

  case 'transaction', 'buyTicket':
  Controller.buyTicket(argv[2], argv[3], argv[4]);
    break;

  default:
    break;
}