const db = require('../db/connection')

class Audience {

    constructor(object) {
        this._id = object.id
        this._firstName = object.firstname
        this._lastName = object.lastname
        this._age = object.age
        this._email = object.email
        this._type = object.type
        this._balance = object.balance
    }
}

module.exports = Audience