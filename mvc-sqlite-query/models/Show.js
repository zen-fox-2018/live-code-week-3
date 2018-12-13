const db = require('../connection')

class Show {
    constructor(id, show, schedule, price) {
        this.id = id
        this.show = show
        this.schedule = new Date(schedule)
        this.price = Number(price)
        this.isAvalaible = 0
    }

    static findBy(field, value, cb) {
        let query = `SELECT * FROM Shows WHERE ${field} = ?`

        db.all(query, [value], function(err, row) {
            if(err) {
                cb('Error ', err, null)
            } else {
                let dataShow = []
                for(let i = 0; i < row.length; i++) {
                    let show = new Show(row.id, row.show, row.schedule, row.price, row.isAvalaible)
                    dataShow.push(show)
                }
                cb(null, dataShow)
            }
        })
    }

    create(cb) {
        let query = `INSERT INTO Shows (show, schedule, price)
        VALUES ("${this.show}", "${this.schedule}", "${this.price}")`
        
        db.run(query, function(err) {
            if(err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
}

module.exports = Show