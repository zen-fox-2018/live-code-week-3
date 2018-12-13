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

    //YOUR ALTER TABLE HERE
    let addColumn = `
    ALTER TABLE Shows
    ADD isAvailable INTEGER DEFAULT 0`
    db.run(addColumn, function(err) {
      if (!err) {
        console.log('Add column');
      } else {
        console.log('ERR: ', err);
      }
    })

    let drop = `
    ALTER TABLE Audiences
    DROP COLUMN email`
    db.run(drop, function(err) {
      if (!err) {
        console.log('DROP email');
      } else {
        console.log('ERR: ', err);
      }
    })

    let unique = `
    ALTER TABLE Audiences
    ADD email VARCHAR UNIQUE`
    db.run(unique, function(err) {
      if (!err) {
        console.log('unique email');
      } else {
        console.log('ERR: ', err);
      }
    })

})
