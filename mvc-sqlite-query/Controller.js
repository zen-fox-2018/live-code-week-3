const View = require('./View')
const Show = require('./Show') 
const Audience = require('./Audiences') 
const Ticket = require('./Ticket') 

class Controller {
  static excute(option) {
    let input = option.slice(2)
    switch (option[0]) {
      case 'shows':
        if(option[1] == 'add') {
          Controller.add(input)
        } else if (option[1] == 'findBy') {
          Controller.findBy(input)
        } else {
          Controller.help()
        }
        break;
      case 'transaction':
        if(option[1] == 'top3Audience') {
          Controller.topAu()
        } else if (option[1] == 'buyTicket') {
          Controller.buyTic(input)
        } else if (option[1] == 'refundTicket'){
          Controller.refund(input)
        } else {
          Controller.help()
        } 
        break;
      default: Controller.help()
        break;
    }
  }

  //done
  static add(input) {
    let obj = {
      show: input[0],
      schedule: input[1],
      price: input[2],
    }
    let newShow = new Show(obj)
    newShow.create((err, dataThis) => {
      if(err) {
        View.disErr(`creating data`, err)
      } else {
        View.display(`Successfully added a ${obj.show}`)
      }
    })
  } 

  //done
  static findBy(input) {
    let obj = {
      where : input[0] , value: input[1]
    }

    Show.findWhere(obj, (err, data) =>{
      if(err) {
        View.disErr(`find show` , err)
      } else {
        if(!data) {
          View.display(`There is no such shows!`)
        } else {
          View.display(`Here are the shows you look for \n` , data)
        }
      }
    })
  }

  //done
  static topAu() {
    Ticket.showTop((err, rows) => {
      if(err) {
        View.disErr(err)
      } else {
        View.display(`Here are the top 3 audiences: \n` ,rows )
      }
    })
  }

  //done
  static buyTic(input) {
    let findShow = {
      where: 'id', value: input[0]
    }

    Show.findOne(findShow, (err, row) => {
      if(err) {
        View.disErr(err)
      } else {
        if(!row) {
          View.display(`Show tidak ditemukan!`)
        } else {
          Audience.findOne({where: 'email', value: input[1]}, (err, audi) => {
            if(err) {
              View.disErr(err)
            } else {
              if(!audi) {
                View.display(`Member tidak ditemukan!`)
              } else {
                audi.buy(row , input[2], (err, dataAud) => {
                  if(err) {
                    View.disErr(err)
                  } else {
                    console.log(dataAud.balance)
                    dataAud.update({set: 'balance', value: dataAud.balance, where: 'id'}, (err) => {
                      if(err) {
                        View.disErr(err)
                      } else {
                        let newobj = {
                          ticketNumber: Ticket.gen(dataAud),
                          amountOfTicket: input[2],
                          totalInvoice: Ticket.total(row.price, input[2]),
                          audienceId: dataAud.id               
                          }
                        let newTic = new Ticket(newobj)
                        newTic.create((err) => {
                          if(err) {
                            View.disErr(err)
                          } else {
                            View.display(`Tiket telah terbeli! Nomor tiket anda adalah ${newTic.ticketNumber}. Saldo saat ini ${dataAud.balance}`)
                          }
                        })
                      }
                    })
                  }
                })
              }
            }
          })
        }
      }
    })
  }

  static refund(input) {
    Ticket.findOne({where: 'ticketNumber', value: input[0]}, (err, row) => {
      if(err) {
        View.disErr(err)
      } else {
        if(!row) {
          View.display(`Nomor ticket tidak ditemukan!`)
        } else {
          Audience.findOne({where: 'id', value: row.audienceId}, (err, rowAud) => {
            if(err) {
              View.disErr(err)
            } else {
              if(!rowAud) {
                View.disErr(`data not found!`)
              } else {
                if(input[1] !== rowAud.email) {
                  View.display(`Email anda tidak sesuai dengan data nomor ticket`)
                } else {
                  row.delete({where:'id'}, (err) => {
                    if(err) {
                      View.disErr(err)
                    } else {
                      rowAud.update({set: 'balance', where: 'id', value : rowAud+row.totalInvoice}, (err) => {
                        if(err) {
                          View.disErr(err)
                        }
                      })
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

  static help() {
    View.help()
  }
}
module.exports = Controller