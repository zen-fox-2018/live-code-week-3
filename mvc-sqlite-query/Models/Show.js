const db = require('../connection')

class Show {
    constructor(id, show, schedule, price) {
        this.id = id
        this.show = show;
        this.schedule = schedule;
        this.price = price;
    }
    
    static addNewShow(command, callback) {
        let query = `
            INSERT INTO Shows
            (show, schedule, price)
            VALUES 
            ("${command[0]}", "${command[1]}", ${Number(command[2])})`
        db.run(query, function(err) {
            if (err) {
                callback(err)
            } else {
                callback()
            }
        }) 
    }
    static findBy(command, callback) {
        let query = `
            SELECT * FROM Shows
            WHERE "${command[0]}" = ${Number(command[1])}`
        db.all(query, function(err, theData) {
            if (err) {
                callback(err)
            } else {
                let result = [];
                for (let i = 0; i<= theData.length-1; i++) {
                    let resultFound = new Show(theData[i].id, theData[i].show, theData[i].schedule, theData[i].price);
                    result.push(resultFound)
                }
                callback(result)
            }
        })
    }

}
module.exports = Show;