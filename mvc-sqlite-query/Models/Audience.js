const db = require('../connection')
class Audience {
    constructor(id, firstName, lastName, age, email, type, balance) {
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.type = type;
        this.balance = balance
    }
    static findTop3Audience(callback) {
        let query = `
        SELECT 
            Audiences.firstName||" "||Audiences.lastName AS FullName, 
            Audiences.type, 
            Audiences.email, 
            SUM(Tickets.totalInvoice) AS TotalBelanja
        FROM Tickets
        JOIN Audiences
        ON Tickets.audienceId = Audiences.id
        group by FullName
        order by totalBelanja desc
        LIMIT 3
        `
        db.all(query, function(err, thedata) {
            if(err) {
                callback(err)
            } else {
                callback(thedata)
            }
        })
    }
}
module.exports = Audience;