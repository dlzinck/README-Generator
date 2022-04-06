// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectname',
    },
    {
        type: 'input',
        message: 'Briefly describe the project this README is for.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation steps.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, any third-party assests, or any other features.',
        name: 'credits',
    },
    {
        type: 'checkbox',
        message: 'Select Licenses',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC License', 'GNU GPL']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
