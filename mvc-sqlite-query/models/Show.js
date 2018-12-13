const db = require('../db/connection');
class Show {
  constructor(title, schedule, price) {
    this.title = title;
    this.schedule = schedule;
    this.price = price;
  }

  static addShow(data, callback) {
    const qAddShow = `
      INSERT INTO
        Shows
        (show, schedule, price)
      VALUES
        (?, ?, ?);
    `

    db.run(qAddShow, data, (err) => {
      if (err) {
        callback (err);
      } else {
        callback();
      }
    })
  }
}

module.exports = Show;
