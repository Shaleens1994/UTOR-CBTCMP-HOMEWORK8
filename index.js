// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "Define Poject Name ?"
},
{
    type: "input",
    name: "description",
    message: "Project Description."
},
{
    type: "input",
    name: "installation",
    message: "App installation Process?"
},
{
    type: "input",
    name: "usage",
    message: "App Usage"
},
{
    type: "input",
    name: "credits",
    message: "Collaborators List"
},
{
    type: "list",
    name: "license",
    message: "Licence?",
    choices: ["Apache Licence 2.0", "MIT License", "GNU GPLv3"]
},
{
    type: "input",
    name: "github",
    message: "GitHub username?",
},
{
    type: "input",
    name: "email",
    message: "email ID?"
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), "utf8", function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Success! Data written to ${fileName}.md.`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            // console.log(response);
            writeToFile(response.title, response);
        })
        .catch((error) => {
            console.log(error);
        })
}

// Function call to initialize app
init();
