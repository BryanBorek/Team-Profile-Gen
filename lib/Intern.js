// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern;
