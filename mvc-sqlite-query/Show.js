const db = require('./db/connection.js');

class Show {
  
  constructor (id, show, schedule, price, isAvailable) {
    this.id = id
    this. show = show
    this.schedule = schedule
    this.price = price
    this.isAvailable = isAvailable
  }

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
        }else if (data !== undefined) {
          let result = []
          for(let i = 0; i < data.length; i++) {
            let obj = new Show (data[i].id, data[i].show, data[i].schedule, data[i].price, data[i].isAvailable)
            result.push(obj)
          }
          callback (null, result)
        } else if (data == undefined) {
          callback(null, data)
        }
      })
    }

    static findOne (field, value, callback) {
      let query = `
                  SELECT *
                  FROM Shows
                  WHERE
                    ${field} = "${value}"
      `
      db.get (query, function(err, data) {
        if(err) {
          callback (err, null)
        }else if (data !== undefined) {
          let obj = new Show (data.id, data.show, data.schedule, data.price, data.isAvailable)
          callback(null, obj)
        }else if (data == undefined) {
          callback(null, data)
        }
      })
    }
}

module.exports = Show;