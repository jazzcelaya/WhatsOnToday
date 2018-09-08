const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "holacode",
  database: "findevents"
});

const selectAll = function(cb) {
  connection.query("SELECT * FROM events", (err, results, fields) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const insertOne = function(description, cb) {
  connection.query(
    "INSERT INTO events (description) VALUES (?)",
    [description],
    (err, results, fields) => {
      if (err) {
        cb(err, null);
      } else {
        console.log(results);
        cb(null, results);
      }
    }
  );
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
