var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1Yanaeay0922",
    database: "burgers_db"
});

// Make connection. "Are we on the Internet?"
connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// export connection for our ORM to use.
module.exports = connection;