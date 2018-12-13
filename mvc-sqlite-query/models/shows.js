const db = require('../connection');

class Show {
    constructor(show, schedule, price, isAvailable = 0) {
        this.show = show
        this.schedule = schedule
        this.price = price
        this.isAvailable = isAvailable
    }

    static addShow(show,schedule,price) {
        let qAddShow = 
        `INSERT into Shows (show, schedule, price)
        VALUES ("The Book of Mormon","12 Dec 2018",800000)`
    }
}







