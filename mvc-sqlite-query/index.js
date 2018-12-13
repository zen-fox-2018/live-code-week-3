//your code here
const argv = process.argv.slice(2)
const command = argv[0]

const Controller = require('./controller/controller')


switch (command) {
    case 'shows':
        if(argv[1] == 'add') {
            Controller.addShowController(argv[2],argv[3],argv[4])
        } else {
            
        }
        break;

    default:
        break;
}
