const db =  require('../connection.js')

class Movies {
    static create (input,callback) {
        db.run(`INSERT INTO 'Shows' (show,schedule,price)
                VALUES (
                        "${input.title}",
                        "${input.schedule}",
                        ${input.price}
                )`, (err) => {
                    if (err) {
                        callback(err)
                    } else{
                        callback()
                    }
                })
    }
    static findOne (input, callback) {
        db.all(`SELECT * FROM 'Shows'
                WHERE "${input.task}" = ${input.request}`,
                (err,data) => {
                    if (err) {
                        callback(err,null)
                    } else {
                        callback (null,data)
                    }
                })
    }
}


module.exports = Movies