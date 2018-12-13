const db = require('../connection')

class Show {
    constructor(obj) {
        this.id = obj.id
        this.show = obj.show
        this.schedule = obj.schedule
        this.price = obj.price
        this.isAvailable = obj.isAvailable
    }

    static create(obj, cb) {
        obj.schedule = obj.schedule.toString()
        let input = Object.values(obj)
        let query = `
        INSERT INTO Shows
        VALUES(null, ?, ?, ?, null)`
        db.run(query, input, function(err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }

    static findWhere(obj, cb) {
        let field = Object.keys(obj)
        let input = Object.values(obj)
        let query = `
        SELECT *
        FROM Shows
        WHERE ${field[0]} = ?`
        db.all(query, input, (err, data) => {
            if(err) {
                cb(err)
            } else {
                let result = data.map(e => new Show(e))
                cb(null, result)
            }
        })
    }

    static findOne(obj, cb) {
        let field = Object.keys(obj)
        let input = Object.values(obj)
        let query = `
        SELECT *
        FROM Shows
        WHERE ${field[0]} = ?`
        db.get(query, input, (err, data) => {
            if(err) {
                cb(err)
            } else {
                cb(null, data)
            }
        })
    }

}

module.exports = Show