const db = require('../db/dbConnection')

class Ticket {
  constructor() {

  }

  static top3(callback) {
    let query = 
    `
    SELECT 
      firstName || " " || lastName AS fullname, 
      type,  
      email, 
      SUM(totalInvoice) AS totalBelanja
    FROM Tickets
    INNER JOIN Audiences
      ON Audiences.id = Tickets.audienceId
    GROUP BY Audiences.id
    ORDER BY totalBelanja DESC
    LIMIT 3;
    `

    db.all( query, function (err, data) {
      if (err) {
        callback(err, null)
      } else {
        callback(null, data)
      }
    })
  }

  static create(input, callback) {
    let ticketNum = input[0]
    let amount = input[1]
    let invoice = input[2]
    let audienceId = input[3]

    let query = 
    `
    INSERT INTO Tickets (id, ticketNumber, amountOfTicket, totalInvoice, audienceId)
    VALUES (null, ${ticketNum}, ${amount}, ${invoice}, ${audienceId} )    
    `

    db.run( query, function (err) {
      if (err) {
        callback(err,null)
      } else {
        callback(null, this)
      }
    })
  }

}

module.exports = Ticket