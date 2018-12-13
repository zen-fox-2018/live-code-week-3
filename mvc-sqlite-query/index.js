//your code here
const argv = process.argv;
const command = argv.slice(2);
const Controller = require('./controller.js')

switch (command[0]) {
  case 'shows':
    if (command[1] == 'add') {
      Controller.addShow(command[2], command[3], command[4])
    }
    break;
  default:

}
