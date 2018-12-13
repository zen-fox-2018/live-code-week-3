class View {

    static showError(err) {
        console.log(err)
    }
    
    static addShowSucces(show){
        console.log(`Successfully added a ${show}`)
    }

}

module.exports = View