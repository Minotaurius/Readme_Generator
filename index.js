//Include packages needed for this application
const inquirer = require('./node_modules/inquirer');
const fs = require('fs')

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
    type: 'type',
    name: 'team',
    message: 'Please enter your name',
},

{
    type: 'input',
    name: 'links',
    message: 'Please enter your GitHub link so we can include that in the README'
},

{
    type: 'list',
    name: 'license',
    message: 'Do you want to include an open source license on this project?',
    choices: ['Yes', 'No license']
},

{
    type: 'input',
    name: 'deploy',
    message: 'Please include a link to your deployed project'
}];

// TODO: Create a function to write README file
function writeToFile(answers) {
    const { title, descrip, langs, team, links, license, deploy} = answers;
    if(license === 'Yes') {
        var newLicense = `MIT License

        Copyright (c) 2022
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.`
    } else {
        var newLicense = 'No license'
    };

    fs.writeFile('README.md',
    `# ${title}
    
    ## Description of Project
    ${descrip}

    ## Languages used
    ${langs}

    ## Meet the developers
    * ${team} - ${links}

    ## License
    ${newLicense}
  
    ## Deployed link to project
    Click [HERE](${deploy}) to write your own README file!
    `, (err) => {
        if(err) console.log(err);
        else {
            console.log('README file successfully written! :)')
        }
    }   
    )
}

// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile(answers)
        })


// Function call to initialize app
init();
