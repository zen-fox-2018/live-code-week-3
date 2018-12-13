const db = require('../db/dbConnection')

class Show {
  constructor(id, show, schedule, price, isAvailable) {
    this.id = id
    this.show = show
    this.schedule = schedule
    this.price = price
    this.isAvailable = isAvailable
  }

  static create(input, callback) {
    let query = 
    `
      INSERT INTO Shows (show, schedule, price, isAvailable)
      VALUES (${input[0]}, ${input[1]}, ${input[2]}, 0)
    `
    db.run(query, function (err) {
      if (err) {
        callback(err, null)
      } else {
        callback(null, this)
      }
    })
  }

  static findBy(field, value, callback) {
    let query = 
    `
      SELECT * FROM Shows
      WHERE ${field} = ${value} 
    `

    db.get( query, function(err, rows) {
      if (err){
        callback(err,null)
      } else {
        callback(null, rows)
      }
    })
  }
}