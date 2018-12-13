const db = require('../connection')

class Transactions {
    constructor() {

    }

    static findData(cb) {
        let query = 
        `SELECT 
            firstName || ' ' || lastName AS fullname, 
            type, 
            email, 
            totalInvoice AS totalBelanja 
        FROM Tickets
        JOIN Audiences
        ON Tickets.audienceId = Audiences.id
        ORDER BY totalInvoice DESC
        LIMIT 3`

        db.all(query, function(err, data) {
            if(err) {
                cb(err, null)
            } else {
                cb(null, data)
            }
        })
    }

    static generateFormat(lastName, type) {
        let random = Math.floor(Math.random () * 9999 + 1000)
        return `TIXD${lastName}${type}${random}`
    }
}

module.exports = Transactions