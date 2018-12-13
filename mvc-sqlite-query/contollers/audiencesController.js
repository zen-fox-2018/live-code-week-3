const View = require('../view/view.js')
const Audience = require('../models/audiences.js')
const Show = require('../models/shows.js')

class TransactionsController{
    static top3Audience(){
        Audience.findTransactions(function(err, data){
            if(err){
                View.error(err, 'error')
            }   else{
                View.display(data)
            }
        })
    }

    static buyTicket(showId, email, amount){
        Show.findWhere('id', showId, function(err, showData){
            if (err){
                View.display(err)
            }   
            else if(showData.length == 0){
                View.display('show tidak ditemukan!')
            }
            else{
                
                Audience.findWhere('email', email, function(err, emailData){
                    
                    if(err){
                        View.error(err, 'error')
                        
                    }else if(emailData.length == 0){
                        View.display('member tidak ditemukan!')
                    }   
                    
                    else{
                        Audience.findTransactionsOne(emailData.id, function(err, transactionData){
                            if(err){
                                View.error(err, 'error')
                            }   else{

                                let totalPrice = null
                                if(emailData.type == 'gold'){
                                    totalPrice = transactionData*0.15
                                }   else{
                                    totalPrice = transactionData*0.05
                                }

                                if(totalPrice> emailData.balance){
                                    View.display('Mohon maaf saldo anda tidak cukup')
                                }   else{
                                    
                                }
                            }
                        })

                    }
                })
            }
        })
    }
}

module.exports = TransactionsController