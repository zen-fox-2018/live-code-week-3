const db = require('./connection')
class Ticket {
  constructor(input) {
    this.id = input.id 
    this.ticketNumber = input.ticketNumber
    this.amountOfTicket = input.amountOfTicket 
    this.totalInvoice = input.totalInvoice
    this.audienceId = input.audienceId
  }

  static showTop(cb) {
    let query = `select firstName || " " || lastName as FullName , type, email,  sum(totalInvoice) as totalBelanja from Tickets
    join Audiences on Tickets.audienceId = Audiences.id
    group by FullName
    order by totalBelanja desc
    limit 3
    ` 
    db.all(query, (err, rows) => {
      if(err) {
        cb(err)
      } else {
        cb(null, rows)
      }
    })
  }

  create(cb) {
    let query = `INSERT INTO Tickets (ticketNumber, amountOfTicket, totalInvoice, audienceId)
      VALUES (?, ?, ?, ?)
    `
    db.run(query , [this.ticketNumber, this.amountOfTicket, this.totalInvoice, this.audienceId] , (err) => {
      if(err) {
        cb(err)
      } else {
        cb(null)
      }
    })
  }

  static gen(data)  {
    let random = Math.floor(Math.random()*(9999 - 1000 + 1)+1000)
    return `TIX${data.lastName}${data.type}${random}`
  }

  static total(price, total) {
    return price * total
  }

  static findOne(obj , cb) {
    let query = ` SELECT * FROM Tickets WHERE ${obj.where} = ? `

    db.get(query, [obj.value] , (err, row) => {
      if(err) {
        cb(err) 
      } else {
        if(row) {
          cb(null, new Ticket(row))
        } else {
          cb(null, null)
        }
      }
    })
  }

  delete(obj, cb) {
    let que = `DELETE FROM Tickets WHERE ${obj.where} = ?` 

    db.run(que, [this[obj.where]] , (err) => {
      if(err) {
        cb(err)
      } else {
        cb(null)
      }
    })
  }
}
module.exports = Ticket