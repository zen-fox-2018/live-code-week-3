const Ticket = require('../models/Ticket');
const Show = require('../models/Show');
const Audience = require('../models/Audience');
const TicketView = require('../views/Ticket');

class TicketController {
  static topThree() {
    Ticket.topThree((err, result) => {
      if (err) {
        TicketView.showErr(err);
      } else {
        TicketView.showData(result);
      }
    })
  }

  static buyTicket(data) {
    Show.findBy(['id', data[0]], (errShow, show) => {
      if (errShow) {
        TicketView.showErr(errShow);
      } else {
        if (show.length) {
          Audience.findBy(['email', data[1]], (errAudience, audience) => {
            if (errAudience) {
              TicketView.showErr(errAudience);
            } else {
              if (audience) {
                let total = +data[2] * +show[0].price;
                let grandTotal = 0;
                if (audience.type === 'gold') {
                  grandTotal = total * 0.85;
                } else if (audience.type === 'silver') {
                  grandTotal = total * 0.95;
                } else {
                  grandTotal = total;
                }

                if (+audience.balance >= grandTotal) {
                  let randomNumber = Math.floor(Math.random()*9000) + 1000;
                  let ticketNumber = `TIX${audience.lastName}${audience.type}${randomNumber}`;
                  let inputTicket = [ticketNumber, data[2], grandTotal, audience.id];
                  Ticket.buyTicket(inputTicket, (errBuy) => {
                    if (errBuy) {
                      TicketView.showErr(errBuy);
                    } else {
                      let updateBalance = [+audience.balance - grandTotal];
                      audience.update(updateBalance, (errUpdate) => {
                        if (errUpdate) {
                          TicketView.showErr(errUpdate);
                        } else {
                          TicketView.showSuccess(`Tiket telah terbeli! Nomor tiket anda adalah ${ticketNumber}. Saldo saat ini ${updateBalance}`)
                        }
                      })
                    }
                  })
                } else {
                  TicketView.showErr(`Mohon maaf saldo anda tidak cukup`);
                }

              } else {
                TicketView.showErr('Member tidak ditemukan!')
              }
            }
          })
        } else {
          TicketView.showErr('Show tidak ditemukan!');
        }
      }
    })
  }
}

module.exports = TicketController;
