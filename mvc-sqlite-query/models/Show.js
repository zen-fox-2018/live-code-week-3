const db = require('../db/connection');
class Show {
  constructor(obj) {
    this.id = obj.id
    this.show = obj.show;
    this.schedule = obj.schedule;
    this.price = obj.price;
    this.isAvailable = obj.isAvailable;
  }

  static addShow(data, callback) {
    const qAddShow = `
      INSERT INTO
        Shows
        (show, schedule, price)
      VALUES
        (?, ?, ?);
    `
    data[1] = Date.parse(data[1]);
    data[1] = Date(data[1]);

    db.run(qAddShow, data, (err) => {
      if (err) {
        callback (err);
      } else {
        callback();
      }
    })
  }

  static findBy(data, callback) {
    const qfindBy = `
      SELECT
        *
      FROM
        Shows
      WHERE
        ${data[0]} = ?;
    `;

    db.all(qfindBy, data[1], (err, movies) => {
      if (err) {
        callback(err, null);
      } else {
        if (movies) {
          let dataMovies = [];
          movies.forEach( m => {
            dataMovies.push(new Show(m));
          })
          callback(null, dataMovies);
        } else {
          callback(null, null);
        }
      }
    })
  }
}

module.exports = Show;
