const argv = process.argv.slice(2)

const ControlerShow = require('./controllers/ControllerShow')

if(argv[0] === "shows") {
    switch (argv[1]) {
        case 'add':
            var obj = {
                show: argv[2],
                schedule: argv[3],
                price: argv[4]
            }
            ControlerShow.add(obj)
            break;

        case 'findBy':
            var obj = {
                column: argv[2],
                value: argv[3]
            }
            ControlerShow.findBy(obj)
            break;
    
        default:
            break;
    }
}

else if (argv[0] === 'transaction') {
    switch (argv[1]) {
        case 'top3Audience':
            ControlerShow.top3()
            break;

        case 'buyTicket':
            obj = {
                id: argv[2],
                email: argv[3],
                amount: argv[4]
            }
            ControlerShow.buyTicket(obj)
            break;

        default:
            break;
    }
}