const db = require('../db/connection');

class Audience {


  static findBy(field, value, callback) {
    let qfindBy =
    `
    SELECT
     email
    FROM
     Audiences
    WHERE ${field} = ?
    `;

    db.all(qfindBy, value, (err, rows) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  }

}

module.exports = Audience;