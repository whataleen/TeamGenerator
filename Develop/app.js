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
const randomManager = new Manager("randomManager", 123, "random@manager.com", 404);
const randomEngineer = new Engineer("randomEngineer", 123, "random@engineer.com", 404);
const randomIntern = new Intern("randomIntern", 123, "random@intern.com", 404);


myTeam.push(randomManager);
myTeam.push(randomEngineer);
myTeam.push(randomIntern);
//console.log(myTeam); 

//render(myTeam);
var output = render(myTeam);


function createHTML(inputTeam) {
    fs.writeFile("linasTeam.html", inputTeam, (err) => {
        if (err) {
            throw err;
        };
        console.log("Your html file has been created");
    });
};

createHTML(output);