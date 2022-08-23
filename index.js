// requried packages and imported files
const inquirer = require('inquirer');
const fs = require('fs');
const renderHTML = require('./assets/js/renderOutput.js');
const employee = require('./assets/js/employee.js');
const engineer = require('./assets/js/engineer.js');
const manager = require('./assets/js/manager.js');
const intern = require('./assets/js/intern.js');

const team = [];

// arrays of questions
const roleQ = [{
    type: 'list',
    message: 'What is this role for this employee?',
    name: 'role',
    choices: ['manager', 'engineer', 'employee', 'intern']
}, ];

const anotherQ = [{
    type: 'list',
    message: 'Whould you like to add another team member?',
    name: 'another',
    choices: ['yes', 'no']
}, ];

const employeeQ = [{
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'role',
        choices: ['employee']
    },
    {
        type: 'input',
        message: 'What the name of this employee?',
        name: 'empName'
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

const engineerQ = [{
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'role',
        choices: ['engineer']
    },
    {
        type: 'input',
        message: 'What the name of this engineer?',
        name: 'engName'
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

const managerQ = [{
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'role',
        choices: ['manager']
    },
    {
        type: 'input',
        message: 'What the name of this manager?',
        name: 'manName'
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
        name: 'manOffice'
    },
];

const internQ = [{
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'role',
        choices: ['intern']
    },
    {
        type: 'input',
        message: 'What the name of this intern?',
        name: 'intName'
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
            })
    } catch (err) {
        console.log(err);
    }
}

// functions to create an object for each individual group
function internQuestions() {
    try {
        inquirer.prompt(internQ)
            .then((answer) => {
                let newIntern = new intern(answer.role, answer.intName, answer.intEmail, Number(answer.intId), answer.intSchool);

                team.push(newIntern);
                anotherTeamQ();
                return team;
            })
    } catch (err) {
        console.log(err);
    }
}

function employeeQuestions() {
    try {
        inquirer.prompt(employeeQ)
            .then((answer) => {
                let newEmployee = new employee(answer.role, answer.empName, answer.empEmail, Number(answer.empId));
                
                team.push(newEmployee);
                anotherTeamQ();
                return team;
            })
    } catch (err) {
        console.log(err);
    }
}

function engineerQuestions() {
    try {
        inquirer.prompt(engineerQ)
            .then((answer) => {
                let newEngineer = new intern(answer.role, answer.engName, answer.engEmail, Number(answer.engId), answer.engGit);
                
                team.push(newEngineer);
                anotherTeamQ();
                return team;
            })
    } catch (err) {
        console.log(err);
    }
}

function managerQuestions() {
    try {
        inquirer.prompt(managerQ)
            .then((answer) => {
                console.log(typeof answer.manId);
                let newManager = new manager(answer.role, answer.manName, answer.manEmail, Number(answer.manId), Number(answer.manOffice));
                
                team.push(newManager);
                anotherTeamQ();
                return team;
            })
    } catch (err) {
        console.log(err);
    }
}

// sends back to init if they want to add more team members
function anotherTeamQ() {
    try {
        inquirer.prompt(anotherQ)
            .then((answer) => {
                if (answer.another == "yes") {
                    init();
                } else {
                    const genHTML = renderHTML(team);
                    writeToFile(genHTML);
                }
            })
    } catch (err) {
        console.log(err);
    }
}

// calling init function
init();