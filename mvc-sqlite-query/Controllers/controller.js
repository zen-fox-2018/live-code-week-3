
const Shows = require("../Models/shows");
const Audience = require("../Models/audience");
const Ticket = require("../Models/tickets");
const Views = require("../Views/view");

class Controller {
    static addShow(title, schedule, price) {
        let addNewShow = new Shows(null, title, schedule, price, null);
        addNewShow.create(function(err) {
            if(err) {
                Views.showError(err)
            } else {
                Views.addedShow(`Successfully added a ${title}`)
            }
        })
    }

    static find(column, value) {
        let obj = {
            column: column,
            value : value
        }
        Shows.findBy(obj, function(err, data) {
            if(err) {
                Views.showError(err)
            } else {
                Views.showFindBy(data)
            }
        })
    }

    static getTopThree() {
        Audience.getTopThree(function(err, people) {
            if(err) {
                Views.showError(err)
            } else {
                Views.showTopThree(people)
            }
        })
    }

    static buyTicket(id, email_audiences, amount_of_ticket) {
        Shows.findOne(id, function(err, show) {
            if(err) {
                Views.showError(err)
            } else {
                if(!show) {
                    Views.showError("Show tidak ditemukan!")
                } else {
                    Shows.findOne("email", email_audiences, function(err, email) {
                        if(err) {
                            Views.showError(`Member tidak ditemukan!`)
                        } else {
                            // console.log(email)
                        }
                    })
                }
            }
        })
    }
}

module.exports = Controller

//   node index.js shows add [title_show] [schedule] [price]
//   node index.js shows findBy [column_name] [value]
//   node index.js transaction top3Audience
//   node index.js transaction buyTicket [show_id] [email_audiences] [amount_of_ticket]