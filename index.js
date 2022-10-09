const inquirer = require('inquirer');
const fs = require('fs');
// Ask for the users information and set them as Manager
function addManager() {
    inquirer //ask for name, id, email, office
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter your name.',
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
            const managerCard = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <title>My Team</title>
</head>
<header class="text-center bg-danger">
    <h1 class="font-weight-bold text-white py-3">My Team</h1>
</header>
<body>
    <main class="row d-flex justify-content-center mx-3 w-100">
        <div class="w-25 m-3 border border-dark">
            <section class="bg-primary">
                <h1 class="text-left text-white p-2">${userInput.name}</h1>
                <h2 class="text-left text-white p-2">☕ Manager</h2>
            </section>
            <section class="bg-light p-3">
                <h3 class="text-left bg-white p-2">ID:${userInput.id}</h3>
                <h3 class="text-left bg-white p-2">Email:<a href="mailto:${userInput.email}" target="_blank">${userInput.email}</a></h3>
                <h3 class="text-left bg-white p-2">Office:${userInput.office}</h3>
            </section>
        </div>`;
            fs.writeFile('./dist/newTeam.html', managerCard, err => err ? console.log(err) : addEmployee());
        })
}

// Ask the user if they would liek to add employees or finish the html
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
                    console.log('Writing webpage...');
                    const finishWriting = `
        </main>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="assets/js/script.js"></script>
</body>
</html>`;
                    fs.appendFile('./dist/newTeam.html', finishWriting, err => err ? console.log(err) : console.log('Success'));
            }
        }))
}

// Ask for the employee information then append it to the html
function addEngineer() {
    inquirer //ask for name, id, email, github
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is their name?',
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
                message: 'What is their GitHub name?',
            },
        ])
        .then(userInput => {
            const engineerCard = `<div class="w-25 m-3 border border-dark">
    <section class="bg-primary">
        <h1 class="text-left text-white p-2">${userInput.name}</h1>
       <h2 class="text-left text-white p-2">👓 Engineer</h2>
    </section>
    <section class="bg-light p-3">
        <h3 class="text-left bg-white p-2">ID:${userInput.id}</h3>
        <h3 class="text-left bg-white p-2">Email:<a href="mailto:${userInput.email}" target="_blank">${userInput.email}</a></h3>
        <h3 class="text-left bg-white p-2">Github:<a href="https://github.com/${userInput.github}" target="_blank">${userInput.github}</a></h3>
        </section>
</div>`; //write html for engineer card 
            fs.appendFile('./dist/newTeam.html', engineerCard, err => err ? console.log(err) : addEmployee());
        })
}

function addIntern() {
    inquirer //ask for name, id, email, school
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is their name?',
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
            const internCard = `<div class="w-25 m-3 border border-dark">
    <section class="bg-primary">
        <h1 class="text-left text-white p-2">${userInput.name}</h1>
        <h2 class="text-left text-white p-2">🧑‍🎓 Intern</h2>
    </section>
    <section class="bg-light p-3">
        <h3 class="text-left bg-white p-2">ID:${userInput.id}</h3>
        <h3 class="text-left bg-white p-2">Email:<a href="mailto:${userInput.email}" target="_blank">${userInput.email}</a></h3>
        <h3 class="text-left bg-white p-2">School:${userInput.school}</h3>
    </section>
</div>`;
            fs.appendFile('./dist/newTeam.html', internCard, err => err ? console.log(err) : addEmployee());
        })
}

addManager();