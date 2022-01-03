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

//Define questions for inquirer prompts
const questions = {
   actions: [{
      type: 'list',
      name: 'actions',
      message: 'What would you like to do?',
      choices: ['View data', 'Add data', 'Change data', 'Delete data', 'Exit application']
   }],
queries: [{
   type: 'list',
   name: 'queries',
   message: 'What data would you like to view?',
   choices: ['Departments', 'Roles', 'Employees']
}],
additions: [{
   type: 'list',
   name: 'additions',
   message: 'What data would you like to add?',
   choices: ['New department', 'New role', 'New employee']
}],
updates: [{
   type: 'list',
   name: 'updates',
   message: 'What data would you like to update?',
   choices: ['Employee role', 'Employee manager', 'Department name']
}],
deletions: [{
   type: 'list',
   name: 'deletions',
   message: 'What data would you like to delete?',
   choices: ['An employee', 'A role', 'A department']
}],
do_more: [{
   type: 'confirm',
   name: 'do_more',
   message: 'Would you like to do something else?'
}]

}





