const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


var myTeam = [];
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter the team manager's name: "
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter the team manager's ID: "
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter the team manager's email: "
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Enter the team manager's office number: "
        }
    ]);
}
