const db = require('../db/connection.js')

class Audience{
    constructor(id, firstName, lastName, age, email, type, balance){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.type =type
        this.balance = balance
    }

    static findTransactions(cb){
        let query = 
        `SELECT 
            firstName ||" "|| lastName AS fullname,
            type,
            email,
            SUM (Tickets.totalInvoice) AS totalBelanja
        FROM Audiences
        INNER JOIN Tickets ON Audiences.id = Tickets.audienceId
        GROUP BY Tickets.audienceId
        ORDER BY totalBelanja DESC LIMIT 3`

        db.all(query, function(err, data){
            if(err){
                cb(err, null)
            }   else{
                cb(null, data)
            }
        })
    }

    static findTransactionsOne(id, cb){
        let query = 
        `SELECT 
            firstName ||" "|| lastName AS fullname,
            type,
            email,
            SUM (Tickets.totalInvoice) AS totalBelanja
        FROM Audiences
        INNER JOIN Tickets ON Audiences.id = Tickets.audienceId
        GROUP BY Tickets.audienceId
        HAVING id = ${id}`

        db.all(query, function(err, data){
            if(err){
                cb(err, null)
            }   else{
                cb(null, data)
            }
        })
    }

    static findWhere(column, value, cb){
        let query = 
        `SELECT *
        FROM Audiences
        WHERE ${column}= ${value}`

        console.log(column, value)

        db.all(query, function(err, data){
            if(err){
                cb(err, null)
            }   else{

                let arrData = []
                
                for(let i = 0; i < data.length; i++){
                    arrData.push(new Audience(data[i].id, data[i].firstName, data[i].lastName, data[i].age, data[i].email, data[i].type, data[i].balance ))
                }

                cb(null, arrData)
            }
        })
    }
}

module.exports = Audience