const Model = require('../models/Audiences.js')
const View = require('../views/audienceView.js')

class Controller {
    static buyTicket(show_id, email_audiences, amount_of_ticket) {
        Model.findShowId(show_id, (err, findingShowId) => {
            if (err) {
                View.logError(err)
            } else {
                if (findingShowId.length === 0) {
                    View.showNotFound()
                } else {
                    Model.findEmailAudience(email_audiences, (err, findEmailAudience) => {
                        if (err) {
                            View.logError(err)
                        } else {
                            if (findEmailAudiences.length === 0) {
                                View.memberNotFound()
                            } else {
                                Model.checkType(findEmailAudience[0].id, (err, type) => {
                                    if (err) {
                                        View.logError(err)
                                    } else {
                                        if (type === 'gold') {
                                            //checkbalance
                                        } else {
                                            //model.checkbalance    
                                        }
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
