const Model = require('../Models/Audience')
const view = require('../view');
class AudienceController {
    static findTop3() {
        Model.findTop3Audience(function(err, theData) {
            if (err) {
                view.showErr(err)
            } else {
                view.showTop3(theData)
            }
        })
    }
}
module.exports = AudienceController;