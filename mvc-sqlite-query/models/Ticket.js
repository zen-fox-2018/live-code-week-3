const db = require('../db/connection');
class Ticket {
  static topThree(callback) {
    const qTopThree = `
      SELECT
      	Audiences.firstName || ' ' || Audiences.lastName AS Fullname,
      	Audiences.type,
      	Audiences.email,
      	SUM(Tickets.totalInvoice) AS totalBelanja
      FROM
      	Tickets
      INNER JOIN
      	Audiences
      ON
      	Audiences.id = Tickets.audienceId
      GROUP BY
      	Tickets.audienceId
      ORDER BY
      	totalBelanja DESC
      LIMIT 3;
    `;
    db.all(qTopThree, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    })
  }

  static buyTicket(data, callback) {
    const qBuyTicket = `
      INSERT INTO
        Tickets
        (ticketNumber, amountOfTicket, totalInvoice, audienceId)
      VALUES
        (?, ?, ?, ?);
    `
    db.run(qBuyTicket, data, (err) => {
      if (err) {
        callback (err);
      } else {
        callback();
      }
    })
  }

}

module.exports = Ticket;
