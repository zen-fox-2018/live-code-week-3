const db = require('../db/connection')

class Transaction {

    static getTop3Audince(cb) {
        db.all(`SELECT (Audiences.firstName||' '||Audiences.lastName) AS Fullname , Audiences.type , Audiences.email, SUM(Tickets.totalInvoice) AS totalBelanja
        FROM Tickets
        JOIN Audiences
        ON Tickets.audienceId = Audiences.id
        GROUP BY Audiences.firstName 
        ORDER BY totalBelanja DESC LIMIT 3`,
        (err, dataAudience)=> {
            if(err) cb(err, null)
            else cb(null, dataAudience)
        })
    }
    
    static findOne(fieldName, value , cb) {
        db.all(`SELECT * FROM Audiences 
                WHERE ${fieldName} = ? ;`, value, 
                (err, dataFind)=> {
                    if(err) cb(err, null)
                    else cb(null, dataFind)
                })
    }

   static deleteOne(id, cb) {
       db.run(`DELETE FROM Tickets WHERE id = ?`,id,(err)=> {
           if(err) cb(err)
           else cb()
       })
   }

    static addTransaction(tixFormat, amountofTicket, totalInvoice, audienceId, cb) {
        let statments = [tixFormat, amountofTicket, totalInvoice, audienceId]
        db.run (`INSERT INTO Tickets VALUES (null, ?, ?, ?, ?)`, statments ,(err)=> {
            if(err) cb(err)
            else cb(null)
        })
    }
}

module.exports = Transaction