const Ticket = require('./models/ticket.js');
const Audience = require('./models/audience.js');
const Show = require('./models/show.js');

class Controller {

  static addShows(titleShow, schedule, price) {
    Show.insertData(titleShow, schedule, price, (err) => {
      if (err) {
        View.displayErr(err);
      } else {
        View.succeedAddShows(`Successfully added a ${titleShow}`);
      }
    });
  }

  static findBy(colName, price) {
    Show.findBy(colName, price)
  }

}

module.exports = Controller;