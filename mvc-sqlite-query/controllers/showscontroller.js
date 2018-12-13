const Model = require('../models/Shows.js')
const View = require('../views/showView.js')

class Controller {
    static addShow(title_show, schedule, price) {
        Model.addingShow(title_show, schedule, price, (err) => {
            if (err) {
                View.addShowError(err)
            } else {
                View.addShowSucceed(title_show)
            }
        })
    }

    static findBy(column, value) {
        Model.findBy(column, value, (err, rows) => {
            if (err) {
                View.findSpecificShowsError(err)
            } else {
                View.findSpecificShows(rows)
            }
        })
    }
}

module.exports = Controller