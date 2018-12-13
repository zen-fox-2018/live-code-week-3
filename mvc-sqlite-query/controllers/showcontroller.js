const db = require('../connection')
const View = require('../views/View')
const Show = require('../models/Show')

class Controller {
    static add(input) {
        let show = new Show (null, input.title_show, input.schedule, input.price)
        show.create(function(err) {
            if(err) {
                View.displayError('Error: ', err)
            } else {
                View.displaySuccess(`Successfully added ${input.title_show}`)
            }
        })
    }

    static findBy(input) {
        Show.findBy(input.column_name, input.value, function(err, dataShow) {
            if(err) {
                View.displayError('Error: ', err)
            } else {
                View.displaySuccess(dataShow)
            }
        })
    }
}

module.exports = Controller

