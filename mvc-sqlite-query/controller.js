const View = require('./view.js');
const Tickets = require('./models/tickets.js');
const Shows = require('./models/shows.js');
const Audiences = require('./models/audiences.js');

class Controller {
  static addShow(title, schedule, price){
    Shows.addShow(title, schedule, price, function(err) {
      if (err) {
        View.addShowError(err);
      }
      else {
        View.addShowSuccess(title);
      }
    })
  }

  static findByShow(column, value){
    Shows.findBy(column, value, function(err,data) {
      if (err) {
        View.findShowErr(err);
      }
      else {
        View.findByShow(data);
      }
    })
  }

  static top3Audiences(){
    Audiences.top3Audiences(function(err, data) {
      if (err) {
        View.findAudienceErr(err)
      }
      else {
        View.top3Audiences(data)
      }
    })
  }

  static buyTicket(showId, email, amount){
    Shows.findBy('id', showId, function(err, dataShow) {
      if (err) {
        View.findShowErr(err);
      }
      else {
        if (dataShow.length == 0) {
          View.showNotFound()
        }
        else {
          Audiences.findBy('email', email function(err,dataAudience){
            if (err) {
              View.findAudienceErr(err)
            }
            else {
              if (dataAudience.length == 0) {
                View.memberNotFound()
              }
              else {
                if (dataAuidience[0].balance < dataShow[0].price) {
                  View.notEnoughBalance();
                }
                else {
                  var ranNum = Math.floor(Math.random() * 1000)
                  var newTicket = `TIX${dataAudience[0].lastName}${dataAudataAudience[0].type}${ranNum}`
                  var totalInvoice = dataShow[0].price * amount;
                  Tickets.addTicket(newTicket, amount, totalInvoice, dataAudience[0].id, function(err) {
                    if (err) {
                      View.addTicketError(err)
                    }
                    else {
                      Audiences.update('balance', (dataAudience[0].balance - totalInvoice), dataAudience[0].id, function if(err) {
                        View.findAudienceErr(err)
                      })
                    }
                  })
                }
              }
            }
          })
        }
      }
    })
    Tickets.buy(showId, email, amount,(function(err, data) {

    }))
  }
}
module.exports = Controller;
