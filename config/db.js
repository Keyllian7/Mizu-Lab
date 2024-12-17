if (process.env.NODE_ENV == "production") {
    module.exports = { DB_URL: process.env.DB_URL }
} else {
    module.exports = { DB_URL: "mongodb://localhost/mizulab" }
}
