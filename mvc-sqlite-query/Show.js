const db = require('./connection.js')

class Show {
  constructor(input) {
    this.id = input.id
    this.show = input.show
    this.schedule = input.schedule
    this.price = input.price
    this.isAvailable = input.isAvailable || 0
  }

  save(cb) {
    const input = Object.values(this).filter(function(element) {
      return element
    })

    let query =
      `
      INSERT INTO Shows
      (show, schedule, price, isAvailable)
      VALUES
      (?, ?, ?, ?);
      `
  }

}