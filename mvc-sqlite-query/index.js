//your code here
const Controller = require('./controller/controller.js')
const command  =  process.argv.slice(2)


switch (command[0]) {
    case "show add":
        let obj = {}
        obj.title = command[1]
        obj.schedule = command[2]
        obj.price = command[3]

        Controller.createNew(obj)
        break;
    
    case "show findBy" :
        let obj1 = {}
        obj1.task = command[1]
        obj1.request = command[2]

        Controller.find(obj1)
        break;

    case "transaction top3" :
        Controller.findAudiences()
        break;
    default:
        break;
}