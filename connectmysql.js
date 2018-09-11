var mysql = require("mysql");

var con = mysql.createConnection({
  host: "35.226.63.151", // IP of mysql DB
  user: "root",
  password: "Minhtu87",
  database: "learning_struts"
});


con.connect(function(err) {
  if (err) throw err;
  con.query("select * from Customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
