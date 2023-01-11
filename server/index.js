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

app.get("/CommiteeInfo2022", (req, res) => {
  db.query("SELECT * FROM Commitee WHERE id BETWEEN 20220000 AND 20229999;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("CommiteeInfo2022 Fetched Successfully.");
    }
  });
});

app.get("/SponsorsInfo2022", (req, res) => {
  db.query("SELECT * FROM Sponsors WHERE id BETWEEN 20220000 AND 20229999;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("SponsorsInfo2022 Fetched Successfully.");
    }
  });
});


app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});