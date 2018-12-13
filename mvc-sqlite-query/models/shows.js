const db = require('../db/connection.js')

class Show{
    constructor(show, schedule, price){
        this.show = show
        this.schedule = schedule
        this.price = price
    }

    static create(newShow, cb){
        let query =
        `INSERT INTO Shows 
        VALUES (null, '${newShow.show}', '${newShow.schedule}', ${newShow.price}, 0 )`

        db.run(query, function(err){
            cb(err)
        })
    }

}

module.exports = Show