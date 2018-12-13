const db = require('./connection');

class Shows{
  static addShow(title, schedule, price,callback){
    let query   =
            `
              INSERT INTO Shows
              (title, schedule, price)
              VALUES
              ("${title}", "${schedule}","${price}")
            `
    db.run(query, function(err) {
      if (!err) {
        console.log('isAvailab
      } else {
        console.log('ERR: ', err);
      }
    })
  }
}

module.exports = Shows;
