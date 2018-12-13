const View = require('../views/ticketView.js')
const Model = require('../models/Tickets.js')

class Controller {
    static top3Audience() {
        Model.topAudiences((err, topAudiences) => {
            if (err) {
                View.topAudienceErr(err)
            } else {
                View.topAudience(topAudiences)
            }
        })
    }
}

module.exports = Controller