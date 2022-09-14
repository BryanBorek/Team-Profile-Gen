const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


function addManager() {
    inquirer //ask for name, id, email, office
        .prompt([
            {
                type: 'input',
                name: 'Please enter your name.',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?',
            },
        ])
        .then((userInput) => {
            let manager = new Manager(userInput.name, userInput.id, userInput.email, userInput.office);
            const managerCard = 'im a whole webpage and manager card'; //write html for the team page and manager card 
            fs.writeFile('./dist/newTeam.html', managerCard, err => err ? console.log(err) : addEmployee());
        })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeChoice',
                message: 'Would you like to add more team members?',
                choices: ['Add Engineer', 'Add Intern', 'No'],
            },
        ])
        .then((choice => {
            switch (choice.employeeChoice) {
                case 'Add Engineer':
                    addEngineer();
                    break

                case 'Add Intern':
                    addIntern();
                    break

                case 'No':
                    console.log('Goodbye');
            }
        }))
}

function addEngineer() {
    inquirer //ask for name, id, email, github
        .prompt([
            {
                type: 'input',
                name: 'What is their name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is their GitHub link?',
            },
        ])
        .then(userInput => {
            let engineer = new Engineer(userInput.name, userInput.id, userInput.email, userInput.github);
            const engineerCard = ' im an engineer card'; //write html for engineer card 
            fs.appendFile('./dist/newTeam.html', engineerCard, err => err ? console.log(err) : addEmployee());
        })
}

function addIntern() {
    inquirer //ask for name, id, email, school
        .prompt([
            {
                type: 'input',
                name: 'What is their name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where do they go to school?',
            },
        ])
        .then(userInput => {
            let intern = new Intern(userInput.name, userInput.id, userInput.email, userInput.school);
            const internCard = ' im an intern card'; //write html for engineer card 
            fs.appendFile('./dist/newTeam.html', internCard, err => err ? console.log(err) : addEmployee());
        })
}

addManager();