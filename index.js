// external packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github", 
        message: "What is your Github profile name?",
    },
    {
        type: "input", 
        name: "email",
        message: "What is your email address",
    },
    {
        type: "input",
        name: "title",
        message: "What is your projects name?",
    },
    {
        type: "input",
        name: "liveLink", 
        message: "Does your Repo have a live link? If so insert it here, if not hit return to skip.",
    },
    {
        type: "input" ,
        name: "description",
        message: "Please write a short description about your project",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependecies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "type",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "type",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    }
];

// function to write README file
function writeToFile(README, data) {
    return fs.writeFileSync(path.join(process.cwd(), "README.md"), data);
        }

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
};
// function call to initialize program
init();

