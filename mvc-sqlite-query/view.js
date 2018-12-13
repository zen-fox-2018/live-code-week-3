class Show {
    static showErr(err) {
        console.log(err)
    }
    static showAdded(name) {
        console.log(`Successfully added ${name}`)
    }
    static dataFound(data) {
        console.log(data)
    }
    static dataNotFoud() {
        console.log('Sorry, data not found')
    }
    static showTop3(data) {
        console.log(data)
    }
}
module.exports = Show