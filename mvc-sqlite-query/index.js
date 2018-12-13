
const Controller = require("./Controllers/controller")
const args = process.argv.slice(2);
const command = args[0];
const options = args[1]

switch (command) {
    case "shows":
    switch (options) {
        case "add":
            Controller.addShow(args[2], args[3], args[4])
            break;
        case "findBy":
            Controller.find(args[2], args[3])
            break;
        default:
            break;
    }
    case "transaction":
        switch (options) {
            case "top3Audience":
                Controller.getTopThree()
                break;
            case "buyTicket":
                Controller.buyTicket(1)
            default:
                break;
        }
        break;
    default:
        break;
}