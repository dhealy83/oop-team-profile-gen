const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const generateHTML = require("./src/template-helper");

// // Double check to see if this needs to make the new user profiles.
// const proGen = ProGen();

const teamArray = [];

function getEmployeeData() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Employee name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their email?",
        name: "email",
      },
      {
        type: "list",
        message: "What is their role?",
        name: "role",
        choices: ["Engineer", "Manager", "Intern"],
      },
    ])
    .then(function (data1) {
      if (data1.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Engineers github?",
              name: "github",
            },
          ])
          .then((data2) => {
            createEngineer(data1.name, data1.id, data1.email, data2.github);
          });
      }
      // if Manager
      if (data1.role === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Managers office number.",
              name: "officeNumber",
            },
          ])
          .then((data2) => {
            createManager(
              data1.name,
              data1.id,
              data1.email,
              data2.officeNumber
            );
          });
      }
      // if Intern
      if (data1.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Interns school.",
              name: "School",
            },
          ])
          .then((data2) => {
            createIntern(data1.name, data1.id, data1.email, data2.School);
          });
      }
    });
}

// createEngineer
function createEngineer(name, id, email, GitHub) {
  let engineer = new Engineer(name, id, email, GitHub);
  teamArray.push(engineer);
  nextMember();
}

// createManager
function createManager(name, id, email, officeNumber) {
  let manager = new Manager(name, id, email, officeNumber);
  teamArray.push(manager);
  nextMember();
}
// createIntern
function createIntern(name, id, email, School) {
  let intern = new Intern(name, id, email, School);
  teamArray.push(intern);
  nextMember();
}
function nextMember() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want add another employee?",
        name: "add",
      },
    ])
    .then((data) => {
      console.log(data);
      if (data.add === true) {
        getEmployeeData();
      } else {
        const generatedTemplate = generateHTML(teamArray);

        fs.writeFile("./dist/index.html", generatedTemplate, function () {
          console.log("Generated HTML successfully!");
        });
      }
    });
}

getEmployeeData();
