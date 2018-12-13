const db = require('../db/connection');

class Show {

  constructor(id, show, schedule, price, isAvailable) {
    this.id = id;
    this.show = show;
    this.schedule = schedule;
    this.price = price;
    this.isAvailable = 0;
  }

  static findAll(callback) {

    let qfindAll =
    `
    SELECT
     *
    FROM
     Shows
    `;

    db.all(qfindAll, (err, rows) => {
      if (err) {
        callback(err, null);
      } else {

        let data = [];

        for (let i = 0; i < rows.length; i++) {
          data.push(new Show(rows[i].id, rows[i].show, rows[i].schedule, rows[i].price, rows[i].isAvailable));
        }

        callback(null, data);
      }
    })

  }

  static addShows(show, schedule, price, callback) {

    let qAddShows =
    `
    INSERT INTO Shows
    (show, schedule, price)
    VALUES
    ("${show}", "${schedule}", ${+price})
    `;

    db.run(qAddShows,(err) => {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    });
  }

  static findBy(field, value, callback) {
    let qfindBy =
    `
    SELECT
     ${field}
    FROM
     Shows
    WHERE ${field} = ?
    `;

    db.get(qfindBy, value, (err, rows) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  }


}

module.exports = Show;