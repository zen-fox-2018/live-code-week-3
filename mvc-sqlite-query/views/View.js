class View {
    static help() {
        console.log('node index.js shows add [title_show] [schedule] [price]')
        console.log('node index.js shows findBy [column_name] [value]')
        console.log('node index.js transaction top3Audience')
        console.log('node index.js transaction buyTicket [show_id] [email_audiences] [amount_of_ticket]')
        console.log('node index.js transaction refundTicket [ticketNumber] [email_audiences]')
    }

    static displaySuccess(msg) {
        console.log(msg)
    }

    static displayError(msg, err) {
        console.log(msg)
        console.log(err)
    }

    static alert(msg) {
        console.log(msg)
    }
}

module.exports = View