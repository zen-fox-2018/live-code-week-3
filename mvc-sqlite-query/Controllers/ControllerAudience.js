const Shows = require(`../Models/Shows`)
const Audience = require(`../Models/Audience`)
const Ticket = require(`../Models/Ticket`)
const View = require(`../Views/View`)

class ControllerAudience {
    static buyTicket(show_id, email_audiences, amount_of_ticket) {
        Shows.findOne(`id`, show_id, function (err, dataShow) {
            if (err) {
                View.errFindOne(`error find one, err: ${err}`)
            } else {
                if (dataShow == undefined) {
                    View.errFindOne(`Show tidak ditemukan!`)
                } else {
                    Audience.findOne(`email`, email_audiences, function (err, dataAudience) {
                        if (err) {
                            View.errFindOne(err)
                        } else {
                            if (dataAudience == undefined) {
                                View.errBuyTicket(`Member tidak ditemukan!`)
                            } else {
                                let discount;
                                let expense;
                                if (dataAudience.type == `gold`) {
                                    discount = 0.15
                                } else if (dataAudience.type == `silver`) {
                                    discount = 0.05
                                }
                                expense = dataShow.price - (dataShow.price * discount)
                                let newBalance = dataAudience.balance - expense
                                if (dataAudience.balance - expense < 0) {
                                    View.errBuyTicket(`Mohon maaf saldo anda tidak cukup`)
                                } else {
                                    let ticket = new Ticket()
                                    ticket.create(dataShow, dataAudience, amount_of_ticket, expense, function (err, data1) {
                                        err ?
                                            View.errBuyTicket(`err buy ticket, err: ${err}`) :
                                            Audience.update(`id`, dataAudience.id, `balance`, newBalance, function (err, data) {
                                                err ?
                                                    View.errBuyTicket(`err buy ticket, err: ${err}`) :
                                                    Audience.findOne(`id`, dataAudience.id, function (err, dataFindOne) {
                                                        err ?
                                                            View.errFindOne(`error find one,err ${err}`) :
                                                            View.succBuyTicket(`Tiket telah terbeli! Nomor tiket anda adalah ${data1}, saldo anda saat ini ${dataFindOne.balance}`)

                                                    })
                                            })
                                            
                                    })

                                }


                            }
                        }
                    })
                }
            }

        })
    }

    static findAll(query1, query2) {

    }

    static refundTicket(ticketNumber, email_audiences) {
        Ticket.findOne(`ticketNumber`, ticketNumber, function (err, data) {
            err ?
                View.errFindTicket(`error find ticket, err: ${err}`) :
                data == undefined ?
                    View.errRefund(`No ticket tidak ditemukan`) :
                    Audience.findOne(`email`, email_audiences, function (err, data1) {
                        err ?
                            View.errFindOne(`err find one audience, err ${err}`) :
                            data1 == undefined ?
                                View.errRefund(`Email anda tidak ditemukan`) :
                                data.audienceId == data1.id ?
                                    Audience.update(`id`, data1.id, `balance`, (data.totalInvoice + data1.balance), function (err, data) {
                                        err ?
                                            View.errRefund(`error refund`) :
                                            View.succRefund(`success refund`) 
                                            
                                    }) :
                                    View.errRefund(`Email tidak ditemukan`)
                                
                    })
                
        })
        
    }
}

module.exports = ControllerAudience


