const mysql = require("mysql");

const db = mysql.createConnection({
    user: "b0eeafc3a9f732",
    host: "us-cdbr-east-06.cleardb.net",
    password: "ea47bb0f",
    database: "heroku_f81d33990469d38",
});

module.exports = db;

// const db = mysql.createConnection({
//     user: "b0eeafc3a9f732",
//     host: "us-cdbr-east-06.cleardb.net",
//     password: "ea47bb0f",
//     database: "heroku_f81d33990469d38",
// });
// mysql://b0eeafc3a9f732:ea47bb0f@us-cdbr-east-06.cleardb.net/heroku_f81d33990469d38?reconnect=true