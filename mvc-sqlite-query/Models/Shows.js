const db = require(`../db/connection`)

class Shows {
    constructor(id, show, schedule, price, isAvailable) {
        this.id = id
        this.show = show
        this.schedule = schedule
        this.price = price
        this.isAvailable = isAvailable
    }

    add(title_show, schedule, price, cb) {
        if (title_show != undefined && schedule != undefined && price != undefined) {
            let qAdd = `INSERT INTO Shows (
                show, schedule, price
                ) VALUES (
                    "${title_show}", "${new Date(schedule)}", ${price}
                    )`
            db.run(qAdd, function (err) {
                err ?
                    cb(err, null) :
                    cb(null, this)
            })
        } else {
            cb(`harap masukan data yang benar`, null)
        }
    }

    static findAll(whereCase, whereStatus, cb) {
        let qFindAll;
        if (whereCase && whereStatus) {
            qFindAll = `SELECT * FROM Shows WHERE ${whereCase} = "${whereStatus}"`
        } else {
            qFindAll = `SELECT * FROM Shows`
        }

        db.all(qFindAll, function (err, rows) {
            if (err) {
                cb(err, null)
            } else {
                let result = []
                for (let i = 0; i < rows.length; i++) {
                    result.push(
                        new Shows(
                            rows[i].id,
                            rows[i].show,
                            rows[i].schedule,
                            rows[i].price,
                            rows[i].isAvailable
                        )
                    )
                }
                cb(null, result)
            }
        })
    }

    static findOne(whereCase, whereStatus, cb) {
        let qFindOne;
        if (whereCase && whereStatus) {
            qFindOne = `SELECT * FROM Shows WHERE ${whereCase} = "${whereStatus}"`
        } else {
            qFindOne = `SELECT * FROM Shows`
        }

        db.get(qFindOne, function (err, row) {
            err ?
                cb(err, null) :
                cb(null, row)
        })
    }
}

module.exports = Shows