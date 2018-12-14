class View {


  static showErr(err) {
    console.log('ERR :', err);
  }

  static showOk(show) {
    console.log(`'Successfully added a ${show}'`);
  }

  static print(data) {
    console.log(data);
  }
}

module.exports = View;