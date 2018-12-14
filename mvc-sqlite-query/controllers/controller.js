const View = require('../views/view');
const Shows = require('../models/show');
const Ticket = require('../models/ticket');
const Audience = require('../models/audience');

class Controller {

  static findAll() {
    Shows.findAll((err, data) => {
      if (err) {
        View.showErr(err);
      }
    });
  }

  static addShows(show, schedule, price) {
    Shows.addShows(show, schedule, price, (err) => {
      if (err) {
        View.showErr(err);
      } else {
        View.showOk(show);
      }
    });
  }

  static findBy(field, value) {
    Shows.findBy(field, value, (err, data) => {
      if (err) {
        View.showErr(err);
      } else {
        View.print(data);
      }
    });
  }

  static top3() {
    Ticket.top3((err, data) => {
      if (err) {
        View.showErr(err);
      } else {
        console.log(data);
      }
    });
  }

  static buyTicket(showId, email, amount) {
    Shows.findBy('id', showId, (err, data) => {
      if (err) {
        View.showErr(err);
      } else {
        if (!data) {
          View.showErr('Show tidak ditemukan!');
        } else {
          Audience.findBy('email', email, (err, data) => {
            if (err) {
              View.showErr(err);
            }
          });
        }
      }
    });
  }

}

module.exports = Controller;
