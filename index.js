//Call dependencies
const mysql = require('mysql');


//Create connection to DB
const connection = mysql.createConnection({
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: 'Vegevege71*',
   database: 'employee_trackingdb',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connection successful using id ${connection.threadId}\n`);
    start();
 });