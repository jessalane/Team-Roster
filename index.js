// requried packages and imported files
const inquirer = require('inquirer');
const fs = require('fs');
const renderHTML = require('./assets/js/renderOutput.js');

// arrays of questions
const roleQ = [
    {
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'empRole',
        choices: ['manager', 'engineer', 'employee', 'intern']
    },
];

const employeeQ = [
    {
        type: 'input',
        message: 'What the name of this employee?',
        name: 'empRole'
    },
    {
        type: 'input',
        message: 'What the email of this employee?',
        name: 'empEmail'
    },
    {
        type: 'input',
        message: 'What the id of this employee?',
        name: 'empId'
    },
];

const engineerQ = [
    {
        type: 'input',
        message: 'What the name of this engineer?',
        name: 'engRole'
    },
    {
        type: 'input',
        message: 'What the email of this engineer?',
        name: 'engEmail'
    },
    {
        type: 'input',
        message: 'What the id of this engineer?',
        name: 'engId'
    },
    {
        type: 'input',
        message: 'What the github name of this engineer?',
        name: 'engGit'
    },
];

const managerQ = [
    {
        type: 'input',
        message: 'What the name of this manager?',
        name: 'manRole'
    },
    {
        type: 'input',
        message: 'What the email of this manager?',
        name: 'manEmail'
    },
    {
        type: 'input',
        message: 'What the id of this manager?',
        name: 'manId'
    },
    {
        type: 'input',
        message: 'What the store number name of this manager?',
        name: 'manStore'
    },
];

const internQ = [
    {
        type: 'input',
        message: 'What the name of this intern?',
        name: 'intRole'
    },
    {
        type: 'input',
        message: 'What the email of this intern?',
        name: 'intEmail'
    },
    {
        type: 'input',
        message: 'What the id of this intern?',
        name: 'intId'
    },
    {
        type: 'input',
        message: 'What the school name of this intern?',
        name: 'intSchool'
    },
];

// function to write data to a readme file
function writeToFile(data) {
    fs.writeFileSync(`indexGen.html`, data, (err) => console.error(err));
};

// initialize funciton to run the questions
function init() {
    try {
        inquirer.prompt(roleQ)
        .then((answer) => {
            const genHTML = renderHTML(answer);
            writeToFile(genHTML);
        })
    } catch(err) {
        console.log(err);
    }
}

// calling init function
init();
