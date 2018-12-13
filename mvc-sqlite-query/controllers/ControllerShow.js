const Show = require('../models/Show')
const Audience = require('../models/Audience')
const Tickets = require('../models/Tickets')
const View = require('../views/View')

class ControllerShow {

    static add(obj) {
        Show.create(obj, (err) => {
            if (err) {
                View.disErr(err)
            } else {
                View.addShow(obj.show)
            }
        })
    }

    static findBy(obj) {
        let input = {
            [obj.column]: obj.value
        }
        Show.findWhere(input, (err, data) => {
            if (err) {
                View.disErr(err)
            } else {
                View.display(data)
            }
        })   
    }

    static top3() {
        Audience.top3((err, data) => {
            if(err) {
                View.disErr(err)
            } else {
                View.display(data)
            }
        })
    }

    static buyTicket(obj) {
        let find = {
            id: obj.id 
        }
        Show.findOne(find, (err, data) => {
            if (err) {
                View.disErr(err)
            } else {
                if (data === undefined) {
                    View.disErr(`Show tidak ditemukan!`)
                } else {
                    let movie = data
                    find = {
                        email: obj.email
                    }
                    Audience.findOne(find, (err, data) => {
                        if (err) {
                            View.disErr(err)
                        } else {
                            if (data === undefined) {
                                View.disErr(`Member tidak ditemukan!`)
                            } else {
                                let member = data
                                let price = movie.price * obj.amount
                                if (member.type === 'gold') {
                                    price = price - (price * (15/100))
                                } else if (member.type === 'silver') {
                                    price = price - (price * (5/100))
                                }
                                if (member.balance < price) {
                                    View.disErr(`Mohon maaf saldo anda tidak cukup`)
                                } else {
                                    let random = Math.floor(Math.random() * 9999 + 1000);
                                    let ticketNumber = `TIX${member.lastName}${member.type}${random}`
                                    let input = {
                                        ticketNumber: ticketNumber,
                                        amountOfTicket: obj.amount,
                                        totalInvoice: price,
                                        audienceId: member.id
                                    }
                                    Tickets.create(input, (err) => {
                                        if (err) {
                                            View.disErr(err)
                                        } else {
                                            View.buyTicket(input.ticketNumber, member.balance-price)
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

module.exports = ControllerShow