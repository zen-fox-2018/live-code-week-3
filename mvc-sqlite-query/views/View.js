class View {

    static addShow(name) {
        console.log(`Successfully added a ${name}`);
    }

    static findBy(data) {
        console.log(data);
    }

    static disErr(err) {
        console.log(err);
    }
}

module.exports = View