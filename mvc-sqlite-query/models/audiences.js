const db = require('../connection');

class Audiences{
  static top3Audiences(callback){
    let query   =
            `
              SELECT
               Audiences.firstName || ' ' || Audiences.lastName AS Fullname,
               Audiences.type AS type,
               Audiences.email AS email,
               SUM(Tickets.totalInvoice) AS totalBelanja
              FROM Tickets
              LEFT JOIN Audiences ON Audiences.id = Tickets.audienceId
              GROUP BY Tickets.audienceId
              ORDER BY totalBelanja DESC
              LIMIT 3
            `
    db.all(query, function(err,data) {
      if (err) {
        callback(err);
      }
      else {
        callback(data);
      }
    })
  }

  static findBy(column, value, callback){
    let query   =
            `
              SELECT *
              FROM Audiences
              WHERE "${column}" = "${value}"
            `
    db.all(query, function(err,data) {
      if (err) {
        callback(err);
      }
      else {
        callback(data);
      }
    })
  }

  static update(parameter, value, id, callback){
    let query   =
            `
              UPDATE Audiences
              SET "${parameter}" = "${value}"
              WHERE id = "${id}"
            `
    db.run(query, function(err) {
      if (err) {
        callback(err);
      }
      else {
        callback(null);
      }
    })
  }
}

module.exports = Audiences;
