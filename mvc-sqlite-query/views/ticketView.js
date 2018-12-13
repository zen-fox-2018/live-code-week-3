class View {
    static topAudienceErr(err) {
        console.log(`Data ERROR: ${err}`)
    }

    static topAudience(data) {
        console.log(`Here's all the top 3 audience: `);
        console.log(data)
    }
}

module.exports = View