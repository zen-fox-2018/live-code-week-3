class View {
  static addShowError(err){
    console.log('add show error!');
    console.log(err);
  }

  static addShowSuccess(title){
    console.log('Successfully added a' + title);
  }

  static findShowErr(err){
    console.log('find show error!');
    console.log(err);
  }

  static findByShow(data){
    console.log(data);
  }

  static findAudienceErr(err){
    console.log('find audience error!');
    console.log(err);
  }

  static top3Audiences(data){
    console.log(data);
  }

  static showNotFound(){
    console.log('Show tidak ditemukan!');
  }

  static findAudienceErr(err){
    console.log('find Audience error!');
    console.log(err);
  }

  static memberNotFound(){
    console.log('Member tidak ditemukan!');
  }

  static notEnoughBalance(){
    console.log('Mohon maaf saldo anda tidak cukup');
  }

  static addTicketError(err){
    console.log('add ticket error!');
    console.log(err);
  }
}

module.exports = View;
