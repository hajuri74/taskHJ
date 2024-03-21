const maria = require('mysql');
const conn = maria.createConnection({
    host: 'localhost',
    port: 3306,
    user:'root', 
    password: '3721',
    database:'crawling',
    dateStrings: 'date'
});

module.exports = conn;