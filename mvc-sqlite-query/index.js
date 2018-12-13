const argv = process.argv.slice(2)
const command = argv[0]
const options = argv[1]
const secondOptions = argv.slice(2)
const ControllerShows = require(`./Controllers/ControllerShows`)
const ControllerAudience = require(`./Controllers/ControllerAudience`)
const ControllerTicket = require(`./Controllers/ControllerTicket`)

//TRANSACTIOn SECTIOn
const queryTransaction_2 = options[3]
const queryTransaction_3 = options.slice(4)


switch (command) {
    case `shows`:
        switch (options) {
            case `add`:
                ControllerShows.add(secondOptions[0], secondOptions[1], secondOptions[2])
                break;

            case `findBy`:
                ControllerShows.findBy(secondOptions[0], secondOptions[1])
                break;
        }
        break;

    case `transaction`:
        switch (options) {
            case `buyTicket`:
                ControllerAudience.buyTicket(secondOptions[0], secondOptions[1], secondOptions[2])
                break;
            
            case `refundTicket`:
                ControllerAudience.refundTicket(secondOptions[0], secondOptions[1])

            default:
                ControllerTicket.findAll(queryTransaction_2, queryTransaction_3)
                break;
        }
        break;
}
