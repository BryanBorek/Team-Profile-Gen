const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeChoice',
                message: 'What employee would you likt to add?',
                choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
            },
        ])//list member options
        .then((choice => {
            switch (choice.employeeChoice) {
                case 'Manager':
                    addManager();
                    break
                
                case 'Engineer':
                    addEngineer();
                    break

                case 'Intern':
                    addIntern();
                    break
                
                case 'Exit':
                    console.log('Goodbye');
            }
        }))//switch statement
}

function addManager() {
    inquirer //ask for name, id, email, office
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is this employees name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this employees id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is this employees email?',
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is this employees office number?',
            },
        ])
        .then((userInput) => {
            let manager = new Manager(userInput.name, userInput.id, userInput.email, userInput.office);
            const managerCard = 'Hello'
            fs.appendFile('./dist/newTeam.html', managerCard, err => err ? console.log(err) : console.log('Team Updated'))
            addEmployee();
        })
}
// function addEngineer() {
//     inquirer
//         .prompt()
//         .then()
// }
// function addIntern() {
//     inquirer
//         .prompt()
//         .then()
// }

addEmployee();