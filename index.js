// const inquirer = require("inquirer");
// const fs = require("fs");
// const { log } = require("console");

// inquirer
// .prompt([
//     {
//         type: "input",
//         message: "What is your name?",
//         name: "name",
//       },
//       {
//         type: "input",
//         message: "What is your id.?,
//         name: "id",
//       },
//       {
//         type: "input",
//         message: "what is your email?",
//         name: "email",
//       },
// ])

// Make a constructor function to take in employee data
// name, age, ...
function Employees(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  return;
}

const user1 = new Employees("David", 1, "drtjprdave@gmail.com");
console.log(user1);
const user2 = new Employees("David", 2, "drtjprdave@gmail.com");
console.log(user1);
const user3 = new Employees("David", 3, "drtjprdave@gmail.com");
console.log(user1);
const user4 = new Employees("David", 4, "drtjprdave@gmail.com");
console.log(user1);
const user5 = new Employees("David", 5, "drtjprdave@gmail.com");
console.log(user1);

// TODO: create functions to getName, getId, getEmail getRole