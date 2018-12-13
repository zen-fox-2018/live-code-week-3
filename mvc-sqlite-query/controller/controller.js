
const Movies = require('../model/movies.js')
const Views = require('../views/views.js')
const Audiences = require('../model/audiences.js')

class Controller {
  
    static createNew(input) {
        Movies.create(input,function(err){
            if(err){
                Views.error(err)
            }
            else{
                Views.successAdd(input.title)
            }
        })
    }
    static find (input) {
        Movies.findOne(input, (err,data) => {
            if(err){
                Views.error(err)
            } else {
                Views.show(data)
            }
        })
    }
    static findAudiences () {
        Audiences.findWhere((err,data) => {
            if(err){
                Views.error(err)
            }else {
                Views.showAudiences(data)
            }
        })
    }
}

module.exports = Controller