class Ticket {
  static showErr(err) {
    console.log(`ERROR`);
    console.log(err);
  }

  static showSuccess(msg) {
    console.log(msg);
  }

  static showData(data) {
    console.log(data);
  }
}

module.exports = Ticket;
