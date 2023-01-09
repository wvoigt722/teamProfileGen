const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    message: "What is the team managers name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the employee ID?",
    name: "empID",
  },
  {
    type: "input",
    message: "What is the email address?",
    name: "emailId",
  },
  {
    type: "input",
    message: "What is the office number?",
    name: "officeNum",
  },
  {
    type: "list",
    message: "Add an employee, or exit.",
    name: "addEmp",
    choices: ["Engineer", "Intern", "Exit"],
  },

  //if selected exit then exit the promts

  //if selected engineer is selected from choices then do the following

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

  // when we have finished entering this information for the engineer then return to the promts so we can add more teammates or exit.

  //if intern is selected from choices then do the following

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

  // when we hav finished entering this information for the intern then return to the prompts so we can add more teammates or exit.
]);
