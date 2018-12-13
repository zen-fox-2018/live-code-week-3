
class View {

  static displayErr(err) {
    console.log(`ERR: ${err}`);
  } 

  static succeedAddShows(string) {
    console.log(string);
  }

  static displayByPrice(data) {
    console.log(data);
  }

  static displayTopSpenders(data) {
    console.log(data);
  }
}

module.exports = View;