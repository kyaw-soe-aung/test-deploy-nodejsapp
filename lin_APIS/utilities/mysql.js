const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'us-cdbr-iron-east-02.cleardb.net',
    user : 'be8d5a09c114e6',
    password : 'e9c5d4de',
    database : 'heroku_7bf1ad781145d5b'
})

connection.connect((err)=>{
    if(err) throw err;
    
})

module.exports = connection;