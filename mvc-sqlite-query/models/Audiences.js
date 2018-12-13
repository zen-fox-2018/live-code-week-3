const db = require('../db/connection.js')

class Model {
    static buyTicket(callback) {

    }

    static checkBalance(totalAfterDisc, callback) {

    }

    static checkType(id, callback) {
        const qType = `
                      select type
                      from Audiences
                      where Audiences.id = ${id};
                      `

        db.all(qType, (err, type) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, type)
            }
        })
    }

    static findShowId(value, callback) {
        const qFindOne = `
                          select *
                          from Shows
                          where id = ${value};
                         `
        db.all(qFindOne, (err, showList) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, showList)
                //cek availability dari empty array db.all
            }
        })
    }

    static findEmailAudience(email, callback) {
        const qFindEmail = `
                         select *
                         from Audiences
                         where email = "${email}";
                         `
        db.all(qFindEmail, (err, showList) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, showList)
            }
        })
    }
}

module.exports = Model