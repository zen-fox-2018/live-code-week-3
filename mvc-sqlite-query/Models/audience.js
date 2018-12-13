
const db = require("../connection");

class Audience {
    constructor(id, firstname, lastname, age, email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email
    }

    static getTopThree(callback) {
        let query = `SELECT firstName||" "||lastName AS fullname, type, email from Audiences 
                     JOIN Tickets ON Audiences.id = Tickets.audienceId limit 3`
        db.all(query, function(err, data) {
            if(err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
    }

    static findOne(column, value, callback) {
        let selectOne = `SELECT * FROM Audiences
                         WHERE  ${column}= "${value}"`
        db.get(selectOne, function(err, row) {
            if(err) {
            callback(err)
            } else {
                if(row === undefined) {
                    callback(null)
                } else {
                    let found = new Shows(row.id, row.firstname, )
                    callback(found)
                }
            }
        })
    }
}

module.exports = Audience