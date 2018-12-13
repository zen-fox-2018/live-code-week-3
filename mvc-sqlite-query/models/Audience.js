const db = require('../connection')

class Audience {
    constructor(id, firstName, lastName, age, email, type, balance) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.type = type
        this.balance = balance
    }

    static findByEmail(input, cb) {
        let query = `SELECT * FROM Audiences WHERE email = ?`

        db.get(query, [input], function(err, row) {
            if(err) {
                cb(err)
            } else {
                let audience = new Audience(row.id, row.firstName, row.lastName, row.age, row.email, row.type, row.balance)
                cb(audience)
            }
        })
    }

    update(input, cb) {
        let query = `UPDATE Audiences SET balance = "${Number(input)}" WHERE email = ${input}`

        db.run(query, function(err) {
            if(err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
}

module.exports = Audience