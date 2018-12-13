const db = require('../connection');

class Show {
    constructor(id, show, schedule, price, isAvailable = 0) {
        this.id = id
        this.show = show
        this.schedule = schedule
        this.price = price
        this.isAvailable = isAvailable
    }

    static addShow(show,schedule,price, cb) {
        let qAddShow = 
        `INSERT into Shows (show, schedule, price)
        VALUES ("${show}","${schedule}",${price})`

        db.run(qAddShow, (err) => {
            if(!err) {
                cb(null)
            } else {
                cb(err,this)
            }
        })
    }

    // static findBy(cb)

    static readData(cb) {
        let qReadData = 
        `Select * from Shows`

        db.all(qReadData, (err, data) => {
            if(err) {
                cb(err,null)
            } else {
                cb(null,data)
            }
        })
    }
}

module.exports = Show

// Show.readData()









