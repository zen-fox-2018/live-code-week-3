const Ticket = require(`../Models/Ticket`)
const View = require(`../Views/View`)

class ControllerTicket {
    static findAll(query1, query2) {
        Ticket.findAll(query1, query2, function (err, data) {
            err ?
                View.errFindAll(err) :
                View.succFindAll(data)
        })
    }
}

module.exports = ControllerTicket