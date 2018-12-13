const db = require(`../db/connection`)

class Ticket {
    constructor(ticketNumber, amountOfTicket, totalInvoice, audienceId) {
        this.ticketNumber = ticketNumber
        this.amountOfTicket = amountOfTicket
        this.totalInvoice = totalInvoice
        this.audienceId = audienceId
    }
    static findAll(limit, query, cb) {
        let qFindAll
        if (limit != undefined && query != undefined) {
            qFindAll = `SELECT 
                        A.firstName || " " || A.lastName AS Fullname,
                        A.type AS Type,
                        A.email AS Email,
                        SUM(T.totalInvoice) AS TotalBelanja
                        FROM Tickets T 
                            JOIN Audiences A ON T.audienceId = A.id 
                        GROUP BY Fullname ORDER BY TotalBelanja DESC LIMIT ${limit}`
        } else {
            qFindAll = `SELECT * FROM Ticket`
        }
        db.all(qFindAll, function (err, rows) {
            if (err) {
                cb(err, null)
            } else {
                cb(null, rows)
            }
        })
    }

    create(dataShow, dataAudience, amount, expense, cb) {
        let ticketNum = `TIX${dataAudience.lastName}${dataAudience.type}${Math.floor(Math.random() * 9999)}`
        this.ticketNumber = ticketNum
        this.amountOfTicket = amount
        this.totalInvoice = expense
        this.audienceId = dataAudience.id
        let qCreate = `INSERT INTO Tickets (
            ticketNumber, amountOfTicket, totalInvoice, audienceId
        ) VALUES (
            "${this.ticketNumber}", "${this.amountOfTicket}", "${this.totalInvoice}", "${this.audienceId}"
        )`
        db.run(qCreate, function (err) {
            err ?
                cb(err, null) :
                cb(null, ticketNum)
        })
    }

    static findOne(whereCase, whereStatus, cb) {
        let qFindOne;
        if (whereCase && whereStatus) {
            qFindOne = `SELECT * FROM Tickets WHERE ${whereCase} = "${whereStatus}"`
        } else {
            qFindOne = `SELECT * FROM Tickets`
        }

        db.get(qFindOne, function (err, row) {
            err ?
                cb(err, null) :
                cb(null, row)
        })
    }
}

module.exports = Ticket