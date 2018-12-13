const argv = process.argv.slice(2)

const ControlerShow = require('./controllers/ControllerShow')

if(argv[0] === "shows") {
    switch (argv[1]) {
        case 'add':
            let obj = {
                show: argv[2],
                schedule: argv[3],
                price: argv[4]
            }
            ControlerShow.add(obj)
            break;

        case 'findBy':
            obj = {
                column: argv[2],
                value: argv[3]
            }
            ControlerShow.findBy(obj)
            break;
    
        default:
            break;
    }
}  