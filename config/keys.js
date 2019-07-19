if (process.env.NODE_ENV === "production") {
    module.exports = {
        mongoURI: "mongodb+srv://clinsmann:C2bF4W8qazY7fHRf@cluster0-ts9ao.mongodb.net/test?retryWrites=true&w=majority",
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost/mevn_stack",
        secret: 'yoursecret'
    };
}