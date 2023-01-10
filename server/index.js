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

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM Commitee", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, () => {
console.log("Yey, your server is running on port 3001");
});