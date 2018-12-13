const db = require('../db/connection.js')

class Show{
    constructor(id, show, schedule, price){
        this.id = id
        this.show = show
        this.schedule = schedule
        this.price = price
        this.isAvailable = 0
    }

    static create(newShow, cb){
        let query =
        `INSERT INTO Shows 
        VALUES (null, '${newShow.show}', '${newShow.schedule}', ${newShow.price}, 0 )`

        db.run(query, function(err){
            if(err){
                cb(err)
            }
        })
    }

    static findWhere(column, value , cb){
        let query = 
        `SELECT *
        FROM Shows
        WHERE ${column} = ${value}`

        db.all(query, function(err, data){
            if(err){
                cb(err, null)
            }   else{

                let arrData = []

                for(let i = 0; i < data.length; i++){
                    arrData.push(new Show(data[i].id, data[i].show, data[i].schedule, data[i].price))
                }

                cb(null, arrData)
            }
        })
    }

}

module.exports = Show