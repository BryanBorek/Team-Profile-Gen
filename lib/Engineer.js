// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
// * `github`&mdash;GitHub username
// * `getGithub()`

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(inputName, inputId, inputEmail, inputGithub) {
        const name = inputName;
        const id = inputId;
        const email = inputEmail;
        const github = inputGithub;

        super(name, id, email, github);
        this.inputName = inputName;
        this.inputId = inputId;
        this.inputEmail = inputEmail;
        this.inputGithub = inputGithub;
    }
    getRole() {
        // * `getRole()`&mdash;overridden to return `'Engineer'`
    }
    getGithub() {

    }
}