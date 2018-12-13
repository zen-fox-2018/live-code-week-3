
const db = require('../db/connection')

class Ticket {
    constructor(object) {
        this._ticketNumber = object.ticketNumber
        this._amountOfTicket = object.amountOfTicket
        this._totalInvoice = object.totalInvoice
        this._audienceId = object.audienceId
        }

    static execute(query,input, callback) {
        db.run(query, input, function (err) {
            if (err) {
                callback(err)
            } else {
                callback(null,this)
            }
        })
    }
    create (callback){
        let query = `INSERT INTO Tickets (ticketNumber, amountOfTicket, totalInvoice, audienceId ) 
            VALUES (?, ?, ?, ?)`
        let input = Object.values(this).filter(x => x !== undefined)
        Ticket.execute(query, input, function(err, data) {
            if (err) {
                callback(err)
            } else {
                callback(null,data)
            }
        })

    }

    static generatenumber(lastname, typemember) {
        let result = ""
        result+= lastname
        result+= typemember
        let random = Math.round(Math.random()*9)
        let random2 = JSON.stringify(random)
        result += random2
        result+= random2
        result+= random2
        return result
    }
}

module.exports = Ticket