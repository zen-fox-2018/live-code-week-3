const db = require(`../db/connection`)

class Audience {
    static findOne(whereCase, whereStatus, cb) {
        let qFindOne;
        if (whereCase && whereStatus) {
            qFindOne = `SELECT * FROM Audiences WHERE ${whereCase} = "${whereStatus}"`
        } else {
            qFindOne = `SELECT * FROM Audiences`
        }

        db.get(qFindOne, function (err, row) {
            err ?
                cb(err, null) :
                cb(null, row)
        })
    }

    static update(whereCase, whereStatus, col, newStatus, cb) {
        let qUpdate = `UPDATE Audiences SET ${col} = "${newStatus}" WHERE ${whereCase} = ${whereStatus}`
        db.run(qUpdate, function (err) {
            err ?
                cb(err, null) :
                cb(null, this)
        })
    }

    static delete(whereCase, whereStatus) {
        let qDelete = `DELETE FROM Ticket WHERE ${whereCase} = "${whereStatus}"`
        db.run(qDelete, function (err, data) {
            
        })
    }

    
}

module.exports = Audience