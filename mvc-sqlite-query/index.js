//your code here
const Controller = require('./controllers/Controller')
const argv = process.argv.slice(2) 


// console.log(argv);

switch(argv[0], argv[1]) {
    case "shows", "add": 
        Controller.addShow(argv[2], argv[3], argv[4])
        break;
    case "shows", "all":
        Controller.showAll()
        break;
    case "shows", "findBy" :
        Controller.showFindBy(argv[2], argv[3])
        break;
    case "transaction", "top3Audience":
        Controller.top3Audience()
        break;
    case "transaction", "buyTicket":
        Controller.buyTicket(argv[2], argv[3], argv[4])
        break;
     case "transaction", "refundTicket":
        // Controller.refundTicket
}