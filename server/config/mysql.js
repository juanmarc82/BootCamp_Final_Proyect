import mysql from 'mysql'; // ESModules ES6 // REQUIERE USAR BABEL

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'stopgo'
});

connection.connect();

connection.on('error', function (err) {
    console.error(JSON.stringify(err)); // 'ER_BAD_DB_ERROR'
});

exports.connection = connection;