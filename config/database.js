const mysql = require('mysql')

module.exports = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'geargame30',
    port : ''
})