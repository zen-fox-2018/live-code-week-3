const Show = require('../models/Show')
const View = require('../views/View')

class ControllerShow {

    static add(obj) {
        Show.create(obj, (err) => {
            if (err) {
                View.disErr(err)
            } else {
                View.addShow(obj.Show)
            }
        })
    }

    static findBy(obj) {
        Show.findWhere(obj, (err, data) => {
            if (err) {
                View.disErr(err)
            } else {
                View.findBy(data)
            }
        })   
    }
}

module.exports = ControllerShow