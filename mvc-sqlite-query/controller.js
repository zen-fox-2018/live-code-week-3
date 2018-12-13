const Show = require ('./Show.js')
const Transaction = require ('./Transaction.js')
const Audiences = require ('./Audiences.js')
const View = require ('./view.js')


class Controller {

  static shows (input) {
    if(input[0] == 'add') {
      let tittle = input[1]
      let shchedule = input[2]
      let price = input[3]
      Show.create(tittle, shchedule, price, function(err, data) {
        if(err) {
          View.showError(err)
        }else {
          View.show(data)
        }
      })
    } else if (input[0] == 'findBy') {
      let field = input[1]
      let value = input[2]
      Show.findWhere(field, value, function(err, data) {
        if(err) {
          View.showError(err)
        }else {
          View.show(data)
        }
      })
    }
  }

  static transaction (input) {
    if(input[0] === 'top3Audience') {
       Transaction.findTop3(function(err, data) {
         if(err) {
           View.showError(err)
         }else {
           View.show(data)
         }
       })

    }else if (input[0] === 'buyTicket') {
      let showId = input[1]
      let email = input[2]
      let amount = input[3]
      Show.findOne('id', showId, function(err, dataShow) {
        if(err) {
          View.show(err)
        } else if(dataShow == undefined) {
          let msg = 'Show tidak ditemukan!'
            View.show(msg)
        } else{
          Audiences.findOne('email', email, function(err, dataAudience) {
            if(err) {
              View.show(err)
            }else {
              if(dataAudience == undefined) {
                let msg = 'member tidak ditemukan!'
                View.show(msg)
              } else{
                let total = dataShow.price * amount
                if(dataAudience.type == "gold") {
                  total -= total * 0.15
                } else if (dataAudience.type == "silver") {
                  total -= total * 0.05
                }
                if (dataAudience.balance < total) {
                  let msg = 'Mohon maaf saldo anda tidak cukup'
                  View.show(msg)
                }else {
                  let ticketNumber = Transaction.getTicketNumber(dataAudience.lastname, dataAudience.type)
                  Transaction.create(ticketNumber, amount, total, dataAudience.id, function(err, data) {
                    if(err) {
                      View.showError(err)
                    }else {
                      let balanceRemaining = dataAudience.balance - total
                      Audiences.update('balance', balanceRemaining, dataAudience.id, function(err){
                        if(err) {
                          View.showError(err)
                        }else {
                          let msg = `Tiket telah terbeli! Nomor tiket anda adalah ${ticketNumber}. Saldo saat ini ${balanceRemaining}`
                          View.show(msg)
                        }
                      })
                      
                    }
                  })
                }
              }
            }
          })
        }
      })
     
    }
  }
}

module.exports = Controller;