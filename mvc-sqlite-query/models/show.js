const db = require('../db/connection')

class Show {
    constructor(object) {
        this._id = object.id
        this._show = object.show
        this._schedule = object.date 
        this._price = object.price
        this._isAvailable = object.isAvailable || 0
    }

    static execute(query,input, callback) {
        db.run(query, input, function (err) {
            if (err) {
                callback(err)
            } else {
                callback(null,this)
            }
        })
    }
    create(callback) {
        const query = `INSERT INTO Shows (show, schedule, price)
        VALUES (?, ?, ?)`
        let input = Object.values(this).filter(x => x !== undefined)
        Show.execute(query,input, function(err, data) {
            if (err) {
                callback(err)
            } else {
                callback (null, data)
            }
        })
    }

    static findWhere(object, callback) {

        let query = `SELECT * FROM Shows WHERE ${object.field} = ?`
        let input = [object.value]
       db.all(query, input, function (err, rows) {
           if (err) {
               callback(err)
           } else {
               if (rows.length == 0) {
                   callback(null,null)
               } else {
                   let result = []
                    rows.forEach( element => {
                        let data = new Show(element)
                        result.push(data)
                    })
    
                   callback(null, result)
               }
           }
       })

    }
}

module.exports = Show