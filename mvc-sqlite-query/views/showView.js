class View {
    static addShowError(err) {
        console.log(`Adding Show Denied: ${err}`);
    }
    static addShowSucceed(title) {
        console.log(`Successfully added a ${title}`);
    }
    static findSpecificShows(data) {
        if (data.length === 0) {
            console.log(`Show yang Anda cari tidak tersedia`)
        } else {
            console.log(`Here's The Shows You Want To See:`);
            console.log(data);
        }
    }
    static findSpecificShowsError(err) {
        console.log(`Find Data ERROR: ${err}`);        
    }
}

module.exports = View