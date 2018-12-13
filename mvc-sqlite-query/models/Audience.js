const db = require('../db/dbConnection')

class Audience {
  constructor(id, firstname, lastname, age, email, type, balance) {
    this.id = id
    this.firstname = firstname
    this.lastname = lastname
    this.age =age
    this.email = email
    this.type = type
    this.balance = balance
  }

  static findOne(field, value, callback) {
    let query = 
    `
      SELECT * FROM Audiences
      WHERE ${field} = ${value} 
    `
    db.get( query, function (err, rows) {
      if (err) {
        callback(err, null)
      } else {
        if (rows === undefined) {
          rows = null
        } else {
          rows = new Audience(rows.id, rows.firstname, rows.age, rows.email, rows.type, rows.balance)
        }
        callback(null, rows)
      }
    })
  }

  static update(field, value, callback) {
    let query = 
    `
      UPDATE Audiences
      SET ${field[1]} = ${value[1]}
      WHERE ${field[0]} = ${value[0]}
    `

    db.run( query, function (err) {
      if (err) {
        callback(err, null)
      } else {
        callback(null, this)
      }
    })
  }
  
}

module.exports = Audience