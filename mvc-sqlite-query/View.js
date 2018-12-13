class View {
  static help() {
    console.log(`
    node index.js shows add [title_show] [schedule] [price]
    node index.js shows findBy [column_name] [value]
    node index.js transaction top3Audience
    node index.js transaction buyTicket [show_id] [email_audiences] [amount_of_ticket]
    `)
  }

  static display(msg, data) {
    if(data) {
      console.log(msg, data)
    } else {
      console.log(msg)
    }
  }

  static disErr(msg, err) {
    if(err) {
      console.log(`ERR : `, msg, err)
    } else {
      console.log(`ERR : `, msg)
    }
  }
}
module.exports = View