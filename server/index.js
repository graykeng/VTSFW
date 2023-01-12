const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "b130572645",
  database: "vtsf",
});

app.get("/CommiteeInfo", (req, res) => {
  db.query("SELECT * FROM Commitee;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("CommiteeInfo Fetched Successfully.");
    }
  });
});

app.get("/SponsorsInfo", (req, res) => {
  db.query("SELECT * FROM Sponsors;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("SponsorsInfo Fetched Successfully.");
    }
  });
});


app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});