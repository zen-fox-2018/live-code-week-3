const db = require('./connection');

db.serialize(function () {
  let qTableAudience =
    ` CREATE TABLE IF NOT EXISTS Audiences
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName VARCHAR(50),
        lastName VARCHAR(50),
        age INTEGER,
        email VARCHAR(100),
        type VARCHAR(7),
        balance REAL
      )
    `

  db.run(qTableAudience, function (err) {
    if (!err) {
      console.log('Table Audiences created');
    } else {
      console.log('ERR: ', err);
    }
  })


  let qTableShows =
    `
            CREATE TABLE IF NOT EXISTS Shows
             (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               show VARCHAR(100),
               schedule TEXT,
               price REAL
             )
          `

  db.run(qTableShows, function (err) {
    if (!err) {
      console.log('Table Shows created');
    } else {
      console.log('ERR: ', err);
    }
  })

  let qTableTickets =
    `
            CREATE TABLE IF NOT EXISTS Tickets
            (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              ticketNumber VARCHAR(10),
              amountOfTicket INTEGER,
              totalInvoice REAL,
              audienceId INTEGER,
              FOREIGN KEY (audienceId) REFERENCES Audiences(id)
            )
          `
  db.run(qTableTickets, function (err) {
    if (!err) {
      console.log('Table Tickets created');
    } else {
      console.log('ERR: ', err);
    }
  })

  //YOUR ALTER TABLE HERE

  let qAlt =
    `
    ALTER TABLE Shows
    ADD isAvailable INTEGER;
    `

  db.run(qAlt, (err) => {
    if (!err) {
      console.log('isAvailable Created');
    } else {
      console.log('ERR: ', err);
    }
  });

  let qUnique =
  `
  CREATE UNIQUE INDEX email_index ON Audiences (email);
  `

  db.run(qUnique, (err) => {
    if (!err) {
      console.log('unique Created');
    } else {
      console.log('ERR: ', err);
    }
  })
})
