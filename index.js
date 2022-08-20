// requried packages and imported files
const inquirer = require('inquirer');
const fs = require('fs');
let renderHTML = require('./assets/js/renderOutput.js');

// array of questions
const questions = [
    {
        type: 'list',
        message: 'Would you like to allow contributions?',
        name: 'contribute',
        choices: ['yes', 'no']
    },
    {
        type: 'input',
        message: 'How do you test this application?',
        name: 'tests',
    },
];

// function to write data to a readme file
function writeToFile(data) {
    fs.writeFileSync(`indexGen.html`, data, (err) => console.error(err));
};

// initialize funciton to run the questions
function init() {
    try {
        inquirer.prompt(questions)
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
