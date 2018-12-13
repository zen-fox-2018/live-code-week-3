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
    var isoDate = new Date(schedule).toISOString();
    let query =
      `INSERT INTO Shows (show, schedule, price)
       VALUES ("${titleShow}", "${isoDate}", ${price});`;
    db.run(query, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }

  static findBy(condition, value, callback) {
    let query =
      `SELECT * FROM Shows
       WHERE Shows.${condition} = ${value};`
    db.all(query, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
          let newData = new Show(data[i].id, data[i].show, data[i].schedule, data[i].price, data[i].isAvailable);
          arr.push(newData);
        }
        callback(null, arr);
      }
    })
  }

  static findOneBy(condition, value, callback) {
    let query =
      `SELECT * FROM Shows
       WHERE Shows.${condition} = ${value};`
    db.get(query, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }

  static count (amountOfTickets) {
    let query = 
    `select sum(${amountOfTickets} * Shows.price) 
      from Shows;`
    db.get(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(data);
      }
    })
  }


}

module.exports = Show;