const db = require('./connection')
class Ticket {
  constructor(input) {
    this.id = input.id 
    this.ticketNumber = input.ticketNumber
    this.amountOfTicket = input.amountOfTicket 
    this.totalInvoice = input.totalInvoice
    this.audienceId = input.audienceId
  }

  static showTop() {
    let query = `select firstName || " " || lastName as FullName , type, email,  sum(totalInvoice) as totalBelanja from Tickets
    join Audiences on Tickets.audienceId = Audiences.id
    group by FullName
    order by totalBelanja desc
    limit 3
    ` 
    db.all
  }
}
module.exports = Ticket