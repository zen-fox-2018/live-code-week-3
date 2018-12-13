const Show = require('./Show.js')
const Audience = require('./Audience.js')
const Ticket = require('./Ticket.js')
const View = require('./View.js')


class Controller {

  static addShows(options) {
    let obj = {
      show: options[0],
      schedule: options[1],
      price: options[2]
    }

    let newShow = new Show(obj)
    newShow.save(function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        if (data.changes >= 1) {
          View.success(`Successfully added a ${options[0]}`)
        }
      }
    })
  }

  static findBy(options) {
    let obj = {
      field: options[0],
      value: options[1]
    }

    Show.findWhere(obj, function(err, rows) {
      if (err) {
        View.error(err)
      }
      else {
        View.data(rows)
      }
    })
  }

  static top3Audience() {
    Audience.top3Audience(function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        View.data(data)
      }
    })
  }

  static buyTicket(options) {
    let show = null
    let audience = null

    let objShowCheck = {
      field: "id",
      value: options[0]
    }

    Show.findOne(objShowCheck, function(err, row) {
      if (err) {
        View.error(err)
      }
      else {
        if (row === undefined) {
          View.message(`Show tidak ditemukan!`)
        }
        else {
          show = row
          let objAudienceCheck = {
            field: "email",
            value: `"${options[1]}"`
          }
          Audience.findOne(objAudienceCheck, function(err, row) {
            if (err) {
              View.error(err)
            }
            else {
              if (row === undefined) {
                View.message(`Member tidak ditemukan!`)
              }
              else {
                audience = row
                if (audience.type === "gold") {
                  show.price = show.price - (show.price * 15 / 100)
                }
                else if (audience.type === "silver") {
                  show.price = show.price - (show.price * 5 / 100)
                }
                if (audience.balance < show.price) {
                  View.message(`Mohon maaf saldo anda tidak cukup`)
                }
                else {
                  audience.balance = audience.balance - show.price
                  let updateBalanceObj = {
                    field: "balance",
                    value: audience.balance
                  }
                  audience.update(updateBalanceObj, function(err, data) {
                    if (err) {
                      View.error(err)
                    }
                    else {
                      //Berarti sudah kurang balancenya
                      if (data.changes >= 1) {
                        //baru beli nih ticketnya
                        let random = Math.floor(1000 + Math.random() * 9000);
                        let objTicket = {
                          ticketNumber: `TIX${audience.lastName}${random}`,
                          amountOfTicket: options[2],
                          totalInvoice: show.price * options[2],
                          audienceId: audience.id
                        }
                        let newTicket = new Ticket(objTicket)
                        newTicket.save(function(err, data) {
                          if (err) {
                            View.error(err)
                          }
                          else {
                            if (data.changes >= 1) {
                              View.message(`Tiket telah terbeli! Nomor tiket anda adalah ${objTicket.ticketNumber}. Saldo saat ini ${audience.balance}`)
                            }
                            else {
                              View.message(`Terjadi kesalahan dalam membeli ticket`)
                            }
                          }
                        })
                      }
                    }
                  })
                }
              }
            }
          })
        }
      }
    })
  }

  static refundTicket(options) {
    let objTicketNumberCheck = {
      field: "ticketNumber",
      value: `"${options[0]}"`
    }
    let ticketRefundObj = null
    let audienceRefundObj = null

    Ticket.findOne(objTicketNumberCheck, function(err, row) {
      if (err) {
        View.error(error)
      }
      else {
        if (row == undefined) {
          View.message(`Nomor tiket tidak ditemukan`)
        }
        else {
          ticketRefundObj = row
          let objAudienceCheck = {
            field: "email",
            value: `"${options[1]}"`
          }
          Audience.findOne(objAudienceCheck, function(err, row) {
            if (err) {
              View.error(err)
            }
            else {
              if (row === undefined) {
                View.message(`Audience tidak ditemukan`)
              }
              else {
                audienceRefundObj = row
                if (audienceRefundObj.id === ticketRefundObj.audienceId) {
                  ticketRefundObj.delete(function(err, data) {
                    if (err) {
                      View.error(err)
                    }
                    else {
                      if (data.changes >= 1) {
                        let objAudienceUpdate = {
                          field: "balance",
                          value: audienceRefundObj.balance + ticketRefundObj.totalInvoice
                        }
                        audienceRefundObj.update(objAudienceUpdate, function(err, data) {
                          if (err) {
                            View.error(err)
                          }
                          else {
                            if (data.changes >= 1) {
                              View.message(`Ticket dengan nomor ${options[0]} telah dibatalkan. Saldo anda menjadi ${objAudienceUpdate.value}`)
                            }
                          }
                        })
                      }
                    }
                  })
                }
                else {
                  View.message(`Email anda tidak sesuai dengan data Nomor Ticket`)
                }
              }
            }
          })
        }
      }
    })
  }
}

module.exports = Controller