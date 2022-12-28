const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'shibanMySQL1234@DB',
    database: 'login',
  });
  
  connection.connect((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Connected to the database');
    }
  });


  module.exports = connection;