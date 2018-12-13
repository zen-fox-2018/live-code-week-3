const Show = require('../models/Show');
const ShowView = require('../views/Show');

class ShowController {
  static addShow(data) {
    Show.addShow(data, (err) => {
      if (err) {
        ShowView.showErr(err);
      } else {
        ShowView.showSuccess(`Successfully added a ${data[0]}`);
      }
    })
  }
  
  static findBy(data) {
    Show.findBy(data, (err, movies) => {
      if (err) {
        ShowView.showErr(err);
      } else {
        ShowView.showData(movies);
      }
    })
  }
}

module.exports = ShowController;
