const db = require(`../db/connection`)

let release0Alter = `ALTER TABLE Shows
ADD isAvailable BOOLEAN DEFAULT 0`

db.serialize(function () {
    db.run(release0Alter, function (err) {
        err ?
            console.log(err) :
            console.log(`success alter table release 0`);
            
    })
})