//your code here
const AudienceController = require('./controllers/AudienceController')
const ShowController = require('./controllers/ShowController')
const argv = process.argv.slice(2)
const command = argv[0]
const todo = argv[1]
const input = argv.slice(2)


switch (command) {
    case "shows":
        if (todo === "add") {
            ShowController.addShow(input)
        } else if (todo === "findBy") {
            ShowController.findBy(input)
        }
        break;
    case "transactions":
        break;
    default:
        break;
}