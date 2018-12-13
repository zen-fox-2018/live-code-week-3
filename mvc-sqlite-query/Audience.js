const db = require('./connection.js')

class Audience {
  constructor(input) {
    this.id = input.id
    this.firstName = input.firstName
    this.lastName = input.lastName
    this.age = input.age
    this.email = input.email
    this.type = input.type
    this.balance = input.balance
  }

  static top3Audience(cb) {
    let query =
    `
      SELECT firstName ||" "||lastName AS Fullname, type, email, sum(totalInvoice) AS totalBelanja
      FROM Audiences JOIN Tickets ON Audiences.id = Tickets.audienceId GROUP BY audienceId
      ORDER BY totalBelanja DESC LIMIT 3
    `

    db.all(query, function (err, rows) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, rows)
      }
    })
  }

  static findOne(obj, cb) {
    let field = obj.field
    let value = obj.value

    let query =
    `
      SELECT * FROM Audiences
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
          let data = new Audience(row)
          cb(null, data)
        }
      }
    })
  }

  update(obj, cb) {
    let query =
    `
      UPDATE Audiences
      SET ${obj.field} = ${obj.value}
      WHERE id = ${this.id};
    `
    db.run(query, function(err) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, this)
      }
    })
  }
}

module.exports = Audience