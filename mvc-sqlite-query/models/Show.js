const db = require('../db/connection.js')

class Show {
    constructor(id, show, schedule, price, isAvailable){
        this.id = id
        this.show = show
        this.schedule = schedule
        this.price = price
        this.isAvailable = isAvailable
    }

    static readData(cb){
        let query = `SELECT * FROM Shows`
        db.all(query, function(err,rows){
            if(err){
                cb(err, null)
            }
            else {
                let showData = []
                for(let i = 0; i < rows.length; i++){
                    showData.push(new Show(rows[i].id, rows[i].show, rows[i].schedule, rows[i].price, rows[i].isAvailable))
                }
                cb(null,showData)

            }
        })
    }
}

module.exports = Show