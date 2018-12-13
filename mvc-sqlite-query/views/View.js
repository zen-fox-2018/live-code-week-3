class View {
    static displayHelp() {
        console.log(`node index.js shows add [title_show] [schedule] [price]
        node index.js shows findBy [column_name] [value]
        node index.js transaction top3Audience
        node index.js transaction buyTicket [show_id] [email_audiences] [amount_of_ticket]`
      )
    }

    static displayErr(err) {
        console.log(`errornih`)
        console.log(err)
    }

    static displaySuccess(data) {
        console.log(data)
    }
}

module.exports = View