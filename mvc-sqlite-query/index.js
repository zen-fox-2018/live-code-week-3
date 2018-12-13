//your code here
const command= process.argv.slice(2);
const ShowController = require('./controllers/Show');

class Broadway {
  constructor(command) {
    this.command = command;
  }

  playIt() {
    switch (this.command[0], this.command[1]) {
      case 'shows', 'add':
        ShowController.addShow(this.command.slice(2));
        break;
      default:
      console.log(`Wrong sintax`);
    }
  }
}

let broadway = new Broadway(command);
broadway.playIt();
