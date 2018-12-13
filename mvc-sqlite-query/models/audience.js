const db = require('../connection.js');

class Audience {
  constructor(id, firstName, lastName, age, email, type, balance) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.type = type;
    this.balance = balance;
  }

  static spendingAmount(callback) {
    let query = 
    `select 
      Audiences.firstName || " " || Audiences.lastName as FullName, 
      Audiences.type,
      Audiences.email,
      SUM(Tickets.totalInvoice) as TotalBelanja
    from Audiences
    inner join Tickets
      on Tickets.audienceId = Audiences.id
    group by Audiences.firstName
    order by TotalBelanja desc
    limit 3
      ;`;
    db.all(query, (err, data) => {
      if (err) {
        callback(err, null);
      } else  {
        callback(null, data);
      }
    })
  }

  static findOneBy(condition, value, callback) {
    let query =
      `SELECT * FROM Audiences
       WHERE Shows.${condition} = ${value};`
    db.get(query, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }
  
  // static count(amountOfTickets) {
  //   let query = 
  //   `select 
  //     Audiences.type,
  //     sum(Tickets.totalInvoice) 
  //   from Audiences
  //   inner join Tickets
  //     on Audiences.id = Tickets.audienceId
  //   group by Audiences.id;`
  //   db.get(query, (err, data) => {
  //     if (err) {
  //       callback(err);
  //     } else {
  //       console.log(data);
  //     }
  //   })
  // }
}

module.exports = Audience;