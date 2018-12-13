class View {

    static addShow(name) {
        console.log(`Successfully added a ${name}`);
    }

    static buyTicket(ticketNumber, balance) {
        console.log(`Tiket telah terbeli! Nomor tiket anda adalah ${ticketNumber}. Saldo saat ini ${balance}`);
    }

    static display(data) {
        console.log(data);
    }

    static disErr(err) {
        console.log(err);
    }
}

module.exports = View