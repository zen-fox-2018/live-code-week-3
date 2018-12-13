const Audience = require('../models/audience')
const View = require('../views/View')
const Show = require('../models/show')
const Ticket = require('../models/ticket')

class AudienceController {

    static help () {
        View.displayhelp()
    }

    static Showtop3() {
        Audience.show3Up(function(err, rows) {
            if (err) {
                View.displayErr(err)
            } else {
                View.displaySuccess(rows)
            }
        })
    }

    static buyTicket(input) {
        let searchshow = {
            field : "id",
            value : Number(input[0])
        }
        let jumlah = Number(input[2])
        Show.findOne(searchshow, function(err, show) {
            if (err) {
                View.displayErr(err)
            } else {
                if (show == null) {
                    View.displayErr("Show tidak di temukan")
                } else {
                    let email = {
                        field: "email",
                        value: input[1]
                    }
                    Audience.findOne(email, function(err, row) {
                        if (err) {
                            View.displayErr(err)
                        } else {
                            if (row === null) {
                                View.displayErr("email tidak di temukan")
                            } else {
                                let person = row
                                    let total = null
                                    if (person._type === "gold") {
                                        total =show._price - ( show._price / 15 *100)
                                    } else if (person._type === 'silver') {
                                        total = show._price - (show._price/ 5 * 100)
                                    } else {
                                        total = show._price
                                    }
                                    total = jumlah * total
                            
                                    if (person._balance < total) {
                                        View.displayErr("maaf saldo tidak cukup")
                                    } else {
                                        let newtiket = {
                                            ticketNumber : Ticket.generatenumber(person._lastName, person._type),
                                            amountOfTicket : jumlah,
                                            totalInvoice : total,
                                            audienceId : person._id
                                        }
                                        person._balance = person._balance - total
                                        console.log(person._balance)
                                         person.update("balance", function(err, data) {
                                            if (err) {
                                                View.displayErr(err)
                                            } else {
                                                let tiket = new Ticket(newtiket)
                                                tiket.create(function(err) {
                                                    if (err) {
                                                        View.displayErr(err)
                                                    } else {
                                                        View.displaySuccess(`Tiket telah terbeli! Nomor tiket anda adalah ${tiket._ticketNumber}. Saldo saat ini ${person._balance}`)

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

module.exports = AudienceController