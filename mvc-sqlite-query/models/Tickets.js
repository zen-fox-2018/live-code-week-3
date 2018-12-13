const db = require('../connection')

class Tickets {
    static create(obj, cb) {
        let input = Object.values(obj)
        let query = `
        INSERT INTO Tickets
        VALUES(null, ?, ?, ?, ?)`
        db.run(query, input, function(err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
}

module.exports = Tickets