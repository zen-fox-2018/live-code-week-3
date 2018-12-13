const View = require('../views/View')
const Transaction = require('../models/Transaction')
const Show = require('../models/Show')
const Audience = require('../models/Audience')
const Ticket = require('../models/Ticket')

class Controller {
    static transaction() {
        Transaction.findData(function(err, data) {
            if(err) {
                View.displayError('Error: ', err)
            } else {
                View.displaySuccess(data)
            }
        })
    }

    static buyTicket(input) {
        Show.findById(input.show_id, function(err, showData) {
            if(err) {
                View.displayError('Err Show : ', err)
            } else {
                if(!showData) {
                    View.alert('Show tidak ditemukan!')
                } else {
                    Audience.findByEmail(input.email_audiences, function(err, audienceData) {
                        if(err) {
                            View.displayError('Err Audience : ', err)
                        } else {
                            if(!audienceData) {
                                View.alert('Member tidak ditemukan!')
                            } else {
                                // console.log(showData, '---------data SHOWS')
                                // console.log(audienceData, '---------data AUDIENCE')
                                let price = 0
                                if(audienceData.type === 'gold') {
                                    price = showData.price * (15/100)
                                } else if (audienceData.type === 'silve') {
                                    price = showData.price * (5/100)
                                }
                                
                                let totalPrice = input.amount_of_ticket * price
                                let balanceRemain = audienceData.balance - totalPrice
                                let ticketNumber = Transaction.generateFormat(audienceData.lastName, audienceData.type)
                                if(audienceData.balance <= totalPrice) {
                                    View.alert('Mohon maaf saldo anda tidak cukup')
                                } else if (audienceData.balance >= totalPrice){
                                    Ticket.create(null, ticketNumber, input.amount_of_ticket, totalPrice, audienceData.id, function(err) {
                                        if(err) {
                                            View.displayError('Err : ', err)
                                        } else {
                                            audienceData.update(balanceRemain, function(err) {
                                                if(err) {
                                                    View.displayError('Err : ', err)
                                                } else {
                                                    View.displaySuccess(`Tiker telah terbeli! Nomor tiket anda adalah ${ticketNumber}. Saldo saat ini ${balanceRemain}`)
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
}

module.exports = Controller