const Show = require('../models/shows')
const View = require('../view/View')


class Controller {

    static addShowController(show, schedule, price) {
        Show.addShow(show, schedule, price, (err) => {
            if(!err) {
                View.addShowSucces(show)
            } else {
                View.showError(err)
            }
        })
    }

    static showData() {
        let newData = []
        Show.readData((err,data) => {
            if(err) {
                View.showError(err)
            } else {
                for (let i = 0; i < data.length; i++) {
                    let convert = new Show (i+1,data[i].show, data[i].schedule, data[i].price)
                    newData.push(convert)
                }
                // console.log(newData)
            }
        })
    }

}


module.exports = Controller