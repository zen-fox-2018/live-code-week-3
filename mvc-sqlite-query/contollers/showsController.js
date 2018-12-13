const Show = require('../models/shows.js')
const View = require('../view/view.js')

class ShowsController {
    static add(show, schedule, price){
        let newShow = new Show(show, schedule, price)

        Show.create(newShow, function(err){
            if(err){
                View.error(err, 'insertion error')
            }   else{
                View.display(`successfully added ${show}` )
            }
        })

    }
}

module.exports = ShowsController