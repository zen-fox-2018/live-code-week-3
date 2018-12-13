const db = require('../connection.js');

class Show {
  constructor(id, show, schedule, price) {
    this.id = id;
    this.show = show;
    this.schedule = schedule;
    this.price = price;
    this.isAvailable = 0;
  }

  static insertData(titleShow, schedule, price, callback) {
    let query =
      `INSERT INTO Shows (show, schedule, price)
       VALUES ("${titleShow}", "${schedule}", ${price});`;
    db.run(query, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }

  static findBy(condition, value) {
    let query = 
      `SELECT * FROM Shows
       WHERE ${condition} = "${value}";`
    db.all(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        console.log(data);
      }
    })
  }


}

module.exports = Show;