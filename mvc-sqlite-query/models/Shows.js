const db = require('../db/connection.js')

class Shows {
    constructor(id, show, schedule, price, isAvailable) {
        this.id = id
        this.show = show
        this.schedule = schedule
        this.price = price
        this.isAvailable = isAvailable
    }

    static addingShow(title, schedule, price, callback) {
        const qAddShow = `
                         INSERT INTO Shows(show, schedule, price, isAvailable)
                         VALUES(
                                "${title}",
                                "${schedule}",
                                ${price},
                                0
                                )
                         `
        db.run(qAddShow, (err) => {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }

    static findBy(column, value, callback) {
        const qFinder = `
                        SELECT *
                        FROM Shows
                        WHERE ${column} = "${value}";
                        `
        db.all(qFinder, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                let dataBasedOnId = []
                for (let i = 0; i < data.length; i++) {
                    let specificData = data[i]
                    dataBasedOnId.push(new Shows(specificData.id, specificData.show, specificData.schedule, specificData.price, specificData.isAvailable))    
                }
                if (dataBasedOnId.length === 0) {
                    callback(err, [])
                } else {
                    callback(null, dataBasedOnId)
                }
            }
        })
    }
}

// Shows.findBy('id', 2, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

module.exports = Shows