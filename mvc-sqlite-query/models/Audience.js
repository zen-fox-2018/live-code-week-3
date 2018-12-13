const db = require('../db/connection');
class Audience {
  constructor(obj) {
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.age = obj.age;
    this.email = obj.email;
    this.type = obj.type;
    this.balance = obj.balance;
  }
  static findBy(data, callback) {
    const qfindBy = `
      SELECT
        *
      FROM
        Audiences
      WHERE
        ${data[0]} = ?;
    `;

    db.get(qfindBy, data[1], (err, audience) => {
      if (err) {
        callback(err, null);
      } else {
        if (audience) {
          callback(null, new Audience(audience));
        } else {
          callback(null, null);
        }
      }
    })
  }

  update(data, callback) {
    const qUpdate = `
      UPDATE
        audiences
      SET
        balance = ?
      WHERE
        id = ${this.id};
    `;

    db.run(qUpdate, data, (err) => {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    })
  }
}

module.exports = Audience;
