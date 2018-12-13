const Model = require('../Models/Show') 
const view = require('../view')
class ShowController {
    static addShow(command) {
        Model.addNewShow(command, function(err) {
            if(err) {
                view.showErr(err)
            } else {
                view.showAdded(command[0])
            }
        })
    }
    static findShow(command) {
        Model.findBy(command, function(err, data) {
            if (err) {
                view.showErr(err)
            } else {
                if (data[0] === undefined) {
                    view.dataFound()
                } else {
                    view.dataFound(data)
                }
            }
        })
    }
}
module.exports = ShowController