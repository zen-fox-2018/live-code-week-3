class Show {
  static showErr(err) {
    console.log(`ERROR`);
    console.log(err);
  }

  static showSuccess(msg) {
    console.log(msg);
  }
}

module.exports = Show;
