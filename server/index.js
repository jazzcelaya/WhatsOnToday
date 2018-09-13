const express = require("express");
const app = express();
const database = require("../database/index.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

//GET request to database
app.get("/events", function(req, res) {
  database.selectAll((err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});


app.post("/events", function(req, res) {
  //update data object with new object from my req.body
  let description = req.body.description;
  //send the updated data object back

  if (!description) {
    res.sendStatus(400);
  } else {
    database.insertOne(description, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});

app.listen(3000, function() {
  console.log("Server started and listening on port 3000");
});
