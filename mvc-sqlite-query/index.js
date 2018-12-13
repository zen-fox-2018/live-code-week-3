//your code here
 const command = process.argv.slice(2);
 const Audience = require('./Controllers/AudienceController');
 const Shows = require('./Controllers/ShowController');
 class Commandcenter {
     constructor(command) {
         this.command = command
     }
     runTheCommand() {
        switch(this.command[0]) {
            case "shows":
                if (command[1] === "add") {
                    Shows.addShow(command.slice(2))
                } else if (command[1] === "findBy") {
                    Shows.findShow(command.slice(2))
                }
            break;
            case "transaction":
                if (command[1] === "top3Audience") {
                    Audience.findTop3()
                } else if (command[1] === "buyTicket") {
                    
                }
            break;

        }
     }
 }
 const runCommand = new Commandcenter(command);
 runCommand.runTheCommand()