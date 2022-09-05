const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");


// // Double check to see if this needs to make the new user profiles.
// const proGen = ProGen();

const teamArray = [];

inquirer
.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your id.?",
        name: "id",
      },
      {
        type: "list",
        message: "what is your email?",
        choices: "Engineer", "Manager",

      }
])

// // Make a constructor function to take in employee data
// // name, age, ...
// function Employees(name, id, email) {
//   this.name = name;
//   this.id = id;
//   this.email = email;
//   return;
// }

// const Engineer = new Employees("David", 1, "drtjprdave@gmail.com");
// console.log(user1);
// const user2 = new Employees("David", 2, "drtjprdave@gmail.com");
// console.log(user1);
// const user3 = new Employees("David", 3, "drtjprdave@gmail.com");
// console.log(user1);
// const user4 = new Employees("David", 4, "drtjprdave@gmail.com");
// console.log(user1);
// const user5 = new Employees("David", 5, "drtjprdave@gmail.com");
// console.log(user1);

// // TODO: create functions to getName, getId, getEmail getRole
