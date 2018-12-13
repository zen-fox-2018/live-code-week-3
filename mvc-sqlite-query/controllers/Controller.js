const Show = require('../models/Show')
const View = require('../views/View')
const Transaction = require('../models/Transaction')
const Audience = require('../models/Audience')

class Controller {

    static addShow(titleShow, scheduleShow, price) {
        Show.addData(titleShow, scheduleShow, price, 
            (err)=> {
                if(err) View.showErr(err)
                else View.showData(`Successfully added a ${titleShow}`)
            })
    }

    static showAll() {
        Show.findAll((err, dataShow) => {
            if(err) View.showErr(err)
            else View.showData(dataShow)
        })
    }

    static showFindBy(collumn_name, value) {
        Show.findOne(collumn_name, value, (err,dataFind)=> {
            if(err) View.showErr(err)
            else View.showData(dataFind)
        })
    }

    static top3Audience() {
        Transaction.getTop3Audince((err,dataTop)=> {
            if(err) View.showErr(err)
            else View.showData(dataTop)
        })
    }

    static buyTicket(showId, emailAudiences, amountTicket){
        Show.findOne('id', showId, (err,dataShow)=> {
            if(err) View.showErr(err)
            else {
                if(!dataShow.length) View.showErr(`Show tidak Ditemukan!`)
                else {
                    Audience.findOne('email', emailAudiences, (err,dataAudience)=> {
                        if(err) View.showErr(err)
                        else {
                            if(!dataAudience.length) View.showErr(`Member tidak ditemukan!`)
                            else{
                               let priceNow = 0
                               if(dataAudience[0].type == 'gold') {
                                   priceNow = dataShow[0].price * amountTicket * 0.15
                               } else if(dataAudience[0].type == 'silver') {
                                    priceNow = dataShow[0].price * amountTicket * 0.05
                               } else{
                                   priceNow = dataShow[0].price * amountTicket
                               }
                               if(dataAudience[0].balance < priceNow) {
                                   View.showErr(`Mohon maaf saldo anda tidak cukup`)
                
                               } else {
                                   let currbalance = dataAudience[0].balance - priceNow
                                   let random = ~~(Math.random()* 8999) + 1000
                                   let tixTicket = `TIX${dataAudience[0].lastName}${dataAudience[0].type}${random}`
                                   Transaction.addTransaction(tixTicket, amountTicket, priceNow, dataAudience[0].id, (err)=> {
                                       if(err) View.showErr(err)
                                        else {
                                            Audience.updateOne('balance', 'id', currbalance, dataAudience[0].id, (err)=>{
                                                if(err) View.showErr(err)
                                                else View.showData(`Ticket telah terbeli! Nomor ticket anda adalah ${tixTicket}. Saldo saat ini ${currbalance}`)
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

    static refundTicket(ticketNum, emailAudiences){
        Transaction.findOne(ticketNumber, ticketNum, (err,dataTicket)=> {
            if(err) View.showErr(err)
            else {
                if(!dataTicket.length){
                    View.showErr(`Nomor tiket tidak ditemukan`)
                } else {
                    Audience.findOne('email', emailAudiences, (err,dataAudience)=> {
                        if(err) View.showErr(err)
                        else{
                            if(!dataAudience.length && dataTicket[0].audienceId != dataAudience[0].id) {
                                View.showErr(`Email anda tidak sesuai dengan data Nomor Ticket`)
                            } else {
                                Transaction.deleteOne(dataTicket[0].id, (err)=> {
                                    if(err) {
                                       View.showErr(err) 
                                    } else {
                                        Audience.updateOne('balance','id', (dataAudience[0].balance))
                                    }
                                })
                            }
                        }
                    })
                }
            }
        })
    }

}

module.exports = Controller