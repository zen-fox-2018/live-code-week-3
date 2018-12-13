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
      INSERT INTO Shows (id, show, schedule, price, isAvalaible)
      VALUES (null, "${input[0]}", "${input[1]}", "${input[2]}", 0)
    `
    db.run(query, function (err) {
      if (err) {
        console.log(err)
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

    db.all( query, function(err, rows) {
      if (err){
        callback(err,null)
      } else {
        let output = []
        rows.forEach( a => {
          output.push(new Show(a.id, a.show, a.schedule, a.price, a.isAvailable))
        })
        callback(null, output)
      }
    })
  }
}

module.exports = Show
