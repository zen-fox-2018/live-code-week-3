const argv = process.argv.slice(2);
const command = argv[0];
const Controller = require('./controller.js');

switch (command) {
  case 'shows':
    if (argv[1] === 'add') {
      Controller.addShows(argv[2], argv[3], argv[4]);
    } else if (argv[1] === 'findBy') {
      Controller.findBy(argv[2], argv[3]);
    }
    break;
}
