const db = require('../db/connection')

class Show {
    constructor(obj){
        this.id = obj['id']
        this.show = obj['show']
        this.schedule = obj['schedule']
        this.price = obj['price']
        this.isAvailable = obj['isAvailable']
    }
    static findAll(cb) {
        db.all(`SELECT * FROM Shows`, (err,data)=> {
            if(err) cb(err, null)
            else {
                let result = []
                for(let i= 0; i < data.length; i++) {
                    result.push(new Show(data[i]))
                }
                cb(null, result)
            }
        })
    }

    static findOne(fieldName, value , cb) {
        db.all(`SELECT * FROM Shows 
                WHERE ${fieldName} = ? ;`, value, 
                (err, dataFind)=> {
                    if(err) cb(err, null)
                    else {
                        if(!dataFind.length) cb(null, dataFind)
                        else {
                            let result = []
                            for(let i= 0; i < dataFind.length; i++) {
                                result.push(new Show(dataFind[i]))
                            }
                            cb(null, result)
                        }
                    }
                })
    }

    static addData(titleShow, schedule, price, cb) {
        let arrData = [titleShow, schedule, price]
        db.run(`INSERT INTO Shows VALUES (null, ? , ? , ? , 0)`, arrData, 
        (err)=> {
            if(err) cb(err)
            else cb(null)
        })
    }

    static updateOne(fieldName, wfieldName , value, wvalue , cb) {
        let statments = [value, wvalue]
        db.run(`UPDATE Shows
                SET ${fieldName} = ? 
                WHERE ${wfieldName} = ? ;`, statments, 
                err=> {
                    if(err) cb(err)
                    else cb(null)
                })
    }

}

module.exports = Show