const db = require('../connection');

class Tickets {
  static addTicket(ticketNumber, amount, totalInvoice, audienceId, callback){
    let query   =
            `
              INSERT INTO Tickets
              (ticketNumber, amount, totalInvoice, audienceId)
              VALUES
              ("${ticketNumber}", "${amount}","${totalInvoice}","${audienceId}")
            `
    db.run(query, function(err) {
      if (err) {
        callback(err)
      }
    })
  }
}

module.exports = Tickets
