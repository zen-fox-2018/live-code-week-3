const db = require('./connection.js')

class Show {
  constructor(input) {
    this.id = input.id
    this.show = input.show
    this.schedule = input.schedule
    this.price = input.price
    this.isAvailable = input.isAvailable || 0
  }

  save(cb) {
    const input = Object.values(this).filter(function(element) {
      return element
    })

    let query =
      `
      INSERT INTO Shows
      (show, schedule, price, isAvailable)
      VALUES
      (?, ?, ?, ?);
      `

    db.run(query, input, function(err) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, this)
      }
    })
  }

  static findWhere(obj, cb) {
    let field = obj.field
    let value = obj.value

    let query =
    `
    SELECT * FROM Shows
    WHERE ${field} = ${value}
    `

    db.all(query, function(err, rows) {
      if (err) {
        cb(err)
      }
      else {
        let result = []
        for (var i = 0; i < rows.length; i++) {
          result.push(new Show(rows[i]))
        }
        cb(null,result)
      }
    })
  }

  static findOne(obj, cb) {
    let field = obj.field
    let value = obj.value

    let query =
    `
      SELECT * FROM Shows
      WHERE ${field} = ${value};
    `

    db.get(query, function(err, row) {
      if (err) {
        cb(err)
      }
      else {
        if (row === undefined) {
          cb(null, undefined)
        }
        else {
          let data = new Show(row)
          cb(null, data)
        }
      }
    })
  }
}

module.exports = Show