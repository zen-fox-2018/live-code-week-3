const db = require('../connection');

class Shows{
  static addShow(title, schedule, price, callback){
    let query   =
            `
              INSERT INTO Shows
              (show, schedule, price)
              VALUES
              ("${title}", "${schedule}","${price}")
            `
    db.run(query, function(err) {
      if (err) {
        callback(err)
      }
    })
  }

  static findBy(column, value, callback){
    let query   =
            `
              SELECT *
              FROM Shows
              WHERE "${column}" = "${value}"
            `
    db.all(query, function(err,data) {
      if (err) {
        callback(err);
      }
      else {
        callback(data);
      }
    })
  }

}

module.exports = Shows;
