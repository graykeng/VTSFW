const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

const db = require("./config/db");

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res)=> {
  res.send("It's working!");
})

app.get("/api/CommiteeInfo", (req, res) => {
  db.query("SELECT * FROM Commitee;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("CommiteeInfo fetched successfully.");
    }
  });
});

app.get("/api/SponsorsInfo", (req, res) => {
  db.query("SELECT * FROM Sponsors;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("SponsorsInfo fetched successfully.");
    }
  });
});

app.get("/api/EventPic", (req, res) => {
  db.query("SELECT * FROM EventPic;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("EventPic fetched successfully.");
    }
  })
})

app.get("/api/LogoPic", (req, res) => {
  db.query("SELECT * FROM LogoPic;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("LogoPic fetched successfully.");
    }
  })
})

app.get("/api/BlogPostGrid", (req, res) => {
  db.query("SELECT PostID, ImagePath FROM BlogPostPic WHERE PostPicID % 10 = 1 ORDER BY PostID DESC;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("BlogPost fetched successfully.");
    }
  })
})

app.get("/api/BlogPostDetail/:PostID", (req, res) => {
  const sql = `SELECT BlogPost.*, BlogPostPic.* FROM BlogPost JOIN BlogPostPic ON BlogPost.PostID = BlogPostPic.PostID WHERE BlogPost.PostID = ${req.params.PostID};`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    else {
      res.send(result);
      console.log(`BlogPostDetail for PostID ${req.params.PostID} fetched successfully.`)
    }
  })
})

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running on port 3001.");
});