const mysql = require('mysql');
let connection;

if(process.ev.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '1084829Ss',
        database: 'burger_db'
    })
}

connection.connect(function(err) {
    if(err) throw err;
    console.log(`Connected as id: ${connection.threadId}`)
})

module.exports = connection;