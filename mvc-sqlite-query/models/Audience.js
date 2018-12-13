const db = require('../connection')

class Audience {

    static top3(cb) {
        let query = `
        SELECT firstName || ' ' || lastName as Fullname, type, email, SUM(totalInvoice) as totalBelanja
        FROM Audiences
        JOIN Tickets ON Audiences.id = Tickets.audienceId
        GROUP BY Audiences.id
        ORDER BY totalBelanja DESC
        LIMIT 3`
        db.all(query, (err, data) => {
            if(err) {
                cb(err)
            } else {
                cb(null, data)
            }
        })
    }

    static findOne(obj, cb) {
        let field = Object.keys(obj)
        let input = Object.values(obj)
        let query = `
        SELECT *
        FROM Audiences
        WHERE ${field[0]} = ?`
        db.get(query, input, (err, data) => {
            if(err) {
                cb(err)
            } else {
                cb(null, data)
            }
        })
    }

}

module.exports = Audience