const db = require('../db/connection')

class Show {
    static findAll(cb) {
        db.all(`SELECT * FROM Shows`, (err,data)=> {
            if(err) cb(err,null)
            else cb(null,data)
        })
    }

    static findOne(fieldName, value , cb) {
        db.get(`SELECT * FROM Shows 
                WHERE ${fieldName} = ? ;`, value, 
                (err, dataFind)=> {
                    if(err) cb(err, null)
                    else cb(null, dataFind)
                })
    }

    static addData(titleShow, schedule, price, cb) {
        let arrData = [titleShow, schedule, price]
        db.run(`INSERT INTO Shows `)
    }

    static updateOne(fieldName, wfieldName , value, wvalue , cb) {
        let statments = [value, wvalue]
        db.run(`UPDATE Shows
                SET ${fieldName} = ? 
                WHERE ${wfieldName} = ? ;`, statments, 
                err=> {
                    if(err) cb(err)
                    else cb(null)
                })
    }

}

module.exports = Show