// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
// * `github`&mdash;GitHub username
// * `getGithub()`

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github
    }
}

module.exports = Engineer;