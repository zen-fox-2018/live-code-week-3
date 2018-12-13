const Ticket = require('./models/ticket.js');
const Audience = require('./models/audience.js');
const Show = require('./models/show.js');
const View = require('./view.js');

class Controller {

  static addShows(titleShow, schedule, price) {
    Show.insertData(titleShow, schedule, price, (err) => {
      if (err) {
        View.displayErr(err);
      } else {
        View.succeedAddShows(`Successfully added a ${titleShow}`);
      }
    });
  }

  static findBy(colName, price) {
    Show.findBy(colName, price, (err, data) => {
      if (err) {
        View.displayErr(err);
      } else {
        View.displayByPrice(JSON.stringify(data));
      }
    });
  }

  static mostSpends() {
    Audience.spendingAmount((err, data) => {
      if (err) {
        View.displayErr(err);
      } else {
        View.displayTopSpenders(data);
      }
    }); 
  }

  static buyTicket(showId, emailAudiences, amountOfTicket) {
    Show.findOneBy("showId", showId, (err, data) => {
      if (err) {
        View.displayErr(err);
      } else {
        if (!data) {
          View.displayBuyTicketStatus(`Show tidak ditemukan`);
        } else {
          Audience.findOneBy("email", emailAudiences, (err, data) => {
            if (err) {
              View.displayErr(err);
            } else {
              if (!data) {
                View.displayBuyTicketStatus(`Member tidak ditemukan`);
              } else {
                Show.count(amountOfTicket, (err, data) => {
                  if (err) {
                    View.displayErr(err);
                  } else {
                    
                  }
                });
              }
            }
          })
        }
      }
    })
  }

}

module.exports = Controller;