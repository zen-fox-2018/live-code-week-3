const db = require('./db/connection.js');

class Audiences {
  constructor(id, firstname, lastname, age, email, type, balance) {
    this.id = id
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.email = email
    this.type = type
    this.balance = balance
  }


  static findOne (field, value, callback) {
    let query = `
                SELECT *
                FROM Audiences
                WHERE
                  ${field} = "${value}"
    `
    db.get (query, function(err, data) {
      if(err) {
        callback (err, null)
      }else if (data !== undefined) {
        let obj = new Audiences (data.id, data.firstName, data.lastName, data.age, data.email, data.type, data.balance)
        callback(null, obj)
      }else if (data == undefined) {
        callback(null, data)
      }
    })
  }

  static update (field, value, id, callback) {
    let query = `
              UPDATE Audiences
              SET ${field} = ${value}
              WHERE Audiences.id = ${id};
    `
    db.run(query, function (err) {
      if(err) {
        callback(err)
      } else {
        callback()
      }
    })
  }
}


module.exports = Audiences;