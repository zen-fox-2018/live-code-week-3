
const db =  require('../connection.js')

class Audiences {
    
    static findWhere (callback) {
        db.all(`SELECT Audiences.firstName||' '||Audiences.lastName AS fullname, Audiences.type, Audiences.email, sum(totalInvoice) AS totalbelanja FROM 'Audiences'
        JOIN 'Tickets' ON Audiences.id = Tickets.audienceid
        GROUP BY fullname
        ORDER BY totalbelanja DESC
        LIMIT 3
        `,(err,data) => {
            if(err) {
                callback(err,null)
            } else {
                callback(null,data)
            }
        })
    }
}

module.exports =  Audiences