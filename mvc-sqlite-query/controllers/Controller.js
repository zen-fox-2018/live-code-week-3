const Show = require('../models/Show.js')
const Ticket = require('../models/Ticket.js')
const Audience = require('../models/Audience.js')
const View = require('../views/View.js')

class Controller {
  static addShow(title, schedule, price){
    if (title === undefined || schedule === undefined || price === undefined ) {
      View.displayErr('command salah')
    } else {
      Show.create([title, schedule, price], (errC, data) => {
        if (errC) {
          
        } else {
          Show.findBy("id", data.lastId, (errF, created) => {
            if (errF) {
            } else {
              View.displaySuccess(`Successfully added the ${created.show}`)
            }
          })
        }
      })
    }
  }

  static findBy(field, value) {
    Show.findBy(field, value, (errF, dataFound) => {
      if (errF) {

      } else {
        View.displaySuccess(`data : \n ${dataFound}`)
      }
    })
  }

  static top3Audience() {
    Ticket.top3( (err, data) => {
      if (err) {

      } else {
        View.displaySuccess(data) // top3
      }
    })
  }

  static buyTicket(id, email, amount) {
    Show.findBy("id", id, (err, dataShow) => {
      if (err) {

      } else {// Show ditemukan
        if (dataShow) {
          Audience.findOne("email", email, (err, dataAudience) => {
            if (err) {

            } else {
              if (dataAudience) {
                let grandTotal = 0
                if (dataAudience.type === 'reguler') {
                  grandTotal += amount * dataShow.price 
                } else if (dataAudience.type === 'silver') {
                  grandTotal += (amount * dataShow.price) * 95/100
                } else if (dataAudience.type === 'gold') {
                  grandTotal += (amount * dataShow.price) * 85/100
                }

                if (dataAudience.balance > grandTotal) {
                  let digit = (Math.random() * 10000) - 1
                  let ticketNum = `TIX${dataAudience.lastName}${dataAudience.type}`
                  Ticket.create([ticketNum, amount, grandTotal, dataAudience.id], (err, success) => {
                    if (err) {
                      console.log(err)
                    } else {
                      let sisa = dataAudience.balance - grandTotal
                      Audience.update(["balance", "id"],[sisa, dataAudience.id], (err, updated) => {
                        if (err) {
                          console.log(err)
                        } else {
                          View.displaySuccess(updated)
                        }
                      })
                    }
                  })
                } else {
                  View.displayErr('mohon maaf saldo anda tidak cukup')

                }
              } else {

                // data Member tidak ditemukan
              }
            }
          })
        } else {
          // Show tidak ditemukan
        }
      }
    })
  }
}

module.exports = Controller