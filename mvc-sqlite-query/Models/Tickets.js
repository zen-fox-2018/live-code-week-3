const db = require('../connection')

class Tickets {
    constructor(id, ticketNumber, amountOfTicket, totalInvoice, audienceId) {
        this.id = id
        this.ticketNumber = ticketNumber;
        this.amountOfTicket = amountOfTicket;
        this.totalInvoice = totalInvoice;
        this.audienceId = audienceId;
    }
    static buyTicket(data) {
        
    }
}
module.exports = Tickets;