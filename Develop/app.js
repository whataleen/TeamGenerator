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
const internQs = [
    {
        type: "input",
        name: "internName",
        message: "Enter the intern's name: "
    },
    {
        type: "input",
        name: "internId",
        message: "Enter the intern's ID: "
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter the intern's email: "
    },
    {
        type: "input",
        name: "internSchool",
        message: "Enter the intern's school: "
    }
];