// requried packages and imported files
const inquirer = require('inquirer');
const fs = require('fs');
const renderHTML = require('./assets/js/renderOutput.js');
let team = [];

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
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'empRole',
        choices: ['manager', 'engineer', 'employee', 'intern']
    },
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
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'empRole',
        choices: ['manager', 'engineer', 'employee', 'intern']
    },
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
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'empRole',
        choices: ['manager', 'engineer', 'employee', 'intern']
    },
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
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'empRole',
        choices: ['manager', 'engineer', 'employee', 'intern']
    },
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
            if (answer.role == "intern") { 
                internQuestions();
            }
            if (answer.role == "employee") {
                employeeQuestions();
            }
            if (answer.role == "engineer") {
                engineerQuestions();
            }
            if (answer.role == "manager") {
                managerQuestions();
            }
            const genHTML = renderHTML(team);
            writeToFile(genHTML);
        })
    } catch(err) {
        console.log(err);
    }
}

function internQuestions() {
    try {
        inquirer.prompt(internQ)
        .then((answer) => {
            team += { answer };
            return team;
        })
    } catch(err) {
        console.log(err);
    }
}

function employeeQuestions() {
    try {
        inquirer.prompt(employeeQ)
        .then((answer) => {
            team += { answer };
            return team;
        })
    } catch(err) {
        console.log(err);
    }
}

function engineerQuestions() {
    try {
        inquirer.prompt(engineerQ)
        .then((answer) => {
            team += { answer };
            return team;
        })
    } catch(err) {
        console.log(err);
    }
}

function managerQuestions() {
    try {
        inquirer.prompt(managerQ)
        .then((answer) => {
            team += { answer };
            return team;
        })
    } catch(err) {
        console.log(err);
    }
}

// calling init function
init();
