// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(inputName, inputId, inputEmail, inputSchool) {
        const name = inputName;
        const id = inputId;
        const email = inputEmail;
        const school = inputSchool;

        super(name, id, email, school);
        this.inputName = inputName;
        this.inputId = inputId;
        this.inputEmail = inputEmail;
        this.inputSchool = inputSchool;
    }
    getRole() {
        // * `getRole()`&mdash;overridden to return `'Intern'`
    }
    getSchool() {

    }
}