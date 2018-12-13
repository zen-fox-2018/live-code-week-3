const db = require('./db/connection.js');

class Transaction {
  constructor(name, type, email, totalBelanja) {
    this.name = name
    this.type = type
    this.email = email
    this.totalBelanja = totalBelanja
  }

  static create (ticketNumber, amountOfTicket, TotalInvoice, audienceID, callback) {
    let query = `
                INSERT INTO Tickets
                (ticketNumber, amountOfTicket, TotalInvoice, audienceID)
                VALUES
                ("${ticketNumber}", ${amountOfTicket}, ${TotalInvoice}, ${audienceID})
    `
    db.run(query, function(err) {
      if(err) {
        callback (err)
      }else {
        callback(ticketNumber)
      }
    })
  }

  static findTop3 (callback) {
    let query = `
              SELECT
              Audiences.firstName ||" "|| Audiences.lastName As Fullname,
              Audiences.type,
              Audiences.email,
              Tickets.TotalInvoice AS totalBelanja
              FROM Audiences
              INNER JOIN Tickets ON Tickets.audienceid = Audiences.id
              GROUP BY Audiences.id
              ORDER BY Tickets.TotalInvoice DESC
              LIMIT 3       
    `
    db.all(query, function(err, data){
      if (err) {
        callback(err)
      } else {
        let result = []
        for(let i = 0; i < data.length; i++) {
          let obj = new Transaction (data[i].fullname, data[i].type, data[i].totalBelanja)
          result.push(obj)
        }
      }
    })
  }

  static getTicketNumber (lastName, type) {
    let randomdigit = Math.floor(1000 + Math.random() * 9000)
    let ticketNumber = `TIX${lastName}${type}${randomdigit}`
    return ticketNumber
  }
}

// Fullname: 'Semmi Verian',
// type: 'reguler',
// email: 'semmi@mail.com',
// totalBelanja: 480000 },

module.exports = Transaction