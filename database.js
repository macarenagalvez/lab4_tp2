// package installed with npm
const mysql = require("mysql");

// create connection to database
const connection = mysql.createConnection({ 
  host: "localhost",
  user: "root",
  password: "",
  database: "paisdb",
});

// connection method
connection.connect(error => { 
  if (!!error) {
    console.log("Error to connect", error)
  }
  console.log("Connected to MySQL database");
});


module.exports = connection