const db = require('./connection');

db.serialize(function() {
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

    db.run(qTableAudience, function(err) {
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

    db.run(qTableShows, function(err) {
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
    db.run(qTableTickets, function(err) {
      if (!err) {
        console.log('Table Tickets created');
      } else {
        console.log('ERR: ', err);
      }
    })

    const alterTable = `ALTER TABLE Shows ADD COLUMN isAvailable BOOLEAN`
    db.run(alterTable, function (err) {
      if (err) {
        console.log("error di alter", err)
      } else {
        console.log("berhasil tambah column di shows")
      }
    })

    const unique = `CREATE UNIQUE INDEX email ON Audiences(email)`
    db.run(unique, function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log("berhasil")
      }
    })

    //YOUR ALTER TABLE HERE
})
