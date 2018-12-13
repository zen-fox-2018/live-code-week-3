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
    let qAlterTable = 
        `
          ALTER TABLE Shows 
            ADD isAvailable VARCHAR(25)`
    db.run(qAlterTable, function(err){
      if(err){
        console.log(`Error alter table : ${err}`)
      }
      else {
        console.log(`succes altering table`)
      }
    })

    //uniq email
    let qUniqEmail = `CREATE UNIQUE INDEX ux_email ON Audiences(email)`
    db.run(qUniqEmail, function(err){
      if(err){
        console.log(`Error uniq email : ${err}`)
      }
      else {
        console.log(`succes add uniq element`)
      }
    })
})
