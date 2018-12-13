class View {
    static showErrorMessage(msg){
        console.log(`Error, detail : ${msg}`)
    }

    static showMessage(msg){
        console.log(msg)
    }

    static showSuccessAdd(data){
        let indeks = data.length - 1
        console.log(`Successfully added a ${data[indeks].show}`)
    }
}

module.exports = View