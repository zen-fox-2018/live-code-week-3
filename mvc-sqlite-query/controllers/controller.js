const View = require('../views/view');
const Shows = require('../models/show');

class Controller {

  static findAll() {
    Shows.findAll((err, data) => {
      if (err) {
        View.showErr(err);
      } else {
        console.log(data);
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

  }
}

module.exports = Controller;
