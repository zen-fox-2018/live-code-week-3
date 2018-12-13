const db = require('../db/connection');

class Ticket {

  static top3(callback) {
    let qTop3 =
      `
    SELECT firstName || lastName as Fullname, type, email, sum(Tickets.totalInvoice)
    AS totalBelanja
    FROM Tickets
    INNER JOIN Audiences
    ON Tickets.audienceId = Audiences.id
    GROUP BY Tickets.audienceId
    ORDER BY totalBelanja DESC
    LIMIT 3
    `

    db.all(qTop3, (err, rows) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  }

}

module.exports = Ticket;