const db = require('../db/connection')

class Audicence {
    

    static findOne(fieldName, value , cb) {
        db.all(`SELECT * FROM Audiences 
                WHERE ${fieldName} = ? ;`, value, 
                (err, dataFind)=> {
                    if(err) cb(err, null)
                    else cb(null, dataFind)
                })
    }

   
    static updateOne(fieldName, wfieldName , value, wvalue , cb) {
        let statments = [value, wvalue]
        db.run(`UPDATE Audiences
                SET ${fieldName} = ? 
                WHERE ${wfieldName} = ? ;`, statments, 
                err=> {
                    if(err) cb(err)
                    else cb(null)
                })
    }

}

module.exports = Audicence