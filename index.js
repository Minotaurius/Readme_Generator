//Include packages needed for this application
const inquirer = require('./node_modules/inquirer');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'descrip',
    message: 'Please provide a brief description of your application?'
},
{
    type: 'input',
    name: 'langs',
    message: 'What languages did you use to make this project?'
},
{
    type: 'list',
    name: 'team',
    message: 'Did you work with anyone on this project?',
    choices: ['No', 'Yes']
},
{
    type: 'input',
    name: 'links',
    message: 'Please enter their GitHub links separated by commas so we can include them'
},
{
    type: 'input',
    name: 'deploy',
    message: 'Please include a link to your deployed project'
},
];
inquirer.prompt(questions)
    .then(function(answers) {
        console.log(answers)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
