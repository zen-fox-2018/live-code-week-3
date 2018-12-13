class View {
    static showNotFound() {
        console.log(`Show tidak ditemukan!`)
    }

    static memberNotFound() {
        console.log(`Member tidak ditemukan!`);
    }

    static saldoTidakCukup() {
        console.log(`Mohon maaf saldo anda tidak cukup`);
    }
    static logError(err) {
        console.log(`ERROR: ${err}`)
    }
}

module.exports = View