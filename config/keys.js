if (process.env.NODE_ENV === "production") {
    module.exports = {
        mongoURI: "",
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost/mevn_stack",
        secret: 'yoursecret'
    };
}
