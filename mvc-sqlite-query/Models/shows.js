
const db = require("../connection")

class Shows {
    constructor(id, shows, schedule, price, isAvailable) {
        this.id = id;
        this.shows = shows;
        this.schedule = new Date(schedule);
        this.price = price
        this.isAvailable = isAvailable;
    }

    static findBy(value, callback) {
        let selectOne = `SELECT * FROM Shows
                         WHERE ${value.column} = ${value.value}`
        db.all(selectOne, function(err, data) {
            if(err) {
                callback(err, null)
            } else {
                let result = [];
                for(let i = 0; i < data.length; i++) {
                    let found = new Shows(data[i].id, data[i].shows, data[i].schedule, data[i].price, data[i].isAvailable)
                    result.push(found)
                }
                callback(null, result)
            }
        })
    }

    static findOne(id, callback) {
        let selectOne = `SELECT * FROM Shows
                         WHERE id = ${id}`
        db.get(selectOne, function(err, row) {
            if(err) {
            callback(err)
            } else {
                if(row === undefined) {
                    callback(null)
                } else {
                    let found = new Shows(row.id, row.shows, row.schedule, row.price, row.isAvailable)
                    callback(found)
                }
            }
        })
    }

    create(callback) {
        let insertNewShow = `INSERT INTO Shows(show, schedule, price)
                             VALUES("${this.shows}", "${this.schedule}", ${this.price});`
        db.run(insertNewShow, function(err) {
            if(err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }
}

module.exports = Shows