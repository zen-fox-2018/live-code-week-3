const db = require('./connection')
class Show {
  constructor(input) {
    this.id = input.id
    this.show = input.show 
    this.schedule = new Date(input.schedule).toUTCString()
    this.price = input.price 
    this.isAvailable = input.isAvailable || 0
  }

  create(cb) {
    let query = `INSERT INTO Shows (show, schedule, price)
    VALUES (?, ?, ?)`

    db.run(query, [this.show, this.schedule, this.price] , function(err) {
      if(err) {
        cb(err)
      } else {
        cb(null, this)
      }
    })
  }

  static findWhere(obj, cb) {
    let query = `SELECT * FROM Shows WHERE ${obj.where} = ?` 

    db.all(query ,[obj.value] , (err, rows) => {
      if(err) {
        cb(err)
      } else {
        if(rows) {
          let temp = []
          rows.forEach(row => {
            temp.push(new Show(row))
          })
          cb(null, temp)
        } else {
          cb(null)
        }
      }
    })
  }
}
module.exports = Show
