//Requires
const mongoose = require('mongoose');

//Connection
const config = mongoose.connect(process.env.DB_CNN)
    .then(() => {
        console.log("DB Online");
    })
    .catch(err => {
        console.log(err);
        console.log("DB Offline");
    });

module.exports = config;