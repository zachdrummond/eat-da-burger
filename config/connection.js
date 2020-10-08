const mysql = require("mysql");

let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    console.log("Local Connection");
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "mysql",
        database: "burgers_db"
    })
}

connection.connect(function(error) {
    
    if(error){
        console.log("Error Connecting: " + error.stack);
    } else {
        console.log("Connection id: " + connection.threadId);
    }

});
module.exports = connection;