const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // {TODO: Add your MySQL password}
      password: '94WeirdObsession@',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );
  //reference
//   db.query("INSERT INTO department (id, name) VALUES (1, 'HR');", function (err, results) {
//     console.table(results);
//   });

  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  });