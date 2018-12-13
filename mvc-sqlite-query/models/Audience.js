const db = require('../db/connection.js')

class Audience {
    constructor(firstName, lastName, age, email, type, balance){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.type = type
        this.balance = balance
    }

    static readTop3Audiences(cb){
        let query = `SELECT 
        firstName ||' '|| lastName as fullName, type, email , SUM(Tickets.totalInvoice) as totalBelanja
        FROM Audiences
        JOIN Tickets ON Tickets.audienceId = Audiences.id
        GROUP BY fullName
        ORDER BY totalBelanja desc
        limit 3`
        db.all(query, function(err,rows){
            if(err){
                cb(err,null)
            }
            else {
                cb(null, rows)
            }
        })
    }

    static findByWhere(lihatKolom, jenisKolom, valueJenisKolom, cb) {
        let query = `SELECT ${lihatKolom} FROM Audiences WHERE ${jenisKolom} = ${valueJenisKolom}`
        db.all(query, function(err, rows){
            if(err){
                cb(err, null)
            }
            else {
                cb(null, rows)
                // let showData = []
                // for (let i = 0; i < rows.length; i++) {
                //     showData.push(new Audience(rows[i].id, rows[i].show, rows[i].schedule, rows[i].price, rows[i].isAvailable))
                // }
            }
        })
    }

    static payTicket(ticketAmount){
        // ekspektasi payTicket
        //buy ticket
    }

}

module.exports = Audience