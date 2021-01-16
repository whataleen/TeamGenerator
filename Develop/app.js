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

const engineerQs = [
    {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer's name: "
    },
    {
        type: "input",
        name: "engineerId",
        message: "Enter the engineer's ID: "
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Enter the engineer's email: "
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "Enter the engineer's GitHub: "
    }
];


function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Would you like to add a member or is the team complete? ",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, the team is complete"]
        }
    ]).then(answers => {
        if (answers.option === "Yes, add an engineer") {
            return inquirer.prompt(engineerQs).then(answers => {
                let newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                myTeam.push(newEngineer);
                createTeam();
            });
        }
        else if (answers.option === "Yes, add an intern") {
            return inquirer.prompt(internQs).then(answers => {
                let newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                myTeam.push(newIntern);
                createTeam();
            });
        }
        const output = render(myTeam);
        createHtml(output);
    });
}


function createHtml(inputTeam) {
    fs.writeFile("linasTeam.html", inputTeam, (err) => {
        if (err) {
            throw err;
        };
        console.log("HTML file called linasTeam.html generated.");
    });
};

init().then(answers => {
    const theManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
    myTeam.push(theManager);
    createTeam();
});