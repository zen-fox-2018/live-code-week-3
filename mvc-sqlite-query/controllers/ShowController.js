const Show = require('../models/show')
const View = require('../views/View')

class ShowController {

    static addShow(input) {
        let data = {
            show: input[0],
            schedjule: input[1],
            price: input[2]
        }
        let newshow = new Show(data)
        newshow.create(function (err, data) {
            if (err) {
                View.displayErr(err)
            } else {
                View.displaySuccess(`Successfully added ${input[0]}`)
            }
        })
    }

    static findBy(input) {
        let search = {
            field : input[0],
            value : Number(input[1])
        }
        Show.findWhere(search, function (err, rows) {
            if (err) {
                View.displayErr(err)
            } else {
                if (rows === null) {
                    View.displayErr("data not found")
                } else {
                    View.displaySuccess(rows)
                }
            }
        })
    }
}

module.exports = ShowController