const db = require('../db/connection')

class Audience {

    constructor(object) {
        this._id = object.id
        this._firstName = object.firstName
        this._lastName = object.lastName
        this._age = object.age
        this._email = object.email
        this._type = object.type
        this._balance = object.balance
    }

    get email() {
        return this._email
    }
    get balance() {
        return this._balance
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

    static show3Up(callback) {
        let query = `SELECT firstName || "" || lastName AS fullname , type, email, SUM(Tickets.totalinvoice) AS Total_Belanja  
        FROM Audiences 
        JOIN Tickets 
            ON Audiences.id = Tickets.audienceId
        GROUP BY fullname
        ORDER BY Total_Belanja DESC
        LIMIT 3`
        db.all(query, function(err, rows) {
            if (err) {
                callback(err)
            } else {
                callback(null,rows)
            }
        })
    }

    static findOne(object, callback) {
        let query = `SELECT * FROM Audiences WHERE ${object.field} = ?`
        let input = [object.value]
        db.get(query, input, function(err, row) {
            if (err) {
                callback(err)
            } else {
                if (row === undefined) {
                    callback(null, null)
                } else {
                    let person = new Audience (row)
                    callback(null, person)
                }
            }
        })
    }

    update(field, callback) {
        let query = `UPDATE Audiences SET ${field} = ?
        WHERE id = ?`
        let input = [this[field], this._id]
        Audience.execute(query, input, function(err, data){
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }
}

module.exports = Audience