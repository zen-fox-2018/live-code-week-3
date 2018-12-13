const db = require('../db/connection.js')

class Model {
    static topAudiences(callback) {
        const qTopAudiences = `
                                select Audiences.firstName ||' '|| Audiences.lastName as Fullname, Audiences.type, Audiences.email, sum(Tickets.totalInvoice) as TotalBelanja
                                from Tickets
                                inner join Audiences
                                    on Tickets.audienceId = Audiences.id
                                group by Fullname
                                order by TotalBelanja desc
                                limit 3;
                              `
        db.all(qTopAudiences, (err, topAudiences) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, topAudiences)
            }
        })
    }
}

module.exports = Model