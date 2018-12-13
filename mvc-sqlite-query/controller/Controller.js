const Show = require('../models/Show.js')
const View = require('../view/View.js')
const Audience = require('../models/Audience.js')

class Controller {

    static buyTicket(showId, email, ticketAmount){
        Show.findByWhere('id','id',showId,function(err, rows){
            if(err){
                View.showErrorMessage(err)
            }
            else {
                if(rows.length < 1){
                    View.showMessage(`Show tidak ditemukan!`)
                }
                else {
                    let ticketId = rows[0]
                    Audience.findByWhere('email','email',email, function(err, audResult){
                        if(err){
                            View.showErrorMessage(err)
                        }
                        else {
                            
                            if(audResult.length < 1){
                                View.showMessage(`Member tidak ditemukan!`)
                            }
                            else {
                                let audienceEmail = audResult[0]
                                Show.findByWhere('price','id',ticketId, function(err,rows){
                                    if(err){
                                        View.showErrorMessage(err)
                                    }
                                    else {
                                        let ticketPrice = rows[0]
                                        let totalBuy = ticketAmount * ticketPrice
                                        Audience.findByWhere('balance','email',audienceEmail, function(err,balanceMember){
                                            if(err){
                                                View.showErrorMessage(err)
                                            }
                                            else {
                                                let balance = balanceMember[0]
                                                if(totalBuy > balance){
                                                    View.showMessage(`Mohon maaf saldo anda tidak cukup`)
                                                }
                                                else {
                                                    //beli tiket
                                                }
                                            }
                                        })
                                    }
                                })
                                
                            }
                        }
                    })
                }
            }
        })
    }

    static top3Audience(){
        //menampilkan audience dengan 
        Audience.readTop3Audiences(function(err,dataTop3){
            if (err){
                View.showErrorMessage(err)
            }
            else {
                View.showMessage(dataTop3)
            }
        })
    }

    static addShow(title, schedule, price) {
        //saat entri title, schedule, price, data dimaskkan ke tabel shows

        let schedules = schedule.split(" ");
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        for (let j = 0; j < months.length; j++) {
            if (schedules[1] == months[j]) {
                schedules[1] = months.indexOf(months[j]) + 1;
            }
        }
        if (schedules[1] < 10) {
            schedules[1] = '0' + schedules[1];
        }
        // let formattedschedules = schedules[2] + schedules[1] + schedules[0];
        let formattedschedules = `${schedules[2]}-${schedules[1]}-${schedules[0]} 00:00:00 GMT+0700 (WIB)`

        let objShow = {
            show: title,
            schedule: formattedschedules,
            price: price
        }

        Show.addData(objShow, function(err){
            if(err){
                View.showErrorMessage(err)
            }
            else {
                Show.readData(function(err,showData){
                    if(err){
                        View.showErrorMessage(err)
                    }
                    else {
                        View.showSuccessAdd(showData)
                    }
                })
            }
        })
    }

    static findShowBy(paramsPrice){
        //melihat semua kolom yang pricenya 20000
        Show.findByWhere('*','price',paramsPrice, function(err, rows){
            if(err){
                View.showErrorMessage(err)
            }
            else {
                View.showMessage(rows)
            }
        })
    }

    
}

module.exports = Controller