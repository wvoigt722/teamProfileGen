const fs = require("fs");
const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const generatePage = require("./src/generatehtml");

let employees = [];

const init = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team managers name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the team managers ID?",
        name: "managerID",
      },
      {
        type: "input",
        message: "What is the team managers email address?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the team managers office number?",
        name: "managerOffNum",
      },
    ])

    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.managerID,
        data.managerEmail,
        data.managerOffNum
      );

      employees.push(manager);
      whatNext();
    });
};

const whatNext = function () {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "addEmp",
      choices: ["Add an Engineer?", "Add an Intern?", "Exit?"],
    })
    .then((data) => {
      if (data.addEmp === "Add an Engineer?") {
        enginInput();
      } else if (data.addEmp === "Add an Intern?") {
        internInput();
      } else {
        generatehtml();
      }
    });
};

//if selected exit then exit the promts

//if selected engineer is selected from choices then do the following

const enginInput = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineers name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the engineers ID?",
        name: "engineerID",
      },
      {
        type: "input",
        message: "What is the engineers github?",
        name: "engineerGit",
      },
      {
        type: "input",
        message: "What is the engineers email?",
        name: "engineerEmail",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.engineerName,
        data.engineerID,
        data.engineerEmail,
        data.engineerGit
      );
      employees.push(engineer);
      whatNext();
    });
};

// when we have finished entering this information for the engineer then return to the promts so we can add more teammates or exit.

//if intern is selected from choices then do the following

const internInput = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the interns name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is the interns ID?",
        name: "internID",
      },
      {
        type: "input",
        message: "What is the interns email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What is the interns school name?",
        name: "internSchool",
      },
    ])

    // create intern object push into the array

    .then((data) => {
      const intern = new Intern(
        data.internName,
        data.internID,
        data.internEmail,
        data.internSchool
      );
      employees.push(intern);
      whatNext();
    });
};

// when we hav finished entering this information for the intern then return to the prompts so we can add more teammates or exit.

const generatehtml = function () {
  fs.writeFile("index.HTML", generatePage(employees), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
  ß;
};

init();
