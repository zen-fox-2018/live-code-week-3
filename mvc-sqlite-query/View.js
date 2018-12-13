class View {
  static error(err) {
    console.log('Error')
    console.log(err);
  }

  static message(msg) {
    console.log('Message');
    console.log(msg);
  }

  static success(success) {
    console.log('Success');
    console.log(success);
  }

  static data(data) {
    console.log(data);
  }
}

module.exports = View