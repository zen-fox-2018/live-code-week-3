const db = require('./connection') 
class Audience {
  constructor(input) {
    this.id = input.id 
    this.firstName = input.firstName
    this.lastName = input.lastName
    this.age = input.age 
    this.email = input.email
    this.type = input.type 
    this.balance = input.balance
  }
  static findOne(obj, cb) {
    let query = `SELECT * FROM Audiences WHERE ${obj.where} = ?` 
    db.get(query, [obj.value] , (err, row) => {
      if(err) {
        cb(err)
      } else {
        if(row) {
          cb(null, new Audience(row))
        } else {
          cb(null, null)
        }
      }
    })
  }

  buy(tic, tot,  cb) {
    
    let disc ;
    if(this.type == 'gold') {
      disc = 0.15 * tic.price
    } else if(this.type == 'silver') {
      disc = 0.05 * tic.price
    }
    let pay = (tic.price - disc) * tot

    if(this.balance < pay) {
      cb(`Mohon maaf saldo anda tidak mencukupi !`)
    } else {
      this.balance = this.balance - pay
      cb(null, this)
    }
  }
  
  update(obj , cb) {
    let quer = `UPDATE Audiences SET ${obj.set} = ? WHERE ${obj.where} = ?`

    db.run(quer, [obj.value, this[obj.where]] , (err) => {
      if(err) {
        cb(err)
      }else {
        cb(null)
      }
    })
  }

}
module.exports = Audience