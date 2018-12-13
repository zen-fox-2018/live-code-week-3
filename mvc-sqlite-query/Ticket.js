const db = require('./connection.js')

class Ticket {
  constructor(input) {
    this.id = input.id
    this.ticketNumber = input.ticketNumber
    this.amountOfTicket = input.amountOfTicket
    this.totalInvoice = input.totalInvoice
    this.audienceId = input.audienceId
  }

  save(cb) {
    const input = Object.values(this).filter(function(element) {
      return element
    })

    let query =
      `
      INSERT INTO Tickets
      (ticketNumber, amountOfTicket, totalInvoice, audienceId)
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

  static findOne(obj, cb) {
    let field = obj.field
    let value = obj.value

    let query =
    `
      SELECT * FROM Tickets
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
          let data = new Ticket(row)
          cb(null, data)
        }
      }
    })
  }

  delete(cb) {
    let query =
    `
      DELETE FROM Tickets
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

module.exports = Ticket