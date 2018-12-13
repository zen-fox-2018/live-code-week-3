const db = require('./db/connection.js');

class Show {
  
  static create (tittle, schedule, price, callback) {
      let query = `
                  INSERT INTO Shows
                  (show, schedule, price, isAvailable)
                  VALUES
                  ("${tittle}", "${schedule}", ${price}, 0)
      `
      db.run(query, function(err) {
        if(err) {
          callback (err, null)
        }else {
          callback (null, tittle)
        }
      })
    }

    static findWhere (field, value, callback) {
      let query = `
                  SELECT *
                  FROM Shows
                  WHERE 
                    ${field} = ${value}
      `
      db.all(query, function(err, data) {
        if(err) {
          callback(err, null)
        }else {
          callback (null, data)
        }
      })
    }
}

module.exports = Show;