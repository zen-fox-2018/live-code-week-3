const db = require('./db/connection.js');

db.serialize(function() {
  // let qTableAudience =
  //   ` CREATE TABLE IF NOT EXISTS Audiences
  //     (
  //       id INTEGER PRIMARY KEY AUTOINCREMENT,
  //       firstName VARCHAR(50),
  //       lastName VARCHAR(50),
  //       age INTEGER,
  //       email VARCHAR(100),
  //       type VARCHAR(7),
  //       balance REAL
  //     )
  //   `

  //   db.run(qTableAudience, function(err) {
  //     if (!err) {
  //       console.log('Table Audiences created');
  //     } else {
  //       console.log('ERR: ', err);
  //     }
  //   })


  //   let qTableShows =
  //         `
  //           CREATE TABLE IF NOT EXISTS Shows
  //            (
  //              id INTEGER PRIMARY KEY AUTOINCREMENT,
  //              show VARCHAR(100),
  //              schedule TEXT,
  //              price REAL
  //            )
  //         `

  //   db.run(qTableShows, function(err) {
  //     if (!err) {
  //       console.log('Table Shows created');
  //     } else {
  //       console.log('ERR: ', err);
  //     }
  //   })

  //   let qTableTickets =
  //         `
  //           CREATE TABLE IF NOT EXISTS Tickets
  //           (
  //             id INTEGER PRIMARY KEY AUTOINCREMENT,
  //             ticketNumber VARCHAR(10),
  //             amountOfTicket INTEGER,
  //             totalInvoice REAL,
  //             audienceId INTEGER,
  //             FOREIGN KEY (audienceId) REFERENCES Audiences(id)
  //           )
  //         `
  //   db.run(qTableTickets, function(err) {
  //     if (!err) {
  //       console.log('Table Tickets created');
  //     } else {
  //       console.log('ERR: ', err);
  //     }
  //   })

    let qAlter = `
              ALTER TABLE Shows
              ADD isAvailable INTEGER;
    `

    db.run(qAlter, function(err) {
      if(err) {
        console.log('ERR: ', err)
      }else {
        console.log('column isAvailable created')
      }
    })

    let qUnique = `
              CREATE UNIQUE INDEX 
              emailId ON Audiences(email);
    `

    db.run(qUnique, function(err) {
      if(err) {
        console.log('ERR: ', err)
      }else {
        console.log('uniqe index created')
      }
    })
    //YOUR ALTER TABLE HERE
})
