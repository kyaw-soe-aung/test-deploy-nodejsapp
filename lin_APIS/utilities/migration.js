var mysql = require('mysql');
var migration = require('mysql-migration');

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'lingamingpc'
});

migration.init(connection, __dirname + '/migrations');
