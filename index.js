// requried packages and imported files
const inquirer = require('inquirer');
const fs = require('fs');
const renderHTML = require('./assets/js/renderOutput.js');
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

const engineerQ = [{
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'role',
        choices: ['engineer']
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

const managerQ = [{
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'role',
        choices: ['manager']
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

const internQ = [{
        type: 'list',
        message: 'What is this role for this employee?',
        name: 'role',
        choices: ['intern']
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
// function writeToFile(data) {
//     fs.writeFileSync(`indexGen.html`, data, (err) => console.error(err));
//     // find a way to clear the teamObjext.txt
// };

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

function internQuestions() {
    try {
        inquirer.prompt(internQ)
            .then((answer) => {
                fs.appendFile('teamObject.txt', JSON.stringify(answer), function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
                anotherTeamQ();
            })
    } catch (err) {
        console.log(err);
    }
}

function employeeQuestions() {
    try {
        inquirer.prompt(employeeQ)
            .then((answer) => {
                fs.appendFile('teamObject.txt', JSON.stringify(answer), function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
                anotherTeamQ();
            })
    } catch (err) {
        console.log(err);
    }
}

function engineerQuestions() {
    try {
        inquirer.prompt(engineerQ)
            .then((answer) => {
                fs.appendFile('teamObject.txt', JSON.stringify(answer), function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
                anotherTeamQ();
            })
    } catch (err) {
        console.log(err);
    }
}

function managerQuestions() {
    try {
        inquirer.prompt(managerQ)
            .then((answer) => {
                fs.appendFile('teamObject.txt', JSON.stringify(answer), function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
                anotherTeamQ();
            })
    } catch (err) {
        console.log(err);
    }
}

function anotherTeamQ() {
    try {
        inquirer.prompt(anotherQ)
            .then((answer) => {
                if (answer.another == "yes") {
                    init();
                } else {
                    writeTeamObject();
                    // const genHTML = renderHTML(team);
                    // writeToFile(genHTML);
                }
            })
    } catch (err) {
        console.log(err);
    }
}

// async function writeTeamObject(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.text();
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     }
// }

// writeTeamObject('../Team-Roster/teamObject.txt');

// calling init function
init();