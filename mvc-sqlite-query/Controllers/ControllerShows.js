const Shows = require(`../Models/Shows`)
const View = require(`../Views/View`)

class ControllerShows {
    static add(title_show, schedule, price) {
        let shows = new Shows(true)
        shows.add(title_show, schedule, price, function (err, data) {
            err ?
                View.errorAddShow(`error add show, err: ${err}`) :
                View.successAddShow(`Successfully added a ${title_show}`)
        })
    }

    static findBy(column_name, value) {        
        Shows.findAll(column_name, value, function (err, data) {
            err ?
                View.errFindAll(err) :
                View.succFindAll(data)
        })
    }
}

module.exports = ControllerShows