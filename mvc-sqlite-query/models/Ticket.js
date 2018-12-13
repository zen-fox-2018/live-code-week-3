const db = require('../connection')

class Ticket {
    constructor(id, ticketNumber, amoutOfTicket, totalInvoice, audienceId) {
        this.id = id
        this.ticketNumber = ticketNumber
        this.amoutOfTicket = Number(amoutOfTicket)
        this.totalInvoice = Number(totalInvoice)
        this.audienceId = Number(audienceId)
    }

    create(input, cb) {
        let query = 
        `INSERT INTO Tickets (ticketNumber, amountOfTicket, totalInvoice, audienceId)
        VALUE("${this.ticketNumber}", "${this.amoutOfTicket}", "${this.totalInvoice}", "${this.audienceId}")
        `

        db.run(query, function(err) {
            if(err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
}

module.exports = Ticket